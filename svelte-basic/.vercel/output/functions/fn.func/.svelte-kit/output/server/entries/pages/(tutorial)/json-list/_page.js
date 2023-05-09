import { c as create_ssr_component, d as add_attribute, a as escape } from "../../../../chunks/index3.js";
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  const { id = "", title = "", price = "" } = product;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `<div class="p-1"><a${add_attribute("href", `/products/${id}`, 0)} class="p-2"><p class="text-lg">${escape(title)}</p></a>

	<p>${escape(price)}</p></div>`;
});
const load = async ({ fetch, data }) => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  const title = "1";
  const notification = "내부 페이지 알림";
  return { title, products, Component: Product, notification };
};
const ssr = true;
const csr = false;
export {
  csr,
  load,
  ssr
};
