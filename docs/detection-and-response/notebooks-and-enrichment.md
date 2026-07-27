# Sentinel Notebooks and Advanced Enrichment

Atlanta, USA

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[Cloud2BR OSS - Learning Hub](https://github.com/Cloud2BR-MSFTLearningHub)

Last updated: 2026-07-27

----------

<details markdown>
<summary>References</summary>

- [Microsoft Sentinel notebooks](https://learn.microsoft.com/en-us/azure/sentinel/notebooks)
- [Investigate with notebooks](https://learn.microsoft.com/en-us/azure/sentinel/notebooks)
- [Azure Machine Learning security](https://learn.microsoft.com/en-us/azure/machine-learning/concept-enterprise-security)

</details>

[Back to the documentation hub](../index.md)

Notebooks support advanced investigation, visualization, enrichment, and data
science workflows. They are powerful but introduce code, package, credential,
compute, and data-export risks that require the same governance as production
automation.

## Use notebooks for the right work

| Need | Better fit |
| --- | --- |
| Repeatable real-time detection | Analytics rule |
| Deterministic response action | Playbook with approval controls |
| One-off complex investigation | Notebook |
| Exploratory analysis or visualization | Notebook or workbook |
| Long-lived enrichment service | Managed, reviewed application or function |

## Secure the notebook environment

- Use approved compute, network paths, identities, package sources, and data
  handling controls.
- Do not embed secrets in notebooks. Use managed identities and approved secret
  retrieval where supported.
- Version-control notebooks, dependencies, parameters, and expected outputs.
- Restrict who can execute, modify, export, or share notebooks with sensitive
  investigation data.
- Record external enrichment calls, terms of use, privacy impact, and fallback
  behavior before sending telemetry outside the approved boundary.

## Investigation pattern

1. Start from an incident ID or saved KQL result with a defined question.
2. Use parameters for time range, tenant, workspace, entities, and indicators.
3. Enrich with approved sources and retain the source and confidence of each result.
4. Export only the minimum evidence needed for the case.
5. Save conclusions, notebook version, parameters, and output reference in the
   incident or ticket.

## Business example

> An analyst uses a versioned notebook to visualize all authentication, endpoint,
> and network events for a suspected compromised host. The notebook obtains data
> with a managed identity, queries a pre-approved threat-intelligence API, and
> saves only a summarized evidence report to the case. The SOC later promotes the
> validated enrichment logic into a governed playbook rather than leaving it as an
> analyst-specific script.
