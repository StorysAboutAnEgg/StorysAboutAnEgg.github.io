import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { autoComplete, Plugin as importToCDN } from "vite-plugin-cdn-import";

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 添加这行以配置正确的基路径
  plugins: [
    vue(),
    importToCDN({
      // prodUrl: 'https://cdn.jsdelivr.net/npm/{name}@{version}/{path}',
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: `https://unpkg.com/vue@3.2.45/dist/vue.global.js`,
          
        },
        {
          name: 'vue-demi',
          var: 'VueDemi',
          path: `https://unpkg.com/vue-demi@0.13.11`,
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: `https://unpkg.com/vue-router@4.1.6`,
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: 'https://unpkg.com/element-plus@2.3.3/dist/index.full.js',
          // css: 'https://unpkg.com/element-plus@2.3.3/dist/index.css'
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
