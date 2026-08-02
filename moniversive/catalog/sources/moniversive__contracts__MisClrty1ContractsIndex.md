# `moniversive/contracts/MisClrty1ContractsIndex.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisClrty1ContractsIndex`** · 50 lines

```bash
bin/misc moniversive/contracts/MisClrty1ContractsIndex.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `authoring_extension_mis:`, `no_solidity_authoring:` |
| Outcomes | `resolve_treasury_module`, `resolve_fee_collector`, `resolve_split_gateway`, `resolve_l01_tax_router`, `resolve_bridge_hooks`, `bind_spark_custom_rules`, `resolve_fma_bridge_catalog` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — CLRTY-1 on-chain / settlement module catalog (authoring SSOT)
// Compile: bin/misc moniversive/contracts/MisClrty1ContractsIndex.mis --check --compact-letters
// GitBook: docs/gitbook/clrty-1/contracts/README.md

module MisClrty1ContractsIndex {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant authoring_extension_mis: source_extension == mis;
  invariant no_solidity_authoring: solidity_authoring == false;

  outcome resolve_treasury_module(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrty1Treasury;
  }

  outcome resolve_fee_collector(path: Bytes) {
    require path != @0;
    constraint module_id == MisProtocolFeeCollector;
  }

  outcome resolve_split_gateway(path: Bytes) {
    require path != @0;
    constraint module_id == MisSplitGatewayRouter;
  }

  outcome resolve_l01_tax_router(path: Bytes) {
    require path != @0;
    constraint module_id == MisClrtFeeRouter;
  }

  outcome resolve_bridge_hooks(path: Bytes) {
    require path != @0;
    constraint module_id == MisStrataBridgeHooks;
  }

  outcome bind_spark_custom_rules(path: Bytes) {
    require path != @0;
    constraint companion_module == MisSparkCustomRules;
    constraint treasury_sink == clrty_1_operational;
  }

  outcome resolve_fma_bridge_catalog(path: Bytes) {
    require path != @0;
    constraint module_id == MisFmaBridgePerimeterIndex;
    constraint legacy_clrty_archive_only == true;
  }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
