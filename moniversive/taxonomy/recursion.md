# Moniversive Recursion

In dynamic runtimes (Python / EVM), recursion grows the call stack — unbounded depth, overflow risk, non-deterministic time, costly unwinding.

**Moniversive Recursion** replaces dynamic frame growth with **Bounded Static Unrolling** and **Inductive State-Transition Proofs**. The MIS compiler (`misc` / `clrtyc`) transforms recursive calls into:

1. **Static Hardware-Tail Folding (`mis_recurse_tail`)** — Fixed-register iteration reusing one isolated frame with compile-time bounded depth.
2. **Recursive ZK Verification (`mis_recurse_zk`)** — IVC / Halo2-style inductive proof aggregation: step $N$ verifies step $N-1$ in $O(1)$ stack depth.

## Low-level primitives (`.mis`)

```mis
// Inductive State Proof Recursion Step (IVC)
mis_kernel fn clrty_crypto_ivc_recurse_step(
    prev_proof: mis_ptr<u256>,
    current_state: mis_ptr<u256>,
    next_state: mis_ptr<u256>
) -> u32 {
    mis_reg is_valid: u32 = clrty_crypto::verify_step_proof(prev_proof, current_state);
    mis.invariant(is_valid);
    mis_reg state_val: u256 = mis::load_aligned_u256(current_state);
    mis_reg next_val: u256 = clrty_crypto::poseidon_hash_u256(state_val);
    mis::store_aligned_u256(next_state, next_val);
    return 1u32;
}

// Static Hardware-Tail Bounded Recursion
mis_kernel fn clrty_sys_bounded_recurse_fold(
    accum: mis_ptr<u64>,
    depth_rem: u32,
    step_val: u64
) -> void {
    mis_branch (depth_rem > 0u32) {
        mis_reg current: u64 = mis::load_aligned_u64(accum);
        mis::store_aligned_u64(accum, current + step_val);
        clrty_sys_bounded_recurse_fold(accum, depth_rem - 1u32, step_val);
    }
}
```

## High-level ergonomic form

Require `@mis_kernel(max_depth=…)` or `@mis.inductive`. Compiler enforces bounds.

| Branch | Recursion mechanism | Purpose |
|--------|---------------------|---------|
| `mis_core` | Static frame folding | Tail-call elimination without stack growth |
| `mis_crypto` | IVC | Aggregate ZK proofs to $O(1)$ size |
| `mis_ml` | Deep layer unrolling | RNNs/ODEs → static SIMD lane iterations |
| `mis_chain` | Merkle/Verkle fold | Trie walks → parallel register pipelines |
| `mis_lang` | `misc` boundary prover | Require `max_depth` or `@mis.inductive` |

```
[ Dynamic recursion ]  Frame0 → Frame1 → … → FrameN  (unbounded)
[ Moniversive ]        Tail-fold: Frame0 in-place ≤ max_depth
                       ZK-IVC: Proof_N = Verify(Proof_{N-1} + Step_N)  O(1)
```

Module: `moniversive/framework/MisRecursion.mis`
