import { c as create_ssr_component, a as subscribe, e as escape, d as add_attribute } from "../../../../chunks/index3.js";
import "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/singletons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  $page.url.searchParams.get("redirectTo") || "/news";
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$unsubscribe_page();
  return `

<form method="post" action="?/login"><p>${escape(form?.message || "")}</p>

	<input type="text" name="username" id="" class="border p-2" autocomplete="off"${add_attribute("value", form?.username || "", 0)}>
	<input type="password" name="password" id="" class="border p-2" autocomplete="off"${add_attribute("value", form?.password || "", 0)}>
	<button type="submit" class="border p-2">로그인</button>
	<button formaction="?/register" class="border p-2">등록</button></form>`;
});
export {
  Page as default
};
