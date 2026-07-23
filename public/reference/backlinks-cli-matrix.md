---
url_count: 405
cli_pages: 47
---

# Backlinks CLI matrix — all URLs + terminal commands

> **405 indexed URLs** · **47 paginated CLI pages** · **18 enriched summaries**

Every Clarity Fintech URL from the data manifest, paired with a terminal probe command. Priority crawl URLs are listed first; the full corpus is paginated by hostname.

## Environment (set once)

```bash
export CLRTY_L1_RPC="https://rpc.clarity-fintech.com"
export CLRTY_API_BASE="https://api.clarity-fintech.com"
export CLRTY_L1_CHAIN_ID="clrty-1"
export CLRTY_L1_NUMERIC_CHAIN_ID="1202"
```

## Bulk health sweep

```bash
for host in rpc.clarity-fintech.com exchange.clarity-fintech.com api.clarity-fintech.com status.clarity-fintech.com labs.clarity-fintech.com; do
  echo "=== $host ==="
  curl -sS -o /dev/null -w "%{http_code}\n" "https://$host/" || true
done
```

## Priority crawl URLs (21)

### The Moniversive Execution Chain for Intelligent Capital

**URL:** [https://www.clarity-fintech.com/](https://www.clarity-fintech.com/)

> $CLRTY is the native intelligence layer for the digital economy — a sovereign L1 with HELIX execution, PRISM routing, and Moniversion capital. TGE live.

```bash
curl -sS -I "https://www.clarity-fintech.com/" | head -3
```

- **HELIX — Private Execution Engine** — MEV-resistant routing, internal order matching, and adaptive transaction logic that transforms static blockchain interactions into self-optimizing execution.
- **PRISM Economy** — Predictive query nodes, multi-source data fusion, and Proof-of-Relevance — intelligence that decides what data matters, when, and why.

---

### CLRTY-1 — The Moniversive Execution Chain

**URL:** [https://www.clarity-fintech.com/clrty-1](https://www.clarity-fintech.com/clrty-1)

> CLRTY-1 is a self-compressing Layer-1 for deterministic execution, capital efficiency, and intelligence-native assets. Proof-of-Intelligence consensus.

```bash
curl -sS -I "https://www.clarity-fintech.com/clrty-1" | head -3
```

- **Proof-of-Intelligence** — Validators and agents optimize execution quality — not just block production. Average performance index targets institutional-grade reliability.
- **Deterministic Finality** — Sub-400ms settlement latency for cross-agent financial transactions with predictable outcomes for fintech and DeFi integrations.

---

### PRISM Economy — Intelligence Before the Request

**URL:** [https://www.clarity-fintech.com/prism](https://www.clarity-fintech.com/prism)

> PRISM clusters, model marketplace, dev layer, and public network. Anticipate queries, fuse on-chain and market data, and route intelligence before requests land.

```bash
curl -sS -I "https://www.clarity-fintech.com/prism" | head -3
```

- **Predictive Query Nodes** — Anticipate user queries, contract reads, and cache outcomes before requests happen — reducing latency and cost at scale.
- **Multi-Source Data Fusion** — Combine blockchain data, market feeds, sentiment, and macro signals into execution-aware intelligence layers.

---

### Moniversion Theory & Probabilistic Capital

**URL:** [https://www.clarity-fintech.com/moniversion-theory](https://www.clarity-fintech.com/moniversion-theory)

> Scientific Moniverse theory and Moniversion probabilistic capital — how CLRTY transforms static assets into dynamic, outcome-oriented infrastructure.

```bash
curl -sS -I "https://www.clarity-fintech.com/moniversion-theory" | head -3
```

- **Moniversive Blocks** — Foundational primitives that connect DeFi execution, liquidity compression, and intelligence-native asset design on CLRTY-1.
- **Capital Efficiency** — Static holdings become dynamic infrastructure — routed through HELIX and scored with execution-aware metrics like MEL, EEV, and MIR.

---

### CLRTY Basics — Start Here

**URL:** [https://www.clarity-fintech.com/basics](https://www.clarity-fintech.com/basics)

> Learn CLRTY-1 basics: chain ID 1202, $CLRTY utility, wallet setup, RPC endpoints, and how HELIX and PRISM fit the stack.

```bash
curl -sS -I "https://www.clarity-fintech.com/basics" | head -3
```

- **What is $CLRTY?** — Native token for execution fuel, routing incentives, advanced features, and governance over optimization layers.
- **Wallets & RPC** — Connect via Clarity Wallet on clrty-1 (chain 1202) — rpc.clarity-fintech.com for JSON-RPC access. MetaMask and omnichain wallets deferred to Phase 10.

---

### Build on CLRTY-1

**URL:** [https://www.clarity-fintech.com/clarity-dev](https://www.clarity-fintech.com/clarity-dev)

> Developer docs, SDK install, HELIX execution, PRISM SDK, clrtynet CLI, and CLRTY Labs — ship intelligence-native apps on CLRTY-1.

```bash
curl -sS -I "https://www.clarity-fintech.com/clarity-dev" | head -3
```

- **Install CLARITY SDK** — npm install @clrty/sdk — initialize clients, deploy AutoYield-style skills, and execute swaps via HELIX with optimize=true.
- **CLI & Testnet** — npm install -g @clrt/cli — clrtynet sys health, node genesis-verify, and rpc overview for local and testnet workflows.

---

### C. William Ferguson — Founder

**URL:** [https://www.clarity-fintech.com/aboutwill](https://www.clarity-fintech.com/aboutwill)

> C. William Ferguson — lead ML engineer and sole architect of $CLRTY. Deterministic AI infrastructure and Moniverse theory.

```bash
curl -sS -I "https://www.clarity-fintech.com/aboutwill" | head -3
```

- **Execution Domain** — Creator of Moniverse theory and sole coding architect of $CLRTY — competitive team owner, musician, and builder.

---

### Early Investment Access — TGE & 1st Access

**URL:** [https://www.clarity-fintech.com/early-investment-access](https://www.clarity-fintech.com/early-investment-access)

> Private investment portal and mastermind access for CLRTY TGE. Tier-based allocation, transparent conversion, USD-equivalent pricing.

```bash
curl -sS -I "https://www.clarity-fintech.com/early-investment-access" | head -3
```

- **TGE Investments** — Access the private investment portal and mastermind group for conviction-aligned participants.
- **Pricing Model** — USD-equivalent pricing at time of contribution with tier-based allocation and transparent conversion logic.

---

### Institutional Execution on CLRTY-1

**URL:** [https://www.clarity-fintech.com/institutions](https://www.clarity-fintech.com/institutions)

> Enterprise-grade execution control for institutions: HFT routing, deep liquidity, risk-managed execution, and predictive analytics on CLRTY-1.

```bash
curl -sS -I "https://www.clarity-fintech.com/institutions" | head -3
```

- **Artemis & Data Partners** — Institutional metrics feeds, sanitized partner APIs, and co-branded intelligence dashboards.
- **Contact** — Reach support at william@clarity-fintech.com for institutional onboarding and API access.

---

### CLRTY Token Sale — TGE Live

**URL:** [https://www.clarity-fintech.com/ico](https://www.clarity-fintech.com/ico)

> CLRTY public ICO and TGE are live. FIRE SALE pricing, 1st Access tiers, buy or sell on exchange.clarity-fintech.com.

```bash
curl -sS -I "https://www.clarity-fintech.com/ico" | head -3
```

- **Token Sale Overview** — Capital formation designed for early conviction and ecosystem alignment — not a generic meme launch.
- **Buy or Sell** — Execute on exchange.clarity-fintech.com with HELIX-optimized routing where available.

---

### Intelligence Guides for Autonomous Finance

**URL:** [https://www.clarity-fintech.com/blog](https://www.clarity-fintech.com/blog)

> Technical guides for $CLRTY staking, AI recommendations, intelligent portfolios, yield strategies, and agentic finance on CLRTY-1.

```bash
curl -sS -I "https://www.clarity-fintech.com/blog" | head -3
```

---

### CLRTY Events & Live Sessions

**URL:** [https://www.clarity-fintech.com/events](https://www.clarity-fintech.com/events)

> CLRTY community events, TGE milestones, PoC team sessions, and live AMAs — stay aligned with the Moniversive execution roadmap.

```bash
curl -sS -I "https://www.clarity-fintech.com/events" | head -3
```

- **Live Now** — Clarity TGE and public ICO phase — join exchange and community channels for real-time updates.

---

### PoC Team — On Chain & The Power of CLRTY-1

**URL:** [https://www.clarity-fintech.com/poc-team](https://www.clarity-fintech.com/poc-team)

> Proof-of-Concept team updates, validator performance, and on-chain CLRTY-1 power sessions for the community.

```bash
curl -sS -I "https://www.clarity-fintech.com/poc-team" | head -3
```

---

### https://www.clarity-fintech.com/defillama

**URL:** [https://www.clarity-fintech.com/defillama](https://www.clarity-fintech.com/defillama)

```bash
curl -sS -I "https://www.clarity-fintech.com/defillama" | head -3
```

---

### https://exchange.clarity-fintech.com/

**URL:** [https://exchange.clarity-fintech.com/](https://exchange.clarity-fintech.com/)

```bash
curl -sS "https://exchange.clarity-fintech.com/health" | jq '{chain, ok}'
```

---

### https://exchange.clarity-fintech.com/buy

**URL:** [https://exchange.clarity-fintech.com/buy](https://exchange.clarity-fintech.com/buy)

```bash
curl -sS "https://exchange.clarity-fintech.com/buy/health" | jq '{chain, ok}'
```

---

### https://exchange.clarity-fintech.com/sell

**URL:** [https://exchange.clarity-fintech.com/sell](https://exchange.clarity-fintech.com/sell)

```bash
curl -sS "https://exchange.clarity-fintech.com/sell/health" | jq '{chain, ok}'
```

---

### https://labs.clarity-fintech.com/

**URL:** [https://labs.clarity-fintech.com/](https://labs.clarity-fintech.com/)

```bash
curl -sS -I "https://labs.clarity-fintech.com/" | head -3
```

---

### https://status.clarity-fintech.com/

**URL:** [https://status.clarity-fintech.com/](https://status.clarity-fintech.com/)

```bash
curl -sS -I "https://status.clarity-fintech.com/" | head -5
```

---

### https://monitor.clarity-fintech.com/

**URL:** [https://monitor.clarity-fintech.com/](https://monitor.clarity-fintech.com/)

```bash
curl -sS -I "https://monitor.clarity-fintech.com/" | head -5
```

---

### https://rpc.clarity-fintech.com/

**URL:** [https://rpc.clarity-fintech.com/](https://rpc.clarity-fintech.com/)

```bash
curl -sS "https://rpc.clarity-fintech.com/health" 2>/dev/null || curl -sS -X POST "https://rpc.clarity-fintech.com/" -H 'Content-Type: application/json' -d '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}'
```


## Full corpus (405 URLs)

Browse all **47** paginated pages grouped by **36** hosts: [Backlinks CLI index](backlinks-cli/SUMMARY.md)

See also: [Link corpus](link-corpus/README.md) (URL tables) · [Unified backlinks hub](backlinks-hub.md)
