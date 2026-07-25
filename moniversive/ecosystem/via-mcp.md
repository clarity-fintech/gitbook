# VIA Super MCP

Separate **192-model** MCP companion for VIA engineering. Not part of `seo-kit-second`.

**Reminder:** SEO kit is off-chain only (Workers / HTTP / Notion / IndexNow). It does not settle on clrty-1 / chain 1202. Settlement language below applies to VIA / MIS engineering surfaces, not SEO kit.

| | |
|--|--|
| Package | `via-mcp/` |
| Worker | `clrty-via-mcp` |
| Settlement (VIA/MIS only) | `clrty-1` / `1202` |
| SEO kit | Off-chain — never L1 |
| Surface | `languages/mis-ml/surfaces/ViaEngineeringMcp.clrty` |
| Index | `idx-surface-ViaEngineeringMcp`, `idx-dev-via-mcp` |

## Tools

`via_status`, `via_models_list`, `via_models_get`, `via_route_task`, `via_consult`, `via_council`, `via_engineering_pass`, `via_mis_resolve`, `via_mis_search`, `via_super_matrix`

## Wire Cursor

See `via-mcp/mcp.json.example` (stdio via `npx tsx src/stdio.ts`).

Remote MCP path after deploy: `/mcp` on the `clrty-via-mcp` Worker.
