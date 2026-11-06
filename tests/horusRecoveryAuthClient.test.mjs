import assert from "node:assert/strict";
import { test } from "node:test";

import {
  createRecoveryAuthClient,
  recoveryAuthClientOptions,
} from "../src/features/horus-auth/data/recoveryAuthClient.ts";

test("recovery Auth never persists a verified session in browser storage", () => {
  const factoryCalls = [];
  const fakeClient = { auth: { verifyOtp() {} } };
  const client = createRecoveryAuthClient(
    "https://test-project.supabase.co",
    "sb_publishable_test",
    (url, key, options) => {
      factoryCalls.push({ url, key, options });
      return fakeClient;
    },
  );

  assert.equal(client, fakeClient);
  assert.deepEqual(factoryCalls, [
    {
      url: "https://test-project.supabase.co",
      key: "sb_publishable_test",
      options: recoveryAuthClientOptions,
    },
  ]);
  assert.deepEqual(recoveryAuthClientOptions.auth, {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  });
});

test("missing H.O.R.U.S credentials create no recovery client or session", () => {
  let createCalls = 0;
  const factory = () => {
    createCalls += 1;
    return { auth: {} };
  };

  assert.equal(createRecoveryAuthClient("", "sb_publishable_key", factory), null);
  assert.equal(
    createRecoveryAuthClient("https://test-project.supabase.co", "", factory),
    null,
  );
  assert.equal(createCalls, 0);
});
