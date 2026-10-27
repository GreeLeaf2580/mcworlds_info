// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
// import blogPluginExtended from "./plugins/blog-plugin-extended";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "o绿叶o",
  tagline: "让我们做叶的事业吧",
  favicon: "img/favicon.jpg",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["en", "zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          showLastUpdateTime:false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //// editUrl:
          ////   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // routeBasePath: "/blog",
          showReadingTime: true,
          postsPerPage: 20,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //// editUrl:
          ////  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  // plugins:[blogPluginExtended],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        //顶部栏
        title: "o绿叶oの个人小站",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.jpg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "techDocsSidebar",
            position: "left",
            label: "技术文档",
          },
          { to: "/blog", label: "作品博客", position: "left" },
          {
            type:"docSidebar",
            sidebarId:"autobioSidebar",
            position:"right",
            label:"    ",
          },
        ],
      },
      footer: {
        //底部栏
        style: "dark",
        links: [
          {
            title: "关于",
            items: [
              {
                label: "本站的 GitHub 项目地址",
                href: "https://github.com/GreeLeaf2580/mcworlds_info",
              },
              {
                label: "本站使用 Docusaurus 构建",
                href: "https://docusaurus.io/",
              },
              {
                label:"黔ICP备2026018829号",
                to:"https://beian.miit.gov.cn/",
              },
              {
                label:"贵公网安备52270102000398号",
                to:"https://beian.mps.gov.cn/#/query/webSearch?code=52270102000398"
              }
            ],
          },
          {
            title: "资源",
            items: [
              {
                label: "o绿叶o的作品博客",
                to: "/blog",
              },
              {
                label: "量筒测试群 群文档/群资源",
                href: "https://docs.nekoawa.com/docs/resources/bedwars/"
              }
            ]
          },
          {
            title: "文档",
            items: [
              {
                label: "量筒测试群 群文档",
                href: "https://docs.nekoawa.com"
              },
              {
                label: "量筒的 Minecraft 基岩版开发文档",
                href: "https://yzbwdlt.pages.dev"
              },
            ],
          },
          {
            title: "联系我",
            items: [
              {
                label: "QQ",
                href: "https://qm.qq.com/q/jmYMHADATS",
              },
              {
                label: "bilibili",
                href: "https://space.bilibili.com/13388945",
              },
              {
                label: "极筑 · 量筒地图测试群",
                href: "https://qm.qq.com/q/VcETyNtbqu",
              },
            ],
          },
        ],
        copyright: `© 2025-${new Date().getFullYear()} o绿叶o`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
