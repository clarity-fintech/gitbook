# Moniversive Cryptographic Primitives (`mis_crypto`)

ZK, post-quantum, and zero-overhead cryptographic primitives.

| Branch | Role |
|--------|------|
| `mis_zk` | Poseidon2, PLONK lookups, Halo2 FFT, Horner polynomial eval |
| `mis_ec` | Field arithmetic Fp / Fp251 / Goldilocks; MSM Pippenger; BN254 / BLS12-381 |
| `mis_tree` | Merkle-Poseidon, Verkle IPA, Taproot leaf script verify |
| `mis_fhe` | Ring-LWE polynomial ops for encrypted state on public chains |

## Branch pages

* [`mis_zk`](../framework/mis_zk.md) — Poseidon2, PLONK lookups, Halo2 FFT, Horner polynomial eval
* [`mis_ec`](../framework/mis_ec.md) — Field arithmetic Fp / Fp251 / Goldilocks; MSM Pippenger; BN254 / BLS12-381
* [`mis_tree`](../framework/mis_tree.md) — Merkle-Poseidon, Verkle IPA, Taproot leaf script verify
* [`mis_fhe`](../framework/mis_fhe.md) — Ring-LWE polynomial ops for encrypted state on public chains

Module: `moniversive/framework/mis_crypto.mis`  
Settlement: clrty-1 / 1202 · Extension: `.mis`

## CLRTY-1 wallet cybersecurity policy (`mis_ec`)

`moniversive/framework/Clrty1WalletSecurityPolicy.mis` is the SSOT for CLRTY-1 wallet
cybersecurity constraints: no Wasm/external-connector seed exposure, mandatory session
idle lockdown, and opaque-only KMS/MPC envelopes (never raw keys). Index entry:
`idx-mis-Clrty1WalletSecurityPolicy` in `CLRTY_SUBSTRATE/boot/mis_code_index.json`.
