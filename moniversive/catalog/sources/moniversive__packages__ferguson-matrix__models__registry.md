# `moniversive/packages/ferguson-matrix/models/registry.mis`

> Generated 2026-08-02T12:03:42Z · module **`FergusonMatrixModelRegistry`** · 622 lines

```bash
bin/misc moniversive/packages/ferguson-matrix/models/registry.mis --check --compact-letters
```

| | |
| --- | --- |
| Invariants | `letter_hash_bound:`, `deep_root_moniversive:`, `settlement_chain:`, `kernel_is_misc:`, `harvest_ssot:`, `program_count:`, `featured_gpt_5_6_sol:`, `featured_claude_opus_5:`, `featured_gemini_3_6_flash:`, `featured_grok_4_5:`, `featured_kimi_k3:` |
| Outcomes | `resolve`, `bindNanoHarvest192`, `scoreFeatured` |
| fn | `lookup` |
| EMBED 3..=6 | no |

## Source (excerpt)

```mis
// Ferguson Matrix Universal ML Execution Layer — Moniversive Invariant Static (MIS)
// Settlement: clrty-1 / 1202 · Compiler: bin/misc --check --compact-letters
// Surface: https://monitor.clarity-fintech.com/uiquio/ferguson-matrix
// SSOT harvest: seo-kit-second/config/nano-harvest-192.json

module FergusonMatrixModelRegistry {

  invariant letter_hash_bound: letter_hash_root != @0;
  invariant deep_root_moniversive: deep_root == moniversive;
  invariant settlement_chain: chain_id == 1202;
  invariant kernel_is_misc: compiler_kernel == misc;
  invariant harvest_ssot: nano_harvest_192 == seo_kit_second_config_nano_harvest_192_json;
  invariant program_count: registry_program_count == 192;
  invariant featured_gpt_5_6_sol: featured_model_gpt_5_6_sol == true;
  invariant featured_claude_opus_5: featured_model_claude_opus_5 == true;
  invariant featured_gemini_3_6_flash: featured_model_gemini_3_6_flash == true;
  invariant featured_grok_4_5: featured_model_grok_4_5 == true;
  invariant featured_kimi_k3: featured_model_kimi_k3 == true;

  outcome resolve(program_id: Bytes) {
    require program_id != @0;
    constraint registry_lookup == true;
  }

  outcome bindNanoHarvest192(ctx: Bytes) {
    require ctx != @0;
    constraint nh-192-001_model_id == "@cf/baai/bge-base-en-v1.5";
    constraint nh-192-001_capability == "embeddings";
    constraint nh-192-001_harvest_slot == 1;
    constraint nh-192-002_model_id == "@cf/baai/bge-m3";
    constraint nh-192-002_capability == "embeddings";
    constraint nh-192-002_harvest_slot == 2;
    constraint nh-192-003_model_id == "@cf/deepgram/aura-2-en";
    constraint nh-192-003_capability == "tts";
    constraint nh-192-003_harvest_slot == 3;
    constraint nh-192-004_model_id == "@cf/google/embeddinggemma-300m";
    constraint nh-192-004_capability == "embeddings";
    constraint nh-192-004_harvest_slot == 4;
    constraint nh-192-005_model_id == "@cf/google/gemma-4-26b-a4b-it";
    constraint nh-192-005_capability == "text-gen";
    constraint nh-192-005_harvest_slot == 5;
    constraint nh-192-006_model_id == "@cf/meta/llama-3.1-8b-instruct-fp8";
    constraint nh-192-006_capability == "text-gen";
    constraint nh-192-006_harvest_slot == 6;
    constraint nh-192-007_model_id == "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
    constraint nh-192-007_capability == "text-gen";
    constraint nh-192-007_harvest_slot == 7;
    constraint nh-192-008_model_id == "@cf/meta/m2m100-1.2b";
    constraint nh-192-008_capability == "text-gen";
    constraint nh-192-008_harvest_slot == 8;
    constraint nh-192-009_model_id == "@cf/moondream/moondream3.1-9B-A2B";
    constraint nh-192-009_capability == "image-to-text";
    constraint nh-192-009_harvest_slot == 9;
    constraint nh-192-010_model_id == "@cf/openai/whisper-large-v3-turbo";
    constraint nh-192-010_capability == "stt";
    constraint nh-192-010_harvest_slot == 10;
    constraint nh-192-011_model_id == "alibaba/hh1-i2v";
    constraint nh-192-011_capability == "video";
    constraint nh-192-011_harvest_slot == 11;
    constraint nh-192-012_model_id == "alibaba/hh1-t2v";
```

[Index hub](README.md) · [All symbols](../symbols-full.md)
