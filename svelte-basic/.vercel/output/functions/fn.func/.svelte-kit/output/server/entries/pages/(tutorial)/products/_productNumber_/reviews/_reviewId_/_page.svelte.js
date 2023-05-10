import { c as create_ssr_component, a as subscribe, e as escape } from "../../../../../../../chunks/index3.js";
import { p as page } from "../../../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { productNumber, reviewId } = $page.params;
  $$unsubscribe_page();
  return `<p>${escape(productNumber)} ${escape(reviewId)}</p>`;
});
export {
  Page as default
};
