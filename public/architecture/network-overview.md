# Network overview

```text
CLRTY L1 (clrty-1)
 ├── Consensus Layer      — BFT-style finalization, Moniversion heuristics
 ├── Execution Layer      — Deterministic Υ(σ,T), HELIX routing
 ├── Data Layer           — Public (Dune-style) + Institutional (Artemis-style)
 ├── Intelligence Layer   — PRISM, Lens, agents
 └── Access Layer         — Gates, capability registry, inner store
```

See **Developer space → Yellowpaper** for formal notation.


<!-- clrty-blocks:v1 -->

```diagram-panel
svg: 02-l1-substrate-topology.svg
caption: CLRTY L1 substrate
```

![CLRTY L1 substrate](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/02-l1-substrate-topology.svg)
*CLRTY L1 substrate*

{% expandable title="Layer breakdown" %}
Consensus (BFT-style finalization) · Execution (Υ(σ,T), HELIX) · Data (public + institutional) · Intelligence (PRISM, Lens) · Access (gates, inner store).
{% endexpandable %}

{% hint style="info" %}
**Whitepaper source**

**Source:** `substrate` · 2 pp pages

Strategic Vision: The Computational Substrate The $CLRTY architecture is built on three core pillars that distinguish it from legacy ledger systems: 1. Determinism as a Feature Unlike traditional blockchain models that rely on probabilistic finality, $CLRTY utilizes the clrty-1 hard-kernel substrate. Economic transparency is guaranteed by a 16,000,000 fixed supply cap , with the mint_authority set to null at genesis. This ensures that the tokenomics model is mathematically verifiable, not just governance-dependent. 2. Behavior-Aware Economic Topology The Continuous Classification & Rebalancing…
{% endhint %}
