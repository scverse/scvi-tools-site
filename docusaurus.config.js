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
  organizationName: "YosefLab", // Usually your GitHub org/user name.
  projectName: "scvi-tools-site", // Usually your repo name.
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-141905405-3',
    },
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
        // {
        //   type: "doc",
        //   label: "Get Started",
        //   docId: "get_started",
        //   position: "right",
        // },
        { to: "get_started", label: "Get Started", position: "right" },
        {
          href: "https://docs.scvi-tools.org",
          label: "Docs",
          position: "right",
          items: [
            {
              label: 'Full documentation',
              href: "https://docs.scvi-tools.org",
            },
            {
              label: 'User guide',
              href: "https://docs.scvi-tools.org/en/stable/user_guide/user.html",
            },
            {
              label: 'Developer guide',
              href: "https://docs.scvi-tools.org/en/stable/user_guide/developer.html",
            },
            {
              label: 'API reference',
              href: "https://docs.scvi-tools.org/en/stable/api/index.html",
            },
          ],
        },
        {
          label: 'About',
          position: 'right', // or 'right'
          items: [
            {
              label: 'Team',
              to: "team",
            },
            {
              label: 'Press',
              to: "press",
            },
            {
              label: 'Ecosystem',
              to: "ecosystem",
            },
            // {
            //   label: 'News',
            //   to: "news",
            // },
            // ... more items
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
      copyright: `Copyright © ${new Date().getFullYear()} Yosef Lab, UC Berkeley. Built with Docusaurus.`,
    },
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: 'get_started',
          routeBasePath: 'get_started',
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/YosefLab/scvi-tools-site",
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/YosefLab/scvi-tools-site/blog/",
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
