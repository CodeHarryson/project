import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite configuration — tells Vite to use the React plugin
// so it can understand JSX syntax (.jsx files).
export default defineConfig({
  plugins: [react()],
})
