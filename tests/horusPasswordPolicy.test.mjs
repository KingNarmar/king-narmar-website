import assert from "node:assert/strict";
import { test } from "node:test";

import {
  HORUS_PASSWORD_MIN_LENGTH,
  isValidNewPassword,
} from "../src/features/horus-auth/domain/passwordPolicy.ts";
import { horusResetCopy } from "../src/features/horus-auth/presentation/resetPasswordCopy.ts";

test("H.O.R.U.S requires 15 Unicode code points for new passwords", () => {
  assert.equal(HORUS_PASSWORD_MIN_LENGTH, 15);
  assert.equal(isValidNewPassword("12345678901234"), false);
  assert.equal(isValidNewPassword("123456789012345"), true);
});

test("long passwords, passphrases, and spaces are allowed", () => {
  assert.equal(isValidNewPassword("a long passphrase with spaces!"), true);
  assert.equal(isValidNewPassword("a".repeat(64)), true);
});

test("supplementary Unicode characters count as one code point", () => {
  assert.equal(isValidNewPassword("🔒".repeat(14)), false);
  assert.equal(isValidNewPassword("🔒".repeat(15)), true);
});

test("both reset locales include the approved password minimum", () => {
  for (const locale of ["en", "ar"]) {
    assert.match(
      horusResetCopy[locale].messages.tooShort,
      new RegExp(String(HORUS_PASSWORD_MIN_LENGTH)),
    );
    assert.ok(horusResetCopy[locale].messages.success);
    assert.ok(horusResetCopy[locale].messages.signOutFailed);
    assert.ok(horusResetCopy[locale].messages.signingOut);
    assert.ok(horusResetCopy[locale].retrySignOut);
  }
});
