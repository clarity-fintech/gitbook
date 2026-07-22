# Exchange readiness matrix (45 items)

Derived from Whitepaper Volume II — full 45-item matrix in source PDF.

exchange onboarding compliance matrix for the CLRTY-1 Layer-1 substrate, the HELIX private execution engine, and the FORTRESS security layer.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 1 of 67 VERSION 2.0 PUBLICATION 2026 PUBLISHER Volkov Intelligence Systems CLASSIFICATION Public — Institutional Grade © 2026 VOLKOV INTELLIGENCE SYSTEMS · ALL RIGHTS RESERVED CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 2 of 67 Legal Disclaimer & Forward-Looking Statements This document (the “Addendum”, or “V olume II”) is published by V olkov Intelligence Systems (“the Publisher”) as a supplementary technical whitepaper to the primary CLRTY Protocol whitepaper (“V olume I”).

V olume II is scoped exclusively to security, governance, and exchange-compliance considerations.

Nothing contained in this document constitutes an offer to sell, or a solicitation of an offer to buy, any security, token, or digital asset in any jurisdiction.

Neither this document nor any portion of it forms the basis of, or should be relied upon in connection with, any contract or investment decision.

Statements contained in this Addendum that are not statements of historical fact — including, without limitation, statements concerning the design, roadmap, decentralization trajectory, cryptographic security model, and future capabilities of the CLRTY-1 substrate, the HELIX execution engine, the FORTRESS security layer, the PRISM intelligence layer, and associated smart-contract systems — are forward-looking statements.

Forward-looking statements involve known and unknown risks, uncertainties, technological limitations, regulatory dependencies, and other factors that may cause actual outcomes to differ materially from those expressed or implied in this document.

Readers should independently evaluate the technical, legal, tax, and regulatory implications of interacting with CLRTY and should consult qualified professionals prior to any decision.

The Publisher expressly disclaims any obligation to update forward-looking statements to reflect subsequent events.

Where regional restrictions apply, users are responsible for confirming their eligibility.

Document Conventions RISK Callouts flag material risks or trust assumptions.

SECURITY NOTICE Callouts identify hardened controls or attack-surface mitigations.

DESIGN RATIONALE Callouts explain why a control was chosen.

Multi-signature thresholds are written as m-of-n (e.g., 4-of-7).

Time-lock windows are stated in clock hours from queue time.

• • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 3 of 67 Executive Summary V olume II of the CLRTY Whitepaper documents the security, governance, and exchange-compliance posture of the CLRTY Protocol as of the 2026 publication cycle.

Where V olume I established the conceptual foundation of CLRTY as a self-compressing Layer-1 substrate for deterministic execution and intelligence- native assets, V olume II answers a narrower and more operational question: how is the system defended, who holds the keys, how are those keys constrained, and what must be true for the token to be listed and cleared by Tier-1 exchanges?

The Addendum is structured across six parts.

Part I enumerates protocol-integrity controls that gate the code path from developer commit to on-chain execution: signed and tagged Git releases, redundant off-chain data recovery, immutable supply verification, automated vesting, hardcoded emission caps, verifiable burn addresses, third-party liquidity locking, atomic tax logic, resilient oracle design, configurable slippage, multi- signature treasury movement, and formally validated staking-reward mathematics.

Part II details the superuser key ceremony, the 7 independent parties who currently custody root privilege, and the 4-of-7 multi-signature architecture that binds them.

Part III describes the governance architecture layered on top of that key material, including the 3-of-5 Emergency Guardian path, time-locked upgrade authority, and the four-phase decentralization trajectory.

Part IV enumerates the five superuser roles — Root Governance, Protocol Admin, Treasury Controller, Emergency Guardian, and Upgrade Authority — and catalogs each privilege they may exercise together with the safeguards that constrain them.

Part V expands the twenty-item Phase 1 Core Technical & Security checklist covering audit, key management, upgradeability, reentrancy, event emission, chain configuration, wallet compatibility, node stability, finality, snapshot integrity, and asset-recovery procedures.

Part VI expands the fifteen-item Phase 3 Exchange Compliance checklist — legal opinion, AML program, KYC workflow, Travel Rule, sanctions screening, disclosures, jurisdictional mapping, ToS/Privacy, tax-export tooling, DPO contact, entity registration, Proof of Reserves, SOC 2 Type 2, and periodic regulatory reporting — and consolidates all forty- five items into an exchange-onboarding matrix intended to satisfy the intake requirements of every Tier-1, Tier-2, and DEX aggregator we have engaged with.

A central design principle threads through the entire Addendum: trust in CLRTY is distributed, not eliminated.

The Protocol intentionally preserves a small set of privileged controls during early deployment because a Layer-1 substrate with deterministic finality below 400 milliseconds and an in-band AI allocation router (HELIX) cannot safely operate as an ossified system on day one.

Those privileges are held under a coordinated 4-of-7 threshold, executed through hardware-secured signing devices, and delayed by a 24- to 72-hour public time-lock.

As the network matures, privileges migrate stepwise from multisig, to hybrid multisig-plus- token voting, to DAO-controlled execution, and finally to a state where privileged roles are either eliminated or reduced to narrow break-glass powers.

The roadmap is the enforcement mechanism; this document is its published specification.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 4 of 67 SECURITY NOTICE Every privileged action described in this Addendum emits an on-chain event and is observable in the FORTRESS transparency dashboard prior to and following execution.

There are no unlogged administrative paths.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 5 of 67 Table of Contents FRONT MATTER iii v v PART I — PROTOCOL INTEGRITY & CODE ASSURANCE 1 2 3 4 5 6 7 8 9 10 11 12 PART II — SUPERUSER KEY CONTROL & MANAGEMENT 14 15 16 17 18 19 20 Legal Disclaimer & Forward-Looking Statements Executive Summary Document Conventions 1.

Version Control & Git-Tagged Production Code 2.

Database & Off-Chain Data Recovery 3.

Total Supply Verification & Circulating Supply Immutability 4.

Vesting Schedules & Cliff Smart Contracts 5.

Inflationary Controls & Emission Caps 6.

Burn Mechanism & Unspendable Address Verification 7.

Liquidity Locking 8.

Tax / Fee / Reflection Logic 9.

Oracle Reliability (HELIX + Chainlink) 10.

Slippage Tolerance & DEX Interface Safety 11.

Treasury Management 12.

Staking / Rewards APR Mathematical Validation 13.

Key Generation Ceremony 14.

Who Holds the Superuser Keys 15.

4-of-7 Multi-Signature Control Philosophy 16.

Key Management Practices 17.

Multisig Wallet Infrastructure 18.

Time-Locked Execution 19.

Emergency Guardian Key Path CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum Page 6 of 67 21 22 22 PART III — SUPERUSER GOVERNANCE ARCHITECTURE 23 24 24 25 26 27 27 PART IV — SUPERUSER ROLES, PRIVILEGES & SAFEGUARDS 28 29 30 31 32 32 PART V — CORE TECHNICAL & SECURITY CHECKLIST (ITEMS 1–20) 33 35 37 38 PART VI — EXCHANGE COMPLIANCE (ITEMS 31–45) & ONBOARDING 40 41 42 20.

Operational Security 21.

Key Rotation & Recovery 22.

Risk Considerations 23.

Governanc
