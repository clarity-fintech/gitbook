---
extract_key: "whitepaper_vol_ii"
chapter: 8
---

# Volume II — Security & Governance — Chapter 8

Chapter 24 — Primary Governance Multisig (4-of-7) The primary multisig is the root of privileged authority in CLRTY .

It applies to contract upgrades, treasury movements, parameter changes, and node governance decisions.

In-Scope Actions Deployment and activation of upgraded contract logic via the Upgrade Authority.

Movements of protocol-owned assets from the treasury.

Adjustments to governed protocol parameters, including HELIX routing parameters, emission-schedule shape, and staking-reward configuration.

Node-governance actions such as validator approval or removal and DePIN participation rules.

Changes to the composition of the multisig itself (add/remove/replace signers, adjust threshold within permitted floor).

Signature Requirements 4 valid signatures from 7 distinct signer addresses.

Signatures are collected off-chain, submitted on-chain as part of a single execution transaction, and preserved in the multisig event log.

No signer can sign twice against the same transaction hash.

• • • • • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 25 — Emergency Guardian Multisig (3-of-5) The Emergency Guardian Multisig is dedicated to rapid intervention.

Its threshold is 3-of-5, allowing the network to respond within minutes to an active exploit, mispricing incident, or governance emergency.

In-Scope Actions Pausing contracts on the CLRTY-1 substrate or associated protocol contracts.

Freezing individual accounts implicated in an active exploit.

Activating protocol circuit breakers.

Cancelling a queued action in the time-lock queue prior to execution.

Out-of-Scope The Guardian set has no ability to move funds, mint or burn tokens, alter tokenomics, upgrade logic, or change governance thresholds.

This asymmetry is deliberate: fast authority is coupled to narrow authority.

• • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 26 — Upgrade Authority & Time-Lock The Upgrade Authority controls contract evolution — deployment of upgraded logic, patching of vulnerabilities, and modification of execution pathways — through a proxy-admin pattern.

It is not an independent authority: it is the primary 4-of-7 multisig acting through a delay-imposing wrapper.

Delay Semantics Time-lock delay is configurable within a defined range of 24 to 72 hours.

Delay is chosen per action class: standard upgrades typically use 48 hours; parameter adjustments may use 24; deeply invasive changes use 72.

All queued upgrades are published on-chain with target proxy, implementation address, and calldata visible to any observer.

DESIGN RATIONALE The time-lock is a public commitment device.

Coupling it to the multisig converts private multi-party approval into a public multi-day announcement, which converts governance surface into audit surface.

• • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 27 — Execution Flow Examples Standard Upgrade Proposal is drafted, reviewed, and published — including target contract, calldata, and stated rationale.

Four of seven primary-multisig signers submit signatures.

The upgrade is queued in the time-lock; the queue transaction hash is published.

The delay window elapses (24–72h) during which any observer, including the Emergency Guardians, may review or cancel.

After the delay, the queued action is executed.

Emergency Action A threat is detected by FORTRESS monitoring, an external reporter, or protocol telemetry.

Three of five Emergency Guardians approve the response transaction.

The action executes immediately, without delay.

The Guardian set files a post-incident report and — if a broader response is required — a follow-up proposal is routed through the primary multisig.

Fig.

5 — Emergency Guardian execution flow.

1.

2.

3.

4.

5.

1.

2.

3.

4.

Emergency Guardian Flow Threat Detected FORTRESS / reporter 3-of-5 Guardian signatures gathered Immediate Action pause · freeze · cancel Post-Incident report + primary follow-up Latency: minutes · Scope: pause / freeze / circuit-breaker / cancel-queued · Excludes: funds, tokenomics, upgrades CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 28 — Additional Safeguards Key distribution across independent parties (Chapter 14).

Hardware-secured key storage (Chapter 16).

On-chain verification of all approvals (Chapter 17).

Transparent, indexed transaction logs published to the FORTRESS dashboard.

Independent third-party monitors subscribed to multisig and time-lock events.

Governance-events feed exportable to institutional risk tooling.

• • • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum

---

{% hint style="info" %}
**Source:** `CLRTY_Whitepaper_Volume_II_Security_Governance_Compliance.pdf` · Chapter 8 of 14
{% endhint %}


<!-- clrty-blocks:v1 -->

{% hint style="warning" %}
**L2**

Institutional whitepaper volume — private diligence tier.
{% endhint %}

```diagram-panel
svg: 09-attestation-ledger.svg
caption: Attestation ledger
```

![Attestation ledger](https://raw.githubusercontent.com/clarity-fintech/gitbook/main/assets/diagrams/svg/09-attestation-ledger.svg)
*Attestation ledger*
