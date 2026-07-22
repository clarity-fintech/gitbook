# Realms (RPC capability layers)

| Realm | Purpose |
| --- | --- |
| Infrastructure | Routing, latency, node health |
| Data | Queries, flows, liquidity |
| Institutional | Cohorts, capital flows, protocol metrics |
| AI | Signals, prompt augmentation, context |
| Execution | Routing optimization, efficiency |
| Capital | MIRRA, liquidity, darkpool |
| Inner | Environment, strategy rooms |


<!-- clrty-blocks:v1 -->

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

{% tabs %}
{% tab title="Infrastructure" %}
Routing, latency, node health RPC surface.
{% endtab %}
{% tab title="Data" %}
Queries, flows, liquidity — public and institutional tiers.
{% endtab %}
{% tab title="Institutional" %}
Cohorts, capital flows, protocol metrics (gated).
{% endtab %}
{% tab title="AI" %}
Signals, prompt augmentation, agent context.
{% endtab %}
{% tab title="Execution" %}
HELIX-aware routing, efficiency scoring.
{% endtab %}
{% tab title="Capital" %}
MIRRA, liquidity, darkpool coordination.
{% endtab %}
{% tab title="Inner" %}
Environment modules, strategy rooms.
{% endtab %}
{% endtabs %}

```diagram-panel
svg: 23-fault-tolerant-mesh-topology.svg
caption: Fault-tolerant mesh topology
```

![Fault-tolerant mesh topology](../../assets/diagrams/svg/23-fault-tolerant-mesh-topology.svg)
*Fault-tolerant mesh topology*
