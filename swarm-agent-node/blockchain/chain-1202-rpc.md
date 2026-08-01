# Chain 1202 RPC

Public RPC endpoint for SWARM Agent Node settlement and on-chain reads.

## Endpoint

```
https://exchange.clarity-fintech.com/v1/rpc
```

Proxied via API gateway — see layer [063](../architecture/layers/layer-063.md).

## Chain metadata

| Field | Value |
|-------|-------|
| Network | `clrty-1` |
| Chain ID | `1202` |
| Treasury | `treasury:clrty-1` |

## Example call

```bash
curl -X POST https://exchange.clarity-fintech.com/v1/rpc \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}'
```

Expected: `0x4b2` (1202 decimal).

## JWT claims

Private access JWTs include `chainId: 1202` — verify via `POST /v1/auth/verify`.

## Related layers

- [Layer 006 — chain 1202 settlement](../architecture/layers/layer-006.md)
- [Layer 063 — RPC endpoint](../architecture/layers/layer-063.md)
