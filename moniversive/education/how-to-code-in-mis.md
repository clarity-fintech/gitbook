# How to code in MIS — full track

> Generated 2026-07-29T03:15:30Z · language-only · **`bin/misc`**

This is the **single-page** version of the multi-chapter course. For long-form prose, read [01 — Language mindset](01-language-mindset.md) through [08 — Reading framework modules](08-reading-framework-modules.md).

## Quick map

| Step | Action |
| --- | --- |
| 1 | Read [07 — Worked examples](07-worked-examples.md) |
| 2 | Copy the counter module from [05 — State, signals, fail](05-state-signals-fail.md) |
| 3 | Run `bin/misc` on your scratch file |
| 4 | Diff your module against [showcase](mis-showcase.md) entries |

## Daily commands

```bash
bin/misc path.mis --check --compact-letters
make misc-build
make mis-ml-check
```

## Corpus size

**150** education `.mis` files · [symbols](../catalog/symbols-full.md) · [sources](../catalog/sources/README.md)

## Language rules (compressed)

Modules declare **`invariant`**, **`state`**, **`signal`**, **`fail`**, and **`outcome`**. Outcomes use **`require`** and **`constraint`**. Checking is always **`bin/misc`**. Author extension is **`.mis`**.

Deep chapters: [Education hub](README.md).
