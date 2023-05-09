import { c as create_ssr_component, e as each, a as escape } from "../../chunks/index3.js";
const input = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="flex hover:">${each(Array(12), (_, index) => {
    return `<li><a href="${"/start/basic" + escape(index, true)}" class="text-sm font-bold underline transition animate-bounce hover:text-lg">${escape(index)}</a>
		</li>`;
  })}
	${each(Array(2), (_, i) => {
    return `<li><a href="${"/start/step0" + escape(i + 1, true)}" class="text-sm font-bold underline transition animate-bounce hover:text-lg">${escape(i + 1)}</a>
		</li>`;
  })}</nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
