# CLRTY GitBook custom blocks

Rich content blocks sourced from **whitepapers, yellowpaper, institutional volumes, and investor data room** extracts.

## Native GitBook blocks (live now)

| Block | Used for |
| --- | --- |
| `{% hint %}` | Tier callouts, legal disclaimers, architecture notes |
| `{% tabs %}` | Realms, HELIX/MIRRA, outer/inner store |
| `{% expandable %}` | Full whitepaper excerpts from `var/gitbook/extracts/` |
| `{% stepper %}` | Sequential gates, roadmap phases, core principles |
| `{% columns %}` | Inner Store modules |

## Custom integration blocks

Published via `integrations/clrty-whitepaper-blocks/` (requires `GITBOOK_API_TOKEN`):

| Block ID | Whitepaper source |
| --- | --- |
| `gate-matrix` | Ecosystem vision — 7 sequential gates |
| `realm-map` | Architecture — 7 RPC realms |
| `yellowpaper-notation` | Yellowpaper v1 — Υ(σ,T) pipeline |
| `compliance-matrix` | Vol II, AML program, exchange readiness |
| `investor-doc` | PPM, term sheet, warrant |
| `diagram-panel` | 28 SVG figures from Downloads pack |
| `product-stack` | Ecosystem product inventory |

Syntax in markdown:

````markdown
```gate-matrix
title: Sequential Gate Architecture
source: whitepaper_ecosystem
```
````

## Diagram assets

28 SVGs from `[$CLRTY] svg.diagrams.zip` — hosted at:

`https://github.com/clarity-fintech/gitbook/tree/main/assets/diagrams/svg`

## Rebuild pipeline

```bash
make gitbook-full-blocks    # extract + build + enrich + upload
make gitbook-integration-publish   # publish custom block integration (needs API token)
```

Extract sources: 25 files in `var/gitbook/extracts/` (whitepapers, yellowpaper, AML, PPM, audit, etc.).

<!-- clrty-blocks:v1 -->

{% hint style="info" %}
**Block system**

39 pages enriched with native GitBook blocks + 7 custom integration block types.
{% endhint %}

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

```yellowpaper-notation
equation: "Υ(σ, T) := Apply( Converge( Execute( Validate( Optimize( Score( Simulate(T, σ) ) ) ) ) ) )"
label: State transition (Yellowpaper v1)
```

```text
Υ(σ, T) := Apply( Converge( Execute( Validate( Optimize( Score( Simulate(T, σ) ) ) ) ) ) )
```

Yellowpaper v1 core pipeline
