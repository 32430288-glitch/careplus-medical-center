import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project URL: use base: '/your-repo-name/'
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      // Copy `careplus-api` to C:\xampp\htdocs\careplus-api then start Apache + MySQL
      '/api': {
        target: 'http://localhost/careplus-api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
