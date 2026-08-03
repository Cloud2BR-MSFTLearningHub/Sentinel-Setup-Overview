# Sentinel Multitenancy and Azure Lighthouse

Atlanta, USA (United States of America)

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS (open-source software) - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Manage multiple tenants in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/multiple-tenants-service-providers)
- [Azure Lighthouse overview](https://learn.microsoft.com/en-us/azure/lighthouse/overview)
- [Cross-workspace queries](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/cross-workspace-query)

</details>

[Back to the documentation hub](../index.md)

Multitenant Sentinel operations require a deliberate boundary for customer or
subsidiary data, administrative access, incident ownership, automation, and cost.
Azure Lighthouse can delegate management across tenants without creating standing
guest accounts in every customer environment.

## Choose the operating pattern

| Pattern | Use when | Main control |
| --- | --- | --- |
| Central security operations center (SOC), local workspaces | Residency or customer data boundaries must remain local | Lighthouse delegation and standardized content |
| Single tenant, many workspaces | Business units share a tenant but differ in data or cost ownership | Workspace role-based access control (RBAC) and cross-workspace query governance |
| Separate customer tenants | Managed security service operations | Customer-approved delegated authorizations and playbook boundaries |

## Design before onboarding

1. Define tenant, workspace, data-residency, and incident-ownership boundaries.
2. Create least-privilege Azure Lighthouse authorizations through reviewed
   templates and Entra groups.
3. Standardize tags, content deployment, naming, table ownership, and onboarding
   evidence across every managed workspace.
4. Define whether analysts work incidents locally, centrally, or through a
   connected information technology service management (ITSM) queue.
5. Test a cross-tenant investigation and the approved escalation path.

## Set up delegated management

1. In each customer or subsidiary tenant, identify the subscription, resource group, and Sentinel workspaces that can be delegated.
2. Create Microsoft Entra security groups for managed SOC (security operations center) roles and assign only the Azure built-in roles required for investigation, content management, and approved response.
3. Deploy the reviewed Azure Lighthouse registration definition and assignment from the managing tenant, with target scopes and authorizations explicitly listed.
4. In the managing tenant, sign in as a delegated analyst and confirm the target workspace appears with the intended read, incident, and content permissions.
5. Test a cross-tenant query and an incident assignment without performing a customer-impacting response action.
6. Record the customer approval, delegation identifier, authorized groups, review date, and offboarding procedure.

## Automation boundaries

Do not assume a central playbook can act in every customer or tenant context.
Managed identities, API (application programming interface) permissions, Key Vault secrets, approval channels, and
network reachability must be designed for each target scope. Keep customer-impacting
actions behind explicit approval unless a documented service agreement authorizes
automatic response.

## Operating evidence

Retain the delegation definition, authorized groups, target scopes, customer
approval, content version, connector health, incident assignment, playbook result,
and offboarding record. Review every delegation and external identity on a fixed
schedule.

## Business example

> A managed SOC (security operations center) supports three subsidiaries with separate tenants and residency
> requirements. Each subsidiary retains its own Sentinel workspace and data. Azure
> Lighthouse gives the SOC (security operations center) read and incident-management access, while the local
> identity team retains account-disable authority. A cross-tenant query provides
> trend reporting, but incidents stay owned by the subsidiary that operates the
> affected identity.
