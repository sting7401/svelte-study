import { c as create_ssr_component, a as subscribe, d as add_attribute, b as each, e as escape } from "../../../../chunks/index3.js";
import { t as tweened, c as cubicIn } from "../../../../chunks/index4.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-1lybo0u{width:10rem;height:10rem;background-color:#ccc;margin:1rem;padding:1rem;box-shadow:0 2px 8px rgba(0, 0, 0, 0.7)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  const progress = tweened(0, { delay: 0, duration: 700, easing: cubicIn });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  setTimeout(() => {
    progress.set(0.5);
  });
  let boxInput;
  let boxs = [];
  $$result.css.add(css);
  $$unsubscribe_progress();
  return `<progress${add_attribute("value", $progress, 0)}></progress>

<input type="text" name="" id=""${add_attribute("this", boxInput, 0)}>
<button type="button">box 추가</button>

${each(boxs, (box) => {
    return `<div class="box svelte-1lybo0u">${escape(box)}
	</div>`;
  })}`;
});
export {
  Page as default
};
