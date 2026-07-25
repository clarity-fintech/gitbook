# Invariants

**Invariant-first execution:** instead of writing unbounded functions, you define truth conditions the system **never** violates.

```clrty
invariant fee_bps_cap: fee_bps <= 10000;
invariant split_balanced: treasury_bps + bank_bps == 10000;
invariant settlement_chain: chain_id == 1202;
```

### Guarantees

- Inclusion on CLRTY-1 fails if any invariant is false post-transition
- Static ML checks (`clrtyc --check`) reject modules with zero invariants when outcomes mutate state
- Product rails (Split Gateway 50/50) and L01 tax (400 bps) stay **separate** invariant families
