import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
plugins: [react()],
server: {
port: 5173, // React dev server
proxy: {
"/api": {
target: "[http://localhost:3000](http://localhost:3000)", // your Express backend
changeOrigin: true,
secure: false,
// optionally rewrite the path if needed
// rewrite: (path) => path.replace(/^/api/, '')
},
},
},
});
