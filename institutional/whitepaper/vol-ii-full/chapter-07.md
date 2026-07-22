---
extract_key: "whitepaper_vol_ii"
chapter: 7
---

# Volume II — Security & Governance — Chapter 7

Chapter 20 — Operational Security Beyond the cryptographic controls, CLRTY maintains a set of operational-security practices to reduce the probability that any signer's key material is exposed in practice.

Geographic distribution.

Signers are located across multiple jurisdictions and time zones.

Redundant secure backups.

Where a signer's key is backed up, backups use encrypted Shamir Secret Sharing shards distributed across independent secure locations.

No single site holds a recoverable key.

Access control.

Physical access to signing hardware is logged; joint-custody rules apply where applicable.

Rotation policy.

Keys are rotated on a defined periodic cadence and additionally rotated on trigger events (holder change, suspected compromise, hardware refresh).

Signer identity verification.

Every signing action is preceded by out-of-band identity verification of the signer via a pre-registered secondary channel.

• • • • • CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 21 — Key Rotation & Recovery Keys can be rotated via multisig approval.

A compromised or lost key is replaced without exposing the full control set: the primary 4-of-7 multisig approves the removal of the old signer address and the addition of a new one in a single atomic transaction.

Recovery Scenarios Scenario Path Notes Signer loses hardwareSigner restores from Shamir shards or issues new key; multisig swaps the address Requires 4-of-7 Signer suspected of compromise Emergency Guardian pauses subsystems if needed; multisig removes signer immediately Requires 4-of-7 for removal, 3-of-5 for pause Signer voluntarily departs Standard rotation; timeline announced publiclyRequires 4-of-7 Full ceremony re-runAnnounced, scheduled, executed as in Chapter 13Full ceremony CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 22 — Risk Considerations The multisig model reduces but does not eliminate trust.

V olume II identifies three residual risks and documents CLRTY's mitigations.

RISK 1 — COORDINATION RISK Coordinated action across seven distributed signers is slower than unilateral control.

CLRTY mitigates this by pre-drilling emergency scenarios and by delegating strictly- scoped rapid action to the 3-of-5 Guardian path.

RISK 2 — RESIDUAL COMPROMISE RISK Simultaneous compromise of four independent signers is unlikely but not impossible.

Mitigations include geographic and institutional independence, hardware-secured storage, rotation, and — for the most impactful actions — time-locks that allow public detection before execution.

RISK 3 — TRUST DISTRIBUTION, NOT ELIMINATION CLRTY's early-phase governance is a distributed trust model, not a trustless one.

The decentralization roadmap in Part III specifies the migration path from this state to progressively-lower trust regimes.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Part III — Superuser Governance Architecture Are the superuser privileges decentralized?

Yes.

CLRTY uses a multi-signature governance model with structured role separation and enforced consensus thresholds.

Superuser control is not held by a single entity; it is distributed across core protocol contributors, security council members, and independent infrastructure operators.

All critical actions require multi-party authorization.

Part III specifies the shape of that governance in enough detail that any external party can independently verify its integrity from the on-chain record.

CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum --- Chapter 23 — Governance Architecture Overview The governance architecture consists of three cooperating components: the Primary Governance Multisig (broad authority, high threshold, time-locked), the Emergency Guardian Multisig (narrow authority, lower threshold, immediate), and the Upgrade Authority (time-locked wrapper controlled by the primary multisig).

Each is bound to a well-scoped set of privileges; none can act outside its scope; all their actions are transparent by construction.

Governance Component Map Component Threshold Latency Scope Primary Governance Multisig 4-of-7 Batched + 24–72h timelock Upgrades, treasury, parameters, node governance Emergency Guardian Multisig 3-of-5 Immediate Pause, freeze, circuit-breaker, timelock-cancel Upgrade Authority Controlled by Primary 24–72h delay Contract logic upgrades only CLRTY Protocol — Volume II Security, Governance & Exchange Compliance Addendum

---

{% hint style="info" %}
**Source:** `CLRTY_Whitepaper_Volume_II_Security_Governance_Compliance.pdf` · Chapter 7 of 14
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
