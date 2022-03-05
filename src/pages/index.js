import React from "react";
import { IconContext } from "react-icons";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.scss";

// Prism (Rust)
import Prism from "prism-react-renderer/prism";
(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");

import Comparison from "@theme/Comparison";
import Examples from "@theme/Examples";
import Features from "@theme/Features";
import Hero from "@theme/Hero";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { tagline } = siteConfig;

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Layout description={tagline}>
        <Hero />
        <main className={styles.main}>
          <Features />
          {/* <Comparison /> */}
          {/* <Examples /> */}
          <div className={styles.buttons}>
            <p><iframe src="https://ghbtns.com/github-btn.html?user=scverse&repo=scvi-tools&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
              <iframe src="https://ghbtns.com/github-btn.html?user=scverse&repo=scvi-tools&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
            </p>
          </div>
        </main>
      </Layout>
    </IconContext.Provider>
  );
}

export default Home;
