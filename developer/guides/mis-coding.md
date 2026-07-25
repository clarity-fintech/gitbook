# MIS coding guide (Clarity-Fintech)

Author CLRTY-1 surfaces in **MIS** (`.mis` / `.clrty`), not Python or Solidity.

## Ownership

| Artifact | Home |
| --- | --- |
| GitBook (this guide) | https://github.com/clarity-fintech/gitbook |
| MIS kernel (`misc`) | https://github.com/clarity-fintech/CLRTY-MIS-Kernel |
| Developer kit | https://github.com/clarity-fintech/developer_kit |
| Compiler bridge | https://github.com/clarity-fintech/CLRTY-Compiler-Bridge |
| Language root | `CLRTY_SUBSTRATE/boot/moniversive_language_root.json` |

Settlement remains **clrty-1 / chain 1202**.

## Authoring rules

1. Use **`.clrty`** (surfaces) and **`.mis`** (framework) only.
2. Include **embed gates 3..=6** with `context`, `ai`, `execution`, `capital` intents.
3. Assume **letter-hash** — every typed letter is hashed by the compiler (`misc` / `clrtyc`).
4. Rewrite outcomes around EMBED + invariants — not Solidity idioms.

## Check a module

```bash
bin/misc path/to/Module.mis --check --compact-letters
# surfaces:
python3 languages/mis-ml/compiler/clrtyc.py path.clrty --check --compact-letters
make mis-ml-check
```

## Full language book

See the **Moniversive** GitBook space (`moniversive/` on [clarity-fintech/gitbook](https://github.com/clarity-fintech/gitbook)): BeginnersGuide, taxonomy, kernels, migration.
