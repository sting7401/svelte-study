import { c as create_ssr_component, b as subscribe, a as escape } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const greetings = {
    en: "Hello",
    es: "Hola",
    kr: "안녕"
  };
  const { lang = "en" } = $page.params;
  const greeting = greetings[lang];
  $$unsubscribe_page();
  return `<p>${escape(greeting)}</p>

<p>언어 변경 페이지 라우팅 Optional Parameters</p>

[[lang]] = 옵션`;
});
export {
  Page as default
};
