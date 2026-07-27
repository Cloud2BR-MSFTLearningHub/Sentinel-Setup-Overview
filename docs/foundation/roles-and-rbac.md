# Sentinel Roles and Role-Based Access Control (RBAC)

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel roles and permissions](https://learn.microsoft.com/en-us/azure/sentinel/roles)
- [Azure role-based access control](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview)
- [Manage access to Log Analytics workspaces](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/manage-access)

</details>

[Back to the documentation hub](../index.md)

Sentinel role-based access control (RBAC) must let people investigate and respond without giving every analyst
permission to change data collection, rules, automation, or billing. Use Azure
RBAC at the narrowest scope that supports the operating model.

## Separate responsibilities

| Role | Typical responsibilities | Avoid by default |
| --- | --- | --- |
| Security operations center (SOC) analyst | Read incidents, investigate entities, run approved queries | Connector, rule, and playbook changes |
| SOC lead | Assign incidents, tune approved content, review metrics | Subscription-wide ownership |
| Detection engineer | Build queries, analytics, workbooks, and content packages | Production response authority without approval |
| Platform engineer | Configure workspace, connectors, network, and retention | Routine incident closure |
| Automation owner | Maintain playbooks and managed identities | Unreviewed destructive response actions |
| Auditor | Read evidence, configuration, and logs | Any mutation permissions |

## Design the access model

1. Inventory workspace, resource-group, subscription, and tenant scopes.
2. Map each operational persona to built-in roles and only add custom roles for a
   demonstrated least-privilege gap.
3. Use Entra groups and Privileged Identity Management for privileged access.
4. Separate data-query access from content-management and playbook-edit access.
5. Grant automation identities only the permissions required by their actions.
6. Test the portal, API, KQL, incident, and playbook actions for each persona.

## Critical controls

- Limit who can enable connectors, change data transformations, or alter
  retention because those changes can affect detection and cost.
- Limit who can edit automation rules and playbooks because they can alter
  containment and notification outcomes.
- Use resource locks and change control for production workspaces where policy
  allows, while preserving an approved emergency change process.
- Review group membership, inactive accounts, service principals, and privileged
  role activations on a scheduled basis.

## Evidence to retain

Record the role assignment, scope, business purpose, approver, start and expiry
date, group owner, and periodic review result. For incident actions, preserve the
actor, timestamp, incident ID, action taken, approval evidence, and outcome.

## Business example

> A security operations center (SOC) analyst can investigate a high-severity incident and run Kusto Query Language (KQL) in the
> production workspace, but cannot edit a playbook that blocks a user. The analyst
> requests containment through the incident workflow; a designated identity
> responder activates a time-bound role, approves the action, and the playbook
> records the approval and execution result in the case.
