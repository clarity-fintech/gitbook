# `moniversive/contracts/bridge/MisFmaTimelockController.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisFmaTimelockController`** · 16 lines

```bash
bin/misc moniversive/contracts/bridge/MisFmaTimelockController.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `authoring_extension_mis:`, `no_solidity_authoring:`, `delay_non_zero:` |
| Outcomes | `schedule_operation` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — CLRTY-1 FMA bridge perimeter (authoring SSOT)
// Legacy MIS-ML archive: CLRTY_SUBSTRATE/bridge_perimeter/fma/contracts/src/FmaTimelockController.clrty
// Compile: bin/misc moniversive/contracts/bridge/MisFmaTimelockController.mis --check --compact-letters

module MisFmaTimelockController {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant authoring_extension_mis: source_extension == mis;
  invariant no_solidity_authoring: solidity_authoring == false;
  invariant delay_non_zero: timelock_delay_sec > 0;

  outcome schedule_operation(op: Bytes) { require op != @0; constraint timelock_delay_sec > 0; }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
