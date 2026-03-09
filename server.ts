const server = Bun.serve({
	port: 3000,
	hostname: "0.0.0.0",
	async fetch(req) {
		const url = new URL(req.url);
		const filePath = `dist${url.pathname}`;

		// Serve static file if it exists
		const file = Bun.file(filePath);
		if (await file.exists()) return new Response(file);

		// SPA fallback
		return new Response(Bun.file("dist/index.html"));
	},
});

console.log(`Listening on ${server.url}`);
