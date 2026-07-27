# Sentinel and Microsoft Defender Integration

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Connect Microsoft Defender XDR to Sentinel](https://learn.microsoft.com/en-us/azure/sentinel/connect-microsoft-365-defender)
- [Microsoft Sentinel in the Defender portal](https://learn.microsoft.com/en-us/azure/sentinel/microsoft-sentinel-defender-portal)
- [Microsoft Defender XDR overview](https://learn.microsoft.com/en-us/defender-xdr/microsoft-365-defender)

</details>

[Back to the documentation hub](../index.md)

Microsoft Defender extended detection and response (XDR) provides specialized detections and response across
Microsoft security workloads. Sentinel extends that capability with third-party
data, custom analytics, long-term data strategy, and security orchestration,
automation, and response (SOAR). Integrate them from a
defined incident and telemetry architecture, not simply because both products are
available.

## Decide what belongs where

| Need | Preferred starting point |
| --- | --- |
| Native endpoint, email, identity, or cloud-app investigation | Defender XDR |
| Cross-source correlation with firewall, custom app, or multicloud logs | Sentinel |
| Native Defender containment action | Defender XDR or workload portal |
| Multi-system orchestration, information technology service management (ITSM), or custom API response | Sentinel playbook |
| Long-term query or compliance requirement | Sentinel workspace design |

## Prevent duplicate operations

Choose the primary incident queue for every use case and document what
synchronizes, who assigns incidents, which portal responders use, and how status
changes are reconciled. Do not create a Sentinel analytic rule that merely repeats
a native Defender detection unless it adds a distinct cross-source condition.

## Validation pattern

1. Connect the supported Defender integration and confirm current prerequisites.
2. Generate an approved test alert from the underlying Defender workload.
3. Verify the alert and incident arrive once in the selected primary queue with
   expected entities and severity.
4. Verify ownership, status, comments, and automation do not create loops.
5. Test native containment and any Sentinel playbook separately with approvals.

## Business example

> Defender for Endpoint detects a malicious process, while Sentinel adds firewall
> and custom-application logs that show the device reached a sensitive backend.
> The security operations center (SOC) works the incident in the agreed primary queue, uses Defender to isolate
> the device, and uses a Sentinel playbook to create a network review ticket. The
> team disables a redundant Sentinel rule that had created a second incident from
> the same endpoint alert.
