import assert from "node:assert/strict";
import { test } from "node:test";

import { PasswordRecoveryOperations } from "../src/features/horus-auth/data/passwordRecoveryOperations.ts";

test("missing auth configuration is surfaced safely", async () => {
  const recovery = new PasswordRecoveryOperations(null);
  assert.equal(await recovery.verifyToken("token"), "unconfigured");
  assert.equal(await recovery.updatePasswordAndSignOut("passphrase"), "unconfigured");
});

test("recovery token is verified as one-time recovery type", async () => {
  let input;
  const recovery = new PasswordRecoveryOperations({
    async verifyOtp(params) {
      input = params;
      return { error: null };
    },
    async updateUser() {
      return { error: null };
    },
    async signOut() {
      return { error: null };
    },
  });

  assert.equal(await recovery.verifyToken("secret-token"), "verified");
  assert.deepEqual(input, { token_hash: "secret-token", type: "recovery" });
});

test("failed token verification returns a safe result", async () => {
  const recovery = new PasswordRecoveryOperations({
    async verifyOtp() {
      throw new Error("backend detail must not escape");
    },
    async updateUser() {
      return { error: null };
    },
    async signOut() {
      return { error: null };
    },
  });
  assert.equal(await recovery.verifyToken("token"), "invalid");
});

test("an update error does not sign out and never reports success", async () => {
  let signedOut = false;
  const recovery = new PasswordRecoveryOperations({
    async verifyOtp() {
      return { error: null };
    },
    async updateUser() {
      return { error: new Error("weak password") };
    },
    async signOut() {
      signedOut = true;
      return { error: null };
    },
  });
  assert.equal(await recovery.updatePasswordAndSignOut("passphrase"), "updateFailed");
  assert.equal(signedOut, false);
});

test("sign-out failure after update does not falsely report complete success", async () => {
  const recovery = new PasswordRecoveryOperations({
    async verifyOtp() {
      return { error: null };
    },
    async updateUser() {
      return { error: null };
    },
    async signOut() {
      return { error: new Error("sign-out error") };
    },
  });
  assert.equal(
    await recovery.updatePasswordAndSignOut("passphrase"),
    "signOutFailed",
  );
});

test("retrying sign-out never repeats the password update", async () => {
  let updates = 0;
  let signOutAttempts = 0;
  const recovery = new PasswordRecoveryOperations({
    async verifyOtp() {
      return { error: null };
    },
    async updateUser() {
      updates += 1;
      return { error: null };
    },
    async signOut() {
      signOutAttempts += 1;
      return { error: signOutAttempts === 1 ? new Error("temporary") : null };
    },
  });

  assert.equal(
    await recovery.updatePasswordAndSignOut("passphrase"),
    "signOutFailed",
  );
  assert.equal(await recovery.signOut(), "signedOut");
  assert.equal(updates, 1);
  assert.equal(signOutAttempts, 2);
});

test("successful update requires a successful sign-out", async () => {
  const actions = [];
  const recovery = new PasswordRecoveryOperations({
    async verifyOtp() {
      return { error: null };
    },
    async updateUser() {
      actions.push("update");
      return { error: null };
    },
    async signOut() {
      actions.push("signOut");
      return { error: null };
    },
  });
  assert.equal(await recovery.updatePasswordAndSignOut("passphrase"), "updated");
  assert.deepEqual(actions, ["update", "signOut"]);
});
