import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@/styles": path.resolve(__dirname, "src/shared/styles"),
			"@": path.resolve(__dirname, "src"),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: "modern-compiler",
				silenceDeprecations: ["import", "global-builtin", "mixed-decls"],
			},
		},
	},
	server: {
		host: true,
		port: 3000,
	},
	build: {
		outDir: "build",
	},
});
