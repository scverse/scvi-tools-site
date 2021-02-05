const snippets = [
    {
        label: "scVI",
        code: `# scVI is for end-to-end analysis of scRNA-seq data
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
results = model.differential_expression(groupby="cell types", group1="CD4", group2="CD8")`,
    },
    {
        label: "scANVI",
        code: `# scANVI augments scVI to transfer cell type labels
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
results = model.differential_expression(groupby="cell types", group1="CD4", group2="CD8")`,
    },
    {
        label: "totalVI",
        code: `# totalVI is for end-to-end analysis of CITE-seq data
import anndata
import scvi

# read data and prepare for scvi-tools
adata = anndata.read("my_data.h5ad")
scvi.data.setup_anndata(adata, protein_expression_obsm_key="proteins")
model = scvi.model.TOTALVI(adata)
model.train()

# get integrated low-dimensional representation
adata.obsm["X_scvi"] = model.get_latent_representation()

# normalized expression
adata.layers["totalvi_norm"] = model.get_normalized_expression()

# differential expression
results = model.differential_expression(groupby="cell types", group1="CD4", group2="CD8")`,
    },
];

export default snippets;
