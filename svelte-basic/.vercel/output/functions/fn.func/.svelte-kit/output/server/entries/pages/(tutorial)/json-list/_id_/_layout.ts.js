const load = async ({ fetch, parent }) => {
  const pageTitle = "레이아웃 js";
  const parentData = await parent();
  const { username } = parentData;
  const url = "http://localhost:5000/products";
  const res = await fetch(url);
  const jsProducts = await res.json();
  return { username, pageTitle, jsProducts };
};
export {
  load
};
