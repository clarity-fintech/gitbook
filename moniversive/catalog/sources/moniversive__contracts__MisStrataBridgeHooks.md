# `moniversive/contracts/MisStrataBridgeHooks.mis`

> Generated 2026-07-29T03:15:28Z · module **`MisStrataBridgeHooks`** · 36 lines

```bash
bin/misc moniversive/contracts/MisStrataBridgeHooks.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `foreign_chain_rejected:`, `receipt_dual_attest:` |
| Outcomes | `ingest_bridge_receipt`, `finalize_clrty1_mint`, `verify_dual_endpoint_balance` |
| fn | — |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Moniversive Invariant Static (MIS) — cross-chain bridge perimeter hooks (CLRTY-1 authoritative settle)
// Taxonomy: mis_chain -> mis_ibc
// Compile: bin/misc moniversive/contracts/MisStrataBridgeHooks.mis --check --compact-letters

module MisStrataBridgeHooks {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant foreign_chain_rejected: inbound_chain_id == 1202;
  invariant receipt_dual_attest: bridge_receipt_quorum >= 2;

  outcome ingest_bridge_receipt(receipt: Bytes, proof: Bytes) {
    require receipt != @0;
    require proof != @0;
    constraint bridge_receipt_quorum >= 2;
    constraint settlement_network == clrty_1;
  }

  outcome finalize_clrty1_mint(amount: u128, recipient: Bytes) {
    require amount > 0;
    require recipient != @0;
    constraint inbound_chain_id == 1202;
    constraint solvency_preserved == true;
  }

  outcome verify_dual_endpoint_balance(wallet: Bytes, drift_ppm: u128) {
    require wallet != @0;
    constraint drift_ppm == 0;
    constraint dual_endpoint_verified == true;
  }

  signal BridgeReceiptAccepted(receipt: Bytes);
  signal Clrty1MintFinalized(amount: u128);
}
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
