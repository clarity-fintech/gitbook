# Python → MIS (language replaces Python app code)

> Generated 2026-07-27T00:56:55Z · **232** conversion entries · compiler **`bin/misc`**

Moniversive **replaces Python application authoring** for CLRTY coding surfaces: canonical logic lives in **`.mis`**, not new `python/` packages.

| Artifact | Path |
| --- | --- |
| MIS-first code index | `CLRTY_SUBSTRATE/boot/mis_code_index.json` |
| Conversion map | `CLRTY_SUBSTRATE/boot/mis_py_to_mis_conversion_map.json` |
| Language modules | `moniversive/framework/*.mis` |
| Legacy Python archive | `moniversive/legacy_python_tree/` |
| Index module | `moniversive/framework/MisAllCodeIndex.mis` |

Host Python remains for **bootstrap only** (see `host_keep` in conversion map): index verify, MIS filter, gate rewrite — not application logic.

```bash
bin/misc moniversive/framework/MisAllCodeIndex.mis --check --compact-letters
make mis-ml-check
```

Solidity surface map: `contract`→`module`, `function`→`outcome`, `require`→`invariant` / `fail`, `event`→`signal`.
