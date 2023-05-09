const load = async ({ fetch, depends }) => {
  const url = "http://localhost:5000/stocks";
  const res = await fetch(url);
  const stocks = await res.json();
  depends("stocks:active");
  return {
    stocks
  };
};
export {
  load
};
