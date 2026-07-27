# Sentinel Migration and Portal Transition

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel in the Defender portal](https://learn.microsoft.com/en-us/azure/sentinel/microsoft-sentinel-defender-portal)
- [Migrate to Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/migration)
- [Microsoft Sentinel documentation](https://learn.microsoft.com/en-us/azure/sentinel/)

</details>

[Back to the documentation hub](../index.md)

Sentinel capabilities and portal experiences evolve. Treat a portal transition,
SIEM migration, or connector replacement as a controlled service change with an
inventory, parallel validation, responder training, and rollback plan.

## Build the migration inventory

Inventory workspaces, connectors, data collection rules, tables, transformations,
retention, analytic rules, watchlists, threat intelligence, workbooks, notebooks,
playbooks, managed identities, role assignments, integrations, incidents, and
external runbooks. Map each item to an owner, dependency, test, target state, and
rollback action.

## Transition safely

1. Confirm current product guidance, supported migration paths, and portal
   availability for your region and tenant.
2. Export or version-control custom content and configuration before changing it.
3. Pilot with representative data, alerts, entities, incidents, and automation.
4. Run the old and new paths in parallel when the use case requires continuity.
5. Compare data freshness, rule results, incident behavior, RBAC, and cost.
6. Train responders on the selected portal and update runbooks before cutover.
7. Decommission old integrations only after evidence, retention, and recovery
   requirements are satisfied.

## Acceptance criteria

- Required data reaches the expected tables with the expected schema and volume.
- Priority analytics and hunting queries return equivalent or intentionally
  improved results.
- Incidents retain correct entities, ownership, comments, and automation behavior.
- Privileged access, break-glass access, and audit trails are tested.
- Costs, retention, archive, exports, and legal obligations remain understood.

## Business example

> A SOC transitions Sentinel operations to the Defender portal. Before changing
> the responder workflow, it pilots high-severity incidents from Defender XDR,
> Entra, and a third-party firewall. The team verifies that assignments, comments,
> playbook approvals, and incident status remain consistent, updates analyst
> runbooks, and retires the old queue only after a two-week parallel review.
