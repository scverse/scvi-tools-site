______________________________________________________________________

## id: scvi title: Single-cell Variational Inference sidebar_label: scVI (scRNA-seq)

This page is under construction. For now, please learn more about scVI in our [user guide](https://docs.scvi-tools.org/en/stable/user_guide/index.html).

```python
# scVI is for end-to-end analysis of scRNA-seq data
import anndata
import scvi

# read data and prepare for scvi-tools
adata = anndata.read("my_data.h5ad")
scvi.data.setup_anndata(adata, batch_key="batch")
model = scvi.model.SCVI(adata)
model.train()

# get integrated low-dimensional representation
adata.obsm["X_scvi"] = model.get_latent_representation()

# normalized expression
adata.layers["scvi_norm"] = model.get_normalized_expression()

# differential expression
results = model.differential_expression(
    groupby="cell types", group1="CD4", group2="CD8"
)
```
