import * as server from '../entries/pages/(form)/news/_page.server.ts.js';

export const index = 30;
export const component = async () => (await import('../entries/pages/(form)/news/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(form)/news/+page.server.ts";
export const imports = ["_app/immutable/nodes/30.adaec5d6.js","_app/immutable/chunks/index.204e011a.js"];
export const stylesheets = [];
export const fonts = [];
