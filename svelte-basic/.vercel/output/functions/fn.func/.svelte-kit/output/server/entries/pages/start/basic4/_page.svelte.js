import { c as create_ssr_component, a as escape, e as each } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let number = 0;
  let arr = [1, 2, 3, 4, 5];
  let list = [{ name: "list1" }, { name: "list12" }, { name: "list13" }];
  const person = {
    id: "10",
    name: "key",
    age: 10,
    address: "Seoul"
  };
  return `<button type="button">+</button>
<button type="button">-</button>

${`<p>${escape(number)}</p>`}

${`<p>${escape(number)} 0 일때만</p>`}

<ul>${each(arr, (item) => {
    return `<li>${escape(item)}</li>`;
  })}</ul>

<ul>${each(list, ({ name }, index) => {
    return `<li>${escape(index)} ${escape(name)}</li>`;
  })}</ul>

<ul>${each(Object.entries(person), ([key, value], index) => {
    return `<li>${escape(index)} - ${escape(key)}: ${escape(value)}</li>`;
  })}</ul>

<ul>${each(Array(5), (_, index) => {
    return `<li>${escape(index)} 체크</li>`;
  })}</ul>`;
});
export {
  Page as default
};
