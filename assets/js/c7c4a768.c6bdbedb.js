"use strict";(self.webpackChunkscvi_tools_site=self.webpackChunkscvi_tools_site||[]).push([[248],{2267:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),r=(t(9254),t(4996),["components"]),l={},s="Get Started",c={type:"mdx",permalink:"/get_started",source:"@site/src/pages/get_started.mdx"},d=[{value:"Basic installation",id:"basic-installation",children:[]},{value:"Resources",id:"resources",children:[]},{value:"Single-cell omics data analysis",id:"single-cell-omics-data-analysis",children:[]},{value:"Rapid development of novel probabilistic models",id:"rapid-development-of-novel-probabilistic-models",children:[]},{value:"Reference",id:"reference",children:[]}],p={toc:d};function m(e){var a=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"get-started"},"Get Started"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," (single-cell variational inference tools) is a package for probabilistic modeling of single-cell omics data, built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/"},"PyTorch")," and ",(0,i.kt)("a",{parentName:"p",href:"https://anndata.readthedocs.io/en/latest/"},"AnnData"),". The package hosts implementations of several models that perform a wide range of single-cell data analysis tasks, as well as the building blocks to rapidly prototype new probabilistic models."),(0,i.kt)("h2",{id:"basic-installation"},"Basic installation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," can be installed with ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"conda"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install scvi-tools\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"conda install scvi-tools -c conda-forge\n")),(0,i.kt)("p",null,"To leverage a GPU for inference, a version of ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"PyTorch")," that supports your GPU will need to be installed separately."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tutorials, API reference, and advanced installation guides are available in the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.scvi-tools.org/en/stable/"},"docs"),"."),(0,i.kt)("li",{parentName:"ul"},"For discussion of usage, checkout out our ",(0,i.kt)("a",{parentName:"li",href:"https://discourse.scvi-tools.org/"},"forum"),"."),(0,i.kt)("li",{parentName:"ul"},"For immediate public chat with the developers, come talk to us on ",(0,i.kt)("a",{parentName:"li",href:"https://gitter.im/scvi-tools/"},"Gitter"),"."),(0,i.kt)("li",{parentName:"ul"},"For a skeleton of implementation of a new model in scvi-tools, refer to our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YosefLab/scvi-tools-skeleton/"},"template repository")),(0,i.kt)("li",{parentName:"ul"},"To report bugs, make an issue on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/YosefLab/scvi-tools/issues"},"GitHub"),".")),(0,i.kt)("h2",{id:"single-cell-omics-data-analysis"},"Single-cell omics data analysis"),(0,i.kt)("p",null,"Data analysis with ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," is driven by model objects. Each model typically corresponds to a computational method described in a manuscript and each model may perform several important downstream tasks (with the same fit). Importantly, each model has an easy-to-use interface that conveniently interacts with ",(0,i.kt)("a",{parentName:"p",href:"https://scanpy.readthedocs.io/en/stable/"},"Scanpy"),", ",(0,i.kt)("a",{parentName:"p",href:"https://satijalab.org/seurat/"},"Seurat")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.bioconductor.org/"},"Bioconductor"),"."),(0,i.kt)("p",null,"A full overview of each model and its corresponding analytical tasks is in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scvi-tools.org/en/stable/user_guide/index.html"},"user guide"),". Currently we support workflows for the following modalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"scRNA-seq"),(0,i.kt)("li",{parentName:"ul"},"Spatial Transcriptomics"),(0,i.kt)("li",{parentName:"ul"},"Multimodal (CITE-seq, Multiome)")),(0,i.kt)("h2",{id:"rapid-development-of-novel-probabilistic-models"},"Rapid development of novel probabilistic models"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," facilitates rapid development and deployment of single-cell-focused probabilistic models. To achieve this, we host black-box primitives for loading data from ",(0,i.kt)("a",{parentName:"p",href:"https://anndata.readthedocs.io/en/latest/"},"AnnData"),", black-box training procedures using ",(0,i.kt)("a",{parentName:"p",href:"https://www.pytorchlightning.ai/"},"PyTorch Lightning"),", and optionally provides automatic inference recipes based on ",(0,i.kt)("a",{parentName:"p",href:"https://pyro.ai/"},"Pyro"),". We currently support many optimization-based inference procedures including SVI, AEVB, MAP, MLE and EM. To learn more about the developer toolkit, please visit our ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scvi-tools.org/en/stable/tutorials/index.html"},"tutorials"),". We also provide an example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/YosefLab/scvi-tools-skeleton/"},"skeleton")," implementation of a basic scVI in PyTorch and Pyro as an independent package powered by ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools"),". If you wish to add an implementation of your algorithm in scvi-tools, please post a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/YosefLab/scvi-tools/issues"},"GitHub issue")," to reach out to us."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("p",null,"If you use scvi-tools in your research, please consider citing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"@article{Gayoso2021scvitools,\n    author = {Gayoso, Adam and Lopez, Romain and Xing, Galen and Boyeau, Pierre and Wu, Katherine and Jayasuriya, Michael and Mehlman, Edouard and Langevin, Maxime and Liu, Yining and Samaran, Jules and Misrachi, Gabriel and Nazaret, Achille and Clivio, Oscar and Xu, Chenling and Ashuach, Tal and Lotfollahi, Mohammad and Svensson, Valentine and da Veiga Beltrame, Eduardo and Talavera-Lopez, Carlos and Pachter, Lior and Theis, Fabian J and Streets, Aaron and Jordan, Michael I and Regier, Jeffrey and Yosef, Nir},\n    title = {scvi-tools: a library for deep probabilistic analysis of single-cell omics data},\n    year = {2021},\n    doi = {10.1101/2021.04.28.441833},\n    publisher = {Cold Spring Harbor Laboratory},\n    URL = {https://www.biorxiv.org/content/early/2021/04/29/2021.04.28.441833},\n    eprint = {https://www.biorxiv.org/content/early/2021/04/29/2021.04.28.441833.full.pdf},\n    journal = {bioRxiv}\n}\n")))}m.isMDXComponent=!0},9254:function(e,a,t){t.d(a,{Z:function(){return f}});var n=t(7294),o=t(7814),i=t(8947),r="iconLink_3zBS";i.vc.autoAddCss=!1;var l=function(e){var a=e.icon,t=e.link;return t?n.createElement("a",{className:""+r,href:t,target:"_blank"},n.createElement(o.G,{icon:a})):null},s=t(4996),c=t(1417),d="teamCard_2YdU",p="teamAvatar_-Z9-",m="teamCardContent_3_dN",u="teamCardName_1MC7",h="iconContainer_1Mex";var f=function(e){var a=e.name,t=e.websiteLink,o=e.description,i=e.image,r=e.githubLink,f=e.twitterLink;return n.createElement("div",{className:d+" card"},n.createElement("div",{className:p+" avatar"},n.createElement("img",{className:"avatar__photo avatar__photo--xl",src:i||(0,s.Z)("img/logo.svg")}),n.createElement("div",{className:m+" avatar__intro"},t?n.createElement("a",{className:u+" avatar__name",href:t,target:"_blank"},a):n.createElement("div",{className:u+" avatar__name"},a),n.createElement("small",{className:"avatar__subtitle"},o),n.createElement("div",{className:h},n.createElement(l,{icon:c.zhw,link:r}),n.createElement(l,{icon:c.mdU,link:f})))))}}}]);