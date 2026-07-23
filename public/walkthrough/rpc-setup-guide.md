# RPC setup — full operator guide

> Notion: [Startup Guide: RPC, Staking & Network Integration](https://app.notion.com/p/3a15f7f81f9e817eadeffc2b2785fd82)

Production path: **Setup → RPC → Staking → Monitoring → MIRRA / HELIX integration**.

## System overview

```text
USER / AGENT
   ↓
RPC (execution-aware interface)
   ↓
CCR Engine (classification + permissions)
   ↓
MIRRA (intelligence + prediction)
   ↓
HELIX (execution engine)
   ↓
CLRTY-1 Consensus (final settlement)
```

| Feature | Traditional chain | CLRTY-1 |
| --- | --- | --- |
| RPC | Read/write | Execution + compliance gate |
| Staking | Security only | Security + intelligence + liquidity |
| MEV | Externalized | Internalized (HELIX) |
| Execution | Public mempool | Private + routed |

## Hardware requirements

| Profile | RAM | CPU | Storage |
| --- | --- | --- | --- |
| RPC minimum | 16 GB | 4 vCPU | NVMe SSD |
| Validator | 32–64 GB | 8–16 vCPU | Dedicated NVMe, 1 Gbps |
| HELIX / MIRRA | 64 GB+ | 8+ vCPU | GPU optional |

{% stepper %}
{% step %}
### Export RPC endpoints

```bash
export CLRTY_L1_RPC="https://rpc.clarity-fintech.com"
export CLRTY_L1_CHAIN_ID="clrty-1"
export CLRTY_L1_NUMERIC_CHAIN_ID="1202"
# Local: export CLRTY_L1_RPC="http://127.0.0.1:8545"
```
{% endstep %}
{% step %}
### Build RPC service

```bash
cargo build -p clrty-api --release
# or
cargo build -p clarity-cli --release
clrtynet rpc overview --plain
```
{% endstep %}
{% step %}
### Live affirm (exchange + RPC)

```bash
curl -sS "https://exchange.clarity-fintech.com/health" | jq '{chain, numeric_chain_id, ok}'
curl -sS -X POST "https://api.clarity-fintech.com/rpc" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```
{% endstep %}
{% step %}
### Simulate transaction

```bash
curl -sS -X POST "$CLRTY_L1_RPC" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"simulateTx","params":[{"tx":"<signed_tx>"}]}'
```
{% endstep %}
{% step %}
### Route via HELIX

```bash
curl -sS -X POST "$CLRTY_L1_RPC" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"routeTx","params":[{"tx":"...","mode":"private","priority":"high"}]}'
```
{% endstep %}
{% step %}
### Validate compliance

```bash
curl -sS -X POST "$CLRTY_L1_RPC" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"validateTx","params":[{"tx":"<signed_tx>"}]}'
```
{% endstep %}
{% endstepper %}

## Cluster endpoints

| Cluster | HTTP |
| --- | --- |
| Devnet | https://api.devnet.clarity-fintech.com |
| Testnet | https://api.testnet.clarity-fintech.com |
| Mainnet RPC | https://rpc.clarity-fintech.com |
| Exchange health | https://exchange.clarity-fintech.com/health |
| Local default | http://127.0.0.1:8545 |

### Block number probe

{% tabs %}
{% tab title="HTTP" %}
```http
POST https://rpc.clarity-fintech.com HTTP/1.1
Content-Type: application/json

{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}
```
{% endtab %}
{% tab title="cURL" %}
```bash
curl -sS -X POST "$CLRTY_L1_RPC" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```
{% endtab %}
{% tab title="Terminal" %}
```bash
clrtynet rpc overview --plain
```
{% endtab %}
{% tab title="Node.js" %}
```javascript
const res = await fetch(process.env.CLRTY_L1_RPC, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [],
  }),
})
console.log(await res.json())
```
{% endtab %}
{% endtabs %}

## RPC operator console

{% hint style="info" %}
**Developer console**

Execution-aware RPC: CCR classification, AML/KYC checks, routing eligibility before consensus.
{% endhint %}

{% tabs %}
{% tab title="API" %}
```http
POST https://rpc.clarity-fintech.com HTTP/1.1
Content-Type: application/json

{"jsonrpc":"2.0","id":1,"method":"validateTx","params":[{"tx":"<signed_tx>"}]}
```
{% endtab %}
{% tab title="MCP" %}
```bash
connect rpc.clarity-fintech.com via WebSocket
method validateTx
params { tx: "<signed_tx>" }
```
{% endtab %}
{% tab title="CLI" %}
```bash
clrtynet rpc overview --plain
clrtynet sys health --plain
```
{% endtab %}
{% tab title="Client library" %}
```javascript
import { ClrtyRpc } from '@clrty/sdk'
const rpc = new ClrtyRpc('https://rpc.clarity-fintech.com')
const tip = await rpc.call('eth_blockNumber', [])
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

{% hint style="success" %}
**320+ indexed URLs**

This guide is indexed in the **423+ URL link corpus**. Browse all Clarity surfaces: [Link corpus index](../reference/link-corpus/README.md). Query programmatically via [GitBook Ask API](../reference/gitbook-ask-api.md).
{% endhint %}
