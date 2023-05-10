import "../../../../../chunks/index.js";
const load = async ({ fetch, params, url, route }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/products/${id}`);
  const products = await res.json();
  const pageTitle = "상품 상세";
  const notification = "자식 상세";
  console.log(fetch, params, url, route);
  return {
    id,
    pageTitle,
    products,
    notification
  };
};
const prerender = "auto";
export {
  load,
  prerender
};
