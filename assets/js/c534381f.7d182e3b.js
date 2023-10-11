"use strict";(self.webpackChunkscvi_tools_site=self.webpackChunkscvi_tools_site||[]).push([[8620],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return m}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),m=n,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return o?a.createElement(u,r(r({ref:t},d),{},{components:o})):a.createElement(u,r({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=o[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3919:function(e,t,o){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!a(e)}o.d(t,{b:function(){return a},Z:function(){return n}})},4996:function(e,t,o){o.d(t,{C:function(){return i},Z:function(){return r}});var a=o(2263),n=o(3919);function i(){var e=(0,a.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,a){var i=void 0===a?{}:a,r=i.forcePrependBaseUrl,s=void 0!==r&&r,l=i.absolute,c=void 0!==l&&l;if(!o)return o;if(o.startsWith("#"))return o;if((0,n.b)(o))return o;if(s)return t+o;var d=o.startsWith(t)?o:t+o.replace(/^\//,"");return c?e+d:d}(i,o,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},1039:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return m}});var a=o(7462),n=o(3366),i=(o(7294),o(3905)),r=(o(4996),["components"]),s={slug:"v090",title:"scvi-tools 0.9.0 release",date:new Date("2021-03-03T00:00:00.000Z"),author:"Adam Gayoso, Romain Lopez, Galen Xing, Nir Yosef",tags:["scvi-tools","release"]},l=void 0,c={permalink:"/blog/v090",editUrl:"https://github.com/YosefLab/scvi-tools-site/blog/blog/2021-3-03-scvi-tools-v090.md",source:"@site/blog/2021-3-03-scvi-tools-v090.md",title:"scvi-tools 0.9.0 release",description:"Today we officially released scvi-tools version 0.9.0 (changelog). This release marks the culmination of five months of work on the backend of the codebase, which came after three months of work on the frontend.",date:"2021-03-03T00:00:00.000Z",formattedDate:"March 3, 2021",tags:[{label:"scvi-tools",permalink:"/blog/tags/scvi-tools"},{label:"release",permalink:"/blog/tags/release"}],readingTime:6.11,truncated:!0,authors:[{name:"Adam Gayoso, Romain Lopez, Galen Xing, Nir Yosef"}],prevItem:{title:"Mini-batch size in destVI",permalink:"/blog/destvi-batchsize"},nextItem:{title:"Hyperparameter search for scVI",permalink:"/blog/autotune"}},d={authorsImageUrls:[void 0]},p=[{value:"Taking a step back: the original <code>scvi</code> codebase",id:"taking-a-step-back-the-original-scvi-codebase",children:[]},{value:"Identifying key improvements, creation of <code>scvi-tools</code>",id:"identifying-key-improvements-creation-of-scvi-tools",children:[{value:"Focus on the model",id:"focus-on-the-model",children:[]},{value:"New implementations",id:"new-implementations",children:[]},{value:"Pyro integration",id:"pyro-integration",children:[]},{value:"Template repository",id:"template-repository",children:[]},{value:"New longitudinal features",id:"new-longitudinal-features",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],h={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Today we officially released ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," version 0.9.0 (",(0,i.kt)("a",{parentName:"p",href:"https://docs.scvi-tools.org/en/stable/release_notes/index.html"},"changelog"),"). This release marks the culmination of five months of work on the backend of the codebase, which came after three months of work on the frontend.\nIn this short note, we officially introduce ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," as a readily usable codebase that contains many implementations of probabilistic single-cell omics methods, and also features a high-level interface to accelerate the model development process. We start with some historical notes about our previous codebase, which was mostly used for internal developments in the last three years. We then describe the obstacles we found to its external adoption, and the foundational idea behind the new ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," work: a high-level deep probabilistic programming library specialized for single-cell omics data."),(0,i.kt)("h2",{id:"taking-a-step-back-the-original-scvi-codebase"},"Taking a step back: the original ",(0,i.kt)("inlineCode",{parentName:"h2"},"scvi")," codebase"),(0,i.kt)("p",null,"Many members of the Yosef Lab, and in particular Jeff Regier, Edouard Melhman, Romain, and Adam helped conceive, develop, and maintain the ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi")," codebase. The initial philosophy was to make the code available for users to run ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41592-018-0229-2"},"scVI"),", but also to have a proper codebase for developing novel algorithms for single-cell omics analysis. Over the last three years, we have hosted seven visiting graduate students who wrote their Master's theses in the Yosef Lab by building new functionalities, as well as new algorithms (including ",(0,i.kt)("a",{parentName:"p",href:"https://www.embopress.org/doi/full/10.15252/msb.20209620"},"scANVI"),", ",(0,i.kt)("a",{parentName:"p",href:"https://www.biorxiv.org/content/biorxiv/early/2019/10/10/794875.full.pdf"},"AutoZI")," and ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1905.02269.pdf"},"gimVI"),") directly into the ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi")," codebase. Even our most recent work, such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41592-020-01050-x"},"totalVI")," for CITE-seq modeling, and our ",(0,i.kt)("a",{parentName:"p",href:"https://papers.nips.cc/paper/2020/file/357a6fdf7642bf815a88822c447d9dc4-Paper.pdf"},"decision-making procedure")," for differential expression was also developed this way."),(0,i.kt)("p",null,"However, our ambition at the time was to solely use this infrastructure for internal developments. Consequently, some mistakes were made, in which we did not make use of the existing single-cell analysis infrastructure. First, we had built manual data formatting boilerplate code to read many different single-cell omics input formats. We also had incorporated customized plotting code while working on the dataset integration problem. Ideally, all these functions would come from another package, such as ",(0,i.kt)("a",{parentName:"p",href:"https://scanpy.readthedocs.io/en/stable/"},(0,i.kt)("inlineCode",{parentName:"a"},"Scanpy")),". As a second striking example, each algorithm was not straightforward to use as it often required the end user to create multiple objects, such as dataloaders, trainers, and models. This was confusing for the user and also hard to maintain on our end. Indeed, over a year ago we encountered a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/YosefLab/scvi-tools/issues/669"},"bug")," at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/theislab/scib/issues/114"},"benchmarking time"),", in which scVI by default was trained on one single-cell (instead of the whole training set)!"),(0,i.kt)("h2",{id:"identifying-key-improvements-creation-of-scvi-tools"},"Identifying key improvements, creation of ",(0,i.kt)("inlineCode",{parentName:"h2"},"scvi-tools")),(0,i.kt)("p",null,"Even though we were actively branding the ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi")," codebase as a framework for creating new probabilistic models, we did not encounter clear success in this area. A notable exception is the ",(0,i.kt)("a",{parentName:"p",href:"https://academic.oup.com/bioinformatics/article/36/11/3418/5807606"},(0,i.kt)("inlineCode",{parentName:"a"},"LDVAE")," model"),", which was the first model in ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi")," developed by an external user of the codebase (thanks ",(0,i.kt)("a",{parentName:"p",href:"https://www.nxn.se/"},"Valentine"),"!). Later, we became aware of some suboptimal API choices we had made, and decided to work on improving the user experience in order to make the codebase more attractive. At this point in time, Galen joined the Yosef lab and we rethought the foundations of ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Host reimplementations of existing methods that are currently difficult to use."),(0,i.kt)("li",{parentName:"ol"},"For all methods, provide a consistent and simplified user experience, and provide ",(0,i.kt)("a",{parentName:"li",href:"https://docs.scvi-tools.org/en/stable/user_guide/user.html"},"tutorials")," that walkthrough a meaningful application."),(0,i.kt)("li",{parentName:"ol"},"Focus on ",(0,i.kt)("a",{parentName:"li",href:"https://anndata.readthedocs.io/en/latest/"},(0,i.kt)("inlineCode",{parentName:"a"},"AnnData"))," for the input data format (potentially reducing almost half of the code in the codebase), and use ",(0,i.kt)("a",{parentName:"li",href:"https://scanpy.readthedocs.io/en/stable/"},(0,i.kt)("inlineCode",{parentName:"a"},"Scanpy"))," for all other processing."),(0,i.kt)("li",{parentName:"ol"},"Build explicit tutorials for interaction with the R ecosystem (",(0,i.kt)("a",{parentName:"li",href:"https://www.bioconductor.org/"},(0,i.kt)("inlineCode",{parentName:"a"},"Bioconductor")),", ",(0,i.kt)("a",{parentName:"li",href:"https://satijalab.org/seurat/"},(0,i.kt)("inlineCode",{parentName:"a"},"Seurat")),")."),(0,i.kt)("li",{parentName:"ol"},"Rewrite all the training code, relying instead on ",(0,i.kt)("a",{parentName:"li",href:"https://www.pytorchlightning.ai/"},"PyTorch Lightning"),"."),(0,i.kt)("li",{parentName:"ol"},"Add an interface to ",(0,i.kt)("a",{parentName:"li",href:"https://pyro.ai/"},"Pyro"),", in order to further automate inference."),(0,i.kt)("li",{parentName:"ol"},"Build ",(0,i.kt)("a",{parentName:"li",href:"https://docs.scvi-tools.org/en/stable/user_guide/developer.html"},"tutorials")," for model developers.")),(0,i.kt)("p",null,"Today, most of those features are readily usable. Visit our ",(0,i.kt)("a",{parentName:"p",href:"https://scvi-tools.org"},"landing page"),"! We detail below some of those developments, present in ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," v0.9.0."),(0,i.kt)("h3",{id:"focus-on-the-model"},"Focus on the model"),(0,i.kt)("p",null,"In this release, we introduced a new paradigm for building single-cell focused probabilistic models in which model development is hyper-focused on the model at hand. Based on our experience of building variational autoencoders for single-cell data, we identified several opportunties to abstract boilerplate code in a reusable way. Therefore, we built objects in the scvi-tools codebase to handle auxiliary tasks such as data loading, training, save/load, and device management. As an example, we wrote the ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi.data")," module to handle ",(0,i.kt)("inlineCode",{parentName:"p"},"AnnData"),' objects, including registration of model-specific tensors and generic "ann"-data loading into models. Consequently, model development solely focuses on (1) defining a probabilistic model/inference scheme and (2) expressing it in a structured way based on our abstract classes. Learn more with our ',(0,i.kt)("a",{parentName:"p",href:"https://docs.scvi-tools.org/en/stable/user_guide/developer.html"},"tutorials"),"."),(0,i.kt)("h3",{id:"new-implementations"},"New implementations"),(0,i.kt)("p",null,"With these new model building blocks, we were able to implement models external to our lab with relative ease. This included ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s42003-020-01247-y"},"Stereoscope")," for deconvolving spatial transcriptomics data, ",(0,i.kt)("a",{parentName:"p",href:"https://www.sciencedirect.com/science/article/pii/S2405471220301952"},"Solo")," for detection of doublets in scRNA-seq data, and ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41592-019-0529-1"},"CellAssign")," for reference-based annotation of scRNA-seq data. These implementations required significantly fewer lines of code with ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools"),"."),(0,i.kt)("p",null,"For the example of Stereoscope, it took one afternoon and nearly 600 lines of code for its reimplementation in ",(0,i.kt)("inlineCode",{parentName:"p"},"scvi-tools")," (the original codebase has 6,000 lines of code). Also, the algorithm may now be run directly from AnnData objects in a Jupyter notebook or in Google Colab. This may be more attractive to certain users compared to the original codebase, which was only usable from the command line interface."),(0,i.kt)("h3",{id:"pyro-integration"},"Pyro integration"),(0,i.kt)("p",null,"Another feature we are excited about is the integration with ",(0,i.kt)("a",{parentName:"p",href:"https://pyro.ai/"},"Pyro"),", which further abstracts the process of manually deriving optimization objectives. The core Pyro team, who joined the Broad Institute a couple of months ago, recently released a simple ",(0,i.kt)("a",{parentName:"p",href:"https://pyro.ai/examples/scanvi.html"},"reimplementation of our scANVI model in Pyro"),". We therefore highly encourage using Pyro for new model developments, although relying on Pyro to power a model remains completely optional. We anticipate that Pyro will be especially useful for automating inference for complex hierarchical Bayesian models, since writing the automatic differentiation variational inference (ADVI) recipe manually would require many lines of code, and the evidence lower bound would potentially be tedious to write."),(0,i.kt)("h3",{id:"template-repository"},"Template repository"),(0,i.kt)("p",null,"We also wrote a ",(0,i.kt)("a",{parentName:"p",href:"https://scvi-tools-skeleton.readthedocs.io/en/stable/"},"template")," GitHub repository to accelerate the package creation process. This includes template code to setup documentation, continuous integration testing, and popular code styling practices. Additionally, we incorporated example implementations for scVI in both PyTorch and Pyro."),(0,i.kt)("h3",{id:"new-longitudinal-features"},"New longitudinal features"),(0,i.kt)("p",null,"Finally, thanks to our refactoring effort while implementating of all these models in the same codebase, we were able to broadcast new features across models. This included support for multiple (continuous or categorical) covariates when integrating data with scVI, scANVI, or totalVI. We are excited to see the impact of non-linear dataset integration extended in this way, and have already seen promising results in correcting, e.g., cell cycle effects. We also have extended the ",(0,i.kt)("a",{parentName:"p",href:"https://scarches.readthedocs.io/en/latest/"},"scArches")," method for query/reference dataset integration to the scVI, scANVI, and totalVI models. This required implementing one ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/YosefLab/scvi-tools/blob/master/scvi/model/base/_archesmixin.py"},(0,i.kt)("inlineCode",{parentName:"a"},"Mixin"))," class with the core transfer learning logic."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"We are actively looking for users, as well as feedback! Integration in scvi-tools may be possible in at least two different forms. For example, methods developers may choose to either have their method directly present in the external module of our codebase (such as Stereoscope, gimVI, and CellAssign so far), or clone our template and host their independent repository."),(0,i.kt)("p",null,"Please let us know if you would like to add your methods to scvi-tools, or if you have any other suggestions on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/YosefLab/scvi-tools/issues"},"Github issues"),", ",(0,i.kt)("a",{parentName:"p",href:"https://discourse.scvi-tools.org/"},"Discourse")," or ",(0,i.kt)("a",{parentName:"p",href:"https://gitter.im/scvi-tools/development"},"Gitter"),"!"))}m.isMDXComponent=!0}}]);