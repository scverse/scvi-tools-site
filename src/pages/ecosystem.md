# Ecosystem

Here we highlight projects that make use of scvi-tools.

## [scArches](https://scarches.readthedocs.io/en/latest/)
scArches allows for the integration of new "query" data into reference atlases produced with conditional deep generative models such as scVI, scANVI, totalVI and PeakVI.

## [scGen](https://github.com/theislab/scgen/)
scGen is a generative model to predict single-cell perturbation response across cell types, studies and species. scGen is implemented using the scvi-tools framework.

## [3DVI: Normalization and De-noising of Single-cell Hi-C Data](https://github.com/yezhengSTAT/3DVI)
3DVI is a deep generative model for scHi-C data, that takes into account 3D genomic structural properties such as the band bias, sequencing depth effect, zero inflation, sparsity impact, and batch effects. 3DVI is implemented using the SCVI model from scvi-tools.

## [PLatform for Analysis of single cell Eye in a Disk (scEiaD)](https://plae.nei.nih.gov/)
scEiaD is a meta-atlas that compiles 1.2 million single-cell back of the eye transcriptomes across 28 studies, 18 publications, and 3 species. Deep metadata mining, rigorous quality control analysis, differential gene expression testing, and deep learning based batch effect correction in a unified bioinformatic framework allow the universe of retina single cell expression information to be analyzed in one location. The approach for deep learning based batch effect correction is scVI, as well as scVI + scArches from scvi-tools.

## [Flask UI for differential expression analysis with scVI (scdefg)](https://github.com/Munfred/scdefg)
A GitHub repository for a single page Flask UI that allows you to quickly select cell groups and perform differential expression on single cell RNA sequencing data using scvi-tools. Application to [C. Elegans data](https://cengen-de.textpressolab.com/).
