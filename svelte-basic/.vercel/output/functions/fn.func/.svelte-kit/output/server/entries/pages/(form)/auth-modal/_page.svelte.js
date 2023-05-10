import { c as create_ssr_component, a as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  console.log(form);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<form method="post" action="auth?/login"><p>${escape(form?.message || "")}</p>

	<input type="text" name="username" id="" class="border p-2" autocomplete="off">
	<input type="password" name="password" id="" class="border p-2" autocomplete="off">
	<button type="submit" class="border p-2">로그인</button>
	<button formaction="?/register" class="border p-2">등록</button></form>`;
});
export {
  Page as default
};
