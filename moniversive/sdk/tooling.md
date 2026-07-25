# Tooling

| Tool | Path |
|------|------|
| Compiler | `bin/misc` |
| Converter / purge | `scripts/mis-ml/sol_to_clrty.py` |
| Project manifest | `…/fma/contracts/clrty.toml` (replaces `foundry.toml`) |
| GitBook | `docs/gitbook/moniversive/` |

```bash
python3 scripts/mis-ml/sol_to_clrty.py --root . --purge
make mis-ml-check   # if Makefile target present
```
