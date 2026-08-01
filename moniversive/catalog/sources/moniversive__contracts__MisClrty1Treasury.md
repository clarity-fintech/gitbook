# `moniversive/contracts/MisClrty1Treasury.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisClrty1Treasury`** · 33 lines

```bash
bin/misc moniversive/contracts/MisClrty1Treasury.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `settlement_network_clrty1:`, `kernel_is_misc:`, `treasury_label:`, `treasury_account_bound:`, `no_eth_safe_launch:`, `siwe_gate_treasury_api:` |
| Outcomes | `credit_operational_sink`, `attach_settle_route` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — CLRTY-1 treasury settlement module
// Taxonomy: mis_chain -> mis_substrate
// Compile: bin/misc moniversive/contracts/MisClrty1Treasury.mis --check --compact-letters
// Spec: docs/gitbook/clrty-1/contracts/catalog.md · treasury:clrty-1

module MisClrty1Treasury {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant settlement_network_clrty1: settlement_network == clrty_1;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant treasury_label: treasury_route_label == treasury_clrty_1;
  invariant treasury_account_bound: treasury_account != @0;
  invariant no_eth_safe_launch: eth_safe_intake_enabled == false;
  invariant siwe_gate_treasury_api: treasury_api_requires_siwe == true;

  outcome credit_operational_sink(amount: u128, session: Bytes) {
    require amount > 0;
    require session != @0;
    constraint treasury_route_label == treasury_clrty_1;
    constraint settlement_network == clrty_1;
    constraint chain_id == 1202;
  }

  outcome attach_settle_route(intent: Bytes) {
    require intent != @0;
    constraint clrty_route == treasury_clrty_1;
    constraint mis_module_present == true;
  }

  signal TreasuryCredited(amount: u128, label: Bytes);
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
