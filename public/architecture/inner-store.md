# Inner Store

The Inner Store is **not a UI product** — it is a **capability-gated environment** loaded when a wallet qualifies.

## Modules (examples)

* Flow maps
* AI terminals
* Strategy rooms
* Execution consoles

## Loading contract

```text
clrty_inner_enter → { modules[], permissions[], tier }
```

Personalization: wallet identity, behavior history, access tier.


<!-- clrty-blocks:v1 -->

{% hint style="warning" %}
**Architecture note**

The Inner Store is **not a UI SKU** — it is a capability-gated environment contract (`clrty_inner_enter`).
{% endhint %}

{% columns %}
{% column %}
**Flow maps** — wallet-scoped liquidity and intent visualization.
{% endcolumn %}
{% column %}
**AI terminals** — PRISM + Lens augmented surfaces.
{% endcolumn %}
{% column %}
**Strategy rooms** — gated execution consoles for qualified wallets.
{% endcolumn %}
{% endcolumns %}

```diagram-panel
svg: 03-neurotemplate-pipeline.svg
caption: Neurotemplate pipeline
```

![Neurotemplate pipeline](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/03-neurotemplate-pipeline.svg)
*Neurotemplate pipeline*
