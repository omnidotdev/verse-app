export const flags = {
	async isEnabled(key: string): Promise<boolean> {
		try {
			const res = await fetch(`/api/flags/${key}`);
			if (!res.ok) return false;
			const data = await res.json();
			return !!data.enabled;
		} catch {
			return false;
		}
	},
};

export const FLAGS = {
	MAINTENANCE: "maintenance",
} as const;
