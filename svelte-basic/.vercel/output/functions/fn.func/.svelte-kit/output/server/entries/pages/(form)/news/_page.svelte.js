import { c as create_ssr_component, e as each, a as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<p class="text-lg">오늘의 뉴스</p>
${each(data.news, (item) => {
    return `<p>${escape(item.title)}</p>`;
  })}`;
});
export {
  Page as default
};
