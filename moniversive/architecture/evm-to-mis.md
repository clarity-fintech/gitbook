# EVM → MIS model map

| EVM / Solidity idiom | MIS rewrite |
|----------------------|-------------|
| `.clrty` contracts | `.clrty` modules only |
| `require` / `revert` exceptions | `require` + `constraint` + branchless select |
| `msg.sender` / gas metering | EMBED gates 3..=6 + settlement clrty-1/1202 |
| Dynamic ABI / storage slots | Letter-hash + invariant catalog bands |
| Solidity inheritance | Module + outcome composition |
| Events / logs | Settled outcomes + RPC getters |

Agents must not invent parallel Solidity trees. Filter: `.cursor/rules/moniversive-clrty.mdc`.
