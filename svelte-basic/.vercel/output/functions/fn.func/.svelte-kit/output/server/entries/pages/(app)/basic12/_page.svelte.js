import { c as create_ssr_component, e as escape, b as each, v as validate_component, m as missing_component } from "../../../../chunks/index3.js";
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { id } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<h1>${escape(title)}</h1>
<button>add to cart</button>`;
});
const FamilyNode_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-104zquo{margin-left:2rem}.active.svelte-104zquo{color:red}",
  map: null
};
console.log("한번만");
const FamilyNode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { member } = $$props;
  console.log("실행");
  if ($$props.member === void 0 && $$bindings.member && member !== void 0)
    $$bindings.member(member);
  $$result.css.add(css$1);
  return `<div class="${["svelte-104zquo", ""].join(" ").trim()}"><h1>${escape(member.name)}</h1>

	${member.isParent ? `${each(member.children, (child) => {
    return `${validate_component(FamilyNode, "svelte:self").$$render($$result, { member: child }, {}, {})}`;
  })}` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-ox7ly3{height:3000px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  let currentTitle = "my app";
  let familyStructure = [
    {
      isParent: true,
      name: "son",
      children: [
        { isParent: false, name: "son1" },
        {
          isParent: true,
          name: "son2",
          children: [{ isParent: false, name: "son3" }, { isParent: false, name: "son4" }]
        }
      ]
    },
    { isParent: false, name: "son" }
  ];
  let renderComponent = { cmp: Product, title: "text", id: "p1" };
  $$result.css.add(css);
  {
    console.log(y);
  }
  return `

${$$result.head += `<!-- HEAD_svelte-1oc9znn_START -->${$$result.title = `<title>${escape(currentTitle)}</title>`, ""}<!-- HEAD_svelte-1oc9znn_END -->`, ""}


<button>change title</button>

<div class="svelte-ox7ly3"><button>toggle</button>

	${validate_component(renderComponent.cmp || missing_component, "svelte:component").$$render(
    $$result,
    {
      title: renderComponent.title,
      id: renderComponent.id
    },
    {},
    {}
  )}

	

	${each(familyStructure, (item) => {
    return `${validate_component(FamilyNode, "FamilyNode").$$render($$result, { member: item }, {}, {})}`;
  })}</div>`;
});
export {
  Page as default
};
