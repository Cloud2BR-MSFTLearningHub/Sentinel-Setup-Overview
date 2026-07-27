# Microsoft Sentinel Deployment Checklist

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Plan and prepare Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/plan-prepare)
- [Microsoft Sentinel architecture](https://learn.microsoft.com/en-us/azure/sentinel/architecture)
- [Microsoft Sentinel deployment guide](https://learn.microsoft.com/en-us/azure/sentinel/deploy-overview)

</details>

[Back to the documentation hub](../index.md)

Use this checklist for each Sentinel workspace rollout. A selected item should
have recorded evidence: owner, scope, date, verification method, exception, and
next review date. Checkbox selections are stored only in the current browser.

## Design

- [ ] Define the SOC operating model, primary incident queue, escalation path, and service owners.
- [ ] Select the workspace, region, subscription, resource group, tags, and data-residency boundary.
- [ ] Define retention, archive, export, privacy, legal, and evidence-preservation requirements.
- [ ] Design Azure RBAC, Entra groups, privileged access, automation identities, and break-glass access.
- [ ] Inventory required data sources, tables, expected volume, retention, and source owners.
- [ ] Create a cost estimate, budget, anomaly alert, and cost-allocation model.

## Pilot

- [ ] Onboard a representative connector and verify table, schema, freshness, entities, and volume.
- [ ] Deploy one analytic rule with a threat hypothesis, entity mapping, suppression, and owner.
- [ ] Generate a controlled event and verify alert, incident, assignment, and evidence collection.
- [ ] Test approved enrichment, ticketing, and playbook failure handling.
- [ ] Validate analyst, engineer, automation, and auditor roles using least-privilege test accounts.
- [ ] Record pilot blockers, accepted risks, rollback, and success criteria.

## Expand

- [ ] Deploy connectors and content through approved templates or source control.
- [ ] Reconcile data source inventory with connector health and table-level data freshness.
- [ ] Move rules from observation to production only after documented tuning and response review.
- [ ] Enable automation only at the approved authority level, with auditable approvals for disruptive actions.
- [ ] Validate data volume, retention, cost, and dashboards after each rollout wave.
- [ ] Communicate incident, escalation, service ownership, and support procedures to affected teams.

## Operate

- [ ] Review connector health, analytics failures, incident aging, automation failures, and stale content.
- [ ] Review privileged role access, managed identities, secrets, and external connector authorization.
- [ ] Track false positives, missed detections, mean time to triage, containment, and recovery.
- [ ] Revalidate retention, archive, budgets, data transformations, and data-source contracts.
- [ ] Exercise incident response, playbook rollback, workspace recovery, and offboarding procedures.
- [ ] Remove retired data sources, rules, playbooks, access assignments, and billable dependencies.

## Business example

> For a pilot, a SOC connects Entra sign-in and Azure Activity data for one
> subscription, deploys a privilege-escalation analytic rule, and tests a benign
> event. Success requires a fresh table record, mapped identity and resource
> entities, a single routed incident, and a successful enrichment playbook. The
> team expands only after the platform, SOC, privacy, and finance owners approve
> the evidence and observed cost.
