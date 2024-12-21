import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Maps "@" to the "src" folder
    },
  },
  define: {
    'process.env': {}  // Optional: Makes process.env available in your app
  },
  
})