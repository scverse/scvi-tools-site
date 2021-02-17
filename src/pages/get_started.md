# Get Started

`scvi-tools` (single-cell variational inference tools) is a package for probabilistic modeling of single-cell omics data, built on top of PyTorch and AnnData. The package hosts implementations of models that perform a wide range of single-cell data analysis tasks, as well as the building blocks to rapidly prototype new probabilstic models.

## Basic installation

`scvi-tools` can be installed with `pip` or `conda`:

```
pip install scvi-tools
```

```
conda install scvi-tools -c bioconda -c conda-forge
```

To leverage a GPU for inference, a version of [PyTorch](https://pytorch.org/get-started/locally/) that supports your GPU will need to be installed separately.

## Analysis of single-cell data

`scvi-tools` hosts implementations of the following models:

### scRNA-seq

- [scVI](https://rdcu.be/bdHYQ) for analysis of single-cell RNA-seq data, as well as its improved [differential expression framework](https://www.biorxiv.org/content/biorxiv/early/2019/10/04/794289.full.pdf).
- [scANVI](https://www.embopress.org/doi/full/10.15252/msb.20209620) for cell annotation of scRNA-seq data using semi-labeled examples.
- [LDVAE](https://academic.oup.com/bioinformatics/article/36/11/3418/5807606) for an interpretable linear factor model version of scVI.

### CITE-seq

- [totalVI](https://www.nature.com/articles/s41592-020-01050-x.epdf?sharing_token=F_xpBUwgD5vHVAB5jvU0c9RgN0jAjWel9jnR3ZoTv0NDA6nPyssLQkWDcY8VB7gLKdlD8q3cqpF5ovLZjZTudaweTnzODEXCrkjJ2UJEEpOAhfOCwEZ0h0Y2WTkn_GOBfGUZhH-lzX_u_AswArGFGinU1pcuXPvuTkPrrQI4zko%3D) for analysis of CITE-seq data.

### Spatial transcriptomics

- [Steroscope](https://www.nature.com/articles/s42003-020-01247-y) for deconvolution of spatial transcriptomics data.
- [gimVI](https://arxiv.org/pdf/1905.02269.pdf) for imputation of missing genes in spatial transcriptomics from scRNA-seq data.


## Resources

- Tutorials, API reference, and advanced installation guides are available in the [docs](https://docs.scvi-tools.org/en/stable/).
-  For discussion of usage, checkout out our [forum](https://discourse.scvi-tools.org/).
-  To report bugs, make an issue on [GitHub](https://github.com/YosefLab/scvi-tools/issues).