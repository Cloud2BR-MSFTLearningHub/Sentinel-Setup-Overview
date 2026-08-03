# Sentinel UEBA (user and entity behavior analytics) and Entity Behavior

Atlanta, USA (United States of America)

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS (open-source software) - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [UEBA (user and entity behavior analytics) in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/identify-threats-with-entity-behavior-analytics)
- [Entity pages and investigation](https://learn.microsoft.com/en-us/azure/sentinel/investigate-incidents)
- [Entity mapping for analytics rules](https://learn.microsoft.com/en-us/azure/sentinel/map-data-fields-to-entities)

</details>

[Back to the documentation hub](../index.md)

User and entity behavior analytics (UEBA) adds behavioral context to events by
building profiles for users, hosts, IP (Internet Protocol) addresses, and other entities. It improves
prioritization, but it does not replace raw event validation or a clear entity
mapping strategy.

## Prepare the data

- Onboard supported identity, endpoint, network, and activity sources with stable
  timestamps and source identifiers.
- Map account, host, IP (Internet Protocol), URL (Uniform Resource Locator), cloud application, and resource entities consistently
  in analytics rules.
- Resolve naming differences across systems before correlating them. A display
  name alone is not a reliable identity key.
- Restrict UEBA (user and entity behavior analytics) access and data handling to the same privacy and employment-policy
  standards that govern the underlying telemetry.

## Use behavior safely

| Signal | Analyst question |
| --- | --- |
| New sign-in pattern | Is the location, device, application, and time consistent with approved work? |
| Unusual process or network activity | Does the host role or change record explain the activity? |
| Anomalous data access | Is the data sensitivity and account privilege sufficient to escalate? |
| Entity relationship | Are the mapped entities authoritative, current, and correlated by stable identifiers? |

## Investigation workflow

1. Start with the behavior insight and affected entity.
2. Pivot to the raw events and source system that produced the signal.
3. Confirm account, device, IP (Internet Protocol), and time relationships with stable identifiers.
4. Consider business role, maintenance window, approved automation, and known
   changes before declaring malicious behavior.
5. Preserve the entity timeline, query, source records, decision, and response.

## Business example

> UEBA (user and entity behavior analytics) flags an administrator account logging in from a new device and accessing
> an unusual set of Azure resources. The analyst checks the change calendar and
> sees a planned migration, but the account is using a non-approved client app.
> The security operations center (SOC) escalates the identity check, confirms the client is unauthorized, and
> updates the Conditional Access policy after preserving the raw sign-in evidence.
