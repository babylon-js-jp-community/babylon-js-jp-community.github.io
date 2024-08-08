import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Babylon.js JP",
  description: "Babylon.js Japanese community website for developers",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'ホーム', link: '/' },
      { text: 'Babylon.js 勉強会とは？', link: '/what-is-babylonjs-study' }
    ],

    sidebar: [
      {
        text: 'サイドバー',
        items: [
          { text: "お役立ちリンク集", link: '/links' },
          { text: 'マークダウン記法例', link: '/markdown-examples' },
          { text: 'API 例', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/babylon-js-jp-community' },
      { icon: 'discord', link: 'https://discord.gg/uWaWQYgxCE' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Babylonjs-wd3cz' }
    ]
  }
})
