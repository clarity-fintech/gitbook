# `moniversive/framework/wallet/ClrtyPreLaunchFreeze.mis`

> Generated 2026-07-29T03:15:28Z · module **`ClrtyPreLaunchFreeze`** · 23 lines

```bash
bin/misc moniversive/framework/wallet/ClrtyPreLaunchFreeze.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `settlement_chain:`, `launch_state_frozen:` |
| Outcomes | `block_native_mint`, `block_native_stake_transfer`, `allow_spark_open_assets` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// CLRTY pre-launch freeze — native mint/stake/mesh gated until TGE
// Settlement: clrty-1 / 1202 · open multi-asset engine live

module ClrtyPreLaunchFreeze {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant settlement_chain: chain_id == 1202;
  invariant launch_state_frozen: launch_state == PRE_LAUNCH_FROZEN;

  outcome block_native_mint() {
    constraint clrty_mint_allowed == false;
    constraint open_asset_mint_allowed == true;
  }

  outcome block_native_stake_transfer() {
    constraint clrty_stake_allowed == false;
    constraint clrty_transfer_allowed == false;
  }

  outcome allow_spark_open_assets() {
    constraint spark_gateway_open == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
