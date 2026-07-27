# Sentinel Automation and Playbooks

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Automation in Microsoft Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/automation/automation)
- [Automate threat responses with playbooks](https://learn.microsoft.com/en-us/azure/sentinel/automation/automate-responses-with-playbooks)
- [Logic Apps security](https://learn.microsoft.com/en-us/azure/logic-apps/logic-apps-securing-a-logic-app)

</details>

[Back to the documentation hub](../index.md)

Automation rules decide when Sentinel performs an action; playbooks implement the
workflow through Azure Logic Apps. Use them to reduce repetitive triage and enrich
evidence, but do not let an alert title alone authorize an action that can disrupt
users, workloads, or evidence.

## Automation ladder

| Level | Examples | Authority requirement |
| --- | --- | --- |
| Notify | Assign owner, send a secure notification, create a ticket | Pre-approved |
| Enrich | Look up asset owner, threat intelligence, or change record | Pre-approved and auditable |
| Contain | Disable account, isolate device, block IP, revoke key | Explicit approval or documented automation authority |
| Destructive | Delete resource, purge data, remove mailbox content | Human approval and recovery plan |

## Build a safe playbook

1. Define trigger, inputs, expected result, retries, timeout, and owner.
2. Use a dedicated managed identity with least privilege for each integration.
3. Normalize incident and entity data before calling downstream systems.
4. Make actions idempotent so a duplicate trigger does not create duplicate harm.
5. Log input, output, approval, failure, rollback, and incident update.
6. Test in a non-production environment and with a controlled alert.
7. Add approval for disruptive actions and verify the manual fallback path.

## Operate playbooks

Monitor run failures, connector authorization, API limits, secret expiry, latency,
and cost. Version-control playbook definitions and document every privileged
connection. Re-test after a connector, identity, incident schema, or downstream
API changes.

## Business example

> A high-severity incident indicates a possible compromised cloud identity. An
> automation rule enriches the incident with account owner and recent privileged
> actions, then sends an approval request to the identity responder. On approval,
> a playbook revokes sessions and creates an IT service management (ITSM) task. If approval expires, the
> playbook records the outcome and escalates without changing the account.
