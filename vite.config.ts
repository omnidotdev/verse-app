import tailwindcss from "@tailwindcss/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsConfigPaths from "vite-tsconfig-paths";

/**
 * Vite configuration.
 * @see https://vite.dev/config
 */
const viteConfig = defineConfig(({ command }) => ({
	resolve: {
		dedupe: ["react", "react-dom"],
	},
	server: {
		port: 3000,
		host: "0.0.0.0",
		allowedHosts: ["verse.omni.dev"],
	},
	plugins: [
		// NB: command is `serve` in development, `build` in production
		command === "serve" && mkcert(),
		tailwindcss(),
		tsConfigPaths({ projects: ["./tsconfig.json"] }),
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react(),
	],
}));

export default viteConfig;
