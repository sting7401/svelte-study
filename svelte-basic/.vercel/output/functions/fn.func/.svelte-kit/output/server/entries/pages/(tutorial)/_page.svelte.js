import { c as create_ssr_component, a as escape } from "../../../chunks/index3.js";
import "../../../chunks/singletons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p>${escape(data.currentTime)}</p>
<button type="button" class="border rounded-sm m-3 p-2">go to Product
</button>`;
});
export {
  Page as default
};
