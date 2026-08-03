# Sentinel Analytics Rules

Atlanta, USA (United States of America)

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS (open-source software) - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Analytics rules in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/detect-threats-built-in)
- [Create custom analytics rules](https://learn.microsoft.com/en-us/azure/sentinel/detect-threats-custom)
- [Map data fields to entities](https://learn.microsoft.com/en-us/azure/sentinel/map-data-fields-to-entities)

</details>

[Back to the documentation hub](../index.md)

Analytics rules turn telemetry into actionable alerts. Kusto Query Language (KQL)
queries provide the detection logic. A reliable rule has a
defined threat hypothesis, source-data contract, tested query, entity mapping,
severity, suppression behavior, owner, and response path.

## Choose the rule type

| Rule type | Use for | Primary check |
| --- | --- | --- |
| Scheduled | Repeatable KQL (Kusto Query Language) detections over retained data | Query period, frequency, and lookback overlap |
| Near-real-time | Supported high-value streams requiring low delay | Stream support and response readiness |
| Fusion | Correlation of supported alerts and signals | Underlying data and incident model |
| Microsoft security | Native product detections integrated into Sentinel | Primary incident queue and duplicate handling |
| Anomaly | Behavioral deviations with enough baseline data | Analyst validation and false-positive tolerance |

## Build a detection

1. Write the threat hypothesis and expected responder action before the KQL (Kusto Query Language).
2. Validate the table schema, data freshness, field quality, and retention.
3. Develop a narrow query using a controlled time window and projected fields.
4. Map entities using stable identifiers, not display names alone.
5. Set severity, tactics, alert grouping, suppression, and incident behavior.
6. Test with benign or approved simulation data and document the expected result.
7. Deploy through source control and monitor quality after release.

## Query example

Detect an unusual number of failed Entra sign-ins from one source address:

```kusto
SigninLogs
| where TimeGenerated > ago(1h)
| where ResultType != "0"
| summarize failures = count(), accounts = make_set(UserPrincipalName, 20)
    by IPAddress, bin(TimeGenerated, 15m)
| where failures > 25
| order by failures desc
```

Tune the threshold with observed baseline data, then map `IPAddress` and account
fields to entities. Do not treat this sample threshold as a universal password
spray detection.

## Production controls

- Record data tables, query version, frequency, lookback, grouping, and owner.
- Test schema changes, connector outages, parser changes, and retention changes
  against dependent rules.
- Set an expiry for temporary suppressions and document the accepted risk.
- Review false positives, misses, volume, and mean time to triage regularly.
- Keep native Defender detections and custom Sentinel rules distinct unless the
  custom rule adds unique correlation value.

## Business example

> An identity team needs to detect password-spray behavior without alerting on a
> known test service. The detection engineer baselines failed sign-ins, maps IP (Internet Protocol) and
> account entities, and pilots the rule with the service-account range suppressed
> through an expiring watchlist entry. After security operations center (SOC) review, the rule creates a
> high-severity incident only when the affected accounts include privileged users.
