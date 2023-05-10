import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/index3.js";
import "../../../../chunks/singletons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let email = "";
  let message = "";
  const snapshot = {
    capture: () => {
      return { name, email, message };
    },
    restore: (data) => {
      name = data.name;
      email = data.email;
      message = data.message;
    }
  };
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  return `<form method="post"><div><input type="text" name="username" id="" class="border p-2" autocomplete="off" placeholder="name"${add_attribute("value", name, 0)}></div>
	<div><input type="email" name="email" id="" class="border p-2" autocomplete="off" placeholder="email"${add_attribute("value", email, 0)}></div>
	<div><textarea name="message" id="" class="border p-2" cols="30" rows="10" placeholder="message">${message || ""}</textarea></div>
	<button type="submit" class="border p-2">로그인</button>

	<button type="button" class="border p-2">취소</button></form>`;
});
export {
  Page as default
};
