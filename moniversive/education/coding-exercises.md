# Coding exercises — `.mis`

> Generated 2026-07-26T19:03:01Z · do these in order · verify with **`bin/misc`**

## Exercise A — Trace the policy module

1. Open [kernel swap example](../examples/kernel-swap-to-mis.md) or `examples/mis/kernel_swap_to_mis.mis`.
2. List every **`invariant`** and say in one sentence what it protects.
3. For each **`outcome`**, list its **`require`** lines and **`constraint`** lines separately.
4. Run `bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters`.

## Exercise B — Compiler kernel

1. Read `moniversive/framework/misc.mis` in [catalog/sources](../catalog/sources/README.md).
2. Find **`reject_foreign_kernel`** and **`compile_check`** outcomes.
3. Explain why `active_kernel_only` appears in both `misc.mis` and the kernel swap example.

## Exercise C — Taxonomy modules

Pick **two** files from the [MIS showcase](mis-showcase.md):

1. Run `bin/misc` on each.
2. Compare invariant counts — which module is “ wider ” (more global truth)?
3. Find one outcome name that appears in more than one file (hint: `letter_hash`, `kernel_dispatch`).

## Exercise D — Author a scratch module

1. Copy the Lesson 3 template from [How to code in MIS](how-to-code-in-mis.md).
2. Add a second outcome `validate_index(payload: Bytes)` with `require payload != @0` and a constraint ending in `_ok == true`.
3. Check the file. Fix parse errors until `bin/misc` exits 0.

## Exercise E — `.clrty` read-only

1. Open [`.clrty` legacy surfaces](../language/clrty-legacy-surfaces.md).
2. Check `languages/mis-ml/surfaces/StaticMlInvariants.clrty` with `bin/misc`.
3. Write three sentences: how `.clrty` modules differ from `.mis` modules in *purpose* (not just extension).

## Exercise F — Index discipline

1. Open `CLRTY_SUBSTRATE/boot/mis_code_index.json`.
2. Find entries `gitbook.moniversive.mis` and `gitbook.moniversive.education.mis`.
3. When you add a new `.mis` file to the repo long-term, what two artifacts must stay in sync? (file on disk + index row)

Pass criteria: you can explain **module / invariant / outcome / require / constraint** without looking, and you can run **`bin/misc … --check --compact-letters`** on any showcase path.
