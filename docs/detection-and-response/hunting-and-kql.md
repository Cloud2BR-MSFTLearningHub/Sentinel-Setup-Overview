# Sentinel Hunting and Kusto Query Language (KQL)

Atlanta, USA (United States of America)

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS (open-source software) - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Hunt threats with Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/hunting)
- [Kusto Query Language overview](https://learn.microsoft.com/en-us/kusto/query/)
- [Optimize Log Analytics queries](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/query-optimization)

</details>

[Back to the documentation hub](../index.md)

Threat hunting starts with a falsifiable hypothesis, not a broad search. Kusto Query Language (KQL) should
answer a concrete question, identify the required evidence, and lead to a defined
next action if it finds a match.

## Hunting workflow

1. Write the hypothesis, affected assets, relevant time range, and expected signal.
2. Identify the tables, parsers, watchlists, and entity fields needed.
3. Start with narrow filters and `project` only the columns needed.
4. Validate results against known-good activity and source-system evidence.
5. Save the query with owner, purpose, assumptions, and follow-up action.
6. Convert a stable, high-value query into an analytic rule only after testing.

## Advanced hunting example

Find successful sign-ins immediately following a burst of failed attempts from
the same address:

```kusto
let failed = SigninLogs
    | where TimeGenerated > ago(24h)
    | where ResultType != "0"
    | summarize failures = count() by IPAddress, bin(TimeGenerated, 15m)
    | where failures > 20;
SigninLogs
| where TimeGenerated > ago(24h)
| where ResultType == "0"
| join kind=inner failed on IPAddress
| project TimeGenerated, UserPrincipalName, IPAddress, AppDisplayName, failures
| order by TimeGenerated desc
```

## Query quality controls

- State a time range in every production query; avoid unbounded scans.
- Filter early, use explicit projections, and avoid large joins without an
  understood cardinality and business purpose.
- Preserve query text, parameters, execution time, result reference, and analyst
  conclusion when a hunt becomes incident evidence.
- Verify table schema, connector status, and retention before deciding that no
  results mean no activity.
- Restrict hunt access and exports according to the sensitivity of the data.

## Business example

> A threat report identifies a suspicious IP (Internet Protocol) range. The security operations center (SOC) uses a watchlist to
> search sign-in, firewall, and cloud-app tables over seven days, then validates
> the matches with source owners. The hunt finds a legitimate vendor range that
> needs an exception and one unapproved account login that becomes an incident.
> The final query and review evidence are retained with the detection proposal.
