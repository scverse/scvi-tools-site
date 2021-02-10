---
id: totalvi
title: Total Variational Inference
sidebar_label: totalVI (CITE-seq)
---

```python
# totalVI is for end-to-end analysis of CITE-seq data
import anndata
import scvi

# read data and prepare for scvi-tools
adata = anndata.read("my_data.h5ad")
scvi.data.setup_anndata(adata, protein_expression_obsm_key="proteins")
model = scvi.model.TOTALVI(adata)
model.train()

# get integrated low-dimensional representation
adata.obsm["X_totalvi"] = model.get_latent_representation()

# normalized expression
adata.layers["totalvi_norm"], adata.obsm["totalvi_pro_norm"] = model.get_normalized_expression()

# differential expression
results = model.differential_expression(
    groupby="cell types",
    group1="CD4",
    group2="CD8"
)
```