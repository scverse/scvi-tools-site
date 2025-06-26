const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "scvi-tools",
  tagline: "Probabilistic models for single-cell omics data",
  url: "https://scvi-tools.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "YosefLab",
  projectName: "scvi-tools-site",
  stylesheets: ["https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"],
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-141905405-3",
    },
    prism: {
      defaultLanguage: "python",
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "scvi-tools",
      logo: {
        alt: "scvi-tools Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "get_started", label: "Get Started", position: "right" },
        {
          label: "Docs",
          position: "right",
          items: [
            {
              label: "Full documentation",
              href: "https://docs.scvi-tools.org",
              target: "_self",
            },
            {
              label: "Tutorials",
              href:
                "https://docs.scvi-tools.org/en/stable/tutorials/index.html",
              target: "_self",
            },
            {
              label: "User guide",
              href:
                "https://docs.scvi-tools.org/en/stable/user_guide/index.html",
              target: "_self",
            },
            {
              label: "API reference",
              href: "https://docs.scvi-tools.org/en/stable/api/index.html",
              target: "_self",
            },
          ],
        },
        {
          label: "About",
          position: "right",
          items: [
            {
              label: "Team",
              to: "team",
            },
            {
              label: "Press",
              to: "press",
            },
            {
              label: "Ecosystem",
              to: "ecosystem",
            },
          ],
        },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://discourse.scvi-tools.org/",
          label: "Discussion",
          position: "right",
        },
        {
          href: "https://github.com/YosefLab/scvi-tools",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()}, Yosef Lab, Weizmann Institute of Science. Built with Docusaurus.`,
    },
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "get_started",
          routeBasePath: "get_started",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/YosefLab/scvi-tools-site",
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/YosefLab/scvi-tools-site/blog/",
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
