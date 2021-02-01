import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.scss";

function Hero() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <header className={classnames("hero", styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className={classnames("col col--6 col--offset-1")}>
                        <h1 className="hero__title">{siteConfig.tagline}</h1>
                        {/* <h1 className={clsx("hero__subtitle", styles.subtitle)}> */}
                        {/* {siteConfig.tagline} */}
                        {/* </h1> */}
                        <CodeBlock className="language-sh">
                            pip install scvi-tools
                    </CodeBlock>
                    </div>
                    <div className={classnames("col col--4")}>
                        <img
                            src={useBaseUrl(`img/graphical_model.svg`)}
                            alt="Logo"
                            className={styles.heroImg}
                        />
                    </div>
                </div>
            </div>
        </header>
        // <header id="hero" className={clsx("hero", styles.banner)}>
        //     <div className="container">
        //         <img
        //             src={useBaseUrl(`img/logo.svg`)}
        //             alt="Logo"
        //             className={styles.logo}
        //         />

        //         <h1 className="hero__title">{siteConfig.title}</h1>
        //         <p className={clsx("hero__subtitle", styles.subtitle)}>
        //             {siteConfig.tagline}
        //         </p>
        //         <CodeBlock className="language-sh">
        //             pip install scvi-tools
        //         </CodeBlock>
        //     </div>
        // </header>
    );
}

export default Hero;
