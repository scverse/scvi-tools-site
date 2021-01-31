const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "scvi-tools",
  tagline: "Probabilistic models for single-cell omics data",
  url: "https://github.com/YosefLab/",
  baseUrl: "/scvi-tools-site/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "YosefLab", // Usually your GitHub org/user name.
  projectName: "scvi-tools-site", // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'python',
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
        {
          label: 'About',
          position: 'right', // or 'right'
          items: [
            {
              label: 'Team',
              to: "team",
            },
            {
              label: 'News',
              to: "news",
            },
            {
              label: 'Press',
              to: "press",
            },
            // ... more items
          ],
        },
        {
          to: "docs/",
          activeBasePath: "docs/",
          label: "Overview",
          position: "right",
        },
        {
          href: "https://scvi-tools.org",
          label: "Docs",
          position: "right",
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
      copyright: `Copyright © ${new Date().getFullYear()} Yosef Lab, UC Berkeley. Built with Docusaurus.`,
    },
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/YosefLab/scvi-tools-site",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/YosefLab/scvi-tools-site/blog/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};
