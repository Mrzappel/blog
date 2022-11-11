export default {
  title: "ZCC'S BLOG",
  description: 'Just playing around',
  themeConfig: {
    logo: 'logo.png',
    siteTitle: 'My Custom Title',
    // siteTitle: false //可隐藏标题,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mrzappel' },
      { icon: 'twitter', link: '...' },
      // You can also add custom icons by passing SVG as string:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: '...'
      // }
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present ZCC'
    // },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdatedText: 'Updated Date',
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    },
    nav: [
      { text: 'second', link: '/getting-started' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/mrzappel' },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // Title for the section.
            text: 'Section A Title',
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      },
      {
        text: 'Dropdown Menu',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Section A Item A', link: '...' },
              { text: 'Section B Item B', link: '...' }
            ]
          }
        ]
      }
    ]
  }
}