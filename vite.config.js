import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: "src/main.ts", // Adjust this based on your entry point
      name: "MyVueLib",
      fileName: "my-vue-lib",
      formats: ["umd"],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
