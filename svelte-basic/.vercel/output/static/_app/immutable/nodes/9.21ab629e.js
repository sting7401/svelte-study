import{S as C,i as H,s as I,C as M,a as T,k as j,q as y,c as k,l as E,m as P,r as D,h as m,n as S,b,G as v,D as O,E as V,F as z,g as F,d as G,M as L,H as A}from"../chunks/index.10dfffe8.js";const B=async({fetch:o,parent:e})=>{const s="레이아웃 js",_=await e(),{username:d}=_,r=await(await o("http://localhost:5000/products")).json();return{username:d,pageTitle:s,jsProducts:r}},Q=Object.freeze(Object.defineProperty({__proto__:null,load:B},Symbol.toStringTag,{value:"Module"}));function w(o,e,s){const _=o.slice();return _[6]=e[s],_}function q(o){let e,s,_=o[6].title+"",d,c,u,r=o[6].description+"",h,p;return{c(){e=j("div"),s=j("p"),d=y(_),c=T(),u=j("p"),h=y(r),p=T(),this.h()},l(n){e=E(n,"DIV",{class:!0});var f=P(e);s=E(f,"P",{class:!0});var l=P(s);d=D(l,_),l.forEach(m),c=k(f),u=E(f,"P",{class:!0});var t=P(u);h=D(t,r),t.forEach(m),p=k(f),f.forEach(m),this.h()},h(){S(s,"class","pr-5 text-fuchsia-50"),S(u,"class","pr-5 text-fuchsia-50"),S(e,"class","border rounded-md m-2 p-2 bg-slate-400")},m(n,f){b(n,e,f),v(e,s),v(s,d),v(e,c),v(e,u),v(u,h),v(e,p)},p:A,d(n){n&&m(e)}}}function J(o){let e,s,_,d,c,u,r,h;const p=o[5].default,n=M(p,o,o[4],null);let f=o[2],l=[];for(let t=0;t<f.length;t+=1)l[t]=q(w(o,f,t));return{c(){n&&n.c(),e=T(),s=j("h3"),_=y(o[1]),d=y(" for "),c=y(o[0]),u=T(),r=j("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){n&&n.l(t),e=k(t),s=E(t,"H3",{});var i=P(s);_=D(i,o[1]),d=D(i," for "),c=D(i,o[0]),i.forEach(m),u=k(t),r=E(t,"DIV",{class:!0});var a=P(r);for(let g=0;g<l.length;g+=1)l[g].l(a);a.forEach(m),this.h()},h(){S(r,"class","grid gap-4 grid-cols-3")},m(t,i){n&&n.m(t,i),b(t,e,i),b(t,s,i),v(s,_),v(s,d),v(s,c),b(t,u,i),b(t,r,i);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(r,null);h=!0},p(t,[i]){if(n&&n.p&&(!h||i&16)&&O(n,p,t,t[4],h?z(p,t[4],i,null):V(t[4]),null),i&4){f=t[2];let a;for(a=0;a<f.length;a+=1){const g=w(t,f,a);l[a]?l[a].p(g,i):(l[a]=q(g),l[a].c(),l[a].m(r,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=f.length}},i(t){h||(F(n,t),h=!0)},o(t){G(n,t),h=!1},d(t){n&&n.d(t),t&&m(e),t&&m(s),t&&m(u),t&&m(r),L(l,t)}}}function K(o,e,s){let{$$slots:_={},$$scope:d}=e,{data:c}=e;const u=c.username,r=c.pageTitle,h=c.jsProducts;return o.$$set=p=>{"data"in p&&s(3,c=p.data),"$$scope"in p&&s(4,d=p.$$scope)},[u,r,h,c,d,_]}class R extends C{constructor(e){super(),H(this,e,K,J,I,{data:3})}}export{R as component,Q as universal};
