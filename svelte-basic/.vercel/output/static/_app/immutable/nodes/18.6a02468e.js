import{S as Z,i as F,s as G,k as v,q as w,a as $,l as E,m as T,r as B,h as c,c as k,b as V,D as b,u as O,J as I,N as Y,W as se,w as y,X as x,y as D,z as S,A as j,Y as ie,Z as ue,_ as ee,g as z,d as A,B as H,O as re}from"../chunks/index.50ff2779.js";function fe(t){let e,a,u,r,i,_,f,l,m,o,h;return{c(){e=v("h1"),a=w(t[0]),u=$(),r=v("p"),i=w(t[1]),_=$(),f=v("p"),l=w(t[2]),m=$(),o=v("p"),h=w(t[3])},l(n){e=E(n,"H1",{});var d=T(e);a=B(d,t[0]),d.forEach(c),u=k(n),r=E(n,"P",{});var P=T(r);i=B(P,t[1]),P.forEach(c),_=k(n),f=E(n,"P",{});var g=T(f);l=B(g,t[2]),g.forEach(c),m=k(n),o=E(n,"P",{});var C=T(o);h=B(C,t[3]),C.forEach(c)},m(n,d){V(n,e,d),b(e,a),V(n,u,d),V(n,r,d),b(r,i),V(n,_,d),V(n,f,d),b(f,l),V(n,m,d),V(n,o,d),b(o,h)},p(n,[d]){d&1&&O(a,n[0]),d&2&&O(i,n[1]),d&4&&O(l,n[2]),d&8&&O(h,n[3])},i:I,o:I,d(n){n&&c(e),n&&c(u),n&&c(r),n&&c(_),n&&c(f),n&&c(m),n&&c(o)}}}function oe(t,e,a){let{number:u=10}=e,{person:r={name:"",age:0}}=e,{name:i=""}=e,{age:_=0}=e;return t.$$set=f=>{"number"in f&&a(0,u=f.number),"person"in f&&a(1,r=f.person),"name"in f&&a(2,i=f.name),"age"in f&&a(3,_=f.age)},[u,r,i,_]}class ne extends Z{constructor(e){super(),F(this,e,oe,fe,G,{number:0,person:1,name:2,age:3})}}function ce(t){let e,a,u,r,i,_,f;return{c(){e=v("button"),a=w("자식 버튼"),u=$(),r=v("p"),i=w(t[0])},l(l){e=E(l,"BUTTON",{});var m=T(e);a=B(m,"자식 버튼"),m.forEach(c),u=k(l),r=E(l,"P",{});var o=T(r);i=B(o,t[0]),o.forEach(c)},m(l,m){V(l,e,m),b(e,a),V(l,u,m),V(l,r,m),b(r,i),_||(f=Y(e,"click",t[1]),_=!0)},p(l,[m]){m&1&&O(i,l[0])},i:I,o:I,d(l){l&&c(e),l&&c(u),l&&c(r),_=!1,f()}}}function _e(t,e,a){let{cValue:u=10}=e;const r=()=>{a(0,u*=2)};return t.$$set=i=>{"cValue"in i&&a(0,u=i.cValue)},[u,r]}class te extends Z{constructor(e){super(),F(this,e,_e,ce,G,{cValue:0})}}function me(t){let e,a,u,r,i,_,f,l,m,o,h,n,d,P,g,C,U,J,K;l=new ne({props:{number:t[0],person:t[3].name+" "+t[3].age}});const W=[t[3]];let X={};for(let s=0;s<W.length;s+=1)X=se(X,W[s]);o=new ne({props:X});function le(s){t[6](s)}let L={};t[1]!==void 0&&(L.cValue=t[1]),n=new te({props:L}),y.push(()=>x(n,"cValue",le));function ae(s){t[7](s)}let M={};return t[2]!==void 0&&(M.cValue=t[2]),g=new te({props:M}),y.push(()=>x(g,"cValue",ae)),{c(){e=v("div"),a=v("button"),u=w("+"),r=$(),i=v("button"),_=w("-"),f=$(),D(l.$$.fragment),m=$(),D(o.$$.fragment),h=$(),D(n.$$.fragment),P=$(),D(g.$$.fragment)},l(s){e=E(s,"DIV",{});var p=T(e);a=E(p,"BUTTON",{});var N=T(a);u=B(N,"+"),N.forEach(c),r=k(p),i=E(p,"BUTTON",{});var q=T(i);_=B(q,"-"),q.forEach(c),f=k(p),S(l.$$.fragment,p),m=k(p),S(o.$$.fragment,p),h=k(p),S(n.$$.fragment,p),P=k(p),S(g.$$.fragment,p),p.forEach(c)},m(s,p){V(s,e,p),b(e,a),b(a,u),b(e,r),b(e,i),b(i,_),b(e,f),j(l,e,null),b(e,m),j(o,e,null),b(e,h),j(n,e,null),b(e,P),j(g,e,null),U=!0,J||(K=[Y(a,"click",t[4]),Y(i,"click",t[5])],J=!0)},p(s,[p]){const N={};p&1&&(N.number=s[0]),l.$set(N);const q=p&8?ie(W,[ue(s[3])]):{};o.$set(q);const Q={};!d&&p&2&&(d=!0,Q.cValue=s[1],ee(()=>d=!1)),n.$set(Q);const R={};!C&&p&4&&(C=!0,R.cValue=s[2],ee(()=>C=!1)),g.$set(R)},i(s){U||(z(l.$$.fragment,s),z(o.$$.fragment,s),z(n.$$.fragment,s),z(g.$$.fragment,s),U=!0)},o(s){A(l.$$.fragment,s),A(o.$$.fragment,s),A(n.$$.fragment,s),A(g.$$.fragment,s),U=!1},d(s){s&&c(e),H(l),H(o),H(n),H(g),J=!1,re(K)}}}function de(t,e,a){let u=0,r={name:"song",age:20},i=1,_=1;const f=()=>a(0,u+=1),l=()=>a(0,u-=1);function m(h){i=h,a(1,i)}function o(h){_=h,a(2,_)}return[u,i,_,r,f,l,m,o]}class be extends Z{constructor(e){super(),F(this,e,de,me,G,{})}}export{be as component};
