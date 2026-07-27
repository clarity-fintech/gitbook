# `moniversive/framework/dashboard/MisDashboardTypes.mis`

> Generated 2026-07-27T00:56:43Z · module **`MisDashboardTypes`** · 118 lines

```bash
bin/misc moniversive/framework/dashboard/MisDashboardTypes.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `extension_mis_or_clrty:`, `family_mis_chain:`, `branch_mis_substrate:`, `creator_bound:`, `address_root_bound:`, `address_kind_wallet:`, `balance_payload_source_rpc:` |
| Outcomes | `assert_address`, `assert_asset_id`, `build_balance_payload`, `build_multi_wallet_snapshot`, `refuse_external_provider_sign`, `settle_clrty1` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_substrate (telemetry surfaces read clrty-1 state, no execution)
// Title: CLRTY-1 Dashboard Telemetry & Dual-Endpoint Verification — Canonical Type Vocabulary
//        (Address, AssetId, BalancePayload, MultiWalletSnapshot, ProviderType)
// Compile: bin/misc moniversive/framework/dashboard/MisDashboardTypes.mis --check --compact-letters
//
// MIS has no separate `type`/`struct`/`enum` keyword — the "type system" requested by the spec
// (Address, AssetId, BalancePayload, MultiWalletSnapshot, ProviderType) is expressed the same
// way every other MIS surface expresses domain types: canonical atoms bound by invariant, plus
    10|// `assert_*` outcomes that constrain a runtime tag/payload to the declared shape. This module
// is the requested-name companion to DashboardTypes.mis (moniversive/framework/dashboard/) — it
// re-states the same underlying atoms (BalanceSourceKind, DriftStatus, WalletKind, PositionKind,
// denom kinds) under the five type names the current spec asks for, so MisEndpointInvariants.mis,
// MisNetWorthInvariants.mis, MisMultiWalletInvariants.mis, MisDeFiIntegrityInvariants.mis and
// MisUISettlementInvariants.mis can bind against Address / AssetId / BalancePayload /
// MultiWalletSnapshot / ProviderType directly. DashboardTypes.mis remains the canonical index
// entry (idx-mis-00241); this module is registered as its sibling in mis_code_index.json.
//
// ProviderType here is the *wallet data* provider (who reports a balance reading: the sovereign
    20|// HD signer itself, a watch-only import, a hardware signer, or an external read-only probe) —
// distinct from the *payment onramp* ProviderKind in moniversive/payments/MisSparkMultiCoinOnramp.mis
// (clarity_spark only, foreign redirect widgets banned). Both are namespaced independently; a
// dashboard ProviderType tag is never compared against a Spark ProviderKind tag.
//
// Bridge (index-only — no TS/Rust authored in this file):
//   Dual-endpoint RPC balance read      -> clrty-rpc/src/handlers.rs ("clrty_getBalance")
//   Live wallet dashboard UI            -> external/clarity-fintech/fintauo/packages/exchange-app/src/auth/LiveWalletDashboard.tsx
//   HD vault / BIP-39 derivation        -> external/clarity-fintech/fintauo/packages/exchange-app/src/onboarding/vault.ts
//   Wallet roster (HD signer + probes)  -> moniversive/framework/Clrty1WalletRosterPolicy.mis
//   CLRTY-1 hard cap (16,000,000 CLRTY) -> CLRTY_SUBSTRATE/token_core/token_metadata.rs (HARD_CAP_TOKENS)
    30|
module MisDashboardTypes {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant extension_mis_or_clrty: source_extension == mis || source_extension == clrty;
    40|  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_substrate: taxonomy_branch == mis_substrate;
  invariant creator_bound: creator == chandler_william_ferguson;

  // -- Address: a canonical clrty-1 wallet address atom (never @0) --
  invariant address_root_bound: address_root != @0;
  invariant address_kind_wallet: address_kind == wallet_address;

  // -- AssetId: a canonical asset identifier atom (spot coin, LP token, staking receipt, ...) --
    50|  invariant asset_id_root_bound: asset_id_root != @0;

  // -- BalancePayload: {address, asset, amount, source_kind, drift_status} tuple shape --
  invariant balance_payload_source_rpc: balance_payload_source_kind_rpc == rpc_endpoint;
  invariant balance_payload_source_indexer: balance_payload_source_kind_indexer == indexer_endpoint;
  invariant balance_payload_drift_strict: max_drift_tolerance_ppm == 0;
  invariant balance_payload_drift_matched: drift_status_matched == matched;
  invariant balance_payload_drift_mismatched: drift_status_mismatched == mismatched;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
