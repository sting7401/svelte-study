import { c as create_ssr_component, b as subscribe, a as escape } from "../../../../../chunks/index3.js";
import { p as page } from "../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  console.log($page.params.slug);
  const slugArr = $page.params.slug.split("/");
  $$unsubscribe_page();
  return `<p>Docs page</p>
<p>Catch All Routesd</p>
<p>params.slug로 url 체크</p>

${slugArr.length === 1 ? `<p>${escape(slugArr[0])}</p>` : `${slugArr.length === 2 ? `<p>${escape(slugArr[0])}/${escape(slugArr[1])}</p>` : ``}`}`;
});
export {
  Page as default
};
