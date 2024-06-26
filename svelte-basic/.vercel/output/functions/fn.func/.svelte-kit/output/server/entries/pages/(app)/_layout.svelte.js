import { c as create_ssr_component, b as each, e as escape } from "../../../chunks/index3.js";
/* empty css                     */const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.svelte-1ahaeol{margin-right:1rem;list-style-type:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const basicList = new Array(12);
  const stepList = new Array(2);
  $$result.css.add(css);
  return `<nav class="flex hover:">${each(basicList, (_, index) => {
    return `<li class="svelte-1ahaeol"><a href="${"/basic" + escape(index + 1, true)}" class="text-sm font-bold underline transition animate-bounce hover:text-lg">${escape(index + 1)}</a>
		</li>`;
  })}
	${each(stepList, (_, i) => {
    return `<li class="svelte-1ahaeol"><a href="${"/step0" + escape(i + 1, true)}" class="text-sm font-bold underline transition animate-bounce hover:text-lg">${escape(i + 1)}</a>
		</li>`;
  })}</nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
