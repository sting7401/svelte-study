import { c as create_ssr_component, p as createEventDispatcher, a as escape } from "./index3.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { iconName } = $$props;
  const iconNames = `icon-${iconName}`;
  if ($$props.iconName === void 0 && $$bindings.iconName && iconName !== void 0)
    $$bindings.iconName(iconName);
  return `<button type="button" class="button">${!iconName ? `<i class="${"icon " + escape(iconNames, true)}"></i>` : ``}

	${slots.default ? slots.default({}) : ``}
</button>`;
});
const ContactCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inputList1 } = $$props;
  let { inputList2 } = $$props;
  let { inputList3 } = $$props;
  let { inputList4 } = $$props;
  const initName = inputList1;
  if ($$props.inputList1 === void 0 && $$bindings.inputList1 && inputList1 !== void 0)
    $$bindings.inputList1(inputList1);
  if ($$props.inputList2 === void 0 && $$bindings.inputList2 && inputList2 !== void 0)
    $$bindings.inputList2(inputList2);
  if ($$props.inputList3 === void 0 && $$bindings.inputList3 && inputList3 !== void 0)
    $$bindings.inputList3(inputList3);
  if ($$props.inputList4 === void 0 && $$bindings.inputList4 && inputList4 !== void 0)
    $$bindings.inputList4(inputList4);
  return `<div><img src="" alt="">
	<div>${escape(inputList1)} / ${escape(initName)}</div>
	<div>${escape(inputList2)}</div>
	<div>${escape(inputList3)}</div>
	<div>${escape(inputList4)}</div>
</div>`;
});
export {
  Button as B,
  ContactCard as C
};
