# `moniversive/framework/MisClrtyWalletProfile.mis`

> Generated 2026-07-26T17:24:53Z · module **`MisClrtyWalletProfile`** · 50 lines

```bash
bin/misc moniversive/framework/MisClrtyWalletProfile.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `embed_gates_present:`, `settlement_chain:`, `extension_mis:`, `family_mis_chain:`, `profile_visibility_private_v1:`, `max_avatar_bytes:`, `no_seed_in_profile:` |
| Outcomes | `assert_profile_private`, `assert_no_secrets_in_blob`, `assert_avatar_cap`, `link_clrty1_wallet_security`, `settle_clrty1` |
| fn | — |
| EMBED 3..=6 | yes |

## Source (excerpt)

```mis
// CLRTY-1 private wallet profile policy — avatar caps, no seed in profile blob, reauth on handle/displayName
// Taxonomy: mis_chain -> mis_substrate · settlement clrty-1 / 1202
// Bridge: external/clarity-fintech/fintauo/packages/exchange-app/src/wallet/profile/*
//         external/clarity-fintech/fintauo/src/exchange/user_profile.ts
//         moniversive/framework/Clrty1WalletSecurityPolicy.mis

module MisClrtyWalletProfile {

  embed gates 3..=6 {
    context: "Private dashboard profile only; KMS/session-bound KV envelope; max avatar bytes; audit without image payloads";
    ai: "Reject profile blobs containing mnemonic, privateKey, or keystore material; enforce reauth on displayName/handle changes";
    execution: "assert_profile_private; assert_no_secrets_in_blob; assert_avatar_cap; link_clrty1_wallet_security; settle_clrty1";
    capital: "clrty-1 / 1202";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant profile_visibility_private_v1: public_profile_url == false;
  invariant max_avatar_bytes: avatar_max_bytes <= 600000;
  invariant no_seed_in_profile: profile_contains_seed == false;

  outcome assert_profile_private(scope: Bytes) {
    require scope != @0;
    constraint public_profile_url == false;
  }

  outcome assert_no_secrets_in_blob(blob: Bytes) {
    require blob != @0;
    constraint profile_contains_seed == false;
    constraint profile_contains_private_key == false;
  }

  outcome assert_avatar_cap(upload: Bytes) {
    require upload != @0;
    constraint avatar_max_bytes <= 600000;
  }

  outcome link_clrty1_wallet_security(policy: Bytes) {
    require policy != @0;
    constraint clrty1_wallet_security_linked == true;
  }

  outcome settle_clrty1(intent: Bytes) {
    require intent != @0;
    constraint chain_id == 1202;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
