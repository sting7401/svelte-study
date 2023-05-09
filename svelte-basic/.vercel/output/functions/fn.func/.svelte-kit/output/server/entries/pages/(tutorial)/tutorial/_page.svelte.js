import { c as create_ssr_component } from "../../../../chunks/index3.js";
import { c as client_method } from "../../../../chunks/singletons.js";
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  beforeNavigate((navigation) => {
    console.log({ before: navigation });
  });
  afterNavigate((navigation) => {
    console.log({ after: navigation });
  });
  return `<a href="/tutorial/first">first</a>
<a href="/tutorial/products">products</a>

<button>place order</button>`;
});
export {
  Page as default
};
