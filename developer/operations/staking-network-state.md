# Staking & treasury — network state (mainnet locked)

> SSOT: `var/launch/network_state.json` · Circulation: `var/launch/circulation_state.json`  
> Live API: `GET /v1/staking/market-ready` · `GET /v1/supply/growth`

## Circulation policy (authoritative)

**No CLRTY is in public circulation.** Circulating supply is **0** until units are **paid/purchased** via the compliance allocation flow.

| Field | Value |
|-------|-------|
| `circulating_clrtY` | **0** |
| `paid_circulation_clrtY` | **0** |
| `hard_cap_clrtY` | 16,000,000 (cap only — not circulating) |
| `genesis_minted_clrtY` | **0** |
| Genesis bucket sizes | Planned/locked allocations — **not live float** |

```bash
cat var/launch/circulation_state.json | jq .
curl -s https://api.clarity-fintech.com/v1/supply/growth | jq .circulation
```

---

## Network summary

| Network | CLRTY in circulation | Staking | Treasury |
|---------|---------------------|---------|----------|
| **Mainnet** | **0 — not live** | **Locked** | Genesis locked |
| **Testnet** | **0 — sandbox credits only** | Protocol test (sandbox) | Sandbox credits |
| **Devnet** | **0 — sandbox credits only** | Protocol test (sandbox) | Sandbox credits |

Mainnet **cannot stake CLRTY**. Testnet/devnet exercise **protocol flows with sandbox credits** — not CLRTY in circulation.

---

## Verify commands

```bash
curl -s https://api.clarity-fintech.com/v1/staking/market-ready | jq '.circulation, .network_states'
curl -s 'https://api.clarity-fintech.com/v1/staking/market-ready?network=mainnet' | jq .
make sync-monitors
jq '.networks, .staking_snapshot' var/launch/monitors_sync.json
```

---

## Mainnet — locked

```json
{
  "market_ready": false,
  "circulating_clrtY": 0,
  "network_states": {
    "mainnet": {
      "clrty_in_circulation": false,
      "circulating_clrtY": 0,
      "staking_enabled": false,
      "treasury_status": "genesis_locked"
    }
  }
}
```

---

## Testnet / devnet — sandbox only

```bash
export CLRTY_L1_RPC=https://testnet-api.clarity-fintech.com
clrtynet rpc call getHealth '[]' --plain
# Stake/delegate uses sandbox credits — not circulating CLRTY
```

---

## Monitor DB (network-scoped)

| Store | Path |
|-------|------|
| Circulation SSOT | `var/launch/circulation_state.json` |
| Network SSOT | `var/launch/network_state.json` |
| Monitor SQLite | `var/launch/monitor_probes.sqlite` |
| Sync report | `var/launch/monitors_sync.json` |

---

## Related

- [TOKENOMICS_LOCKED.md](../../../tokenomics/TOKENOMICS_LOCKED.md)
- [Staking reference](../../../clarity/references/staking.md)
- [CLRTY command index](clrty-command-index.md)
