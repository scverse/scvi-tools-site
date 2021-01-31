import React from "react";
import clsx from "clsx";
import { FiCoffee, FiDatabase, FiPackage, FiZap } from "react-icons/fi";

import styles from "./styles.module.scss";

const size = 24;
const data = [
    {
        icon: <FiPackage size={size} />,
        title: <>Easy-to-use implementations</>,
        description: (
            <>
                scvi-tools features implementations of popular single-cell models
                like scVI, scANVI, totalVI, Stereoscope, and CellAssign with intuitive
                interfaces. No more searching through source code.
            </>
        ),
    },
    {
        icon: <FiZap size={size} />,
        title: <>Rapidly develop new models </>,
        description: (
            <>
                Building novel probabilistic models from scvi-tools is made
                easy with its object-oriented design and base components powered
                by PyTorch, PyTorch lightning, Pyro, and AnnData. No need to write
                a dataloader or trainer ever again.
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
