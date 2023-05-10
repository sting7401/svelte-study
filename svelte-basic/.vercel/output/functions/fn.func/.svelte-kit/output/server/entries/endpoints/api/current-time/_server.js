async function GET() {
  return new Response((/* @__PURE__ */ new Date()).toLocaleTimeString());
}
const prerender = false;
export {
  GET,
  prerender
};
