const env = { ...import.meta.env, ...process.env };

// Feature flags
export const FLAGS_API_HOST = env.FLAGS_API_HOST || env.VITE_FLAGS_API_HOST;
export const FLAGS_CLIENT_KEY =
	env.FLAGS_CLIENT_KEY || env.VITE_FLAGS_CLIENT_KEY;

// Environment helpers
/** @knipignore */
export const isDevEnv = import.meta.env.DEV;
/** @knipignore */
export const isProdEnv = import.meta.env.PROD;
