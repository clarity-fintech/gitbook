# High-Level Invariant AI & Tensor Engine (`mis_ml`)

Monotonic compile-time verified static neural / tensor primitives.

| Branch | Role |
|--------|------|
| `mis_tensor` | FP32→INT8 quantization, non-temporal matmul, vector norm clip |
| `mis_attn` | FlashAttention-2 online softmax, RoPE, QK^T scaling |
| `mis_layers` | RMSNorm, SwiGLU, KAN Fourier basis expansions |
| `mis_moe` | Top-K MoE routing kernels and structural pruning bitmasks |

## Branch pages

* [`mis_tensor`](../framework/mis_tensor.md) — FP32→INT8 quantization, non-temporal matmul, vector norm clip
* [`mis_attn`](../framework/mis_attn.md) — FlashAttention-2 online softmax, RoPE, QK^T scaling
* [`mis_layers`](../framework/mis_layers.md) — RMSNorm, SwiGLU, KAN Fourier basis expansions
* [`mis_moe`](../framework/mis_moe.md) — Top-K MoE routing kernels and structural pruning bitmasks

Module: `moniversive/framework/mis_ml.mis`  
Settlement: clrty-1 / 1202 · Extension: `.mis`
