const snippets = [
    {
        label: "Train scVI",
        code: `import anndata
import scvi

adata = anndata.read("my_data.h5ad")
scvi.data.setup_anndata(adata, batch_key="batch")
model = scvi.model.SCVI(adata)
model.train()
adata.obsm["X_scvi"] = model.get_latent_representation()`,
    },
    {
        label: "Train totalVI",
        code: `import scvi
scvi.data.setup_anndata(adata, protein_expression_obsm_key="proteins")
model = scvi.model.TOTALVI(adata)
model.train()
adata.obsm["X_totalvi"] = model.get_latent_representation()`,
    },
];

export default snippets;
