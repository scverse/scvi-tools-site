(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(109)),i={id:"scvi",title:"Single-cell Variational Inference",sidebar_label:"scVI (scRNA-seq)"},c={unversionedId:"scvi",id:"scvi",isDocsHomePage:!1,title:"Single-cell Variational Inference",description:"This page is under construction. For now, please learn more about scVI in our user guide.",source:"@site/get_started/scvi.md",slug:"/scvi",permalink:"/get_started/scvi",editUrl:"https://github.com/YosefLab/scvi-tools-site/get_started/scvi.md",version:"current",sidebar_label:"scVI (scRNA-seq)",sidebar:"get_started",previous:{title:"Get started",permalink:"/get_started/"},next:{title:"scANVI",permalink:"/get_started/scanvi"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page is under construction. For now, please learn more about scVI in our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.scvi-tools.org/en/stable/user_guide/index.html"}),"user guide"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'# scVI is for end-to-end analysis of scRNA-seq data\nimport anndata\nimport scvi\n\n# read data and prepare for scvi-tools\nadata = anndata.read("my_data.h5ad")\nscvi.data.setup_anndata(adata, batch_key="batch")\nmodel = scvi.model.SCVI(adata)\nmodel.train()\n\n# get integrated low-dimensional representation\nadata.obsm["X_scvi"] = model.get_latent_representation()\n\n# normalized expression\nadata.layers["scvi_norm"] = model.get_normalized_expression()\n\n# differential expression\nresults = model.differential_expression(\n    groupby="cell types",\n    group1="CD4",\n    group2="CD8"\n)\n')))}p.isMDXComponent=!0}}]);