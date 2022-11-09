// .vitepress/theme/index.js
import Layout from './Layout.vue'

// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import './custom.css'

// export default DefaultTheme
export default {
  ...DefaultTheme,
  Layout: MyLayout
  // enhanceApp(ctx) {
  //   // extend default theme custom behaviour.
  //   DefaultTheme.enhanceApp(ctx)

  //   // register your custom global components
  //   ctx.app.component('MyGlobalComponent' /* ... */)
  // }
}




// .vitepress/theme/index.js
// import Theme from 'awesome-vitepress-theme'

// export default Theme
