import type { LinkGroup } from "vuepress-theme-way";

export const linkGroup: LinkGroup[] = [
  {
    title: "前端学习",
    children: [
     
      {
        url: "https://docschina.org/",
        avatar: "https://docschina.org/favicon.ico",
        name: "印记中文",
        description: "印记中文，深入挖掘国外前端新领域，为国内 Web 前端开发人员提供优质文档!!",
      },
    ],
  },
  {
    title: "JS框架",
    children: [
      {
        url: "https://bun.sh/",
        avatar: "https://camo.githubusercontent.com/cc7b5924f05d4f0743ce6d7969405545cb997e58dec5f9d5f8718011c7d446ae/68747470733a2f2f62756e2e73682f6c6f676f4032782e706e67",
        name: "Bun",
        description: "Bun is a fast all-in-one JavaScript runtime",
      },
    ],
  },
  {
    title: "Markdown工具",
    children: [
     
      {
        url: "https://badgen.net/",
        avatar: "https://badgen.net/static/badgen-logo.svg",
        name: "Badgen",
        description: "快速生成徽章",
      },
    ],
  },
];
