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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //// editUrl:
          ////   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: "/blog",
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
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "技术文档",
          },
          { to: "/blog", label: "作品博客", position: "left" },
        ],
      },
      footer: {
        //底部栏
        style: "dark",
        links: [
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
                label: "o绿叶o的技术文档",
                to: "/docs/intro",
              },
              {
                label: "量筒的 Minecraft 基岩版开发文档",
                href: "https://yzbwdlt.pages.dev/blog"
              },
              {
                label: "量筒测试群 群文档",
                href: "https://docs.nekoawa.com"
              },
            ],
          },
          {
            title: "联系我",
            items: [
              {
                label: "极筑 · 量筒地图测试群",
                href: "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&group_code=673941729",
              },
              {
                label: "BiliBili",
                href: "https://space.bilibili.com/13388945",
              },
              {
                label: "QQ",
                href: "https://qm.qq.com/q/jmYMHADATS",
              },
            ],
          },
          {
            title: "关于",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "本站GitHub项目地址",
                href: "https://github.com/GreeLeaf2580/mcworlds_info",
              },
              {
                label: "本站使用 Docusaurus 构建",
                href: "https://docusaurus.io/",
              },
            ],
          },
        ],
        copyright: `版权归 © ${new Date().getFullYear()} o绿叶o 所有`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
