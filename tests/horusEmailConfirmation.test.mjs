import test from "node:test";
import { readFileSync } from "node:fs";
import { createExplicitTokenAction } from "../src/features/horus-auth/presentation/explicitTokenAction.ts";
import assert from "node:assert/strict";
import { createConfirmationAttempt } from "../src/features/horus-auth/data/emailConfirmationOperations.ts";
import { takeConfirmationToken } from "../src/features/horus-auth/presentation/confirmationToken.ts";
import { confirmationCopy } from "../src/features/horus-auth/presentation/emailConfirmationCopy.ts";

test("effect replay shares one request and one sign-out even after completion", async () => {
  let reads = 0, verifies = 0, signOuts = 0;
  let finish;
  const waiting = new Promise(resolve => { finish = resolve; });
  const attempt = createConfirmationAttempt({
    verify: async token => { assert.equal(token, "synthetic"); verifies++; await waiting; return { error: null }; },
    signOut: async () => { signOuts++; return { error: null }; },
  });
  const read = () => { reads++; return "synthetic"; };
  const a = attempt.run(read);
  const b = attempt.run(read);
  assert.equal(a, b);
  finish();
  assert.equal(await a, "confirmed");
  assert.equal(await attempt.run(read), "confirmed");
  assert.deepEqual([reads, verifies, signOuts], [1, 1, 1]);
});

test("expired or used token never reports success or signs out", async () => {
  const attempt = createConfirmationAttempt({
    verify: async () => ({ error: { code: "otp_expired" } }),
    signOut: async () => { assert.fail("must not sign out"); },
  });
  assert.equal(await attempt.run(() => "synthetic"), "invalidOrUsed");
});

test("unknown backend and network failures are not successful", async () => {
  for (const verify of [async () => ({ error: { code: "unexpected" } }), async () => { throw Error("network"); }]) {
    const attempt = createConfirmationAttempt({ verify, signOut: async () => assert.fail() });
    assert.equal(await attempt.run(() => "synthetic"), "verificationFailed");
  }
});

test("missing token and missing configuration do not verify", async () => {
  assert.equal(await createConfirmationAttempt(null).run(() => null), "missingToken");
  assert.equal(await createConfirmationAttempt(null).run(() => "synthetic"), "unconfigured");
});

test("sign-out errors preserve confirmed-email fact but not clean completion", async () => {
  for (const signOut of [async () => ({ error: {} }), async () => { throw Error("network"); }]) {
    assert.equal(await createConfirmationAttempt({ verify: async () => ({ error: null }), signOut }).run(() => "synthetic"), "signOutFailed");
  }
});

test("token scrub preserves other URL parameters and removes all token occurrences", () => {
  let replaced;
  assert.equal(takeConfirmationToken("https://example.test/horus/confirm-email?token_hash=synthetic&lang=ar&token_hash=other", path => { replaced = path; }), "synthetic");
  assert.equal(replaced, "/horus/confirm-email?lang=ar");
});

test("token is removed before verification and scrub failure fails closed", async () => {
  let scrubbed = false;
  const attempt = createConfirmationAttempt({
    verify: async () => { assert.ok(scrubbed); return { error: null }; },
    signOut: async () => ({ error: null }),
  });
  assert.equal(await attempt.run(() => takeConfirmationToken("https://example.test/?token_hash=synthetic", () => { scrubbed = true; })), "confirmed");
  assert.equal(await createConfirmationAttempt({ verify: async () => assert.fail(), signOut: async () => assert.fail() }).run(() => { throw Error("history"); }), "verificationFailed");
});

test("both locales cover every outcome", () => {
  for (const copy of Object.values(confirmationCopy)) {
    for (const key of ["awaitingAction", "checking", "confirmed", "missingToken", "unconfigured", "invalidOrUsed", "verificationFailed", "signOutFailed"]) assert.ok(copy.messages[key]);
  }
});

test("passive opening never reads or consumes token; explicit activation is single flight", async () => {
  let reads = 0, verifies = 0;
  const action = createExplicitTokenAction(
    () => { reads++; return "synthetic"; },
    async (token) => { assert.equal(token, "synthetic"); verifies++; return "verified"; },
    "missing", "failed",
  );
  await Promise.resolve();
  assert.deepEqual([reads, verifies], [0, 0]);
  const first = action.activate();
  assert.equal(first, action.activate());
  assert.equal(await first, "verified");
  assert.equal(await action.activate(), "verified");
  assert.deepEqual([reads, verifies], [1, 1]);
});

test("explicit action fails closed for missing token or URL scrub failure", async () => {
  const verify = async () => assert.fail("unexpected verification");
  assert.equal(await createExplicitTokenAction(() => null, verify, "missing", "failed").activate(), "missing");
  assert.equal(await createExplicitTokenAction(() => { throw Error("history"); }, verify, "missing", "failed").activate(), "failed");
});

test("both auth pages wire verification exclusively to an explicit button handler", () => {
  for (const [file, handler] of [["HorusConfirmEmailPage.tsx", "handleConfirm"], ["HorusResetPasswordPage.tsx", "handleVerify"]]) {
    const source = readFileSync(new URL("../src/pages/" + file, import.meta.url), "utf8");
    assert.ok(!source.includes("useEffect"));
    assert.ok(source.includes("onClick={" + handler + "}"));
    assert.equal(source.match(/\.activate\(\)/g)?.length, 1);
    assert.ok(source.includes("awaitingAction"));
  }
});
