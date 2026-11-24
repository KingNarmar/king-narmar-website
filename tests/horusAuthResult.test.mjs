import test from "node:test";
import assert from "node:assert/strict";
import { readAuthResult, captureAuthResult } from "../src/features/horus-auth/presentation/authResult.ts";
import { authResultCopy } from "../src/features/horus-auth/presentation/authResultCopy.ts";

const route = "https://example.test/horus/auth/confirmed";

test("direct and tracking-only visits cannot claim confirmation", () => {
  for (const suffix of ["", "?utm_source=test", "?code=", "?success=true", "#access_token=synthetic"]) {
    assert.equal(readAuthResult(route + suffix), "directAccess");
  }
});

test("a callback, including a forged code, only provides neutral handoff", () => {
  for (const suffix of ["?code=synthetic", "#code=synthetic"]) {
    assert.equal(readAuthResult(route + suffix), "callback");
  }
  assert.equal(authResultCopy.callback.title, "Return to H.O.R.U.S System");
  assert.match(authResultCopy.callback.message, /does not verify your account/);
  assert.match(authResultCopy.directAccess.message, /cannot verify your email/);
});

test("used/expired errors take precedence over callback codes", () => {
  for (const suffix of ["?error=access_denied&error_code=otp_expired", "?code=synthetic#error_code=otp_expired", "#error_code=otp_expired"]) {
    assert.equal(readAuthResult(route + suffix), "expired");
  }
});

test("other, empty, and conflicting errors fail closed", () => {
  for (const suffix of ["?error=access_denied", "?error=", "?error_description=synthetic", "?error_code=unexpected&code=synthetic", "?error_code=otp_expired#error_code=unexpected"]) {
    assert.equal(readAuthResult(route + suffix), "error");
  }
});

test("bootstrap strips the entire query and fragment after capturing the result", () => {
  const paths = [];
  const outcome = captureAuthResult(route + "?code=synthetic&token_hash=synthetic#access_token=synthetic&refresh_token=synthetic", path => paths.push(path));
  assert.equal(outcome, "callback");
  assert.deepEqual(paths, ["/horus/auth/confirmed"]);
  assert.equal(captureAuthResult(route, () => assert.fail("nothing to scrub")), "directAccess");
});

test("legacy confirmation, recovery and unrelated routes are untouched", () => {
  for (const path of ["/horus/confirm-email?token_hash=synthetic", "/horus/reset-password?token_hash=synthetic", "/horus/invitation?token=synthetic", "/confirm-email?code=synthetic"]) {
    assert.equal(captureAuthResult("https://example.test" + path, () => assert.fail("must not scrub")), "directAccess");
  }
});

test("all outcomes provide English and Arabic without reflecting raw errors", () => {
  for (const copy of Object.values(authResultCopy)) {
    assert.ok(copy.title.length > 0 && copy.message.length > 0);
    assert.match(copy.arabic, /[\u0600-\u06ff]/);
    assert.doesNotMatch(copy.title, /^Email confirmed$/i);
  }
});
