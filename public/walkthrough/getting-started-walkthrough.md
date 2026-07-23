# Getting started — full walkthrough

> Notion: [Getting Started](https://app.notion.com/p/39e5f7f81f9e81b896a4ef9c6b8d5be6) · Parent: [Clarity Documentation](https://app.notion.com/p/clrty-1/Clarity-Documentation-39e5f7f81f9e80f69925c59cf6b07173)

{% stepper %}
{% step %}
### Install dependencies

```bash
# Rust
curl https://sh.rustup.rs -sSf | sh
source "$HOME/.cargo/env"

# Node 18+
nvm install 18 && nvm use 18

# Ubuntu build tools
sudo apt update
sudo apt install -y build-essential pkg-config libssl-dev
```
{% endstep %}
{% step %}
### Clone & build CLI

```bash
git clone https://github.com/clarity-fintech/clarity_prism_cli.git
cd clarity_prism_cli
cargo build -p clarity-cli --release
export PATH="$PWD/target/release:$PATH"
```
{% endstep %}
{% step %}
### Set environment anchors

```bash
export CLRTY_L1_RPC="https://rpc.clarity-fintech.com"
export CLRTY_API_BASE="https://api.clarity-fintech.com"
export CLRTY_L1_CHAIN_ID="clrty-1"
export CLRTY_L1_NUMERIC_CHAIN_ID="1202"
```
{% endstep %}
{% step %}
### Verify health

```bash
clrtynet sys health --plain
clrtynet node genesis-verify --plain
curl -sS "https://exchange.clarity-fintech.com/health" | jq '{chain, numeric_chain_id, ok}'
```
{% endstep %}
{% step %}
### First RPC call

```bash
curl -sS -X POST "$CLRTY_L1_RPC" \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```
{% endstep %}
{% step %}
### Open wallet or extension

Web: [https://exchange.clarity-fintech.com/exchange/wallet-app.html](https://exchange.clarity-fintech.com/exchange/wallet-app.html) · Extension: [Chrome extension guide](chrome-extension-guide.md)
{% endstep %}
{% endstepper %}

{% hint style="success" %}
**320+ indexed URLs**

This guide is indexed in the **423+ URL link corpus**. Browse all Clarity surfaces: [Link corpus index](../reference/link-corpus/README.md). Query programmatically via [GitBook Ask API](../reference/gitbook-ask-api.md).
{% endhint %}
