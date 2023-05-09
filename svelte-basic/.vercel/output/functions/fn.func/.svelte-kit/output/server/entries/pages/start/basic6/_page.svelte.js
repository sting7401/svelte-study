import { c as create_ssr_component, a as escape, v as validate_component } from "../../../../chunks/index3.js";
const Child = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { number = 10 } = $$props;
  let { person = { name: "", age: 0 } } = $$props;
  let { name = "" } = $$props;
  let { age = 0 } = $$props;
  if ($$props.number === void 0 && $$bindings.number && number !== void 0)
    $$bindings.number(number);
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.age === void 0 && $$bindings.age && age !== void 0)
    $$bindings.age(age);
  return `<h1>${escape(number)}</h1>

<p>${escape(person)}</p>

<p>${escape(name)}</p>
<p>${escape(age)}</p>`;
});
const ChildBind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cValue = 10 } = $$props;
  if ($$props.cValue === void 0 && $$bindings.cValue && cValue !== void 0)
    $$bindings.cValue(cValue);
  return `<button>자식 버튼</button>
<p>${escape(cValue)}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let number = 0;
  let person = { name: "song", age: 20 };
  let pValue = 1;
  let cValue = 1;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div><button>+</button>
	<button>-</button>

	${validate_component(Child, "Child").$$render(
      $$result,
      {
        number,
        person: person.name + " " + person.age
      },
      {},
      {}
    )}
	${validate_component(Child, "Child").$$render($$result, Object.assign({}, person), {}, {})}

	${validate_component(ChildBind, "ChildBind").$$render(
      $$result,
      { cValue: pValue },
      {
        cValue: ($$value) => {
          pValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	${validate_component(ChildBind, "ChildBind").$$render(
      $$result,
      { cValue },
      {
        cValue: ($$value) => {
          cValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
