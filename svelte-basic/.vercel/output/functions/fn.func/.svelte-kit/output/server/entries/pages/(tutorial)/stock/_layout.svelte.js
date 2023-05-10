import { c as create_ssr_component, e as escape } from "../../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-3"><p class="m-2">active: ${escape(data.result1.symbol)}</p>
	<p class="m-2">gaining: ${escape(data.result2.symbol)}</p>
	<p class="m-2">losing: ${escape(data.result3.symbol)}</p></div>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
