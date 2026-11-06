import assert from "node:assert/strict";
import { test } from "node:test";

import {
  HORUS_PASSWORD_MIN_LENGTH,
  HORUS_PASSWORD_MAX_UTF8_BYTES,
  isValidNewPassword,
  validateNewPassword,
} from "../src/features/horus-auth/domain/passwordPolicy.ts";
import { horusResetCopy } from "../src/features/horus-auth/presentation/resetPasswordCopy.ts";

test("GoTrue minimum counts 15 Unicode code points", () => {
  assert.equal(HORUS_PASSWORD_MIN_LENGTH, 15);
  assert.equal(validateNewPassword("12345678901234"), "tooShort");
  assert.equal(validateNewPassword("123456789012345"), "valid");
});

test("long ASCII passphrases and spaces are allowed up to 72 bytes", () => {
  assert.equal(HORUS_PASSWORD_MAX_UTF8_BYTES, 72);
  assert.equal(isValidNewPassword("a long passphrase with spaces!"), true);
  assert.equal(isValidNewPassword("a".repeat(64)), true);
  assert.equal(validateNewPassword("a".repeat(72)), "valid");
  assert.equal(validateNewPassword("a".repeat(73)), "tooLong");
});

test("supplementary Unicode code points and byte limit match GoTrue", () => {
  assert.equal(validateNewPassword("🔒".repeat(14)), "tooShort");
  assert.equal(validateNewPassword("🔒".repeat(15)), "valid");
  assert.equal(validateNewPassword("🔒".repeat(18)), "valid");
  assert.equal(validateNewPassword("🔒".repeat(19)), "tooLong");
  assert.equal(validateNewPassword("🔒".repeat(64)), "tooLong");
});

test("EN/AR reset messages reflect both policy boundaries", () => {
  for (const locale of ["en", "ar"]) {
    assert.match(
      horusResetCopy[locale].messages.tooShort,
      new RegExp(String(HORUS_PASSWORD_MIN_LENGTH)),
    );
    assert.match(
      horusResetCopy[locale].messages.tooLong,
      new RegExp(String(HORUS_PASSWORD_MAX_UTF8_BYTES)),
    );
    assert.ok(horusResetCopy[locale].messages.success);
    assert.ok(horusResetCopy[locale].messages.signOutFailed);
    assert.ok(horusResetCopy[locale].messages.signingOut);
    assert.ok(horusResetCopy[locale].retrySignOut);
  }
});
