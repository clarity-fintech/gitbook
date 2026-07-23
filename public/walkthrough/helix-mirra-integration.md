# HELIX & MIRRA integration — code walkthrough

> Notion: [CLRTY-1 Pathfinding Engine](https://app.notion.com/p/3a15f7f81f9e810cb43fe03a4a0fe6c7) · [PRISM Operational Framework](https://app.notion.com/p/39e5f7f81f9e81708388d1b45b177935)

## Unified order flow

```text
User Tx → RPC validation → CCR → MIRRA → HELIX → Execution (internal/external)
TX → Liquidity scan → Internal match? → YES execute / NO external route
```

## HELIX private routing

{% hint style="info" %}
**Developer console**

MEV-resistant routing, internal match, private execution modes.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
POST https://rpc.clarity-fintech.com
{"jsonrpc":"2.0","id":1,"method":"routeTx","params":[{"tx":"...","mode":"private","priority":"high"}]}
```
{% endtab %}
{% tab title="MCP" %}
```bash
helix route --tx <signed> --mode private --priority high
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrty helix route --pair CLRTY/USD --side buy --size 100
```
{% endtab %}
{% tab title="Client library" %}
```javascript
import { helix } from '@clrty/sdk'
await helix.route({ tx: signedTx, mode: 'private', priority: 'high' })
```
{% endtab %}
{% endtabs %}

{% expandable title="Protocol & organization selectors" %}
| Selector | Options |
| --- | --- |
| Protocol | HTTP · gRPC · WebSocket |
| Organization | CLRTY-1 Mainnet · Volkov Intelligence Systems |
| Endpoint | `https://rpc.clarity-fintech.com` |
{% endexpandable %}

## MIRRA intelligence feed

{% hint style="info" %}
**Developer console**

Aggregates RPC, validators, HELIX, market feeds → execution paths, CCR adjustments, risk scores.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
POST https://api.clrty-1.protocol/v1/v1/mirra/signals HTTP/1.1
Authorization: Bearer YOUR_ACCESS_TOKEN
{ "pair": "CLRTY/USD", "horizon": "1h" }
```
{% endtab %}
{% tab title="MCP" %}
```bash
mirra signals --pair CLRTY/USD --horizon 1h
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrty mirra overview --plain
```
{% endtab %}
{% tab title="Client library" %}
```javascript
const signals = await client.mirra.signals({ pair: 'CLRTY/USD' })
```
{% endtab %}
{% endtabs %}

{% expandable title="Protocol & organization selectors" %}
| Selector | Options |
| --- | --- |
| Protocol | HTTP · gRPC · WebSocket |
| Organization | CLRTY-1 Mainnet · Volkov Intelligence Systems |
| Endpoint | `https://api.clrty-1.protocol/v1` |
{% endexpandable %}

Yellowpaper: [HELIX & MIRRA](../../developer/yellowpaper/05-helix-mirra.md) · AI Overview: [HELIX & MIRRA stack](../ai-overview/helix-mirra-stack.md)
