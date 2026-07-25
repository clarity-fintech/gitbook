# MIS Routing (Inbound / Outbound)

Routing uses **zero-allocation memory mapping** and **bitwise SIMD selection** — not JSON/gRPC context switches.

## TO (Inbound)

```
[ Request / Prompt Token ]
        │
        ▼
[ SPSC Ring Buffer ]  ← mis_mem pre-allocated
        │
        ▼
[ Bitwise SIMD Dispatcher ]  ← mis.select mask, O(1)
        │
   ┌────┴────┐
   ▼         ▼
 MLX Tensor   State Commit
```

1. Zero-copy ingestion into SPSC slots  
2. Bitwise SIMD route header evaluate  
3. Branchless `mis.select(mask, A, B)`

## FROM (Outbound)

```
[ Kernel Complete ]
        │
        ▼
[ mis.invariant attestation ]
        │
   ┌────┼────┐
   ▼    ▼    ▼
 MLX   HW MSR   ZK-Proof emit (O(1))
```

1. Direct `mis_ptr` mapping (no copy)  
2. Optional `mis_crypto` proof snippet  
3. Non-temporal stores / `clflush` to avoid cache pollution  

## Layers

1. SPSC shared memory (lock-free ingestion)  
2. Bitwise mask evaluation (branchless router)  
3. Hardware / memory dispatch (zero-copy)

Module: `moniversive/framework/MisRouter.mis`
