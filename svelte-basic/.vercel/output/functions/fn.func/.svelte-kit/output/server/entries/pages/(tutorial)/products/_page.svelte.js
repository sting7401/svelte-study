import { c as create_ssr_component, e as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { productId = 100 } = $$props;
  if ($$props.productId === void 0 && $$bindings.productId && productId !== void 0)
    $$bindings.productId(productId);
  return `<a href="/tutorial">home</a>

<ul><li><a href="/tutorial/products/product1">1</a></li>
	<li>2</li>
	<li><a href="${"/tutorial/products/product" + escape(productId, true)}">1${escape(productId)}</a></li></ul>`;
});
export {
  Page as default
};
