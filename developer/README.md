# CLRTY Developer Documentation

Formal protocol specification, node operations, and `clrty_*` method namespace.

**Yellowpaper v1** is the canonical technical volume for this space — distinct from the public S20 repo draft.


| Layer | Already public (repo / site) | GitBook adds (different depth) |
| --- | --- | --- |
| **L0 Public** | `docs/whitepaper.md` S20 technical draft (Set manifold, PoC) | Intelligence OS framing, gates, realms, inner store, ecosystem vision |
| **L1 Developer** | Architecture README, partial API refs | Full Yellowpaper v1 formal spec, Υ(σ,T) notation, HELIX/MIRRA math, node roles |
| **L2 Institutional** | Investor data room index (metadata) | Vol II security/governance, Vol III readiness, AML program, audit synthesis |
| **L3 Investor Private** | None (NDA data room) | PPM, term sheet, warrants, corporate pack, financial model references |


<!-- clrty-blocks:v1 -->

{% hint style="info" %}
**L1 Developer tier**

**Yellowpaper v1** is the canonical technical volume — Υ(σ,T) notation, HELIX/MIRRA, node roles, supply integrity.
{% endhint %}

```yellowpaper-notation
equation: "Υ(σ, T) := Apply( Converge( Execute( Validate( Optimize( Score( Simulate(T, σ) ) ) ) ) ) )"
label: State transition (Yellowpaper v1)
```

```text
Υ(σ, T) := Apply( Converge( Execute( Validate( Optimize( Score( Simulate(T, σ) ) ) ) ) ) )
```

Core state transition pipeline (Yellowpaper Eq. 1)

```diagram-panel
svg: 05-neurotemplate-evolutionary-loop.svg
caption: Neurotemplate evolutionary loop
```

![Neurotemplate evolutionary loop](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/05-neurotemplate-evolutionary-loop.svg)
*Neurotemplate evolutionary loop*
