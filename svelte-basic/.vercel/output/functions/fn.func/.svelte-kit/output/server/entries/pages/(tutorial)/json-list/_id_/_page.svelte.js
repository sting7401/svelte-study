import { c as create_ssr_component, e as escape } from "../../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { pageTitle, products } = data;
  const { title = "", price = 0, description = "" } = products;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>${escape(pageTitle)}</h1>
<div class="border rounded-sm m-3"><h2 class="text-base text-red-700">${escape(title)} = $${escape(price)}</h2>
	<p class="text-sm">${escape(description)}</p></div>`;
});
export {
  Page as default
};
