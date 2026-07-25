# Hand-coding in MIS — End Outcomes

## High-level ergonomic (`.mis` / Python-level)

```python
@mis_kernel
def execute_trade(sender: mis_ptr, receiver: mis_ptr, amount: u64) -> u8:
  mis.invariant(mis.load(sender) >= amount)
  mis.store(sender, mis.load(sender) - amount)
  mis.store(receiver, mis.load(receiver) + amount)
  return mis.SUCCESS
```

## Low-level bare-metal

```mis
mis_kernel fn clrty_atomic_swap_hand(reg_a: mis_ptr<u256>, val: u256) -> u32 {
    mis_reg state_val: u256 = mis::load_aligned_u256(reg_a);
    mis.invariant(state_val != 0u256);
    mis::store_aligned_u256(reg_a, val);
    return 1u32;
}
```

## End outcomes

1. **Zero runtime stack unwinding / predictable cycles** — bounds proven by `misc`/`clrtyc`  
2. **Thread & hardware determinism** — branchless SIMD, lock-free arenas  
3. **Native ZK verification** — programs as circuits; IVC $O(1)$ proofs  
4. **Paradigm** — Python ergonomics → bare-metal speed → formal safety  

Settlement always **clrty-1 / 1202**.
