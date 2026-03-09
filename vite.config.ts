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
	server: {
		port: 3000,
		host: "0.0.0.0",
		allowedHosts: ["verse.omni.dev"],
	},
	preview: {
		port: 3000,
		host: "0.0.0.0",
	},
	plugins: [
		// NB: command is `serve` in development, `build` in production
		command === "serve" && mkcert(),
		tailwindcss(),
		tsConfigPaths({ projects: ["./tsconfig.json"] }),
		// NB: skip in preview mode (serve + production) since src/routes isn't in the container
		(command === "build" || process.env.NODE_ENV !== "production") &&
			tanstackRouter({
				target: "react",
				autoCodeSplitting: true,
			}),
		react(),
	],
}));

export default viteConfig;
