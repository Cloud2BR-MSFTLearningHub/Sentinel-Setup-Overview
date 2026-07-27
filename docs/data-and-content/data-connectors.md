# Sentinel Data Connectors

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel data connectors](https://learn.microsoft.com/en-us/azure/sentinel/connect-data-sources)
- [Data connector reference](https://learn.microsoft.com/en-us/azure/sentinel/data-connectors-reference)
- [Health and audit logs](https://learn.microsoft.com/en-us/azure/sentinel/health-audit-log)

</details>

[Back to the documentation hub](../index.md)

Data connectors establish supported ingestion paths into Sentinel. A connector is
valuable only when its data supports a defined detection, investigation,
compliance, or response outcome. Enable the smallest useful set first, validate
its data quality, then expand deliberately.

## Connector selection

| Source category | Typical value | Design question |
| --- | --- | --- |
| Microsoft Defender | Native alerts and entities | Is Defender extended detection and response (XDR) or Sentinel the primary incident queue? |
| Entra and Azure | Identity and control-plane evidence | Which sign-in and activity records are required? |
| Network devices | Perimeter, DNS, proxy, and flow context | Is the normalization and volume sustainable? |
| AWS and GCP | Cloud audit and workload evidence | Are cross-cloud permissions and regions approved? |
| SaaS and custom apps | Business context and application abuse signals | Does an API, agent, Event Hub, or log forwarder meet the need? |

## Onboard safely

1. Define the security use case, data owner, table, expected volume, and retention.
2. Confirm supported regions, prerequisites, permissions, network paths, and
   licensing for the connector.
3. Enable the connector in a representative pilot scope.
4. Query the destination table to confirm recent records, timestamps, entities,
   schema, and expected volume.
5. Build or enable one detection or workbook that uses the data.
6. Monitor connector health and document the rollback and offboarding path.

## Validate data quality

```kusto
union isfuzzy=true SecurityEvent, Syslog, AzureActivity
| where TimeGenerated > ago(1h)
| summarize records = count(), latest = max(TimeGenerated) by Type
| order by latest desc
```

Adapt the table list to the connector under test. Do not treat a successful portal
wizard as validation; confirm the table, fields, freshness, and data ownership
through a query and a controlled source event.

## Connector operations

- Monitor connector health, authorization expiry, agent state, ingestion latency,
  and sudden volume changes.
- Version-control data collection rules, parsers, transformations, and connector
  configuration where the platform supports it.
- Assign a source owner who can investigate a logging outage and a Sentinel owner
  who can assess the detection impact.
- Retire connectors, forwarding rules, identities, and billing dependencies when
  an application or service is decommissioned.

## Business example

> A security operations center (SOC) wants to investigate suspicious cloud logins alongside network egress.
> It pilots the Entra and firewall connectors for one business unit, confirms that
> account and IP fields are queryable, and creates a single correlation rule. Only
> after the rule, incident routing, and daily volume are validated does the team
> onboard the remaining firewall estate.
