import { c as create_ssr_component, a as subscribe, d as add_attribute, b as each, e as escape } from "../../../../chunks/index3.js";
import { w as writable } from "../../../../chunks/index2.js";
const hobbies = writable([]);
const customStore = {
  subscribe: hobbies.subscribe,
  setHob: (items) => {
    hobbies.set(items);
  },
  addHob: (hob) => {
    hobbies.update((items) => {
      return items.concat(hob);
    });
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storeHobs, $$unsubscribe_storeHobs;
  $$unsubscribe_storeHobs = subscribe(customStore, (value) => $storeHobs = value);
  let hobs = [];
  let hobInput;
  let isLoading = false;
  isLoading = true;
  fetch("https://svelte-max-658a0-default-rtdb.firebaseio.com/hobbies.json").then((res) => {
    if (!res.ok) {
      throw new Error("failed");
    }
    return res.json();
  }).then((data) => {
    isLoading = false;
    customStore.setHob(Object.values(data));
    for (const key of data) {
      console.log(key, data[key]);
    }
    return hobs;
  }).catch((err) => {
    isLoading = false;
    console.log(err);
  });
  $$unsubscribe_storeHobs();
  return `<label for="hobId">hobs</label>
<input type="text" id="hobId"${add_attribute("this", hobInput, 0)}>
<button>add hobs</button>

${isLoading ? `<p>isLoading</p>` : ``}
<ul>${each($storeHobs, (item) => {
    return `<li>${escape(item)}</li>`;
  })}</ul>

`;
});
export {
  Page as default
};
