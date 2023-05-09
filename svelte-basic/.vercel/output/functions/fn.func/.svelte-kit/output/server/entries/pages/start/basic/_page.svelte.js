import { c as create_ssr_component, a as escape, v as validate_component } from "../../../../chunks/index3.js";
const Child = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name: name2 = null | void 0 } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name2 !== void 0)
    $$bindings.name(name2);
  return `<p>${escape(name2)}</p>`;
});
let name = "child";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${escape(name)}

${validate_component(Child, "Child").$$render($$result, { name }, {}, {})}`;
});
export {
  Page as default
};
