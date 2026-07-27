# Microsoft Sentinel Setup and Overview Hub

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<div class="sentinel-hero" markdown>

<p class="sentinel-hero__eyebrow">Cloud2BR OSS Learning Hub</p>

## Microsoft Sentinel

Build a security operations platform for collecting telemetry, detecting threats,
investigating incidents, and coordinating response across cloud and hybrid
environments.

</div>

<div class="guide-grid">
  <a class="guide-card" href="00-overview/">
    <span class="guide-card__label">Start here</span>
    <h2>What is Microsoft Sentinel?</h2>
    <p>Understand Sentinel's SIEM, SOAR, data, and incident-management boundaries.</p>
  </a>
  <a class="guide-card" href="foundation/architecture-and-workspace/">
    <span class="guide-card__label">Foundation</span>
    <h2>Architecture and workspace</h2>
    <p>Design workspace, tenant, network, retention, and access boundaries before ingestion.</p>
  </a>
  <a class="guide-card" href="data-and-content/data-connectors/">
    <span class="guide-card__label">Data</span>
    <h2>Data connectors</h2>
    <p>Connect only the signals that support a defined detection or investigation use case.</p>
  </a>
  <a class="guide-card" href="detection-and-response/analytics-rules/">
    <span class="guide-card__label">Detection</span>
    <h2>Analytics rules</h2>
    <p>Create scheduled, near-real-time, and fusion detections with tested entity mappings.</p>
  </a>
  <a class="guide-card" href="detection-and-response/hunting-and-kql/">
    <span class="guide-card__label">Investigation</span>
    <h2>Hunting and KQL</h2>
    <p>Turn hypotheses into reliable queries, notebooks, and custom detection content.</p>
  </a>
  <a class="guide-card" href="operations/deployment-checklist/">
    <span class="guide-card__label">Deployment</span>
    <h2>Deployment checklist</h2>
    <p>Track evidence-backed readiness from pilot design through operating handoff.</p>
  </a>
</div>

## Choose the first guide

| Need | Start with |
| --- | --- |
| Design an environment and workspace model | [Architecture and workspace](foundation/architecture-and-workspace.md) |
| Establish least-privilege operational access | [Roles and RBAC](foundation/roles-and-rbac.md) |
| Onboard Microsoft or third-party telemetry | [Data connectors](data-and-content/data-connectors.md) |
| Create or tune detections | [Analytics rules](detection-and-response/analytics-rules.md) |
| Build responder playbooks | [Automation and playbooks](detection-and-response/automation-and-playbooks.md) |
| Plan costs, retention, and archival | [Data lifecycle and cost](foundation/data-lifecycle-and-cost.md) |

## Use the Hub

Start with architecture and roles, then onboard a small data set for a defined
use case. Validate connector health, data quality, analytics, entities, incident
routing, and automation with a controlled test before increasing scope. Each guide
identifies boundaries, evidence, and operational ownership to make the rollout
repeatable.

<p class="site-note">These guides are learning material. Confirm current support, pricing, and service behavior in Microsoft's official documentation before production use.</p>
