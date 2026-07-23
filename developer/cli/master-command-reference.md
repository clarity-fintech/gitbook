---
cli: "master"
---

# Master CLI & terminal command reference

> Primary binary: `clrtynet` ≡ `clrty` ≡ `clarity` · Flags: `--plain`, `--json`, `--dry-run`

{% hint style="info" %}
**Live vs Roadmap**

**Live** commands are shipped handlers. **Roadmap** commands (clrty-inspect, clrty-monitor, broad staking invent) are documented separately — never run unmarked roadmap commands as production.
{% endhint %}

## Build & install

```bash
curl https://sh.rustup.rs -sSf | sh
source "$HOME/.cargo/env"
cargo build -p clarity-cli --release
sudo cp target/release/clrtynet /usr/local/bin/
clrtynet --version
```

## Commands by category

{% tabs %}
{% tab title="System" %}
```bash
clrtynet sys health --plain
clrtynet sys test full --plain
cargo build -p clarity-cli --release
```
{% endtab %}
{% tab title="Node" %}
```bash
clrtynet node status --plain
clrtynet node genesis-verify --plain
clrtynet node registry --plain
clrtynet node register --dry-run
clrtynet node heartbeat --node-id test --dry-run
```
{% endtab %}
{% tab title="Wallet" %}
```bash
clrtynet wallet list --plain
clrtynet wallet status --plain
clrtynet wallet register --dry-run
clrtynet wallet capabilities --plain
clrtynet wallet finder --plain
```
{% endtab %}
{% tab title="Accounts" %}
```bash
clrtynet accounts status --plain
```
{% endtab %}
{% tab title="Transactions" %}
```bash
clrtynet tx build --dry-run
clrtynet tx sign --dry-run
clrtynet tx send --dry-run
clrtynet tx status --plain
```
{% endtab %}
{% tab title="Programs" %}
```bash
clrtynet program status --plain
clrtynet program init --dry-run
clrtynet program deploy --dry-run
clrtynet program verify --dry-run
clrtynet program deploy testnet --dry-run
```
{% endtab %}
{% tab title="RPC" %}
```bash
clrtynet rpc overview --plain
clrtynet rpc methods --plain
clrtynet rpc call getHealth '[]' --plain
clrtynet rpc call getSlot '[]' --plain
clrtynet rpc call eth_blockNumber '[]' --plain
```
{% endtab %}
{% tab title="Token" %}
```bash
clrtynet token info --plain
clrtynet token factory --plain
clrtynet treasury balance --plain
```
{% endtab %}
{% tab title="HELIX" %}
```bash
clrtynet helix status --plain
```
{% endtab %}
{% tab title="Fortress" %}
```bash
clrtynet fortress status --plain
clrtynet fortress step 1 --plain
```
{% endtab %}
{% tab title="Dev" %}
```bash
clrtynet dev resources --dry-run
clrtynet dev checklist --dry-run
```
{% endtab %}
{% tab title="Producer" %}
```bash
clrtynet producer deadman --dry-run
```
{% endtab %}
{% tab title="TUI" %}
```bash
clrtynet --tui operator
clrtynet --tui client
```
{% endtab %}
{% tab title="Environment" %}
```bash
export CLRTY_L1_RPC="https://rpc.clarity-fintech.com"
export CLRTY_API_BASE="https://api.clarity-fintech.com"
export CLRTY_L1_CHAIN_ID="clrty-1"
export CLRTY_L1_NUMERIC_CHAIN_ID="1202"
```
{% endtab %}
{% tab title="Exchange" %}
```bash
curl -sS "https://exchange.clarity-fintech.com/health" | jq .
curl -sS -X POST "$CLRTY_L1_RPC" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```
{% endtab %}
{% tab title="SDK" %}
```bash
npm install @clrty/sdk
npm install -g @clrt/cli
```
{% endtab %}
{% tab title="GitBook" %}
```bash
curl -X POST "https://api.gitbook.com/v1/orgs/6MCNfiz1cpjlR5LX4kWw/sites/site_xTRE6/ask" -H "Authorization: Bearer YOUR_ACCESS_TOKEN" -H "Content-Type: application/json" -d '{"question":"Nano spec item 56 RPC pipeline","scope":{"mode":"default"}}'
```
{% endtab %}
{% endtabs %}

## Harvested from docs (233 lines) + Rust CLI (173 lines)

{% expandable title="Full harvested command list" %}
```bash
CLRTY_FORCE_BUILD=1 cargo build -p clrty-api -p clrty-node
CLRTY_L1_RPC=https://api.devnet.clarity-fintech.com clrtynet rpc call getHealth
CLRTY_L1_RPC=https://api.testnet.clarity-fintech.com clrtynet rpc call getHealth
CLRTY_L1_RPC=https://rpc.clarity-fintech.com clrtynet rpc call getHealth
cargo build --release
cargo build --workspace --release
cargo build -p clarity-cli --release
cargo build -p clarity-cli -p clrty-api -p clrty-substrate --release
cargo build -p clrty-substrate --release
cd mirra && npm install && npm run start
clrty

## Next Steps
clrty
     ▼
clrty (wallet/tx/program/node/rpc/sys)
clrty --tui client
clrty --tui operator
clrty = CLRTYWallet.connect({ rpc: process.env.CLRTY_L1_RPC });
clrty CLI operates, CLRTY_SUBSTRATE holds L1 modules, HELIX nets intents at L0.5.
clrty CLI |
clrty CLI | Operator and developer control plane |
clrty CLI)
clrty account *
clrty account dump
clrty accounts status |
clrty anatomy *
clrty arb --plain
clrty arb route --plain
clrty arb scan --plain
clrty atu run --plain
clrty bench *
clrty blockstore *
clrty bridge --plain
clrty bridge status
clrty bridge status --plain
clrty buy --plain
clrty chain
clrty client portfolio --plain
clrty client status --plain
clrty client trade --plain
clrty config set --cluster mainnet|testnet|devnet
clrty config set --cluster/--rpc-url
clrty config set --cluster/--rpc-url/--keypair
clrty config set --rpc
clrty control *
clrty cortexpay status --plain
clrty cortexpay wallet --plain
clrty data snapshot --plain
clrty data-center --help
clrty data-center status --plain
clrty data-center status --plain |
clrty deadman check --plain
clrty detect spread --plain
clrty dev --help
clrty dev checklist --plain
clrty dev downloads --plain
clrty dev resources --plain
clrty dev status --plain
clrty dev verify-install --plain
clrty dev verify-setup --plain
clrty diagnose
clrty dx --help
clrty dx status --plain
clrty exec batch --plain
clrty exec dry --plain
clrty exec market --plain
clrty exec route --plain
clrty execute --plain
clrty first-access status --plain
clrty first-access sync --plain
clrty first-access verify --plain
clrty fork *
clrty fortress --help
clrty fortress status --plain
clrty fortress status |
clrty fortress status/step, dev resources/checklist --dry-run |
clrty fortress step --plain
clrty funnel arb --plain
clrty funnel client --plain
clrty funnel exec --plain
clrty funnel identity --plain
clrty funnel market --plain
clrty funnel middleware --plain
clrty funnel network --plain
clrty funnel node --plain
clrty funnel producer --plain
clrty funnel remote --plain
clrty funnel run --plain
clrty funnel scorer --plain
clrty funnel system --plain
clrty funnel token --plain
clrty funnel treasury --plain
clrty genesis verify --plain
clrty geyser *
clrty gossip
clrty gossip *
clrty id --plain
clrty id calibrate --dry-run --plain
clrty id calibrate --plain
clrty id capability --plain
clrty id create --plain
clrty id profile --plain
# … 306 more (docs/clarity + clarity-cli/src/main.rs + handlers)
```
{% endexpandable %}

## Roadmap (do not run as Live)

- `clrty-inspect`, `clrty-monitor`, `clrty-admin`, `clrty-runtime`
- `clrty staking *` invent families
- `spl-token` / Solana-native CLI (conceptual only)
- Fake hosts: `api.clrty-1.network` — use `rpc.clarity-fintech.com`

{% hint style="success" %}
**320+ indexed URLs**

This guide is indexed in the **411+ URL link corpus**. Browse all Clarity surfaces: [Link corpus index](../reference/link-corpus/README.md). Query programmatically via [GitBook Ask API](../reference/gitbook-ask-api.md).
{% endhint %}
