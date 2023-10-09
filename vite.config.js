import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router'

export default defineConfig({
  plugins: [
    // Vue Router 插件，用于处理路由
    VueRouter({ getRouteName: getPascalCaseRouteName }),
    // Vue 插件，用于处理 Vue 单文件组件
    Vue(),
    // Vue 布局和路由插件
    Layouts(),
    // 自动导入 Vue 组件
    Components({ dts: true }),
    // 自动导入模块
    AutoImport({
      dts: true,
      vueTemplate: true,
      imports: ['vue', 'pinia', VueRouterAutoImports]
    })
  ],

  server: {
    // 设置服务器主机，允许其他设备通过 IP 地址访问
    host: true,
    // 启动服务器时自动打开浏览器
    open: true,
    // 代理配置，将请求代理到指定的目标 URL
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'https://api.realworld.io/api',
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      // 创建模块别名，将 "@" 映射到项目源代码的根目录
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
