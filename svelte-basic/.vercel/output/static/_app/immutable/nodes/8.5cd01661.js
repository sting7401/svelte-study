import{S as D,i as F,s as G,C as I,a as E,k as C,q as p,L as N,h as d,c as q,l as L,m as P,r as h,n as S,b as m,G as b,D as j,E as w,F as z,g as A,d as B,I as H,u as J}from"../chunks/index.10dfffe8.js";import{p as K}from"../chunks/stores.1b0c498c.js";function y(n){let e,_,s=n[0].data.notification+"",l;return{c(){e=C("p"),_=p("알림 배너 "),l=p(s),this.h()},l(o){e=L(o,"P",{class:!0});var i=P(e);_=h(i,"알림 배너 "),l=h(i,s),i.forEach(d),this.h()},h(){S(e,"class","bg-slate-300 rounded-md m-3 p-2")},m(o,i){m(o,e,i),b(e,_),b(e,l)},p(o,i){i&1&&s!==(s=o[0].data.notification+"")&&J(l,s)},d(o){o&&d(e)}}}function M(n){let e,_,s,l,o,i,r,f;document.title=e=n[0].data.notification||"다르거나";let a=n[0].data.notification&&y(n);const k=n[4].default,u=I(k,n,n[3],null);return{c(){_=E(),a&&a.c(),s=E(),l=C("p"),o=p("부모 data 사용 "),i=p(n[1]),r=E(),u&&u.c(),this.h()},l(t){N("svelte-1e4dqak",document.head).forEach(d),_=q(t),a&&a.l(t),s=q(t),l=L(t,"P",{class:!0});var v=P(l);o=h(v,"부모 data 사용 "),i=h(v,n[1]),v.forEach(d),r=q(t),u&&u.l(t),this.h()},h(){S(l,"class","text-xl text-gray-800")},m(t,c){m(t,_,c),a&&a.m(t,c),m(t,s,c),m(t,l,c),b(l,o),b(l,i),m(t,r,c),u&&u.m(t,c),f=!0},p(t,[c]){(!f||c&1)&&e!==(e=t[0].data.notification||"다르거나")&&(document.title=e),t[0].data.notification?a?a.p(t,c):(a=y(t),a.c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null),u&&u.p&&(!f||c&8)&&j(u,k,t,t[3],f?z(k,t[3],c,null):w(t[3]),null)},i(t){f||(A(u,t),f=!0)},o(t){B(u,t),f=!1},d(t){t&&d(_),a&&a.d(t),t&&d(s),t&&d(l),t&&d(r),u&&u.d(t)}}}function O(n,e,_){let s;H(n,K,f=>_(0,s=f));let{$$slots:l={},$$scope:o}=e,{data:i}=e;const{username:r}=i;return n.$$set=f=>{"data"in f&&_(2,i=f.data),"$$scope"in f&&_(3,o=f.$$scope)},[s,r,i,o,l]}class T extends D{constructor(e){super(),F(this,e,O,M,G,{data:2})}}export{T as component};
