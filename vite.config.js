/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Cargar las variables de entorno si es necesario
import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base:
        process.env.NODE_ENV === 'production'
            ? process.env.VITE_PUBLIC_PATH
            : '/'
})
