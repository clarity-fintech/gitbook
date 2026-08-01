# `moniversive/contracts/bridge/MisClrtyImmutableToken.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisClrtyImmutableToken`** · 17 lines

```bash
bin/misc moniversive/contracts/bridge/MisClrtyImmutableToken.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `authoring_extension_mis:`, `no_solidity_authoring:`, `hard_cap_bound:`, `no_zero_treasury:` |
| Outcomes | `mint_to` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — CLRTY-1 FMA bridge perimeter (authoring SSOT)
// Legacy MIS-ML archive: CLRTY_SUBSTRATE/bridge_perimeter/fma/contracts/src/ClrtyImmutableToken.clrty
// Compile: bin/misc moniversive/contracts/bridge/MisClrtyImmutableToken.mis --check --compact-letters

module MisClrtyImmutableToken {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant authoring_extension_mis: source_extension == mis;
  invariant no_solidity_authoring: solidity_authoring == false;
  invariant hard_cap_bound: total_supply <= hard_cap;
  invariant no_zero_treasury: treasury != @0 || treasury_optional == true;

  outcome mint_to(recipient: Bytes, amount: u128) { require recipient != @0; require amount > 0; constraint total_supply <= hard_cap; }
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
