import { createFlagProvider } from "@omnidotdev/providers";

const flags = createFlagProvider(
	process.env.FLAGS_API_HOST
		? {
				provider: "unleash",
				url: process.env.FLAGS_API_HOST,
				apiKey: process.env.FLAGS_CLIENT_KEY!,
				appName: "verse",
			}
		: {},
);

const server = Bun.serve({
	port: 3000,
	hostname: "0.0.0.0",
	async fetch(req) {
		const url = new URL(req.url);

		// API: feature flags
		if (url.pathname.startsWith("/api/flags/")) {
			const flagKey = url.pathname.replace("/api/flags/", "");
			const enabled = await flags.isEnabled(`verse-${flagKey}-mode`);
			return Response.json({ enabled });
		}

		const filePath = `dist${url.pathname}`;

		// Serve static file if it exists
		const file = Bun.file(filePath);
		if (await file.exists()) return new Response(file);

		// SPA fallback
		return new Response(Bun.file("dist/index.html"));
	},
});

console.log(`Listening on ${server.url}`);
