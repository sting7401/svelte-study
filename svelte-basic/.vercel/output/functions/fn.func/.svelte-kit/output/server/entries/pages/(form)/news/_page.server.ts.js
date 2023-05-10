import { r as redirect } from "../../../../chunks/index.js";
const secretKey = "secret-key";
const load = async ({ cookies, url }) => {
  console.log({ secretKey });
  if (!cookies.get("username")) {
    throw redirect(307, `/auth?redirectTo=${url.pathname}`);
  }
  const news = [
    { id: 1, title: "new 1" },
    { id: 2, title: "new 2" },
    { id: 3, title: "new 3" }
  ];
  return { news };
};
export {
  load
};
