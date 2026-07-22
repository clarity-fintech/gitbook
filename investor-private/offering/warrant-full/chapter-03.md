---
extract_key: "warrant_html"
chapter: 3
---

# Token Warrant Full — Chapter 3

tps://www.genspark.ai/api/files/s/8B6S0VN3) Eligibility in this draft is therefore two-layered.

First is investor or purchaser suitability: legal capacity, authority, sophistication, and where applicable accredited or otherwise lawfully eligible status.

Second is technical and compliance eligibility: wallet screening, sanctions checks, source-of-funds review, jurisdiction mapping, and any required accreditation token, identity oracle, or attestation mechanism described in the financing documents.

Failure at either layer should permit rejection, delay, refund subject to policy, or freezing of allocation pending remediation.

[Source](https://www.genspark.ai/api/files/s/8B6S0VN3) [Source](https://www.genspark.ai/api/files/s/vkx0HBup) Jurisdiction note.

The AML and compliance materials discuss OFAC-sanctioned regions, FATF-blacklisted exposure, MiCA, UK MLR, UAE, Singapore, and broader multi-jurisdictional considerations, but they do not provide a definitive country-by-country eligibility matrix.

Definitive legal review is still required.

[Source](https://www.genspark.ai/api/files/s/vkx0HBup) 11.

AML / KYC / CTF and Sanctions Controls The AML/KYC/CTF program is one of the more detailed source documents.

It describes a risk-based program aligned with FATF, FinCEN, EU AMLD5/6, and UK MLR 2017, with named governance roles such as a Chief Compliance Officer, MLRO, and sanctions officer.

The model uses tiered onboarding, ranging from lower-friction wallet use to enhanced due diligence for institutional participants.

In a warrant context, this means purchaser onboarding should be explicitly treated as a condition precedent to any enforceable delivery obligation.

[Source](https://www.genspark.ai/api/files/s/vkx0HBup) The same program describes real-time sanctions screening against OFAC, EU, UN, and UK HMT lists; transaction-level and wallet-level screening; monitoring for mixer exposure, structuring, bridge-hopping, and anomalous flows; Travel Rule treatment for transfers at or above relevant thresholds; and retention of records for 5–7 years.

It also describes escalation architecture: automated flagging, compliance review, MLRO decision, and where necessary freeze actions through governance or guardian mechanisms.

[Source](https://www.genspark.ai/api/files/s/vkx0HBup) Compliance area Draft warrant implication KYC tiers The Issuer may assign purchasers to onboarding tiers and require enhanced due diligence for larger or institutional subscriptions.

Sanctions checks Any positive or potential match may suspend issuance, transfers, claim rights, or treasury acceptance.

Source of funds / wealth Institutional participants may be required to provide evidentiary documentation before allocation is finalized.

Travel Rule Transfers above relevant thresholds may require originator and beneficiary data exchange using approved secure channels.

Monitoring Ongoing post-issuance monitoring may affect claim timing, protocol access, or wallet eligibility.

12.

Governance, Privileged Controls, and Emergency Powers The addenda consistently describe a layered governance structure designed to avoid unilateral authority.

The core project claim is a 4-of-7 primary governance multisig for upgrades, treasury moves, and major control changes, paired with a 3-of-5 emergency guardian path reserved for pause/freeze actions.

High-impact non-emergency actions are described as passing through a 24–72 hour timelock, sometimes stated specifically as 48 hours in related materials.

[Source](https://www.genspark.ai/api/files/s/xYNyf8Lb) [Source](https://www.genspark.ai/api/files/s/Y3y2DlYW) [Source](https://www.genspark.ai/api/files/s/ZJe6xtTp) For a warrant, these controls matter in two ways.

First, they support the purchaser’s expectation that treasury movement, parameter changes, or emergency restrictions are not exercised by a single operator acting alone.

Second, they create a realistic basis for contractual carve-outs: the Issuer may delay transfers, claims, or distributions if required by an emergency pause, sanctions event, security incident, or timelocked governance review.

The Warrant should therefore include explicit force-majeure and protective-action clauses tied to these governance pathways.

Evidence posture.

The exchange-readiness addenda recommend describing governance thresholds as publicly described control architecture unless and until exact on-chain multisig addresses, signer sets, and execution traces are attached as inspectable evidence.

This draft follows that rule.

[Source](https://www.genspark.ai/api/files/s/xYNyf8Lb) Control Source posture 4-of-7 primary governance Project-described and repeated in addenda; should be paired with live addresses in definitive package.

[Source](https://www.genspark.ai/api/files/s/Y3y2DlYW) 3-of-5 emergency guardians Project-described emergency path for pause/freeze, not broad treasury discretion.

[Source](https://www.genspark.ai/api/files/s/xYNyf8Lb) 24–72h timelock Repeated as accountability window for high-impact actions.

[Source](https://www.genspark.ai/api/files/s/xYNyf8Lb) Air-gapped key ceremony Described in governance/security materials; external procedural evidence not attached in source set.

[Source](https://www.genspark.ai/api/files/s/Y3y2DlYW) 13.

Treasury, Custody, and Operational Resilience Multiple sources describe treasury and custody discipline as foundational.

The financing documents refer to “Genesis Vault” or treasury routing concepts, while the security materials discuss multisignature custody, approval policies, cold-storage practices, and emergency containment.

The AML program adds role separation, incident escalation, and retention workflows.

The result is a control narrative in which token issuance, treasury receipts, and movement of protocol-owned assets are intended to be heavily proceduralized rather than casually discretionary.

[Source](https://www.genspark.ai/api/files/s/8B6S0VN3) [Source](https://www.genspark.ai/api/files/s/ZJe6xtTp) [Source](https://www.genspark.ai/api/files/s/vkx0HBup) Operational resilience is likewise a repeated theme.

The addenda reference backup procedures, quorum recovery planning, recovery-time objectives, distributed signer geography, and the need for rehearsed emergency playbooks.

These items should be reflected in the Warrant not as promises of perfect uptime, but as reasons the Issuer may impose claim delays, substitute operational pathways, or trigger review periods in response to outages, custody anomalies, or incomplete quorum conditions.

[Source](https://www.genspark.ai/api/files/s/xYNyf8Lb) Area Illustrative warrant clause direction Treasury receipt Contribution is effective only upon confirmed settlement into an approved treasury-controlled environment and successful reconciliation.

Custody safeguards Issuer may require use of approved wallets, whitelisted destinations, or staged release from escrow.

Emergency interruption Issuer may pause claims or transfers where required to preserve network, treasury, or compliance integrity.

Backups and logs Issuer should retain subscription, screening, and treasury records according to policy and applicable law.

14.

Security, Audit, and Exchange-Readiness Posture The public security repository is one of the strongest pieces of accessible evidence.

It presents a canonical security policy, reporting channels, scope boundaries, response timelines, safe-harbor language, exchange-readiness checklist, technical evidence registers, market-launch task lists, and Notion-sync references.

This materially supports the claim that security disclosure and listing-readiness are being structured in a publicly legible way.

[Source](https://github.com/clarity-fintech/security) That said, the internal security audit synthesis is equally clear that independent third-party audit completion remains outstanding and is treated as a non-negotiable blocker for mainnet or institutional-grade readiness.

It distinguishes between strong internal documentation coverage and incomplete external attestation.

The safest and most accurate warrant posture is therefore: CLRTY appears to have an unusually detailed readiness framework, but not yet a publicly completed assurance stack across all critical security gates.

[Source](https://www.genspark.ai/api/files/s/ZJe6xtTp) Readiness topic Draft status language Public disclosure policy Active public artifact exists in GitHub security repository.

[Source](https://github.com/clarity-fintech/security) Reporting channels Public security contact and reporting documentation are visible.

[Source](https://github.com/clarity-fintech/security) Exchange checklist Evidence/checklist artifacts exist publicly, but checklist existence is not equal to external approval.

[Source](https://github.com/clarity-fintech/security) Third-party audit Still requires external completion according to internal audit synthesis.

[Source](https://www.genspark.ai/api/files/s/ZJe6xtTp) On-chain proof package Recommended but not fully attached in the accessible sources reviewed.

[Source](https://www.genspark.ai/api/files/s/xYNyf8Lb) Drafting rule for definitive version.

No statement in the final warrant should imply that exchange listing, legal safety, or security certification is complete unless matched with signed reports, live addresses, and dated evidence artifacts.

15.

Developer Infrastructure and Public Repository Evidence The GitHub repository set meaningfully contributes to the ecosystem case.

The PRISM CLI repository presents a high-level command-line system for intent, routing, execution, wallet, and skills workflows, alongside quickstart and command references.

The developer kit claims support for wallets, nodes, SDKs, AI integration, analytics, deployment, and example applications.

The node deployment kit outlines public, private, strategy, compliance, and DePIN node types.

The research kit offers data packs, simulation artifacts, and study guides.

The wallet integration repository presents partner integration packages and multi-language SDK coverage.

[Source](https://github.com/clarity-fintech/clarity_prism_cli) [Source](https://github.com/clarity-fintech/developer_kit) [Source](https://github.com/clarity-fintech/node_deployment_kit) [Source](https://github.com/clarity-fintech/research_kit) [Source](https://github.com/clarity-fintech/wallet_integration) For a token warrant, these repositories do not directly determine legal rights, but they do help explain the commercial and technical thesis behind token utility.

If CLRTY is positioned as more than a passive speculative unit, the existence of SDKs, node tooling, compliance-facing node classes, and partner integration packages is directionally helpful.

However, repository presence alone does not prove production usage, market adoption, or operational completion.

[Source](https://github.com/clarity-fintech/developer_kit) Repository Relevance to warrant narrative security Public disclosure, vulnerability process, listing readiness, evidence packaging.

clarity_prism_cli Execution, routing, operator onboarding, CLI-based workflow surface.

wallet_integration Partner kit, SDK packaging, wallet and listing integration signals.

research_kit Research, simulation, data-room-style artifacts for advanced reviewers.

node_deployment_kit Operator and validator-like infrastructure story.

developer_kit Full-stack developer and enterprise-builder positioning.

16.

Risk Factors High-risk instrument.

The PPM expressly requires investors to acknowledge the possibility of total loss, regulatory change, technological failure, and the speculative nature of early-stage protocol infrastructure.

[Source](https://www.genspark.ai/api/files/s/bBpsfNcE) 16.1 Regulatory and legal risk The supplied regulatory memo is an internal analysis, not a formal opinion.

Securities, commodities, sanctions, licensing, consumer-protection, and tax treatment may vary by jurisdiction and evolve quickly.

A purchaser could face restrictions, delays, or inability to receive or use CLRTY if legal interpretations change or if external counsel does not support the anticipated launch structure.

[Source](https://www.genspark.ai/api/files/s/DvuzNLhF) 16.2 Launch and milestone risk The project materials themselves frame many architectural, exchange, and operational items as proposed designs or execution targets rather than completed facts.

There is therefore a real risk that milestones slip, features launch in narrower scope, or issuance is delayed beyond indicative windows.

[Source](https://www.genspark.ai/api/files/s/o7YESSGt) 16.3 Security and audit risk Although internal security framing is extensive and the public security repository is substantive, the independent audit stack described in the security synthesis is incomplete.

Undiscovered bugs, logic failures, or treasury-control issues may still exist.

[Source](https://www.genspark.ai/api/files/s/ZJe6xtTp) [Source](https://github.com/clarity-fintech/security) 16.4 Liquidity and market risk There is no guarantee of exchange listing, secondary liquidity, stable pricing, market-maker support, or sufficient on-chain depth.

Even if a token is issued, it may be illiquid or volatile for extended periods.

The user-supplied stage framework and the project’s own DEX/CEX pathway language should not be mistaken for guaranteed distribution outcomes.

[Source](https://www.genspark.ai/api/files/s/FofxTsb6) 16.5 Technical architecture risk Concepts such as behavior-aware wallet scoring, adaptive burns, private execution, routing intelligence, compliance-as-code, and multi-plane architecture may not function as described in edge conditions, or may prove difficult to scale, audit, or operate across chains and jurisdictions.

The yellowpaper itself distinguishes normative protocol rules from theoretical and implementation-specific material.

[Source](https://www.genspark.ai/api/files/s/FXsMSI9M) 16.6 Compliance and sanctions risk Purchasers may be delayed, rejected, frozen, or offboarded due to sanctions expo

---

{% hint style="info" %}
**Source:** `CLRTY_Token_Warrant_Draft.html` · Chapter 3 of 4
{% endhint %}


<!-- clrty-blocks:v1 -->

{% hint style="danger" %}
**Restricted**

Investor-private tier — do not redistribute.
{% endhint %}
