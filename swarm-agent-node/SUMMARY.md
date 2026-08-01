# Summary

* [SWARM Agent Node Hub](README.md)

## Getting started

* [Overview](getting-started/overview.md)
* [Pay-gated access](getting-started/pay-gated-access.md)
* [Quick start](getting-started/quick-start.md)

## Deployment

* [Consumer deployment guide](deployment/consumer-deployment-guide.md)
* [Custom code agents](deployment/custom-code-agents.md)
* [Cherry server provisioning](deployment/cherry-server-provisioning.md)
* [CLRTY CLI reference](deployment/clrty-cli-reference.md)

## Architecture

* [100-layer overview](architecture/100-layer-overview.md)

## Architecture — 100 layers

### Phase 1 — Pricing Tiers SSOT (layers 1–10)

* [Layer 001 — swarmExecutionBilling.js SSOT](architecture/layers/layer-001.md)
* [Layer 002 — Tier 01 dev_portal_execution_billing $29/mo](architecture/layers/layer-002.md)
* [Layer 003 — Tier 02 webb_starter_agents $5.99/mo](architecture/layers/layer-003.md)
* [Layer 004 — Tier 03 clrty_pay_wallet_fund $29 min](architecture/layers/layer-004.md)
* [Layer 005 — treasury:clrty-1 invariant](architecture/layers/layer-005.md)
* [Layer 006 — chain 1202 settlement metadata](architecture/layers/layer-006.md)
* [Layer 007 — 3000ms FX TTL (DPF gateway)](architecture/layers/layer-007.md)
* [Layer 008 — UUID idempotency kind](architecture/layers/layer-008.md)
* [Layer 009 — agentExecutionBilling.js roster mirror](architecture/layers/layer-009.md)
* [Layer 010 — UIQUO MVP monetization copy SSOT](architecture/layers/layer-010.md)

### Phase 2 — Checkout Offers (layers 11–20)

* [Layer 011 — uiquioCatalog swarm tier offers](architecture/layers/layer-011.md)
* [Layer 012 — checkoutCatalog plink index](architecture/layers/layer-012.md)
* [Layer 013 — plink_dev_portal_execution_billing](architecture/layers/layer-013.md)
* [Layer 014 — plink_webb_starter_agents](architecture/layers/layer-014.md)
* [Layer 015 — plink_clrty_pay_wallet_fund](architecture/layers/layer-015.md)
* [Layer 016 — Relay offers.js UIQUO mirror](architecture/layers/layer-016.md)
* [Layer 017 — Spark checkout URL builder](architecture/layers/layer-017.md)
* [Layer 018 — productionPaymentRails integration](architecture/layers/layer-018.md)
* [Layer 019 — usdcTreasurySettlement chain 1202](architecture/layers/layer-019.md)
* [Layer 020 — clarityWalletSession handoff](architecture/layers/layer-020.md)

### Phase 3 — Execution Billing (layers 21–30)

* [Layer 021 — Spark-settled per-run events](architecture/layers/layer-021.md)
* [Layer 022 — swarmPayGate.js session module](architecture/layers/layer-022.md)
* [Layer 023 — accessCreditsEngine agent_per_run debit](architecture/layers/layer-023.md)
* [Layer 024 — MisSparkCustomRules treasury mirror](architecture/layers/layer-024.md)
* [Layer 025 — monetizationEngine swarm hooks](architecture/layers/layer-025.md)
* [Layer 026 — universalEcosystemPaymentPipeline](architecture/layers/layer-026.md)
* [Layer 027 — external_append fee mode](architecture/layers/layer-027.md)
* [Layer 028 — livePayConfig LIVE_PAY gate](architecture/layers/layer-028.md)
* [Layer 029 — checkoutSession compact resolve](architecture/layers/layer-029.md)
* [Layer 030 — MvpMonetization.jsx Enable Billing CTA](architecture/layers/layer-030.md)

### Phase 4 — Per-Run Agent SKUs (layers 31–40)

* [Layer 031 — agent_dev_review_012 $0.12/run](architecture/layers/layer-031.md)
* [Layer 032 — agent_sales_outreach_008 $0.08/run](architecture/layers/layer-032.md)
* [Layer 033 — agent_clrty_skills_005 $0.05/run](architecture/layers/layer-033.md)
* [Layer 034 — agent_research_rag_015 $0.15/run](architecture/layers/layer-034.md)
* [Layer 035 — agent_ops_monitor_004 $0.04/run](architecture/layers/layer-035.md)
* [Layer 036 — Per-run plink catalog entries](architecture/layers/layer-036.md)
* [Layer 037 — resolveSwarmDebitCents helper](architecture/layers/layer-037.md)
* [Layer 038 — executeSwarmAgentRun debit path](architecture/layers/layer-038.md)
* [Layer 039 — STARTER_AGENTS_ROSTER UI mirror](architecture/layers/layer-039.md)
* [Layer 040 — Outcome verified Agent RPC label](architecture/layers/layer-040.md)

### Phase 5 — Pay Gate Session (layers 41–50)

* [Layer 041 — createSwarmPaygateSession](architecture/layers/layer-041.md)
* [Layer 042 — activateSwarmPaygateSession webhook](architecture/layers/layer-042.md)
* [Layer 043 — checkSwarmWalletBalance gate](architecture/layers/layer-043.md)
* [Layer 044 — SwarmPayGatePanel.jsx component](architecture/layers/layer-044.md)
* [Layer 045 — payment-method-selector UI](architecture/layers/layer-045.md)
* [Layer 046 — wallet login handoff redirect](architecture/layers/layer-046.md)
* [Layer 047 — POST /v1/swarm/paygate/session route](architecture/layers/layer-047.md)
* [Layer 048 — POST /v1/swarm/execute route](architecture/layers/layer-048.md)
* [Layer 049 — Cherry deploy_token after payment](architecture/layers/layer-049.md)
* [Layer 050 — bare_metal deploy_mode (no Docker)](architecture/layers/layer-050.md)

### Phase 6 — Wallet & Credits (layers 51–60)

* [Layer 051 — CLRTY PAY card/wallet/USDC/CLRTY rails](architecture/layers/layer-051.md)
* [Layer 052 — consumeCredits agent_per_run action](architecture/layers/layer-052.md)
* [Layer 053 — getCreditBalance pre-execute check](architecture/layers/layer-053.md)
* [Layer 054 — insufficient_balance wallet handoff](architecture/layers/layer-054.md)
* [Layer 055 — spark/agent_execution_settled event](architecture/layers/layer-055.md)
* [Layer 056 — UsdcTreasuryPayPanel integration](architecture/layers/layer-056.md)
* [Layer 057 — multiRailCryptoPricing zero leakage](architecture/layers/layer-057.md)
* [Layer 058 — AccessCreditsMonetizationPanel pattern](architecture/layers/layer-058.md)
* [Layer 059 — WalletCreditsDashboard balance UI](architecture/layers/layer-059.md)
* [Layer 060 — MONTHLY IN DEVELOPMENT wallet label](architecture/layers/layer-060.md)

### Phase 7 — API Gateway Routes (layers 61–70)

* [Layer 061 — GET /v1/swarm/nano-steps endpoint](architecture/layers/layer-061.md)
* [Layer 062 — swarmNodeNanoStepsWorker payload](architecture/layers/layer-062.md)
* [Layer 063 — RPC exchange.clarity-fintech.com/v1/rpc](architecture/layers/layer-063.md)
* [Layer 064 — ecosystemRoutingManifest swarm surface](architecture/layers/layer-064.md)
* [Layer 065 — ecosystemMasterTelemetry headers](architecture/layers/layer-065.md)
* [Layer 066 — CORS origins uiquio/monitor](architecture/layers/layer-066.md)
* [Layer 067 — buildNanoPipelineEnv swarm context](architecture/layers/layer-067.md)
* [Layer 068 — jsonResponse CORS wrapper](architecture/layers/layer-068.md)
* [Layer 069 — handleSparkEdge swarm path prefix](architecture/layers/layer-069.md)
* [Layer 070 — Gateway root endpoints listing](architecture/layers/layer-070.md)

### Phase 8 — Cherry Bare-Metal (layers 71–80)

* [Layer 071 — install-swarm-node.sh script](architecture/layers/layer-071.md)
* [Layer 072 — /opt/clrty/swarm-node install path](architecture/layers/layer-072.md)
* [Layer 073 — PM2 process manager deps](architecture/layers/layer-073.md)
* [Layer 074 — nginx reverse proxy template](architecture/layers/layer-074.md)
* [Layer 075 — certbot TLS deps](architecture/layers/layer-075.md)
* [Layer 076 — systemd clrty-swarm-node.service](architecture/layers/layer-076.md)
* [Layer 077 — clrty-node-cli wizard script](architecture/layers/layer-077.md)
* [Layer 078 — host-your-own-swarm-node.md docs](architecture/layers/layer-078.md)
* [Layer 079 — Cherry host 84.32.109.227 reference](architecture/layers/layer-079.md)
* [Layer 080 — NO Docker enforcement flag](architecture/layers/layer-080.md)

### Phase 9 — Playwright E2E (layers 81–90)

* [Layer 081 — swarm-execution-billing-e2e.spec.ts](architecture/layers/layer-081.md)
* [Layer 082 — Tier 01 Enable Billing smoke](architecture/layers/layer-082.md)
* [Layer 083 — Tier 02 Launch Agent smoke](architecture/layers/layer-083.md)
* [Layer 084 — $0.12 per-run debit mock](architecture/layers/layer-084.md)
* [Layer 085 — uiquio-mvp-execution-billing testId](architecture/layers/layer-085.md)
* [Layer 086 — verify_swarm_node_nano_tasks_100.sh](architecture/layers/layer-086.md)
* [Layer 087 — swarmNodeStepEvaluators.js](architecture/layers/layer-087.md)
* [Layer 088 — uiquio-swarms-e2e MVP section](architecture/layers/layer-088.md)
* [Layer 089 — GET /v1/swarm/nano-steps live probe](architecture/layers/layer-089.md)
* [Layer 090 — verify_uiquio_swarms.sh integration](architecture/layers/layer-090.md)

### Phase 10 — MIS & Integration (layers 91–100)

* [Layer 091 — CLRTY-1_SWARM_NODE_NANO_TASKS_100.mis](architecture/layers/layer-091.md)
* [Layer 092 — mis_code_index swarm entry](architecture/layers/layer-092.md)
* [Layer 093 — bin/misc compile path](architecture/layers/layer-093.md)
* [Layer 094 — swarmNodeNanoTasks100.json mirror](architecture/layers/layer-094.md)
* [Layer 095 — serializeSwarmNanoStepsJson export](architecture/layers/layer-095.md)
* [Layer 096 — ecosystemInterlockEngine hooks](architecture/layers/layer-096.md)
* [Layer 097 — sovereign_protocol_map swarm lane](architecture/layers/layer-097.md)
* [Layer 098 — Makefile verify target optional](architecture/layers/layer-098.md)
* [Layer 099 — Full 100-step registry count](architecture/layers/layer-099.md)
* [Layer 100 — verify_swarm exit gate core phases](architecture/layers/layer-100.md)

## Payment tiers

* [Starter — $5.99/mo](payment-tiers/starter-5-99.md)
* [Dev Portal — $29/mo](payment-tiers/dev-portal-29.md)
* [Wallet Fund — $29 min](payment-tiers/wallet-fund-29.md)
* [Elite — $149/mo](payment-tiers/elite-149.md)
* [Enterprise — $499/mo](payment-tiers/enterprise-499.md)

## Blockchain

* [Chain 1202 RPC](blockchain/chain-1202-rpc.md)
* [On-chain agent registry](blockchain/on-chain-agent-registry.md)

## Private access (legacy hub)

* [swarm-private-access index](../swarm-private-access/README.md)
