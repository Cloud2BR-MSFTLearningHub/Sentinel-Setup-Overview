# Sentinel Threat Intelligence and Watchlists

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Threat intelligence in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/understand-threat-intelligence)
- [Watchlists in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/watchlists)
- [Threat intelligence data connectors](https://learn.microsoft.com/en-us/azure/sentinel/connect-threat-intelligence-tip)

</details>

[Back to the documentation hub](../index.md)

Threat intelligence adds external indicators and context to Sentinel detections.
Watchlists provide curated business context such as approved admin hosts, VIP
accounts, known scanner ranges, or asset classifications. Neither is trustworthy
without source, expiry, ownership, and quality controls.

## Use the right mechanism

| Need | Use | Control |
| --- | --- | --- |
| Structured malicious indicators with confidence and expiry | Threat intelligence | Source validation, indicator age, confidence, and revocation |
| Small, curated organizational reference data | Watchlist | Named owner, schema, review date, and import validation |
| Fast-changing operational state | Source table or automation output | Freshness and access controls |

## Threat-intelligence lifecycle

1. Approve feeds based on relevance, licensing, volume, and data handling.
2. Validate indicator type, confidence, expiration, source, and duplication.
3. Pilot matching logic in observation mode to measure false positives.
4. Enrich alerts with indicator context rather than automatically blocking on an
   unverified feed.
5. Expire stale indicators and monitor feed health, authorization, and volume.

## Watchlist design

Use a stable schema and a single owner. Include an identifier, value, category,
business purpose, source, last review date, and expiry where appropriate. Do not
use a watchlist as a secrets store or an unmanaged substitute for an asset or
identity management system.

## KQL example

Correlate outbound network events with a reviewed watchlist of protected hosts:

```kusto
_GetWatchlist("ProtectedHosts")
| project Host = tostring(SearchKey), BusinessOwner, Criticality
| join kind=inner (
    CommonSecurityLog
    | where TimeGenerated > ago(24h)
    | project SourceHostName, DestinationIP, DeviceAction, TimeGenerated
) on $left.Host == $right.SourceHostName
| project TimeGenerated, Host, Criticality, DestinationIP, DeviceAction, BusinessOwner
```

## Business example

> A security team receives a third-party IP feed and a watchlist of approved
> vulnerability scanners. It first runs indicator matches in observation mode and
> excludes only scanner traffic with an owner and expiry. Once analysts confirm the
> remaining matches are actionable, they create an incident rule that enriches
> rather than automatically blocks the source address.
