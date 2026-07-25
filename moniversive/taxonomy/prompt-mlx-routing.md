# Prompt Engineering, Static MLX & Backend Routing

MIS makes execution **100% predictable for LLMs** — no dynamic stack unwinding, implicit heaps, or nondeterministic exceptions.

## Why MIS for prompt-driven engineering

* Zero hallucinated exception logic — emit `mis.invariant` guards  
* Bounded generation — `@mis_kernel(max_depth=64)`  
* Branchless syntax — `mis.select(mask, a, b)` over nested if/else  

## Static MLX attention (unified memory)

```python
@mis_kernel
def static_mlx_attention_step(
    query: mis_tensor[f16, (1, 32, 128)],
    key_cache: mis_tensor[f16, (1, 32, 2048, 128)],
    value_cache: mis_tensor[f16, (1, 32, 2048, 128)],
) -> mis_tensor[f16, (1, 32, 128)]:
  mis.invariant(query.shape[-1] == key_cache.shape[-1])
  scores = mis.matmul_transpose(query, key_cache) * (1.0 / 11.3137)
  attn_weights = mis.softmax_online(scores)
  return mis.matmul(attn_weights, value_cache)
```

Zero allocation · deterministic latency · Metal dispatch under MIS shape proofs.

## Stack map

| Component | Standard | MIS native |
|-----------|----------|------------|
| Code gen | Dynamic Python/TS | `.mis` + `@mis_kernel` |
| ML runtime | PyTorch / dynamic MLX | MIS-Tensor + unified MLX |
| Middleware | REST / gRPC / Redis | Lock-free SPSC (`mis_mem`) |
| Verification | DB locks / exceptions | `mis.invariant` + ZK-IVC |

See also [routing.md](routing.md) · [mis_ml.md](mis_ml.md)
