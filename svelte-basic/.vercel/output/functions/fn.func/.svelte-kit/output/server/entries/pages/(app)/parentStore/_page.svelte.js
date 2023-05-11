import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component, o as set_store_value } from "../../../../chunks/index3.js";
import { w as writable } from "../../../../chunks/index2.js";
let storeName = writable("");
const Child = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeName, $$unsubscribe_storeName;
  $$unsubscribe_storeName = subscribe(storeName, (value) => $storeName = value);
  $$unsubscribe_storeName();
  return `

<p>${escape($storeName)}</p>`;
});
const Parent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `



${validate_component(Child, "Child").$$render($$result, {}, {}, {})}`;
});
let name = "world";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeName, $$unsubscribe_storeName;
  $$unsubscribe_storeName = subscribe(storeName, (value) => $storeName = value);
  set_store_value(storeName, $storeName = name, $storeName);
  $$unsubscribe_storeName();
  return `

<h1>app</h1>
${validate_component(Parent, "Parent").$$render($$result, { name }, {}, {})}`;
});
export {
  Page as default
};
