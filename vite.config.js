import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Icons from 'unplugin-icons/vite'
import UnoCSS from 'unocss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { templateCompilerOptions } from '@tresjs/core'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], 
      ...templateCompilerOptions,
    }),
    UnoCSS(),
    Markdown(),
    vueDevTools(),
    Icons(),
    chunkSplitPlugin({
      strategy: "default",
      customSplitting: {
        "vue-konva-vendor": [/vue-konva/],
        "vuedraggable-vendor": [/vuedraggable/],
        "about": [/AboutView/],
        "test": [/TestView/],
        "draggable-plus": [/DraggablePlus/],
        "draggable-plus-table": [/DragPlusTable/],
        "env-view": [/EnvView/],
        "three-test": [/ThreeView/],
        "element-plus": [/element/],
        "konva": [/konva/],
        "md-view": [/md/],
        "axios": [/axios/]
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 5187,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
