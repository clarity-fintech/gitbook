# Learning path — Moniversive Invariant Static ML

Ordered path from first module to the full Clarity-Fintech Static ML mesh.

## 1. Language fundamentals

1. [BeginnersGuide](../BeginnersGuide/README.md)
2. [Language overview](../language/overview.md)
3. [Letter-hash](../language/letter-hash.md)
4. [EMBED gates 3..=6](../language/embed-gates.md)
5. [Invariants](../language/invariants.md)

## 2. Static ML catalog (1–1025)

1. Hub: [Static-ML invariants](../architecture/static-ml-invariants.md)
2. [Gradients 201–300](../architecture/gradient-invariants-201-300.md)
3. [Dual-loop Token ↔ RPC](../architecture/dual-loop.md)
4. [Token market 401–500](../architecture/token-market-401-500.md)
5. [Passive RPC 501–600](../architecture/passive-rpc-501-600.md)
6. [Master 601–700](../architecture/master-invariants-601-700.md)
7. Hardware / DSP / shard bands (701–775) linked from the hub
8. Kernels + architecture + chain intake (776–1025) from the hub

## 3. Clone + check the live kernel

```bash
gh repo clone clarity-fintech/moniversive_invariant_static_ML
cd moniversive_invariant_static_ML
# layout: mis/kernel · mis/packs/static_ml · mis/sections · manifests
bin/misc mis/kernel/*.mis --check --compact-letters
```

Kernel URL: https://github.com/clarity-fintech/moniversive_invariant_static_ML

## 4. Domain satellites (100 each)

Walk one pack per domain from [static-ml-backlinks](../guides/static-ml-backlinks.md#domain-satellites-100-invariants-each). Each README backlinks the ML kernel.

## 5. Ecosystem + cross-chain

- 23 core/staking/governance repos — same backlinks page
- 10 cross-chain settle repos — sections include Helix, rails, edge, ML kernel
- Index: `CLRTY_SUBSTRATE/boot/mis_ecosystem_repos_manifest.json` (40 entries)

## 6. Taxonomy + prompting

- [mis_ml](../taxonomy/mis_ml.md)
- [Prompt / MLX / Backend](../taxonomy/prompt-mlx-routing.md)
- [Quizzes](quizzes.md) · [Cheatsheets](cheatsheets.md) · [AI prompting](ai-prompting.md)

## 7. Wallet binding (clrty-1)

Live wallet uses stake + ML kernel links:

- https://exchange.clarity-fintech.com/wallet-app
- Manifest: `wallet_mis_clrty1_links.json` → mis-stake-pool, liquid-staking-core, st-clrty-program, helix-mev, **moniversive_invariant_static_ML**, cross-chain settle

## Full backlink table

→ [guides/static-ml-backlinks.md](../guides/static-ml-backlinks.md)
