import { Garden } from "@omnidotdev/garden";
import { createFileRoute } from "@tanstack/react-router";

import type { GardenSchema } from "@omnidotdev/garden";

const omniEcosystemGarden: GardenSchema = {
	name: "Omniverse",
	description: "Complete Omni product and tooling ecosystem",
	icon: "🌱",
	version: "2.0.0",
	created_at: "2022-01-15T00:00:00Z",
	updated_at: "2023-06-10T00:00:00Z",
	theme: {
		primary_color: "#6366f1",
		secondary_color: "#a5b4fc",
		background_color: "#f9fafb",
		text_color: "#111827",
	},
	maintainers: [
		{
			name: "Omni Core Team",
			email: "team@omni.dev",
			url: "https://omni.dev",
		},
	],
	sprouts: [
		{
			name: "Omni Consulting",
			homepage_url: "https://omni.dev",
			description: "Omni contracting, consulting, and advice",
			logo: "/img/omni-logo.png",
		},
		{
			name: "Omni Docs",
			homepage_url: "https://docs.omni.dev",
			description: "Documentation portal",
			logo: "/img/omni-logo.png",
		},
	],
	subgardens: [
		{
			name: "Omni Products",
			description: "Core products in the Omni ecosystem",
			icon: "📦",
			version: "1.8.0",
			created_at: "2022-03-20T00:00:00Z",
			updated_at: "2023-05-15T00:00:00Z",
			theme: {
				primary_color: "#2563EB",
				secondary_color: "#93C5FD",
				background_color: "#F8FAFC",
				text_color: "#1E293B",
			},
			maintainers: [
				{
					name: "Omni Core Team",
					email: "team@omni.dev",
					url: "https://omni.dev",
				},
			],
			supergardens: [
				{
					name: "Omniverse",
					url: "https://verse.omni.dev",
					description: "Complete Omni product and tooling ecosystem",
					version: "2.0.0",
				},
			],
			sprouts: [
				{
					name: "Backfeed",
					homepage_url: "https://backfeed.omni.dev",
					description: "User feedback collection and management",
					logo: "/img/backfeed-logo.png",
				},
				{
					name: "Runa",
					homepage_url: "https://runa.omni.dev",
					description: "Lunar project management and collaboration",
					logo: "/img/runa-logo.png",
				},
			],
		},
		{
			name: "Omni Dev Tools",
			description: "Development tools and utilities for Omni ecosystem",
			icon: "🔧",
			version: "1.5.2",
			created_at: "2022-04-12T00:00:00Z",
			updated_at: "2023-05-28T00:00:00Z",
			theme: {
				primary_color: "#0891B2",
				secondary_color: "#67E8F9",
				background_color: "#ECFEFF",
				text_color: "#164E63",
			},
			maintainers: [
				{
					name: "Omni Core Team",
					email: "team@omni.dev",
					url: "https://omni.dev",
				},
			],
			supergardens: [
				{
					name: "Omniverse",
					url: "https://verse.omni.dev",
					description: "Complete Omni product and tooling ecosystem",
					version: "2.0.0",
				},
			],
			sprouts: [
				{
					name: "Omni Terminal",
					homepage_url: "https://terminal.omni.dev",
					description: "GPU-accelerated terminal emulator",
				},
				{
					name: "Omni CLI",
					homepage_url: "https://cli.omni.dev",
					description: "Agentic CLI with TUI and HTTP API",
				},
				{
					name: "Eden",
					homepage_url: "https://eden.omni.dev",
					description: "Developer onboarding preflight checks",
				},
				{
					name: "Templates",
					homepage_url: "https://github.com/omnidotdev/templates",
					description: "Curated project scaffolding templates",
				},
				{
					name: "Sigil",
					homepage_url: "https://sigil.omni.dev",
					description: "Omni design system and component library",
					logo: "/img/sigil-logo.png",
				},
				{
					name: "Thornberry",
					homepage_url: "https://github.com/omnidotdev/thornberry",
					description: "Sigil extension with Tailwind and shadcn",
				},
				{
					name: "Zenpetal",
					homepage_url: "https://github.com/omnidotdev/zenpetal",
					description: "Sigil reference implementation in Panda CSS",
				},
			],
		},
		{
			name: "Omni Specifications",
			description: "Specifications, standards, and schemas for Omni ecosystem",
			icon: "📋",
			version: "1.3.1",
			created_at: "2022-02-28T00:00:00Z",
			updated_at: "2023-06-05T00:00:00Z",
			theme: {
				primary_color: "#A855F7",
				secondary_color: "#D8B4FE",
				background_color: "#FAF5FF",
				text_color: "#581C87",
			},
			maintainers: [
				{
					name: "Omni Core Team",
					email: "team@omni.dev",
					url: "https://omni.dev",
				},
			],
			supergardens: [
				{
					name: "Omniverse",
					url: "https://verse.omni.dev",
					description: "Complete Omni product and tooling ecosystem",
					version: "2.0.0",
				},
			],
			sprouts: [
				{
					name: "Garden",
					homepage_url: "https://garden.omni.dev",
					description: "Product, service, and other ecosystem visualizer",
					logo: "/img/logo.png",
				},
				{
					name: "life.json",
					homepage_url: "https://life.omni.dev",
					description: "Portable digital identity specification",
				},
				{
					name: "persona.json",
					homepage_url: "https://persona.omni.dev",
					description: "Portable non-human identity specification",
				},
			],
		},
		{
			name: "Grid",
			description: "Infrastructure and platform services",
			icon: "🔷",
			theme: {
				primary_color: "#0891B2",
				secondary_color: "#67E8F9",
				background_color: "#ECFEFF",
				text_color: "#164E63",
			},
			supergardens: [
				{
					name: "Omniverse",
					url: "https://verse.omni.dev",
					description: "Complete Omni product and tooling ecosystem",
				},
			],
			sprouts: [
				{
					name: "Beacon",
					homepage_url: "https://beacon.omni.dev",
					description: "AI companion with voice and messaging",
				},
				{
					name: "Synapse",
					homepage_url: "https://synapse.omni.dev",
					description: "AI router for MCP and LLM orchestration",
				},
				{
					name: "Vortex",
					homepage_url: "https://vortex.omni.dev",
					description: "Workflow automation for the decentralized web",
				},
			],
		},
		{
			name: "Reality",
			description: "XR, sensors, and spatial computing",
			icon: "🥽",
			theme: {
				primary_color: "#10B981",
				secondary_color: "#6EE7B7",
				background_color: "#ECFDF5",
				text_color: "#064E3B",
			},
			supergardens: [
				{
					name: "Omniverse",
					url: "https://verse.omni.dev",
					description: "Complete Omni product and tooling ecosystem",
				},
			],
			sprouts: [
				{
					name: "RDK",
					homepage_url: "https://github.com/omnidotdev/rdk",
					description: "React-first XR development kit",
				},
			],
		},
	],
};

const HomeComponent = () => (
	<div className="p-4">
		<Garden
			expandSubgardens
			schema={omniEcosystemGarden}
			controlOptions={{ position: "top-left" }}
			miniMapOptions={{ position: "bottom-left" }}
		/>
	</div>
);

export const Route = createFileRoute("/")({
	component: HomeComponent,
});
