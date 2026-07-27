# Sentinel Architecture and Workspace Design

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel architecture](https://learn.microsoft.com/en-us/azure/sentinel/architecture)
- [Plan and prepare Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/plan-prepare)
- [Design a Log Analytics workspace architecture](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/workspace-design)

</details>

[Back to the documentation hub](../index.md)

The Log Analytics workspace is Sentinel's primary data, access, cost, and
retention boundary. Choose its location and ownership before data arrives; moving
an established security operations center (SOC) later is harder than designing the boundary deliberately.

## Select the workspace model

| Model | Best for | Tradeoff |
| --- | --- | --- |
| Single workspace | Central SOC, consistent residency, common detection content | Broad access and chargeback need careful governance |
| Regional workspaces | Residency or sovereignty requirements | Cross-workspace hunting and content deployment add complexity |
| Subsidiary workspaces | Separate organizations or managed-service boundaries | Central incident operations need Lighthouse and clear ownership |
| Workload workspace | Highly regulated or isolated telemetry | Duplicates platform overhead and reduces correlation by default |

Use one workspace for a defined operating boundary, not simply for every
subscription. A workspace should have named owners for data, detection content,
incident response, cost, and platform operations.

## Design the data path

1. Define the security questions and required data sources.
2. Place the workspace in the approved region and subscription.
3. Enable Sentinel, retention, archive, and access settings.
4. Connect a pilot data source and verify the intended table, timestamp, volume,
   and entity fields.
5. Add analytics, automation, and incident routing only after data quality passes.
6. Record the workspace architecture, dependencies, and recovery procedures.

## Architecture boundaries

- **Workspace:** stores collected telemetry and Sentinel content references.
- **Data collection rule:** controls collection and transformation for Azure
  Monitor Agent sources where applicable.
- **Data connector:** provisions the supported ingestion path for a product or
  service. A connector's enabled state is not proof that current data is arriving.
- **Analytics rule:** reads tables and produces alerts; it must have a known
  schema, query period, entity mapping, suppression behavior, and owner.
- **Playbook:** executes under a Logic App identity and should have a separate
  authority and rollback model from the detection that triggers it.

## Validate the design

- Confirm workspace region, resource lock, tags, budget, and service owner.
- Confirm least-privilege access for analysts, engineers, automation identities,
  and break-glass administrators.
- Verify a controlled test event reaches the expected table and preserves its
  timestamp, source identity, and required entity fields.
- Measure daily data volume by table before enabling broad collection.
- Test incident creation, assignment, closure, and evidence retention.

## Operational decisions

- Set a retention and archive policy per table based on investigation and legal
  needs, not an assumed universal period.
- Document cross-workspace query owners and performance expectations before
  relying on them for high-severity detections.
- Treat new table schemas and data transformations as change-managed dependencies
  for analytics rules and workbooks.

## Business example

> A retailer operates in two data-residency regions but uses one central SOC. It
> deploys a Sentinel workspace in each approved region, grants the SOC delegated
> access through Lighthouse, and standardizes analytic rules through source
> control. Each workspace retains local telemetry while the SOC uses approved
> cross-workspace queries for incident triage and monthly coverage reporting.
