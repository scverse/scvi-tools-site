
---
slug: v13
title:      Scvi‑Tools v1.3: Next‑Gen Models, Scalable Data Handling & Core Enhancements
date:       2025‑07‑03
author: Ori Kronfeld
tags: [scvi-tools, release]
---
## Introduction

We’re proud to introduce **scvi‑tools v1.3** (releases 1.3.0 through 1.3.2), encompassing major advances in modeling, data loading, computational scalability, metric integration, and interpretability. This release spans nine new or enhanced models—tailored to spatial, cytometry, methylation, perturbation, and multi‑omic studies—alongside support for streaming large datasets, multi‑GPU training, scIB metric optimization, and integrated model explainability. Here’s a detailed walkthrough.

---

## 1. 🔬 New Models

### **ResolVI**  
ResolVI is a probabilistic model specifically designed to denoise cellular-resolution spatial transcriptomics by reallocating misassigned genes between true cells, neighbor-derived leakage, and background noise. It builds a mixture-of-Gaussians latent prior and reconstructs both corrected counts and embeddings. This approach is highly scalable (handling >1 million spots) and offers downstream capabilities like differential expression and transfer learning on corrected data :contentReference[oaicite:1]{index=1}.

---

### **scVIVA**  
scVIVA augments spatial transcriptomics analysis by jointly modeling each cell’s own expression and its micro-environmental context (neighborhood composition and gene counts). This niche-aware VAE embeds both cellular identity and environmental features, revealing tissue-specific patterns and environment-driven variation. Dedicated tutorials showcase how scVIVA enables niche-focused clustering and differential abundance analyses :contentReference[oaicite:2]{index=2}.

---

### **CytoVI**  
CytoVI adapts the totalVI architecture for cytometry and mass cytometry data, focusing on protein marker distribution and batch correction. By modeling dropout and technical variation intrinsic to protein measurements, CytoVI delivers embeddings optimized for clustering and differential abundance studies. Early tutorials already demonstrate clear delineation of immune subpopulations across batch-affected datasets.

---

### **VIVS**  
Variational Inference for Variable Selection (VIVS) identifies associations across modalities—such as gene–protein couplings—while rigorously controlling false discovery rates using conditional randomization. Demonstrated in Genome Biology, VIVS achieves interpretable and scalable feature selection, enabling discovery of biologically meaningful links in paired datasets :contentReference[oaicite:3]{index=3}.

---

### **SysVI**  
SysVI tackles challenging integration scenarios—such as reconciling data across species or organoid systems—by combining latent cycle-consistency with a VampPrior. Benchmarks show that SysVI outperforms prior approaches like scVI and Harmony by preserving biological variability while robustly aligning batch-specific effects :contentReference[oaicite:4]{index=4}.

---

### **Decipher**  
Decipher is tailored for perturbation studies (e.g., disease vs. control), learning a latent structure that separates shared from condition-specific signals. When applied to AML datasets, Decipher identifies known markers and distinct latent dimensions corresponding to disease status, supported by new tutorials and API references :contentReference[oaicite:5]{index=5}.

---

### **MethylVI**  
This VAE-based framework is devoted to single-cell bisulfite sequencing (scBS-seq) data. MethylVI models the probability of methylation at individual cytosine sites and learns an interpretable cell latent space. Its tutorial demonstrates that it outperforms PCA-based methods for consistent batch integration across multiple BS-seq experiments :contentReference[oaicite:6]{index=6}.

---

### **MethylANVI & totalANVI**  
These annotation-aware models integrate multi-omic modalities with supervised cell-type labeling. totalANVI extends totalVI to jointly model RNA and protein expression while learning cell-type labels. MethylANVI brings the same framework to methylation and RNA joint datasets. Both models support unified annotation, clustering, and differential testing under one model :contentReference[oaicite:7]{index=7}.

---

## 2. 🧩 Custom Dataloaders

v1.3 introduces three new **streaming dataloader backends**, allowing large or federated datasets to be handled efficiently without loading everything into memory:

### **LaminDB**  
Integrates with Lamindb, enabling out-of-core training from disk-backed collections. Users can register collections and seamlessly train models like SCVI, benefiting from disk efficiency while maintaining full API compatibility with in-memory datasets :contentReference[oaicite:8]{index=8}.

### **Census**  
Built on TileDB and optimized for atlas-scale data, Census dataloaders support streaming of massive datasets. The API mirrors LaminDB, promoting scalability without code changes in modeling pipelines :contentReference[oaicite:9]{index=9}.

### **AnnCollection**  
Allows training on multiple AnnData objects simultaneously, without merging them into one dataset. AnnCollection handles disparities in features or layers internally and aligns them during training, empowering federated or multi-study analyses—detailed in tutorial PR #450 :contentReference[oaicite:10]{index=10}.

---

## 3. ⚙️ Technical Enhancements

### Multi‑GPU Training  
Leveraging PyTorch Lightning, scvi‑tools now supports multi‑GPU training with simple API flags. Official examples demonstrate 2–3× throughput improvements on 1 million cell datasets, enabling practical training of massive single-cell models :contentReference[oaicite:11]{index=11}.

---

### scIB‑Metrics Optimization  
With the integration of `ScibCallback` and the `AutotuneExperiment` class, users can now monitor scIB metrics (like NMI and batch ARI) on the validation set during training and automatically tune hyperparameters (latent dimensions, learning rate) based on these metrics—directly optimizing for clustering and batch mixing performance :contentReference[oaicite:12]{index=12}.

---

### Explainability & Interpretability  
scvi‑tools now supports **Integrated Gradients** for many models, enabling gene-level attribution of latent features. Coupled with `get_normalized_expression` for batch‑corrected expression recovery, this framework allows researchers to interpret latent dimensions in terms of known gene drivers—offering transparency in deep generative modeling :contentReference[oaicite:13]{index=13}.

---

## Summary

scvi‑tools v1.3 stands as a landmark release across three domains:  
- **New generative models** suited to spatial, cytometry, multi‑omic, methylation, and perturbation data;  
- **Streaming dataloaders** (LaminDB, Census, AnnCollection) for large-scale or federated datasets;  
- **Core capabilities** including multi-GPU scaling, metric-driven hyperparameter tuning, and model interpretability.

Taken together, these enhancements empower scientists to efficiently build, interpret, and deploy deep single-cell workflows at previously unprecedented scale and clarity.

---

## References

- ResolVI spatial denoising tutorial & model description :contentReference[oaicite:14]{index=14}  
- scVIVA niche-aware spatial modeling tutorial :contentReference[oaicite:15]{index=15}  
- VIVS feature-selection in Genome Biology 2024 :contentReference[oaicite:16]{index=16}  
- SysVI, Decipher, and methylVI/ANVI model overview in user guide :contentReference[oaicite:17]{index=17}  
- Dataloader benchmarking and Lamindb/Census workflows :contentReference[oaicite:18]{index=18}  
- Multi-GPU & scIB metrics tutorials :contentReference[oaicite:19]{index=19}  
- Integrated Gradients and explainability tutorials :contentReference[oaicite:20]{index=20}  

