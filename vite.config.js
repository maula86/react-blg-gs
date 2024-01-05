import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    terserOptions: {
      compress: {
        'import.meta.env.VITE_APP_NAME': JSON.stringify(process.env.VITE_APP_NAME),
        'import.meta.env.VITE_APP_URL': JSON.stringify(process.env.VITE_APP_URL),
        'import.meta.env.VITE_APP_SHEET_ID': JSON.stringify(process.env.VITE_APP_SHEET_ID),
        'import.meta.env.VITE_APP_KEY_ID': JSON.stringify(process.env.VITE_APP_KEY_ID),
        'import.meta.env.VITE_APP_VALUE_RENDER': JSON.stringify(process.env.VITE_APP_VALUE_RENDER),
      },
    },
  },
})
