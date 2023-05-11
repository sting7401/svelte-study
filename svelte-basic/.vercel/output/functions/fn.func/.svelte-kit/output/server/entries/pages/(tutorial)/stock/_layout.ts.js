const load = async ({ fetch }) => {
  const url1 = "http://localhost:5000/most-active-stock";
  const url2 = "http://localhost:5000/top-gaining-stock";
  const url3 = "http://localhost:5000/top-losing-stock";
  const res1 = await fetch(url1);
  const res2 = await fetch(url2);
  const res3 = await fetch(url3);
  const result1 = await res1.json();
  const result2 = await res2.json();
  const result3 = await res3.json();
  return {
    result1,
    result2,
    result3
  };
};
export {
  load
};
