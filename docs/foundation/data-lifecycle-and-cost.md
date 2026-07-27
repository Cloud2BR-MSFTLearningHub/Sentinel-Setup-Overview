# Sentinel Data Lifecycle and Cost

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel billing and pricing](https://learn.microsoft.com/en-us/azure/sentinel/billing)
- [Manage Log Analytics costs](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/manage-cost-storage)
- [Log Analytics retention and archive](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/data-retention-archive)

</details>

[Back to the documentation hub](../index.md)

Sentinel cost is driven primarily by data ingestion, retention, archive, search,
and related Azure services. Cost control begins with a useful data contract, not
with deleting data after a detection has already been built around it.

## Build a data contract

For every table or connector, document the source, security question, expected
daily volume, retention period, archive decision, data owner, query consumer, and
cost allocation tag. Require this contract before production ingestion.

| Decision | Questions to answer |
| --- | --- |
| Ingest | Does the source support a detection, investigation, compliance, or response requirement? |
| Transform | Can irrelevant records or fields be removed without breaking the use case? |
| Retain | How long do incident, audit, legal, and threat-hunting needs require hot data? |
| Archive | Is historical access needed but interactive query performance not required? |
| Export | Does another platform need a copy, and is duplicate ingestion justified? |

## Control volume safely

- Measure volume by table and connector before and after each rollout.
- Filter at the supported source or data collection rule only after confirming the
  change does not remove required entities or evidence.
- Avoid collecting duplicate raw alerts and events when a single normalized source
  already supports the detection.
- Set budgets, anomaly alerts, exports, and ownership tags before broad rollout.
- Review ephemeral infrastructure, high-cardinality diagnostics, and verbose
  network logs separately because they can change volume quickly.

## Retention and evidence

Hot retention supports active queries and investigations. Archive can support
longer historical requirements with different access patterns. Neither setting
replaces a legal-hold, backup, or evidence-preservation process. Define when an
incident needs exported evidence, who may access it, and how its integrity is
recorded.

## Monthly operating review

1. Compare actual ingestion and retention costs with the forecast.
2. Identify top tables, unexpected spikes, and sources with no active consumer.
3. Review accepted data exceptions and their expiry dates.
4. Confirm analytics rules still receive the data and fields they need.
5. Remove retired connectors, unused workspaces, and obsolete exports.

## Business example

> A security team enables firewall logs tenant-wide and sees a sharp cost increase.
> Table analysis shows that a verbose diagnostic category is not used by any rule,
> workbook, or investigation. The network owner disables that category in a pilot,
> validates that detection queries still work, and then deploys the change with a
> documented monthly saving and rollback path.
