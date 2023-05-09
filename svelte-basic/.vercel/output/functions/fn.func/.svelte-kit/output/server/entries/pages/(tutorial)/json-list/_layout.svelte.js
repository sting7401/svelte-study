import { c as create_ssr_component, b as subscribe, a as escape } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const { username } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1e4dqak_START -->${$$result.title = `<title>${escape($page.data.notification || "다르거나")}</title>`, ""}<!-- HEAD_svelte-1e4dqak_END -->`, ""}

${$page.data.notification ? `<p class="bg-slate-300 rounded-md m-3 p-2">알림 배너 ${escape($page.data.notification)}</p>` : ``}

<p class="text-xl text-gray-800">부모 data 사용 ${escape(username)}</p>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
