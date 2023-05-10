import { c as create_ssr_component, e as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let numberCalc;
  let number = 0;
  numberCalc = number;
  return `<p>${escape(number)}</p>
<p>${escape(numberCalc)}</p>

<button type="button">+</button>
<button type="button">-</button>

<button type="button">+</button>
<button type="button">-</button>`;
});
export {
  Page as default
};
