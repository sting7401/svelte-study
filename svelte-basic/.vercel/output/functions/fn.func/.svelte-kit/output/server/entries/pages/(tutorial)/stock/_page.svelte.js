import { c as create_ssr_component, b as each, e as escape } from "../../../../chunks/index3.js";
import "../../../../chunks/singletons.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const stocks = data.stocks;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${each(stocks, (stock) => {
    return `<p>${escape(stock.symbol)} - ${escape(stock.price)}</p>`;
  })}

<button type="button">새로고침</button>`;
});
export {
  Page as default
};
