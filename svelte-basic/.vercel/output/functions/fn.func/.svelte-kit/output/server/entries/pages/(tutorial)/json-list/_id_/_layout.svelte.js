import { c as create_ssr_component, e as escape, b as each } from "../../../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const username = data.username;
  const pageTitle = data.pageTitle;
  const jsProducts = data.jsProducts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${slots.default ? slots.default({}) : ``}

<h3>${escape(pageTitle)} for ${escape(username)}</h3>

<div class="grid gap-4 grid-cols-3">${each(jsProducts, (product) => {
    return `<div class="border rounded-md m-2 p-2 bg-slate-400"><p class="pr-5 text-fuchsia-50">${escape(product.title)}</p>
			<p class="pr-5 text-fuchsia-50">${escape(product.description)}</p>
		</div>`;
  })}</div>`;
});
export {
  Layout as default
};
