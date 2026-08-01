# `moniversive/contracts/bridge/MisFmaSpotArbEntry.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisFmaSpotArbEntry`** · 15 lines

```bash
bin/misc moniversive/contracts/bridge/MisFmaSpotArbEntry.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `authoring_extension_mis:`, `no_solidity_authoring:` |
| Outcomes | `enter_spot_arb` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — CLRTY-1 FMA bridge perimeter (authoring SSOT)
// Legacy MIS-ML archive: CLRTY_SUBSTRATE/bridge_perimeter/fma/contracts/src/FmaSpotArbEntry.clrty
// Compile: bin/misc moniversive/contracts/bridge/MisFmaSpotArbEntry.mis --check --compact-letters

module MisFmaSpotArbEntry {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant authoring_extension_mis: source_extension == mis;
  invariant no_solidity_authoring: solidity_authoring == false;

  outcome enter_spot_arb(notional: u128) { require notional > 0; constraint invariants_hold == true; }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
