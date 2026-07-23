# Validators & nodes — full walkthrough

> Notion: [Where Validators Exist](https://app.notion.com/p/3a15f7f81f9e812f93dce3bddcd1bfbb) · [Systems](https://app.notion.com/p/39e5f7f81f9e8122b92ef819bd781d55)

{% hint style="info" %}
**Proof-of-Stake**

PoS primary use case: validators replace miners; stake tokens instead of using compute power.
{% endhint %}

## Node types

| Node | Role | Notes |
| --- | --- | --- |
| Validator | Consensus + staking | Emissions + routing share |
| RPC | Query + tx relay | Compliance + CCR aware |
| Indexer | Aggregation | Analytics / APIs |
| HELIX | Private execution | MEV-resistant routing |
| MIRRA | Market intelligence | Feeds HELIX + CCR |

## Validator operations

{% hint style="info" %}
**Developer console**

Deploy validator cluster, confirm chain ID clrty-1 / 1202, monitor finality.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
GET https://exchange.clarity-fintech.com/health
# Returns chain, numeric_chain_id, ok
```
{% endtab %}
{% tab title="MCP" %}
```bash
validator status --cluster mainnet
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet node genesis-verify --plain
clrtynet sys health --plain
```
{% endtab %}
{% tab title="Client library" %}
```javascript
const health = await fetch('https://exchange.clarity-fintech.com/health')
console.log(await health.json())
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

{% stepper %}
{% step %}
### Install dependencies

See [Getting started](getting-started-walkthrough.md).
{% endstep %}
{% step %}
### Verify genesis

`clrtynet node genesis-verify --plain`
{% endstep %}
{% step %}
### Deploy validator cluster

Use node_deployment_kit from clarity-fintech GitHub org.
{% endstep %}
{% step %}
### Launch RPC relay

[RPC setup guide](rpc-setup-guide.md)
{% endstep %}
{% step %}
### Stake & monitor

[Staking guide](staking-network-guide.md)
{% endstep %}
{% endstepper %}
