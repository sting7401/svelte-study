import { c as create_ssr_component, d as add_attribute, e as escape, b as each } from "../../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pass = "";
  let passLength = "short";
  let passArray = [];
  {
    if (pass.trim().length < 5) {
      passLength = "short";
    } else if (pass.trim().length > 10) {
      passLength = "long";
    } else {
      passLength = "valid";
    }
  }
  return `<input type="password" name="" id=""${add_attribute("value", pass, 0)}>

<button>확인</button>

${passLength === "short" ? `<p>텍스트가 짧음</p>` : `${passLength === "long" ? `<p>텍스트가 길다</p>` : `<p>${escape(pass)}</p>`}`}

<ul>${each(passArray, (pw, i) => {
    return `<li>${escape(pw)}</li>`;
  })}
</ul>`;
});
export {
  Page as default
};
