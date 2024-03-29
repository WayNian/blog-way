import { defineUserConfig } from 'vuepress'
// import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { wayTheme } from 'vuepress-theme-way'
import { navbarZh, personInfo, linkGroup, webLinks, products } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // set site base to default value
  base: '/',
  lang: 'zh-CN',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/favicon-32x32.png`,
      },
    ],
  ],
  // site-level locales config
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Waynian',
      description: 'Waynian的个人博客',
    },
  },
  theme: wayTheme({
    home: '/',
    navbar: navbarZh,
    links: linkGroup,
    personInfo,
    webLinks,
    products,
    websiteInfo: {
      isShowThemeAuth: true,
      beian: '苏ICP备18061251号',
    },
    poem: '与恶龙缠斗过久,自身亦成为恶龙;凝视深渊过久,深渊将回以凝视。',
    // 评论和统计相关
    comments: {
      'serverURL': 'https://theme-way-waline-2e8axyq7o-waynian.vercel.app',
      'APP-ID': 'qSDDby5SpgWVXHs0TmqooRx6-MdYXbMMI',
      'APP-KEY': 'u9A20eaXONKJb37zjVopq6mV',
      'counterUrl': 'https://qsddby5s.api.lncldglobal.com/1.1/classes/Counter',
      'commentUrl': 'https://qsddby5s.api.lncldglobal.com/1.1/classes/Comment',
    },
  }),

  // configure markdown
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  // use plugins
  plugins: [
  ],
})
