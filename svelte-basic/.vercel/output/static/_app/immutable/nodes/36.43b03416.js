import{S as w,i as O,s as S,k as _,q as h,a as k,l as b,m as y,r as v,h as u,c as j,n as g,b as d,G as T,N as p,u as q,H as P,O as x}from"../chunks/index.10dfffe8.js";import{p as C,a as E,g as N}from"../chunks/navigation.2eef2f8c.js";const z=async({fetch:s})=>(console.log("Loading"),{currentTime:await(await s("/api/current-time")).text()}),B=!1,D=!1,U=Object.freeze(Object.defineProperty({__proto__:null,csr:D,load:z,prerender:B},Symbol.toStringTag,{value:"Module"}));function G(s){let a,o=s[0].currentTime+"",n,c,t,i,l,m;return{c(){a=_("p"),n=h(o),c=k(),t=_("button"),i=h("go to Product"),this.h()},l(e){a=b(e,"P",{});var r=y(a);n=v(r,o),r.forEach(u),c=j(e),t=b(e,"BUTTON",{type:!0,class:!0});var f=y(t);i=v(f,"go to Product"),f.forEach(u),this.h()},h(){g(t,"type","button"),g(t,"class","border rounded-sm m-3 p-2")},m(e,r){d(e,a,r),T(a,n),d(e,c,r),d(e,t,r),T(t,i),l||(m=[p(t,"focus",s[1]),p(t,"mouseover",s[2]),p(t,"click",s[3])],l=!0)},p(e,[r]){r&1&&o!==(o=e[0].currentTime+"")&&q(n,o)},i:P,o:P,d(e){e&&u(a),e&&u(c),e&&u(t),l=!1,x(m)}}}function H(s,a,o){let{data:n}=a;const c=async()=>{await C("/products")},t=async()=>{await E("/products")},i=()=>{N("/products/")};return s.$$set=l=>{"data"in l&&o(0,n=l.data)},[n,c,t,i]}class A extends w{constructor(a){super(),O(this,a,H,G,S,{data:0})}}export{A as component,U as universal};
