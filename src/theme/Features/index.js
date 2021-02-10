import React from "react";
import clsx from "clsx";
import { FiCoffee, FiDatabase, FiPackage, FiZap } from "react-icons/fi";
import { BiAnalyse, BiTimeFive } from "react-icons/bi";

import styles from "./styles.module.scss";

const size = 24;
const data = [
    {
        icon: <BiAnalyse size={size} />,
        title: <>End-to-end analysis</>,
        description: (
            <>
                Dimensionality reduction, dataset integration, differential expression,
                automated annotation. scvi-tools contains models that perform a wide variety of tasks across many omics, all while accounting for the statistical properties of the data.
            </>
        ),
    },
    {
        icon: <FiPackage size={size} />,
        title: <>Easy-to-use implementations</>,
        description: (
            <>
                Each model (e.g., scVI, scANVI, Stereoscope, totalVI) follows the
                same user interface that couples nicely with <a href="https://scanpy.readthedocs.io/en/stable/">Scanpy</a>, <a href="https://satijalab.org/seurat/">Seurat</a>, or <a href="https://www.bioconductor.org/">Bioconductor</a> workflows.
                No more searching through source code.
            </>
        ),
    },
    {
        icon: <FiZap size={size} />,
        title: <>Rapid development of new models </>,
        description: (
            <>
                Building novel probabilistic models with scvi-tools is simplified
                by its object-oriented design and base components powered
                by <a href="https://pytorch.org">PyTorch</a>, <a href="https://www.pytorchlightning.ai/">PyTorch Lightning</a>, <a href="https://pyro.ai">Pyro</a>, and <a href="https://anndata.readthedocs.io/en/latest/">AnnData</a>. No need to write
                a dataloader or trainer ever again.
            </>
        ),
    },
    {
        icon: <BiTimeFive size={size} />,
        title: <>Stochastic, GPU-accelerated inference</>,
        description: (
            <>
                scvi-tools models are trained efficiently through minibatching and
                can naturally be used with a GPU. These models are prepared to scale with growing
                dataset sizes.
            </>
        ),
    },
];

function Feature({ icon, title, description }) {
    return (
        <div className={clsx("col col--6", styles.feature)}>
            <div className="item">
                <div className={styles.header}>
                    {icon && <div className={styles.icon}>{icon}</div>}
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
}

function Features() {
    return (
        <>
            {data && data.length && (
                <section id="features" className={styles.features}>
                    <div className="container">
                        <div className="row">
                            <div className="col col--11 col--offset-1">
                                <div className="row">
                                    {data.map((props, idx) => (
                                        <Feature key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

export default Features;
