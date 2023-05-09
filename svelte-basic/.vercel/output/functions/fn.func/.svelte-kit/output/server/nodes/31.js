import * as server from '../entries/pages/(tutorial)/address/_page.server.js';

export const index = 31;
export const component = async () => (await import('../entries/pages/(tutorial)/address/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(tutorial)/address/+page.server.js";
export const imports = ["_app/immutable/nodes/31.c7864eaf.js","_app/immutable/chunks/index.50ff2779.js"];
export const stylesheets = [];
export const fonts = [];
