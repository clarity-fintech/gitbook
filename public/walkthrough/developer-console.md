# Developer console — API · MCP · CLI · Client library

> Mirrors the **CLRTY-1 Developer Console** UI: sidebar account/org menu + tabbed code panel with protocol selectors.

{% hint style="success" %}
**320+ indexed URLs**

This guide is indexed in the **423+ URL link corpus**. Browse all Clarity surfaces: [Link corpus index](../reference/link-corpus/README.md). Query programmatically via [GitBook Ask API](../reference/gitbook-ask-api.md).
{% endhint %}

## Sidebar menu (Account)

{% tabs %}
{% tab title="General" %}
Profile, org switcher, API token management at [app.gitbook.com/account/developer](https://app.gitbook.com/account/developer).
{% endtab %}
{% tab title="Notifications" %}
Webhook + alert routing for RPC health, validator slashing, compliance holds.
{% endtab %}
{% tab title="Organizations" %}
Switch between **CLRTY-1 Mainnet** and partner org environments.
{% endtab %}
{% tab title="Developer tools" %}
This console — API, MCP, CLI, and client library quickstart.
{% endtab %}
{% endtabs %}

## Organization menu

{% expandable title="Organization sections" %}
| Section | Purpose |
| --- | --- |
| General | Org metadata, chain ID `clrty-1` / numeric `1202` |
| Members | Role-based access for RPC operators |
| CLRTY Agent | Autonomous epoch reasoning buffers |
| Integrations | GitBook Ask, exchange session, wallet bridge |
| OpenAPI | Published REST + JSON-RPC schemas |
| SSO / Billing | Enterprise institutional gates |
{% endexpandable %}

## Query the live reasoning stack

{% hint style="info" %}
**Developer console**

The example below demonstrates how to query the live CLRTY-1 reasoning stack. Step 1: create a personal access token in Developer settings, then run with your selected protocol.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
# The Ask endpoint requires a verified Organization ID and Buffer Node Index
POST https://api.clrty-1.protocol/v1/orgs/CLRTY_SYS_9982/buffers/query HTTP/1.1
Host: api.clrty-1.protocol
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "buffer_index": 903,
  "scope": { "mode": "autonomous_epoch_1" }
}
```
{% endtab %}
{% tab title="MCP" %}
```bash
# MCP stream to request reasoning context from CLRTY-1
connect api.clrty-1.protocol via HTTP
organization = "CLRTY-1 Mainnet"
request { tool: "ask", buffer_index: 903, mode: "autonomous_epoch_1" }
status: awaiting response
```
{% endtab %}
{% tab title="CLI" %}
```bash
# Install and authenticate once
npm i -g clrty-cli
clrty auth login --token YOUR_ACCESS_TOKEN
clrty query --endpoint https://api.clrty-1.protocol/v1 --org "CLRTY-1 Mainnet" --protocol http
clrty query --buffer-index 903 --mode "autonomous_epoch_1"
```
{% endtab %}
{% tab title="Client library" %}
```javascript
import { createClient } from 'clrty-sdk'

const client = createClient("https://api.clrty-1.protocol/v1")
await client.useProtocol("HTTP")
const res = await client.ask({
  orgId: 'CLRTY_SYS_9982',
  buffer_index: 903,
  scope: { mode: 'autonomous_epoch_1' },
})
console.log(res)
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

## GitBook Ask (documentation corpus)

## Ask across all whitepapers + link corpus

{% hint style="info" %}
**Developer console**

Query all uploaded documentation — 320+ URLs, full whitepaper chapters, walkthroughs.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
POST /v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask HTTP/1.1
Host: api.gitbook.com
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

{
  "question": "How do I set up CLRTY-1 RPC on mainnet?",
  "scope": { "mode": "default" }
}
```
{% endtab %}
{% tab title="MCP" %}
```bash
# MCP → GitBook Ask bridge
connect api.gitbook.com via HTTP
ask { site: "site_xTRE6", question: "Chrome extension install steps" }
```
{% endtab %}
{% tab title="CLI" %}
```bash
curl -X POST "https://api.gitbook.com/v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"question":"RPC setup mainnet","scope":{"mode":"default"}}'
```
{% endtab %}
{% tab title="Client library" %}
```javascript
const res = await fetch("https://api.gitbook.com/v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    question: "Where is Volume II security governance?",
    scope: { mode: "default" },
  }),
})
console.log(await res.json())
```
{% endtab %}
{% endtabs %}

{% expandable title="Protocol & organization selectors" %}
| Selector | Options |
| --- | --- |
| Protocol | HTTP · gRPC · WebSocket |
| Organization | Clarity Mainnet · Volkov Intelligence Systems |
| Endpoint | `https://api.gitbook.com/v1` |
{% endexpandable %}

See also: [GitBook Ask API reference](../reference/gitbook-ask-api.md)
