# What Is Microsoft Sentinel?

Atlanta, USA (United States of America)

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS (open-source software) - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel overview](https://learn.microsoft.com/en-us/azure/sentinel/overview)
- [Microsoft Sentinel architecture](https://learn.microsoft.com/en-us/azure/sentinel/architecture)
- [Microsoft Sentinel documentation](https://learn.microsoft.com/en-us/azure/sentinel/)

</details>

[Back to the documentation hub](index.md)

Microsoft Sentinel is Microsoft's cloud-native security information and event
management (SIEM) and security orchestration, automation, and response (SOAR)
platform. It uses a Log Analytics workspace to ingest security data, applies
analytics and machine learning, groups evidence into incidents, and coordinates
response through automation and integrations.

## Why it matters

Most attacks cross boundaries: identity, endpoint, cloud, network, and SaaS
signals often tell different parts of the same story. Sentinel gives security
teams a governed data and response layer for correlating those signals, including
data that is not natively visible in Microsoft Defender.

| Capability | Sentinel role |
| --- | --- |
| Data collection | Connect Microsoft, Azure, multicloud, network, and custom sources |
| Detection | Run analytics rules, threat intelligence matching, and anomaly logic |
| Investigation | Correlate entities, incidents, workbooks, Kusto Query Language (KQL), and notebooks |
| Response | Trigger automation rules and Logic App playbooks with audit trails |
| Governance | Control retention, access, costs, content updates, and service ownership |

## How it works

Connectors write supported data into a Log Analytics workspace. Analytics rules
query that data on a schedule or process supported streams, producing alerts with
mapped entities. Sentinel groups related alerts into incidents, where analysts
investigate the timeline and entities. Automation rules and playbooks can enrich,
route, or respond to the incident according to a defined authority model.

Sentinel complements Defender extended detection and response (XDR). Defender products provide specialized signals
and native response for Microsoft workloads; Sentinel adds cross-source analytics,
third-party telemetry, configurable retention, and SOAR (security orchestration, automation, and response). Select one primary
incident queue for each use case to avoid duplicate ownership and automation loops.

## Core operating decisions

- Define the security question, source owner, expected volume, retention, and
  consumer before enabling any connector.
- Assign a primary incident queue, response owner, approval boundary, and
  evidence-retention policy before enabling automation.
- Start every new connector, analytic, and playbook in a limited pilot with
  measurable success criteria and a rollback plan.
- Treat cost, data residency, and access control as design constraints, not
  post-deployment tuning activities.

## Business example

> A finance user signs in from a risky location, then a cloud automation identity
> creates a privileged Azure role assignment. Sentinel correlates Entra sign-in,
> Azure Activity, and firewall records into one incident. The security operations center (SOC) verifies the
> change record, requests approval to disable the identity, and preserves the
> connector, query, entity, and action evidence for the review.
