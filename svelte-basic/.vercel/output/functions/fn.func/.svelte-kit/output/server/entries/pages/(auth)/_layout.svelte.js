import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-ibsxfi{background-color:#0e0e0e;color:#fff}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="svelte-ibsxfi">header</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-pxl5gs{background-color:#0e0e0e;color:#fff}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-pxl5gs">footer</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<h1>password layout group</h1>

${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
