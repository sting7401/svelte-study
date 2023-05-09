const load = async ({ fetch }) => {
  console.log("Loading");
  const res = await fetch("/api/current-time");
  const currentTime = await res.json();
  return { currentTime };
};
const prerender = false;
const csr = false;
export {
  csr,
  load,
  prerender
};
