import{S as g,i as x,s as G,k,q as m,a as C,e as R,l as y,m as P,r as b,h as a,c as $,b as _,G as v,H as A,I as H}from"../chunks/index.10dfffe8.js";import{p as I}from"../chunks/stores.b6035225.js";function j(f){let t,i=f[0][0]+"",s,l,r=f[0][1]+"",n;return{c(){t=k("p"),s=m(i),l=m("/"),n=m(r)},l(o){t=y(o,"P",{});var c=P(t);s=b(c,i),l=b(c,"/"),n=b(c,r),c.forEach(a)},m(o,c){_(o,t,c),v(t,s),v(t,l),v(t,n)},p:A,d(o){o&&a(t)}}}function w(f){let t,i=f[0][0]+"",s;return{c(){t=k("p"),s=m(i)},l(l){t=y(l,"P",{});var r=P(t);s=b(r,i),r.forEach(a)},m(l,r){_(l,t,r),v(t,s)},p:A,d(l){l&&a(t)}}}function z(f){let t,i,s,l,r,n,o,c,d,E;function S(e,p){if(e[0].length===1)return w;if(e[0].length===2)return j}let h=S(f),u=h&&h(f);return{c(){t=k("p"),i=m("Docs page"),s=C(),l=k("p"),r=m("Catch All Routesd"),n=C(),o=k("p"),c=m("params.slug로 url 체크"),d=C(),u&&u.c(),E=R()},l(e){t=y(e,"P",{});var p=P(t);i=b(p,"Docs page"),p.forEach(a),s=$(e),l=y(e,"P",{});var q=P(l);r=b(q,"Catch All Routesd"),q.forEach(a),n=$(e),o=y(e,"P",{});var D=P(o);c=b(D,"params.slug로 url 체크"),D.forEach(a),d=$(e),u&&u.l(e),E=R()},m(e,p){_(e,t,p),v(t,i),_(e,s,p),_(e,l,p),v(l,r),_(e,n,p),_(e,o,p),v(o,c),_(e,d,p),u&&u.m(e,p),_(e,E,p)},p(e,[p]){u&&u.p(e,p)},i:A,o:A,d(e){e&&a(t),e&&a(s),e&&a(l),e&&a(n),e&&a(o),e&&a(d),u&&u.d(e),e&&a(E)}}}function B(f,t,i){let s;return H(f,I,r=>i(1,s=r)),console.log(s.params.slug),[s.params.slug.split("/")]}class K extends g{constructor(t){super(),x(this,t,B,z,G,{})}}export{K as component};
