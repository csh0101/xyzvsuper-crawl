import { defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import topLevelAwait from 'vite-plugin-top-level-await';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(async () => ({
    // envDir: process.cwd(),
    base: '/',
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        topLevelAwait(),
    ],
    test: {
        "environment": "jsdom",
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        }
    },

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            // 3. tell vite to ignore watching `src-tauri`
            ignored: ["**/src-tauri/**"],
        },
    },
    envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG','APP_'],
    build: {
    // target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
    target: "esnext",
    // // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? true : false,
    // // 为调试构建生成源代码映射 (sourcemap)
    sourcemap: !!process.env.TAURI_DEBUG,
    },
    // https://github.com/vitejs/vite/issues/1973
    // process undefined的问题
    // define: {
    //     'process.env': process.env,
    // }
}));
