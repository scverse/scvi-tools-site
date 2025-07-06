---
slug: v13
title:      scvi-tools 1.3 release
date:       2025-07-03
author: Ori Kronfeld, Can Ergen, Nir Yosef
tags: [scvi-tools, release]
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Introduction

We’re proud to introduce scvi‑tools v1.3, encompassing major advances in modeling, data loading, computational scalability, metric integration, and interpretability in single-cell analytics. 

Featuring nine new or enhanced models, optimized for spatial, cytometry, methylation, perturbation, and multi‑omic data, it also introduces streaming data loaders for large-scale datasets, multi‑GPU model training, on-the-fly metric tuning, and integrated model interpretability. 

This article delves into each enhancement with depth, including detailed insights, illustrative figures, and manuscript references.

---

## 1. 🔬 New Models

### ResolVI
ResolVI[^1] is a spatial transcriptomics denoising model that reallocates mis-assigned gene counts among true cells, neighborhood leakage, and background. It employs a Gaussian-mixture latent prior to learn corrected counts and interpretable embeddings. This approach is highly scalable (handling >1 million spots) and offers downstream capabilities like differential expression and transfer learning on corrected data

In [tutorial](https://docs.scvi-tools.org/en/stable/tutorials/notebooks/spatial/resolVI_tutorial.html), it has been shown to markedly enhance spatial expression accuracy in noisy segmentation settings, enabling reliable differential expression especially in high-throughput ST datasets.  

<img alt="ResolVI" width="100%" src={useBaseUrl('img/blog-post-scvi-tools-1p3/resolvi.png')}/>

Figure 1: ResolVI cell type annotations based on noisy cellular segmentation Xenium data of a mouse brain. The left hemisphere for model training and the right hemisphere for transfer mapping. 

---

### scVIVA
scVIVA[^2] augments spatial transcriptomics analysis by jointly modeling each cell’s own expression and its micro-environmental context (neighborhood composition and gene counts). This niche-aware VAE embeds both cellular identity and environmental features, revealing tissue-specific patterns and environment-driven variation. Its latent embeddings delineate tissue-specific structures - ideal for spatial differential abundance or niche-focused clustering studies.

Dedicated [tutorial](https://docs.scvi-tools.org/en/stable/tutorials/notebooks/spatial/scVIVA_tutorial.html) showcase how scVIVA enables niche-focused clustering and differential abundance analyses

<img alt="scVIVA" width="100%" src={useBaseUrl('img/blog-post-scvi-tools-1p3/scviva.png')}/>

Figure 2: scVIVA results: median Log-Fold Change (LFC) of upregulated genes in $\textit{G1}$ vs $\textit{G2}$ displayed on the x-axis, while we compare differential expression computed between $\textit{N1}$  and $\textit{G2}$ on the y-axis.
Genes are colored by their marker label (yellow=significantly upregulated in $\textit{G1}$ vs $\textit{N1}$, green otherwise).
We also display the classifier decision boundary (the predicted probability of being in the yellow class). 

---

### CytoVI
CytoVI[^3] brings totalVI-inspired modeling to cytometry and mass cytometry data. It models protein-marker distributions, corrects for dropouts and technical batch variation, and generates embeddings for downstream clustering and abundance inference. 

Early [tutorial](https://docs.scvi-tools.org/en/stable/tutorials/notebooks/cytometry/CytoVI_tutorial.html) already demonstrate clear delineation of immune subpopulations across batch-affected datasets.

---

### VIVS
Variational Inference for Variable Selection (VIVS[^4]) identifies associations across modalities such as gene–protein couplings—while rigorously controlling false discovery rates using conditional randomization. VIVS achieves interpretable and scalable feature selection, enabling discovery of biologically meaningful links in paired datasets

Tutorial in scvi-tools soon to be updated.

---

### SysVI
SysVI[^5] tackles major batch effects, such as those arising from cross-species or organoid-versus-tissue studies—using latent cycle-consistency and VampPrior regularization. Compared to Harmony or regular scVI models, SysVI excels at aligning technical systems while preserving true biological variance, producing embedding spaces where analogous cell types across batches cluster coherently.

in the [tutorial](https://docs.scvi-tools.org/en/stable/tutorials/notebooks/scrna/sysVI.html), we show the power of sysVI with data integration between human and mouse immune cells.

<img alt="sysvi" width="100%" src={useBaseUrl('img/blog-post-scvi-tools-1p3/sysvi.png')}/>

Figure 3: Example results of integration between human and mouse immune cells 

---

### Decipher
Decipher[^6] Designed to dissect perturbation effects (e.g., disease versus control), Decipher disentangles shared and condition-specific variation within a VAE framework. [Demonstrated](https://docs.scvi-tools.org/en/stable/tutorials/notebooks/scrna/decipher_tutorial.html) on AML (acute myeloid leukemia) data, it uncovers latent axes aligning with known disease signatures and identifies corresponding differentially expressed markers - bridging latent space analysis and functional biology.

---

### MethylVI
MethylVI[^7] is a VAE tailored for single-cell bisulfite sequencing (scBS‑seq). By modeling methylation probabilities at genomic regions, it captures epigenetic heterogeneity and learns latent spaces that integrate multiple batches. [Tutorial](https://docs.scvi-tools.org/en/stable/tutorials/notebooks/scbs/MethylVI_batch.html) show it outperforms linear methods like PCA in retaining biologically meaningful methylation structures.

<img alt="methylvi" width="100%" src={useBaseUrl('img/blog-post-scvi-tools-1p3/methylvi.png')}/>

Figure 4: MethylVI integration of celltypes from different single-cell bisulfite sequencing platforms

---

### MethylANVI
MethylANVI extends the MethylVI framework with annotation-aware modeling: it jointly integrates methylation profiles with metadata-driven cell-type labels. This supervised model supports both clustering and label transfer, all while capturing latent biological variation across methylome profiles, ideal for epigenetic atlas-building.

---

### totalANVI
totalANVI brings supervised annotation to CITE‑seq-style multi-omic integration. Leveraging a VAE for RNA + protein, it jointly learns latent embeddings and cell-type classifiers. The model simultaneously performs dimensionality reduction, denoising, differential expression, and accurate cell-type annotation in one cohesive model.

Tutorial in scvi-tools soon to be updated.


---

## 2. 🧩 Custom Dataloaders

scvi‑tools v1.3 introduces three scalable custom dataloaders: LaminDB, Census, and AnnCollection, enabling out-of-core and federated training without memory overload.
Custom Dataloders are only supported in SCVI & SCANVI models, but it should be easy to expand them to other models.

### LaminDB 
Integrates with [Lamindb](https://lamin.ai/), enabling out-of-core training from disk-backed collections. Users can register collections and seamlessly train models like SCVI using lamin's MappedCollection, benefiting from disk efficiency while maintaining full API compatibility with in-memory datasets. For more inforamtion see this [link](https://docs.scvi-tools.org/en/stable/user_guide/use_case/custom_dataloaders.html).

The next [tutorial](https://docs.scvi-tools.org/en/stable/tutorials/notebooks//use_cases/custom_dl/lamin.html) shows demonstration of a scalable approach to training an scVI model on PBMC data using Lamin dataloader

<img alt="lamin" width="100%" src={useBaseUrl('img/blog-post-scvi-tools-1p3/lamin.png')}/>

Figure 5: SCVI Integration achieved using LaminDB dataloader, on 2 distinct PBMC data.

---
### Census 
employs [TileDB-SOMA](https://www.tiledb.com/) for atlas-scale tensor-backed data, offering similar streaming capabilities but enhanced support for multi-dimensional genomic inputs and federated study designs.
This custom dataloder directly read cellXgene dataset from S3 and train the SCVI model without the need to first download it, thus very suitable for few shots learning.

The next [tutorial](https://docs.scvi-tools.org/en/stable/tutorials/notebooks//use_cases/custom_dl/tiledb.html) shows demonstration of a scalable approach to training an scVI model on mus_musculus data using the Census dataloader

<img alt="census" width="100%" src={useBaseUrl('img/blog-post-scvi-tools-1p3/census.png')}/>

Figure 6: SCVI Cell Integration achieved using Census dataloader, based on 4 type of batches: dataset_id, donor_id, assay and tissue_general

---
### AnnCollection 
allows seamless union of multiple AnnData sources, perfect for interfacing independent experiments, without manual concatenation or feature alignment. The system handles missing modalities and automatically harmonizes variables across datasets.

---
These backends support full compatibility with scvi‑tools' data registration and training workflows, offering both scale and convenience to large projects.

---

## 3. ⚙️ Core Enhancements

### Multi‑GPU Training  
Built on PyTorch Lightning, v1.3 empowers all major models (SCVI, totalVI, SysVI, etc.) to run across multiple GPUs with a single API flag. Training benchmarks on million-cell datasets show training times reduced by 2–3×, with full gradient synchronization and no code modifications needed.

---

### scIB‑Metrics Optimization  
scvi‑tools now integrates evaluation of scIB clustering metrics (like NMI and batch ARI) during training via `ScibCallback`, and supports hyperparameter tuning via `AutotuneExperiment`. This enables scientists to automatically optimize latent dimension size, learning rate, or architecture based on validation performance, making the model training process more principled and outcome-driven.

---

### Explainability & Interpretability  
v1.3 brings native support for **Integrated Gradients** (IG) across generative models like CondSCVI, peakVI, and totalVI. Users can compute gene-level attribution scores tied to latent dimensions or differential axes. This complements `get_normalized_expression`, delivering a full pipeline that links model representations back to biologically interpretable molecular mechanisms.

---

## Summary

scvi‑tools v1.3 is a landmark release that advances the field across three foundational pillars:

1. **Innovative modeling** across nine tailored VAEs for spatial, protein, methylation, perturbation, and multi‑omic data.

2. **Scalable data processing** with three new streaming backends, enabling efficient handling of federated, atlas-scale datasets.

3. **Infrastructure and transparency** with multi-GPU training, metric-aware tuning, and demonstrable model interpretability.

Together, these developments empower researchers to build, train, and interpret probabilistic models at scale—in a reproducible, transparent, and biologically meaningful way.

---

## References

[^1]: ResolVI: addressing noise and bias in spatial transcriptomics / Ergen et al.
[^2]: scVIVA: a probabilistic framework for representation of cells and their environments in spatial transcriptomics / Levy et al.
[^3]: CytoVI: Deep generative modeling of antibody-based single cell technologies / Ingelfinger et al.
[^4]: VI-VS: calibrated identification of feature dependencies in single-cell multiomics / Boyeau et al.
[^5]: sysVI: Integrating single-cell RNA-seq datasets with substantial batch effects / Hrovatin et al.
[^6]: Decipher: Joint representation and visualization of derailed cell states with Decipher / Nazaret et al.
[^7]: MethylVI: A deep generative model of single-cell methylomic data / Weinberger et al.
