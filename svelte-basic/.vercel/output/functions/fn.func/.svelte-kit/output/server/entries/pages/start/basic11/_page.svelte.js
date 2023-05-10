import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
const Slot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slotText } = $$props;
  console.log(slotText);
  if ($$props.slotText === void 0 && $$bindings.slotText && slotText !== void 0)
    $$bindings.slotText(slotText);
  return `<div class="bg-slate-400">${slots.default ? slots.default({}) : ``}

	${slots.slotText ? slots.slotText({}) : ` 1112`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(Slot, "Slot").$$render($$result, {}, {}, {
    slotText: () => {
      return `<span slot="slotText">네이밍 있는 슬롯 요소</span>`;
    },
    default: () => {
      return `<span>슬롯 요소</span>`;
    }
  })}</div>`;
});
export {
  Page as default
};
