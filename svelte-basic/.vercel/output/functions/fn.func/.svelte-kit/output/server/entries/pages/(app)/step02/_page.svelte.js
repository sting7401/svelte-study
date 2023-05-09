import { c as create_ssr_component, e as each, v as validate_component, d as add_attribute, a as escape } from "../../../../chunks/index3.js";
import { B as Button, C as ContactCard } from "../../../../chunks/ContactCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputList = [
    {
      name: "inputList1",
      label: "User Name",
      type: "input",
      value: "song"
    },
    {
      name: "inputList2",
      label: "Job Title",
      type: "input",
      value: ""
    },
    {
      name: "inputList3",
      label: "Image URL",
      type: "input",
      value: ""
    },
    {
      name: "inputList4",
      label: "Description",
      type: "textarea",
      value: ""
    }
  ];
  let createContacts = [];
  return `${each(inputList, ({ name, label, type, value }) => {
    return `<div><label${add_attribute("for", name, 0)}>${escape(label)}</label>
		${type === "textarea" ? `s
			<textarea${add_attribute("name", name, 0)}${add_attribute("id", name, 0)} cols="30" rows="10">${value || ""}</textarea>` : `${type === "input" ? `<input${add_attribute("id", name, 0)} type="text"${add_attribute("value", value, 0)}>` : ``}`}
	</div>`;
  })}

${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `더하기`;
    }
  })}
${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `제거하기`;
    }
  })}
${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `마지막 제거`;
    }
  })}

${``}

${createContacts.length ? each(createContacts, (contactList, index) => {
    return `<h2># ${escape(index + 1)}</h2>
	${validate_component(ContactCard, "ContactCard").$$render(
      $$result,
      {
        inputList1: contactList.name,
        inputList2: contactList.job,
        inputList3: contactList.image,
        inputList4: contactList.desc
      },
      {},
      {}
    )}`;
  }) : `<p>게시글이 없습니다.</p>`}`;
});
export {
  Page as default
};
