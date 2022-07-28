import type { LinkGroup } from "vuepress-theme-way";

export const linkGroup: LinkGroup[] = [
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
