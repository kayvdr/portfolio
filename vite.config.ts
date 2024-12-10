import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: { sourcemap: true },
    server: {
      port: 30001,
      strictPort: true,
    },
    define: {
      "process.env": env,
    },
  };
});
