# Sequential gate architecture

| # | Gate | Unlocks |
| --- | --- | --- |
| 1 | Infra | Routing, latency probes, node health |
| 2 | Data | Queries, flows, liquidity views |
| 3 | Context | Cohort + protocol context |
| 4 | AI | Signals, prompt augmentation |
| 5 | Execution | Route optimization, efficiency scoring |
| 6 | Capital | MIRRA surfaces, liquidity, darkpool (institutional) |
| 7 | Inner | Environment, strategy rooms, private systems |

Gate scoring uses metrics, thresholds, decay, and reputation — on-chain permission registry maps wallet → tier → history.


<!-- clrty-blocks:v1 -->

```gate-matrix
title: Sequential Gate Architecture
source: whitepaper_ecosystem
```

| # | Gate | Unlocks |
| --- | --- | --- |
| 1 | Infra | Routing, latency probes, node health |
| 2 | Data | Queries, flows, liquidity views |
| 3 | Context | Cohort + protocol context |
| 4 | AI | Signals, prompt augmentation |
| 5 | Execution | Route optimization, efficiency scoring |
| 6 | Capital | MIRRA surfaces, liquidity, darkpool |
| 7 | Inner | Environment, strategy rooms, private systems |

{% stepper %}
{% step %}
### 1 · Infra

Routing, latency probes, node health — foundation for all downstream gates.
{% endstep %}
{% step %}
### 2 · Data

Queries, flows, liquidity views — Dune-style public + gated institutional feeds.
{% endstep %}
{% step %}
### 3 · Context

Cohort + protocol context for AI and execution surfaces.
{% endstep %}
{% step %}
### 4 · AI

Signals, prompt augmentation, CLRTY Lens overlay.
{% endstep %}
{% step %}
### 5 · Execution

Route optimization, HELIX simulation, efficiency scoring.
{% endstep %}
{% step %}
### 6 · Capital

MIRRA surfaces, liquidity coordination, darkpool (institutional).
{% endstep %}
{% step %}
### 7 · Inner

Environment loader, strategy rooms, private systems.
{% endstep %}
{% endstepper %}

{% expandable title="Gate scoring mechanics" %}
Metrics, thresholds, decay, and reputation feed an on-chain permission registry mapping wallet → tier → history. See Yellowpaper § notation for formal Υ(σ,T) transition semantics.
{% endexpandable %}

```diagram-panel
svg: 13-governance-override-hierarchy.svg
caption: Governance override hierarchy
```

![Governance override hierarchy](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/13-governance-override-hierarchy.svg)
*Governance override hierarchy*
