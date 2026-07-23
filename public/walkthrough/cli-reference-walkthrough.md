# CLI command reference — complete terminal guide

> Synced from [Master CLI reference](../../developer/cli/master-command-reference.md) + [Nano verification](../../developer/nano-spec/cli-verification.md)

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
{% endtabs %}

See [Master command reference](../../developer/cli/master-command-reference.md) for all categories and [Backlinks CLI matrix](../reference/backlinks-cli-matrix.md) for URL probes.
