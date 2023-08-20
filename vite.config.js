import { resolve, parse } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const outDir = resolve(__dirname, 'dist');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/landing-page-demo/",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (/png|jpe?g|svg|gif|webp|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          } else if (/woff|woff2/.test(extType)) {
            extType = "fonts";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    }
  }
})
