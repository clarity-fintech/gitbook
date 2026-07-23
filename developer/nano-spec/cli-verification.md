# Nano Spec — CLI verification matrix

Terminal commands mapped to each of the **10 nano sections** (100 items total).

{% stepper %}
{% step %}
### 1. Core ledger structure (1–15)

```bash
clrtynet node genesis-verify --plain
clrtynet rpc overview --plain
cargo test -p nano_ledger -- --nocapture
```

Items: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
{% endstep %}
{% step %}
### 2. State tree (16–25)

```bash
clrtynet rpc call getSlot '[]' --plain
clrtynet node status --plain
```

Items: 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
{% endstep %}
{% step %}
### 3. Account data structure (26–40)

```bash
clrtynet wallet status --plain
clrtynet accounts status --plain
```

Items: 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
{% endstep %}
{% step %}
### 4. Transaction structure (41–55)

```bash
clrtynet tx status --plain
clrtynet tx build --dry-run
```

Items: 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55
{% endstep %}
{% step %}
### 5. RPC internal flow (56–65)

```bash
clrtynet rpc methods --plain
clrtynet rpc call getHealth '[]' --plain
curl -sS -X POST "$CLRTY_L1_RPC" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"simulateTx","params":[{"tx":"<signed_tx>"}]}'
```

Items: 56, 57, 58, 59, 60, 61, 62, 63, 64, 65
{% endstep %}
{% step %}
### 6. CCR engine (66–72)

```bash
clrtynet rpc overview --plain
clrtynet token info --plain
```

Items: 66, 67, 68, 69, 70, 71, 72
{% endstep %}
{% step %}
### 7. Staking data structures (73–80)

```bash
clrtynet node status --plain
clrtynet node registry --plain
clrtynet treasury balance --plain
```

Items: 73, 74, 75, 76, 77, 78, 79, 80
{% endstep %}
{% step %}
### 8. HELIX (internal routing) (81–88)

```bash
clrtynet helix status --plain
curl -sS -X POST "$CLRTY_L1_RPC" -H "Content-Type: application/json" -d '{"jsonrpc":"2.0","id":1,"method":"routeTx","params":[{"tx":"...","mode":"private"}]}'
```

Items: 81, 82, 83, 84, 85, 86, 87, 88
{% endstep %}
{% step %}
### 9. Cross-chain routing (89–95)

```bash
clrty bridge status --dry-run
clrtynet helix status --plain
```

Items: 89, 90, 91, 92, 93, 94, 95
{% endstep %}
{% step %}
### 10. Security + safety (96–100)

```bash
clrtynet sys health --plain
clrtynet node genesis-verify --plain
clrtynet rpc call getHealth '[]' --plain
```

Items: 96, 97, 98, 99, 100
{% endstep %}
{% endstepper %}

## Full verification sweep

```bash
export CLRTY_L1_RPC="https://rpc.clarity-fintech.com"
clrtynet sys health --plain
clrtynet node genesis-verify --plain
clrtynet node status --plain
clrtynet rpc overview --plain
clrtynet rpc methods --plain
clrtynet wallet status --plain
clrtynet accounts status --plain
clrtynet token info --plain
clrtynet helix status --plain
clrtynet treasury balance --plain
curl -sS "https://exchange.clarity-fintech.com/health" | jq .
```
