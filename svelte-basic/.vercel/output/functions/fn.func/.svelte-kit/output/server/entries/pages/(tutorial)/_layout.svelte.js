import { c as create_ssr_component } from "../../../chunks/index3.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-tpg2h3{background-color:#0e0e0e;color:#fff}footer.svelte-tpg2h3{background-color:#0e0e0e;color:#fff}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-tpg2h3">header</header>

${slots.default ? slots.default({}) : ``}

<footer data-sveltekit-preload-code="hover" class="svelte-tpg2h3">footer</footer>`;
});
export {
  Layout as default
};
