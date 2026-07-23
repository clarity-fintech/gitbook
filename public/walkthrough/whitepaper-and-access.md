# Whitepaper & access — complete walkthrough

## What is covered

Every PDF/HTML from the CLRTY Downloads pack is extracted to `var/gitbook/extracts/` and published as **full chapter pages** (not truncated excerpts).

## Access model

{% tabs %}
{% tab title="Public" %}
Ecosystem vision, computational substrate, architecture gates, AI overviews.
{% endtab %}
{% tab title="Developer" %}
Yellowpaper formal spec, investor edition full text, notation blocks.
{% endtab %}
{% tab title="Institutional" %}
Vol II security/governance (67 pp), Vol III readiness (30+101 pp), AML, audit.
{% endtab %}
{% tab title="Investor" %}
PPM, term sheet, warrant, pitch — private GitBook space with invite auth.
{% endtab %}
{% endtabs %}

## 1st Access / exchange funnel

| Surface | URL |
| --- | --- |
| Early investment | [clarity-fintech.com/early-investment-access](https://www.clarity-fintech.com/early-investment-access) |
| Exchange login | [exchange.clarity-fintech.com/login](https://exchange.clarity-fintech.com/login) |
| Wallet app | [exchange.clarity-fintech.com/exchange/wallet-app.html](https://exchange.clarity-fintech.com/exchange/wallet-app.html) |
| Labs | [labs.clarity-fintech.com](https://labs.clarity-fintech.com/) |

## Sequential gates → Inner Store

Capability accumulates through seven gates (Infra → Data → Context → AI → Execution → Capital → Inner). See [Sequential gates](../architecture/sequential-gates.md) and [Inner Store](../architecture/inner-store.md).

## Custom blocks

Native GitBook blocks + `clrty-whitepaper-blocks` integration: gate-matrix, realm-map, yellowpaper-notation, compliance-matrix, investor-doc, diagram-panel, product-stack, ai-overview.

{% hint style="warning" %}
**Access control**

Investor-private content must remain **Private** in GitBook space settings. Never mirror PPM numbers to public spaces.
{% endhint %}

## Code walkthroughs

| Guide | Link |
| --- | --- |
| Developer console | [developer-console.md](developer-console.md) |
| RPC setup | [rpc-setup-guide.md](rpc-setup-guide.md) |
| Staking | [staking-network-guide.md](staking-network-guide.md) |
| Wallet install | [wallet-installation-guide.md](wallet-installation-guide.md) |
| Chrome extension | [chrome-extension-guide.md](chrome-extension-guide.md) |
| Full hub | [code-walkthrough-hub.md](code-walkthrough-hub.md) |


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

```realm-map
title: Seven Realms
source: public architecture
```

| Realm | Purpose |
| --- | --- |
| Infrastructure | Routing, latency, node health |
| Data | Queries, flows, liquidity |
| Institutional | Cohorts, capital flows |
| AI | Signals, prompt augmentation |
| Execution | Routing optimization |
| Capital | MIRRA, liquidity, darkpool |
| Inner | Environment, strategy rooms |

{% hint style="danger" %}
**Restricted**

Investor PPM and term sheet require NDA / accredited access.
{% endhint %}
