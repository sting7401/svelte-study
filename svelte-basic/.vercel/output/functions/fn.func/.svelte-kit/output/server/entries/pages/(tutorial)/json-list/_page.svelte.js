import { c as create_ssr_component, e as each, v as validate_component } from "../../../../chunks/index3.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".product-item.svelte-1bmvdg6{min-height:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const products = data.products;
  console.log(products);
  const Component = data.Component;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="grid gap-2">${each(products, (product) => {
    return `<div class="product-item border m-2 svelte-1bmvdg6">${validate_component(Component, "Component").$$render($$result, { product }, {}, {})}
		</div>`;
  })}</div>`;
});
export {
  Page as default
};
