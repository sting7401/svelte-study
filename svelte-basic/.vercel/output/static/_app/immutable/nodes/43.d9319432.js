import{S as D,i as F,s as J,k as u,q as E,a as G,l as n,m as c,r as I,h as l,c as H,n as q,b as P,G as a,u as K,H as B}from"../chunks/index.10dfffe8.js";function M(f){let r,p,i,e,_,d,S,b,m,k,x,v,s,y,L,A;return{c(){r=u("a"),p=E("home"),i=G(),e=u("ul"),_=u("li"),d=u("a"),S=E("1"),b=G(),m=u("li"),k=E("2"),x=G(),v=u("li"),s=u("a"),y=E("1"),L=E(f[0]),this.h()},l(t){r=n(t,"A",{href:!0});var o=c(r);p=I(o,"home"),o.forEach(l),i=H(t),e=n(t,"UL",{});var h=c(e);_=n(h,"LI",{});var U=c(_);d=n(U,"A",{href:!0});var j=c(d);S=I(j,"1"),j.forEach(l),U.forEach(l),b=H(h),m=n(h,"LI",{});var w=c(m);k=I(w,"2"),w.forEach(l),x=H(h),v=n(h,"LI",{});var z=c(v);s=n(z,"A",{href:!0});var C=c(s);y=I(C,"1"),L=I(C,f[0]),C.forEach(l),z.forEach(l),h.forEach(l),this.h()},h(){q(r,"href","/tutorial"),q(d,"href","/tutorial/products/product1"),q(s,"href",A="/tutorial/products/product"+f[0])},m(t,o){P(t,r,o),a(r,p),P(t,i,o),P(t,e,o),a(e,_),a(_,d),a(d,S),a(e,b),a(e,m),a(m,k),a(e,x),a(e,v),a(v,s),a(s,y),a(s,L)},p(t,[o]){o&1&&K(L,t[0]),o&1&&A!==(A="/tutorial/products/product"+t[0])&&q(s,"href",A)},i:B,o:B,d(t){t&&l(r),t&&l(i),t&&l(e)}}}function N(f,r,p){let{productId:i=100}=r;return f.$$set=e=>{"productId"in e&&p(0,i=e.productId)},[i]}class Q extends D{constructor(r){super(),F(this,r,N,M,J,{productId:0})}}export{Q as component};