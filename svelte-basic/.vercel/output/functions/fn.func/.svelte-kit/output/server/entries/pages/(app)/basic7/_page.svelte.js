import { c as create_ssr_component, d as add_attribute, a as escape, e as each } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let textValue = "";
  let number = "";
  let check = false;
  let checkList = ["1", "2", "3"];
  let checkInit = "1";
  let radioList = ["1", "2", "3"];
  let radioInit = "1";
  let textareaValue = "";
  let selectList = [{ id: 1, text: "a" }, { id: 2, text: "a1" }, { id: 2, text: "a2" }];
  let selectInit = {};
  return `<input type="text" name="" id=""${add_attribute("value", textValue, 0)}>

<p>${escape(textValue)}</p>

<input type="number" name="" id=""${add_attribute("value", number, 0)}>
<input type="range" name="" id=""${add_attribute("value", number, 0)}>

<p>${escape(number)}</p>

<input type="checkbox" name="" id=""${add_attribute("checked", check, 1)}>
<p>${escape(check)}</p>

${each(checkList, (item) => {
    return `<input type="checkbox"${add_attribute("value", item, 0)} id="${"check" + escape(item, true)}"${~checkInit.indexOf(item) ? add_attribute("checked", true, 1) : ""}>
	<label for="${"check" + escape(item, true)}">${escape(item)}</label>`;
  })}
<p>${escape(checkInit)}</p>

${each(radioList, (item) => {
    return `<input type="radio"${add_attribute("value", item, 0)} id="${"radio" + escape(item, true)}"${item === radioInit ? add_attribute("checked", true, 1) : ""}>
	<label for="${"radio" + escape(item, true)}">${escape(item)}</label>`;
  })}

<textarea name="" id="" cols="30" rows="10">${""}</textarea>
<p>${escape(textareaValue)}</p>

<select name="" id="">${each(selectList, (item) => {
    return `<option${add_attribute("value", item.text, 0)}>${escape(item.text)}</option>`;
  })}</select>
<p>${escape(selectInit.id)} ${escape(selectInit.text)}</p>`;
});
export {
  Page as default
};
