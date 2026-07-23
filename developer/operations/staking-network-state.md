# Staking & treasury — network state (mainnet locked)

> SSOT: `var/launch/network_state.json` · Live API: `GET /v1/staking/market-ready`  
> Monitors: `make sync-monitors` → `var/launch/monitors_sync.json` (per-network block)

## Policy summary

| Network | CLRTY coin | Staking | Treasury | Notes |
|---------|------------|---------|----------|-------|
| **Mainnet** | **Not live** | **Locked** | **Genesis locked** | Beta market-ready gate must pass before stake/delegate |
| **Testnet** | Live (sandbox) | **Full capability** | Sandbox unlocked | Full stake/delegate/unstake + Spark Pay |
| **Devnet** | Live (sandbox) | **Full capability** | Sandbox unlocked | Node/wallet register + full CLI |

Mainnet **cannot stake CLRTY yet**. Treasury withdrawals are blocked until governance sign-off (`docs/tokenomics/TOKENOMICS_LOCKED.md`).

---

## Verify commands

```bash
# All networks — full staking state
curl -s https://api.clarity-fintech.com/v1/staking/market-ready | jq .

# Per network filter
curl -s 'https://api.clarity-fintech.com/v1/staking/market-ready?network=mainnet' | jq .
curl -s 'https://api.clarity-fintech.com/v1/staking/market-ready?network=testnet' | jq .
curl -s 'https://api.clarity-fintech.com/v1/staking/market-ready?network=devnet' | jq .

# Treasury compliance (mainnet — locked)
curl -s https://api.clarity-fintech.com/v1/compliance/treasury | jq .

# Network health
curl -s https://testnet-api.clarity-fintech.com/health
curl -s https://api.devnet.clarity-fintech.com/health

# Sync monitors (writes network-scoped DB + JSON)
make sync-monitors
sqlite3 var/launch/monitor_probes.sqlite "SELECT network, component_id, state, probed_at FROM monitor_probe_snapshots ORDER BY id DESC LIMIT 12;"
```

---

## Mainnet — locked until market-ready

Expected response fields:

```json
{
  "market_ready": false,
  "network_states": {
    "mainnet": {
      "clrty_coin_live": false,
      "staking_enabled": false,
      "staking_status": "locked_awaiting_market_ready",
      "treasury_status": "genesis_locked",
      "blocked_actions": ["stake", "delegate", "unstake", "coin_purchase", "treasury_withdraw"]
    }
  }
}
```

**Activate (ops only, when checklist passes):**

```bash
make beta-mainnet-activate
make beta-mainnet-status
curl -s https://api.clarity-fintech.com/v1/staking/market-ready | jq .market_ready
```

---

## Testnet — full staking capability

```bash
export CLRTY_L1_RPC=https://testnet-api.clarity-fintech.com
clrtynet rpc call getHealth '[]' --plain
clrtynet node status --plain
# Stake/delegate flows — testnet sandbox only
```

Origin bind on Cherry VDS: `:8546` · Edge: `https://testnet-api.clarity-fintech.com`

---

## Devnet — full capability (local + edge)

```bash
export CLRTY_L1_RPC=https://api.devnet.clarity-fintech.com
# or local:
export CLRTY_L1_RPC=http://127.0.0.1:8545
clrtynet node register --dry-run
clrtynet wallet register --dry-run
```

---

## Monitor DB (network-scoped)

| Store | Path | Network column |
|-------|------|----------------|
| Local SQLite | `var/launch/monitor_probes.sqlite` | `network IN (mainnet, testnet, devnet)` |
| Cloudflare D1 | `monitor_probe_snapshots` (migration `0002`) | same |
| Sync report | `var/launch/monitors_sync.json` | `networks.mainnet` / `.testnet` / `.devnet` |

Apply D1 migration:

```bash
make cf-d1-migrate   # or scripts/deploy/cf_d1_migrate.sh
```

---

## Related

- [TOKENOMICS_LOCKED.md](../../../tokenomics/TOKENOMICS_LOCKED.md)
- [Staking reference](../../../clarity/references/staking.md)
- [Full system test guide](full-system-test-guide.md)
- [CLRTY command index](clrty-command-index.md)
