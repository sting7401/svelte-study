import { c as create_ssr_component, e as each, d as add_attribute, a as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { addressList } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<select><option value="">선택해주세요.</option>${each(addressList, (addressOption) => {
    return `<option${add_attribute("value", addressOption, 0)}>${escape(addressOption)}</option>`;
  })}</select>`;
});
export {
  Page as default
};
