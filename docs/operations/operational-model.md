# Sentinel Operational Model

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel SOC optimization](https://learn.microsoft.com/en-us/azure/sentinel/soc-optimization)
- [Monitor Microsoft Sentinel health](https://learn.microsoft.com/en-us/azure/sentinel/health-audit-log)
- [Microsoft Sentinel automation](https://learn.microsoft.com/en-us/azure/sentinel/automation/automation)

</details>

[Back to the documentation hub](../index.md)

Sentinel is a service, not a one-time deployment. Its operating model must cover
data reliability, detection engineering, triage, response authority, change
control, metrics, and continuous improvement.

## Define the service model

| Service area | Accountable owner | Evidence |
| --- | --- | --- |
| Workspace and data lifecycle | Platform owner | Architecture, health, retention, cost review |
| Connectors and source quality | Source and platform owners | Freshness, authorization, schema, volume |
| Analytics and content | Detection engineering | Query version, test results, tuning, exceptions |
| Incidents and response | SOC lead | Assignment, escalation, containment, closure |
| Playbooks and integrations | Automation owner | Identity, run history, approval, rollback |
| Governance and audit | Security governance | Access review, policy, risk, evidence retention |

## Daily and weekly routines

- Review high-severity incidents, unassigned cases, overdue escalations, and
  playbook failures.
- Monitor connector health, ingestion gaps, analytics-rule failures, data volume,
  and budget anomalies.
- Review content changes, emergency exceptions, new data sources, and identity
  access requests.
- Tune noisy detections with an owner and expiry, not an indefinite suppression.
- Capture lessons learned from confirmed incidents and convert them into content,
  runbook, or control improvements.

## Service metrics

Measure data freshness by critical table, rule execution health, alert-to-incident
quality, incident aging, false-positive rate, mean time to triage, time to
containment, playbook success rate, detection coverage, and ingestion cost by
owner. Metrics should drive a decision, not become a dashboard with no response.

## Change management

Change-managed items include connectors, data collection rules, transformations,
parsers, analytics, entity mappings, playbooks, identities, retention, and access.
For every change, record the reason, scope, test, expected outcome, owner,
rollback, and post-change validation.

## Business example

> A weekly health review identifies that an analytics rule has stopped producing
> alerts because an upstream connector changed a field name. The platform owner
> restores the field mapping in a pilot, the detection engineer validates the query
> against historical data, and the SOC documents the temporary coverage gap before
> releasing the fix through the approved content pipeline.
