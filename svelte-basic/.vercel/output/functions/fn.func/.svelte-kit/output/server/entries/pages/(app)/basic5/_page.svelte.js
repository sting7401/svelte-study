import { c as create_ssr_component, i as is_promise, n as noop, b as each, e as escape } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let list = [];
  return `<button type="button">가져오기 </button>

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<p>기다림</p>
`;
    }
    return function(values) {
      return `
	${each(values, ({ userId, id, title, completed }) => {
        return `<li>${escape(id)} ${escape(title)} ${escape(completed)}</li>`;
      })}
`;
    }(__value);
  }(list)}`;
});
export {
  Page as default
};
