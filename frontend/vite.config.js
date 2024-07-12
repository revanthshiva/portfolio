import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.29.97', // Your IP address
    port: 5173,           // Your desired port
  },
  plugins: [react()],
})

  
