import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// adding HTTPS functionality
import basicSsl from '@vitejs/plugin-basic-ssl';
import process from 'process';
import { config } from 'dotenv';
config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    https: process.env.HTTPS === 'true', // use environment variable
  },
});
