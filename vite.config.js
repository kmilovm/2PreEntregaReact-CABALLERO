import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import json from '@rollup/plugin-json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    json({
      include: 'src/**/*.json',
      exclude: ['node_modules/**'], 
    })
  ]
});


