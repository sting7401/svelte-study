import * as server from '../entries/pages/(tutorial)/address/_page.server.js';

export const index = 36;
export const component = async () => (await import('../entries/pages/(tutorial)/address/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(tutorial)/address/+page.server.js";
export const imports = ["_app/immutable/nodes/36.23d4dbce.js","_app/immutable/chunks/index.5df5f97f.js"];
export const stylesheets = [];
export const fonts = [];
