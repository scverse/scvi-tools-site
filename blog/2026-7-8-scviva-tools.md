---
slug: scviva-tools
title:      Introducing scviva-tools, a unified toolkit for spatial transcriptomics
date:       2026-07-08
author:     Ori Kronfeld
tags: [scviva-tools, spatial, release]
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

We're excited to announce **scviva-tools**, a new spatial transcriptomics package built on top of `scvi-tools` that
consolidates seven previously separate spatial models into a single, consistently documented toolkit. If you've ever
had to juggle different APIs, installation instructions, and tutorial conventions for deconvolution, denoising, and
niche analysis, scviva-tools is meant to remove that friction.

<!--truncate-->

Version 0.1.6, released alongside `scvi-tools` v1.5.0, bundles:

- **scVIVA** — a niche-aware VAE that jointly models a cell's own expression and its microenvironment, disentangling
  cell-intrinsic from environment-driven variation.
- **ResolVI** — corrects segmentation errors, background contamination, and cell-size bias in cellular-resolution
  data (Xenium, MERFISH, CosMx).
- **DestVI** — multi-resolution deconvolution of spot-based data (e.g., Visium) into continuous cell-type
  compositions.
- **GimVI** — joint imputation of missing genes between scRNA-seq and spatial datasets.
- **Stereoscope** — a two-stage generative model for spot deconvolution.
- **Tangram** — maps single cells onto spatial coordinates via optimal transport-style alignment.
- **Harreman** — new in v0.1.5, infers spatially-resolved metabolic gene programs and cell-cell metabolic /
  ligand-receptor communication using local autocorrelation and spatial proximity graphs.

## Why a unified package?

Each of these models started life with its own API, its own docs, and its own release cadence — great for iterating
quickly, but hard for users trying to build an end-to-end spatial analysis pipeline. scviva-tools gives them:

- a single `pip install`,
- one consistent `scviva` namespace and AnnData-first API,
- a shared user guide, API reference, and 11 worked tutorials (one or more per model, plus preprocessing),
- shared infrastructure for GPU acceleration (via optional `rapids` extras) and `SpatialData`/`squidpy` interop.

## Getting started

```bash
pip install scviva-tools
# or, with spatial I/O and GPU acceleration
pip install "scviva-tools[spatial,rapids]"
```

```python
import scviva
import scanpy as sc

adata = sc.read_h5ad("my_xenium_data.h5ad")
scviva.model.ResolVI.setup_anndata(adata, layer="counts")
model = scviva.model.ResolVI(adata)
model.train()

adata.obsm["X_resolvi"] = model.get_latent_representation()
```

Swapping in scVIVA for niche-aware differential expression, or DestVI for Visium deconvolution, follows the same
pattern — setup, train, extract. See the [scviva-tools documentation](https://scviva-tools.readthedocs.io/en/latest/)
for the full API reference and tutorials for each model.

## What's next

scviva-tools is under active development. Already in progress:

- **DiagVI** — a cross-modality model bridging spatial transcriptomics and spatial proteomics, with two tutorials
  coming alongside its first release.
- **AMICI** — cell-cell interaction modeling.
- **VIVS** — spatial variable selection.
- **NOLAN** — niche detection.
- **Starfysh** — histology-based deconvolution.
- **SPARL** — spatial proteomics.
- **[CSDE](https://github.com/YosefLab/CSDE)** — under evaluation for inclusion as well.

Looking further out, expect standardized spatial benchmarking metrics (via [scIB-metrics](/ecosystem)) and
pre-trained reference models on public Xenium and Visium HD atlases.

The goal is for scviva-tools to become the default entry point for probabilistic spatial analysis in the scverse
ecosystem — please try it out, open issues, and let us know what you'd like to see next on
[GitHub](https://github.com/YosefLab/scviva-tools) or [Discourse](https://discourse.scvi-tools.org/).
