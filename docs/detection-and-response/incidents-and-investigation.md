# Sentinel Incidents and Investigation

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Investigate incidents in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents)
- [Investigate entities](https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents)
- [Incident management](https://learn.microsoft.com/en-us/azure/sentinel/incident-investigation)

</details>

[Back to the documentation hub](../index.md)

An incident is an investigation record, not merely a bucket of alerts. It should
have one accountable owner, a clear scope, evidence, decisions, actions, and a
verifiable outcome. Configure grouping and automation to support that workflow.

## Triage sequence

1. Confirm the incident source, severity, entities, and freshness.
2. Check whether a linked incident, Defender XDR case, ITSM ticket, or approved
   change already owns the activity.
3. Validate entity identity and timeline against raw events and source systems.
4. Assess business criticality, exposure, blast radius, and containment options.
5. Preserve the queries and evidence required before disruptive remediation.
6. Assign, document decisions, execute approved actions, and verify recovery.

## Incident ownership model

| Decision | Required owner |
| --- | --- |
| Alert triage and evidence collection | SOC analyst |
| Severity escalation and incident coordination | Incident commander or SOC lead |
| Account, device, network, or workload containment | Authorized service owner or responder |
| Customer or legal communications | Designated business, privacy, or legal owner |
| Closure and lessons learned | Accountable incident owner |

## Entity and timeline quality

Entity mapping determines how analysts pivot from an alert to accounts, hosts,
IP addresses, cloud resources, and mailboxes. Validate mappings with stable IDs,
such as account object IDs or device IDs. A weak mapping can merge unrelated
events or hide the source of a detection.

Capture the alert ID, incident ID, query or rule version, raw event reference,
entity IDs, source timestamps, analyst actions, approvals, containment result,
and recovery evidence. These details make the investigation reproducible after
data ages out or an asset is offboarded.

## Business example

> Sentinel groups alerts for a suspicious OAuth grant and high-volume downloads.
> The analyst confirms the same account and application ID in the raw events,
> assigns the incident to cloud-app operations, and preserves the affected file
> references before revoking the grant. The incident closes only after connector
> data shows no further activity and the application owner confirms recovery.
