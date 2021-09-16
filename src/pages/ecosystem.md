# Ecosystem

Here we highlight projects that make use of scvi-tools.

## [cell2location](https://cell2location.readthedocs.io/en/latest/)
cell2location is a hierarchical Bayesian model for resolving cell types in spatial transcriptomic data (e.g., Visium) with high sensitivty. 

## [scArches](https://scarches.readthedocs.io/en/latest/)
scArches allows for the integration of new query data into reference atlases produced with conditional deep generative models such as trVAE, scVI, scANVI, totalVI and PeakVI.

## [scGen](https://github.com/theislab/scgen/)
scGen is a generative model to predict single-cell perturbation response across cell types, studies and species. scGen is implemented using the scvi-tools framework.

## [3DVI: Normalization and De-noising of Single-cell Hi-C Data](https://github.com/yezhengSTAT/3DVI)
3DVI is a deep generative model for scHi-C data, that takes into account 3D genomic structural properties such as the band bias, sequencing depth effect, zero inflation, sparsity impact, and batch effects. 3DVI is implemented using the SCVI model from scvi-tools.

## [Platform for Analysis of single cell Eye in a Disk (scEiaD)](https://plae.nei.nih.gov/)
scEiaD is a meta-atlas that compiles 1.2 million single-cell back of the eye transcriptomes across 28 studies, 18 publications, and 3 species. Deep metadata mining, rigorous quality control analysis, differential gene expression testing, and deep learning based batch effect correction in a unified bioinformatic framework allow the universe of retina single cell expression information to be analyzed in one location. The approach for deep learning based batch effect correction is scVI, as well as scVI + scArches from scvi-tools.

## [scdefg: scvi-tools differential expression Flask GUI](https://github.com/WormBase/scdefg)
This is a a single page Flask GUI that allows users to quickly select cell groups based on annotations of the data and perform differential expression on single cell RNA sequencing data using scvi-tools. Deploying this app only requires a trained scVI model saved with the corresponding anndata. The selection of groups can be done using any of the features annotated at `anndata.obs`. A live deploy with C. Elegans data is available at [https://scdefg.textpressolab.com/](https://scdefg.textpressolab.com/).
