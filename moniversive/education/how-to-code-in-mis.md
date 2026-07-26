# How to code in Moniversive Invariant Static (`.mis`)

> Generated 2026-07-26T19:01:33Z · **teach-yourself** track · compiler **`bin/misc`** · settlement **clrty-1 / 1202**

This page teaches you to **read, write, and check** MIS the way the monorepo expects — not Solidity, not Python application code. When you finish, run the [exercises](coding-exercises.md) against the **16** files in the [showcase](mis-showcase.md).

## What you are learning

MIS expresses **intent** as named **`outcome`** blocks and **truth** as **`invariant`** predicates inside a **`module`**. The compiler kernel **`misc`** checks that modules parse, letter-hash, and respect the active-kernel policy. Execution is modeled as: **state must satisfy invariants; outcomes declare what must become true under `require` / `constraint`.**

| Legacy habit | MIS habit |
| --- | --- |
| `contract` / `class` | `module Name { … }` |
| `function` / `def` | `outcome name(args) { require …; constraint …; }` |
| `require()` in body only | Module **`invariant`** for always-true + **`require`** at outcome entry |
| `assert` / exceptions | Named **`constraint`** on post-state |
| `event` | `signal` (when you emit observable facts) |
| `solc` / `forge` / `python3 clrtyc.py` | **`bin/misc path.mis --check --compact-letters`** only |

Deep reference: [Syntax](../language/syntax.md) · [Invariants](../language/invariants.md) · [Outcomes](../language/outcomes.md) · [Letter-hash](../language/letter-hash.md).

---

## Lesson 1 — Read a real module end-to-end

Open `examples/mis/kernel_swap_to_mis.mis`. It is the smallest **story** for the language policy: file type is `.mis`, kernel is `misc`, foreign kernels are refused, settlement is CLRTY-1.

```mis
// Moniversive deep root — letter-hash
// Real MIS module: file-type + kernel swap → MIS (`misc`) only.
// Compile: bin/misc path.mis --check --compact-letters
//       or bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters

module KernelSwapToMis {{

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant active_kernel_only: active_kernel == misc;
  invariant no_python_host: python3_compiler == false;
  invariant no_foreign_kernel: foreign_kernel_active == false;
  invariant file_type_swapped: file_type == mis;

  outcome assert_extension_mis(path: Bytes) {{
    require path != @0;
    constraint source_extension == mis;
    constraint file_type == mis;
  }}

  outcome assert_kernel_misc() {{
    constraint compiler_kernel == misc;
    constraint active_kernel == misc;
  }}

  outcome refuse_foreign(name: Bytes) {{
    require name != @0;
    constraint foreign_refused == true;
  }}

  outcome letter_hash(source: Bytes) {{
    require source != @0;
    constraint letter_root != @0;
  }}

  outcome settle_clrty1(intent: Bytes) {{
    require intent != @0;
    constraint chain_id == 1202;
    constraint settlement_network == clrty_1;
  }}

  outcome swap_file_type(from_ext: Bytes, to_ext: Bytes) {{
    require from_ext != @0;
    require to_ext != @0;
    constraint file_type == mis;
    constraint source_extension == mis;
  }}
}}
```

**Read it in this order:**

1. **`module KernelSwapToMis`** — one file, one module name (PascalCase is convention).
2. **`invariant …`** — facts that must hold for the module to be well-formed on this stack (letter-hash root, `chain_id == 1202`, `compiler_kernel == misc`, etc.).
3. **`outcome …`** — named operations. Each outcome uses:
   - **`require`** — preconditions (like Solidity `require`, but outcome-scoped).
   - **`constraint`** — relations the optimizer / checker must enforce for that outcome to succeed.

Check it:

```bash
bin/misc examples/mis/kernel_swap_to_mis.mis --check --compact-letters
```

If this passes, your toolchain matches the repo. If it fails with foreign-kernel errors, you are not on **`misc`** — run `make misc-build`.

---

## Lesson 2 — The standard module header (copy, then specialize)

Most education modules repeat a **deep-root header** before domain logic. You should recognize it instantly:

```mis
invariant letter_hash_bound: letter_hash_root != @0;
invariant deep_root_moniversive: deep_root == moniversive;
invariant settlement_chain: chain_id == 1202;
invariant extension_mis: source_extension == mis;
```

Add domain invariants next (fee caps, depth bounds, tensor ranks). Then add outcomes. Example from `languages/mis-ml/mis/HighLevelErgonomics.mis`:

```mis
// Moniversive deep root — letter-hash
// High-level MIS ergonomics (replaces languages/mis-ml/python)
// Extension: .mis (canonical MIS authoring)

module HighLevelErgonomics {{

  

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;
  invariant no_python_authoring: python_package_code == false;

  outcome check_module(payload: Bytes) {{
    require payload != @0;
    constraint check_module_ok == true;
  }}

  outcome resolve_code_index(payload: Bytes) {{
    require payload != @0;
    constraint resolve_code_index_ok == true;
  }}

  outcome transfer_clrty1(payload: Bytes) {{
    require payload != @0;
    constraint transfer_clrty1_ok == true;
  }}

  outcome branchless_select(payload: Bytes) {{
    require payload != @0;
    constraint branchless_select_ok == true;
  }}
}}
```

Notice: **no Python package authoring** (`no_python_authoring`). High-level ergonomics outcomes are thin **`check_module` / `resolve_code_index`** intents — good pattern for index-backed tooling.

---

## Lesson 3 — Write your first module (minimal)

Create `examples/mis/my_first_module.mis` (or a scratch file under `examples/mis/`):

```mis
// Moniversive deep root — letter-hash

module MyFirstModule {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant extension_mis: source_extension == mis;

  outcome greet(payload: Bytes) {
    require payload != @0;
    constraint greet_ok == true;
  }
}
```

Run:

```bash
bin/misc examples/mis/my_first_module.mis --check --compact-letters
```

**Rules while learning:**

- Use **`Bytes`**, **`u32`**, **`u64`**, **`u128`**, **`Account`** where the surrounding corpus does — match types in [definitions-variables-sets](../language/definitions-variables-sets.md).
- **`@0`** is the zero account sentinel (see [syntax](../language/syntax.md)).
- Prefer **`constraint`** over throwing — name the post-state relation.
- Do **not** add `python3`, `solc`, or `forge` to modules; `misc.mis` **`reject_foreign_kernel`** is policy.

When you promote a file from scratch to repo citizen: add an entry to **`CLRTY_SUBSTRATE/boot/mis_code_index.json`** (see `.cursor/rules/mis-code-index.mdc`).

---

## Lesson 4 — Pick a taxonomy branch before you grow the file

Do not invent parallel folder trees. Choose **family → branch** from `mis_framework_taxonomy.json`:

```
MIS → mis_core | mis_ml | mis_chain | mis_crypto | mis_lang → …
```

Cross-cutting patterns live in `moniversive/framework/`:

| Topic | Module to read |
| --- | --- |
| Recursion bounds | `MisRecursion.mis` |
| Routing | `MisRouter.mis` |
| Superdynamic / IVC | `MisSuperdynamic.mis` |
| Compiler kernel | `misc.mis` |
| Index discipline | `MisAllCodeIndex.mis` |

Taxonomy GitBook: [taxonomy/README.md](../taxonomy/README.md).

---

## Lesson 5 — `require` vs `invariant` vs `constraint`

| Construct | When to use |
| --- | --- |
| **`invariant`** | Always true for the module (settlement, kernel, global caps). |
| **`require`** | Must hold **before** this outcome runs (caller inputs, pause flags). |
| **`constraint`** | Must hold **after** this outcome (balances, computed fields). |

Solidity mapping: module invariants ≈ system-wide checks; `require` ≈ function guards; `constraint` ≈ post-conditions the MIS-ML layer proves together with [Static ML bands](../catalog/static-ml-invariant-bands.md).

---

## Lesson 6 — Check, rebuild kernel, and index

Daily loop:

```bash
bin/misc path.mis --check --compact-letters
make misc-build          # after changing moniversive/framework/misc.mis or kernel glue
make mis-ml-check        # Static ML + structure gates
```

Symbol catalog for the education corpus: [catalog/symbols-full.md](../catalog/symbols-full.md). Per-file excerpts: [catalog/sources/README.md](../catalog/sources/README.md).

---

## Lesson 7 — `.mis` vs `.clrty`

- **Author new logic in `.mis`** under `examples/mis`, `moniversive/framework`, or `languages/mis-ml/mis`.
- **`.clrty`** files under `languages/mis-ml/surfaces/` are **Static ML surface catalogs** (1025-band vocabulary). Read and check them; do not treat them as the primary authoring dialect.

→ [`.clrty` legacy surfaces](../language/clrty-legacy-surfaces.md)

---

## Lesson 8 — Protocol math (when outcomes touch tensors)

When your outcomes reason about fixed-point or tensor state, read **Core Protocol Specs** (`gitbook.moniversive.mis`):

→ [protocol/gitbook-moniversive-mis-core-specs.md](../protocol/gitbook-moniversive-mis-core-specs.md)

---

## What to read next

1. [Coding exercises](coding-exercises.md) — hands-on checklist
2. [Language learning path](../learn/language-learning-path.md)
3. [Full language breakdown](../language/full-language-breakdown.md) — every outcome/invariant in the education corpus
4. [Hand-coding & outcomes](../taxonomy/hand-coding.md)
5. [Compiler (`misc`)](../execution/compiler.md)

Kernel clone for offline study: [moniversive_invariant_static_ML](https://github.com/clarity-fintech/moniversive_invariant_static_ML)
