# `moniversive/framework/dashboard/DashboardTypes.mis`

> Generated 2026-07-27T00:56:43Z · module **`DashboardTypes`** · 116 lines

```bash
bin/misc moniversive/framework/dashboard/DashboardTypes.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `extension_mis_or_clrty:`, `no_python_kernel:`, `family_mis_chain:`, `branch_mis_substrate:`, `creator_bound:`, `balance_source_rpc:`, `balance_source_indexer:` |
| Outcomes | `assert_balance_source_kind`, `assert_drift_status`, `assert_wallet_kind`, `assert_position_kind`, `assert_denom_kind`, `assert_miusd_peg`, `assert_clrty_supply_cap`, `settle_clrty1` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Taxonomy: mis_chain -> mis_substrate (telemetry surfaces read clrty-1 state, no execution)
// Title: CLRTY-1 Dashboard Telemetry & Dual-Endpoint Multi-Wallet Balance Verification — DashboardTypes
// Compile: bin/misc moniversive/framework/dashboard/DashboardTypes.mis --check --compact-letters
//
// MIS has no separate `type`/`enum`/`struct` keyword (see moniversive/framework/mis_chain.mis,
// WalletBackendRouter.mis for precedent) — the domain "type system" for this feature is expressed
// as invariants binding canonical atoms, and outcomes that assert a runtime tag is one of those
// atoms. This module is the single source of truth for those atoms; dashboard_telemetry_p1..p5.mis
// and payments/PaymentTypes.mis + multi_coin_onramp.mis reference the atoms declared here.
//
// Bridge (index-only — no TS/Rust authored in this file):
//   Dual-endpoint RPC balance read      -> clrty-rpc/src/handlers.rs ("clrty_getBalance")
//   Live wallet dashboard UI            -> external/clarity-fintech/fintauo/packages/exchange-app/src/auth/LiveWalletDashboard.tsx
//   Dashboard page shell                -> frontend/clrty-interface/src/pages/DashboardPage.tsx
//   Dashboard widgets                   -> frontend/clrty-interface/src/components/dashboard
//   HD vault / BIP-39 derivation        -> external/clarity-fintech/fintauo/packages/exchange-app/src/onboarding/vault.ts
//   Wallet roster (HD signer + probes)  -> moniversive/framework/Clrty1WalletRosterPolicy.mis
//   CLRTY-1 hard cap (16,000,000 CLRTY) -> CLRTY_SUBSTRATE/token_core/token_metadata.rs (HARD_CAP_TOKENS)
//
// Deferred (documented per workspace rule, not silently dropped):
//   `bin/misc` exposes only --check / --compact-letters / --require-embed / --allow-missing-embed.
//   There is no `--solver=z3` / SMT backend flag on the misc kernel today. Any invariant below that
//   would ideally be discharged by an SMT solver (e.g. exact drift-bound arithmetic across floating
//   net-worth aggregation) is instead expressed as a boolean-closure invariant (`*_bound == true`)
//   that a future solver-backed pass can refine. No indexer micro-service exists in-repo yet either
//   (only the RPC side `clrty_getBalance` is real code) — the indexer-side atoms here declare the
//   contract that surface must satisfy once built.

module DashboardTypes {

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant extension_mis_or_clrty: source_extension == mis || source_extension == clrty;
  invariant no_python_kernel: python_package_code == false;
  invariant family_mis_chain: taxonomy_family == mis_chain;
  invariant branch_mis_substrate: taxonomy_branch == mis_substrate;
  invariant creator_bound: creator == chandler_william_ferguson;

  // -- BalanceSourceKind: which endpoint a balance reading came from --
  invariant balance_source_rpc: balance_source_kind_rpc == rpc_endpoint;
  invariant balance_source_indexer: balance_source_kind_indexer == indexer_endpoint;

  // -- DriftStatus: outcome of comparing the two endpoints for one asset/wallet --
  invariant drift_status_matched: drift_status_matched == matched;
  invariant drift_status_mismatched: drift_status_mismatched == mismatched;
  invariant drift_status_stale: drift_status_stale == stale_endpoint;
  invariant max_drift_tolerance_ppm_strict: max_drift_tolerance_ppm == 0;

  // -- WalletKind: roster classes a dashboard wallet card may be --
  invariant wallet_kind_hd_internal: wallet_kind_hd_internal == internal_hd;
  invariant wallet_kind_watch_only: wallet_kind_watch_only == watch_only;
  invariant wallet_kind_hardware: wallet_kind_hardware == hardware_signer;
  invariant wallet_kind_external_probe: wallet_kind_external_probe == external_provider;
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
