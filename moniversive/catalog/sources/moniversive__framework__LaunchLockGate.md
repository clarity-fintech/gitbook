# `moniversive/framework/LaunchLockGate.mis`

> Generated 2026-07-26T17:24:53Z · module **`LaunchLockGate`** · 53 lines

```bash
bin/misc moniversive/framework/LaunchLockGate.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `embed_gates_present:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `extension_mis_or_clrty:`, `no_python_kernel:`, `launch_locked:`, `pool_locked:`, `trade_exempt:`, `convert_exempt:`, `creator_bound:` |
| Outcomes | `assert_locked`, `allow_trade_convert`, `refuse_pool_ingress`, `refuse_go_live`, `settle_clrty1` |
| fn | — |
| EMBED 3..=6 | yes |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — deep root
// Creator: Chandler William Ferguson
// Launch + liquidity pool lock until go-live established
// Compile: bin/misc <file>.mis --check --compact-letters

module LaunchLockGate {

  embed gates 3..=6 {
    context: "Timelock + tier1 pool ingress gated until launch and pool established";
    ai: "Allow trade/convert only; refuse pool mint, public listing, and go-live trading unlock";
    execution: "assert_locked; allow_trade_convert; refuse_pool_ingress; refuse_go_live; settle_clrty1";
    capital: "Settlement clrty-1 / chain 1202 · 48h timelock remains authoritative";
  }

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant embed_gates_present: embed_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant extension_mis_or_clrty: source_extension == mis || source_extension == clrty;
  invariant no_python_kernel: python_package_code == false;
  invariant launch_locked: launch_unlocked == false;
  invariant pool_locked: pool_established == false;
  invariant trade_exempt: trade_route_live == true;
  invariant convert_exempt: convert_route_live == true;
  invariant creator_bound: creator == chandler_william_ferguson;

  outcome assert_locked() {
    constraint launch_unlocked == false;
    constraint pool_established == false;
  }

  outcome allow_trade_convert(mode: Bytes) {
    require mode != @0;
    constraint trade_route_live == true;
    constraint convert_route_live == true;
  }

  outcome refuse_pool_ingress(intent: Bytes) {
    require intent != @0;
    constraint pool_established == false;
  }

  outcome refuse_go_live(intent: Bytes) {
    require intent != @0;
    constraint launch_unlocked == false;
  }

  outcome settle_clrty1(intent: Bytes) {
    require intent != @0;
    constraint chain_id == 1202;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
