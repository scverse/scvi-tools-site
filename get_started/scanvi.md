---
id: scanvi
title: scANVI
sidebar_label: scANVI (scRNA-seq)
---

This page is under construction. For now, please learn more about scANVI in our [user guide](https://docs.scvi-tools.org/en/stable/user_guide/index.html).


```python
# scANVI augments scVI to transfer cell type labels
import anndata
import scvi

# read data and prepare for scvi-tools
# adata contains partially observed cell type labels in adata.obs["labels"]
# Unknown cells have the label "Unknown"
adata = anndata.read("my_data.h5ad")
scvi.data.setup_anndata(adata, batch_key="batch", labels_key="labels")
model = scvi.model.SCANVI(adata, "Unknown")
model.train()

# cell type predictions
adata.obs["predictions"] = model.predict()

# get integrated low-dimensional representation
adata.obsm["X_scanvi"] = model.get_latent_representation()

# normalized expression
adata.layers["scanvi_norm"] = model.get_normalized_expression()

# differential expression
results = model.differential_expression(
    groupby="cell types",
    group1="CD4",
    group2="CD8"
)
```