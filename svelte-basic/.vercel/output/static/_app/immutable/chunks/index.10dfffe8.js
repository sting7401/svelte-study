function x(){}const nt=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function bt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function it(t){return t()}function tt(){return Object.create(null)}function C(t){t.forEach(it)}function F(t){return typeof t=="function"}function Vt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let O;function Xt(t,e){return O||(O=document.createElement("a")),O.href=e,t===O.href}function $t(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Yt(t,e,n){t.$$.on_destroy.push(xt(e,n))}function Zt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function te(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)l[o]=e.dirty[o]|s[o];return l}return e.dirty|s}return e.dirty}function ee(t,e,n,i,s,l){if(s){const r=st(e,n,i,l);t.p(r,s)}}function ne(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ie(t,e,n){return t.set(n),e}function se(t){return t&&F(t.destroy)?t.destroy:x}function re(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const rt=typeof window<"u";let ct=rt?()=>window.performance.now():()=>Date.now(),V=rt?t=>requestAnimationFrame(t):x;const j=new Set;function ot(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&V(ot)}function lt(t){let e;return j.size===0&&V(ot),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}const wt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in wt;let H=!1;function kt(){H=!0}function vt(){H=!1}function Et(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function St(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,d=(s>0&&e[n[s]].claim_order<=a?s+1:Et(1,s,_=>e[n[_]].claim_order,a))-1;i[c]=n[d]+1;const f=d+1;n[f]=c,s=Math.max(f,s)}const l=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);l.reverse(),r.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<r.length;c++){for(;a<l.length&&r[c].claim_order>=l[a].claim_order;)a++;const d=a<l.length?l[a]:null;t.insertBefore(r[c],d)}}function Ct(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=ft("style");return At(at(t),e),e.sheet}function At(t,e){return Ct(t.head||t,e),e.sheet}function jt(t,e){if(H){for(St(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ce(t,e,n){H&&!n?jt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function oe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function X(t){return document.createTextNode(t)}function le(){return X(" ")}function ae(){return X("")}function ue(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function fe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function de(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t,e,n){const i=new Set;for(let s=0;s<t.length;s+=1)t[s].checked&&i.add(t[s].__value);return n||i.delete(e),Array.from(i)}function he(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function pe(t){return t===""?null:+t}function Mt(t){return Array.from(t.childNodes)}function Dt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,s=!1){Dt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Rt(t,e,n,i){return dt(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||l.push(o.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function me(t,e,n){return Rt(t,e,n,ft)}function Tt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function ye(t){return Tt(t," ")}function ge(t,e){e=""+e,t.data!==e&&(t.data=e)}function be(t,e){t.value=e??""}function $e(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function xe(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function we(t){const e=t.querySelector(":checked");return e&&e.__value}function ke(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function ve(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}function Ee(t,e){return new t(e)}const P=new Map;let L=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:Nt(e),rules:{}};return P.set(t,n),n}function K(t,e,n,i,s,l,r,o=0){const c=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*l(m);a+=m*100+`%{${r(g,1-g)}}
`}const d=a+`100% {${r(n,1-n)}}
}`,f=`__svelte_${qt(d)}_${o}`,_=at(t),{stylesheet:u,rules:h}=P.get(_)||Ot(_,t);h[f]||(h[f]=!0,u.insertRule(`@keyframes ${f} ${d}`,u.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${i}ms linear ${s}ms 1 both`,L+=1,f}function ht(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),L-=s,L||Bt())}function Bt(){V(()=>{L||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ut(e)}),P.clear())})}function Se(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:l=0,duration:r=300,easing:o=nt,start:c=ct()+l,end:a=c+r,tick:d=x,css:f}=n(t,{from:e,to:s},i);let _=!0,u=!1,h;function y(){f&&(h=K(t,0,1,r,l,o,f)),l||(u=!0)}function m(){f&&ht(t,h),_=!1}return lt(g=>{if(!u&&g>=c&&(u=!0),u&&g>=a&&(d(1,0),m()),!_)return!1;if(u){const w=g-c,k=0+1*o(w/r);d(k,1-k)}return!0}),y(),d(0,1),m}function Ce(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Pt(t,s)}}function Pt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let R;function v(t){R=t}function W(){if(!R)throw new Error("Function called outside component initialization");return R}function Ne(t){W().$$.on_mount.push(t)}function Ae(t){W().$$.after_update.push(t)}function je(){const t=W();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const l=_t(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Me(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],et=[];let M=[];const Q=[],pt=Promise.resolve();let U=!1;function mt(){U||(U=!0,pt.then(Y))}function De(){return mt(),pt}function z(t){M.push(t)}function Re(t){Q.push(t)}const G=new Set;let N=0;function Y(){if(N!==0)return;const t=R;do{try{for(;N<A.length;){const e=A[N];N++,v(e),Lt(e.$$)}}catch(e){throw A.length=0,N=0,e}for(v(null),A.length=0,N=0;et.length;)et.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];G.has(n)||(G.add(n),n())}M.length=0}while(A.length);for(;Q.length;)Q.pop()();U=!1,G.clear(),v(t)}function Lt(t){if(t.fragment!==null){t.update(),C(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}function zt(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let D;function Ft(){return D||(D=Promise.resolve(),D.then(()=>{D=null})),D}function J(t,e,n){t.dispatchEvent(_t(`${e?"intro":"outro"}${n}`))}const B=new Set;let E;function Ht(){E={r:0,c:[],p:E}}function Wt(){E.r||C(E.c),E=E.p}function Z(t,e){t&&t.i&&(B.delete(t),t.i(e))}function yt(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),E.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const It={duration:0};function Te(t,e,n,i){const s={direction:"both"};let l=e(t,n,s),r=i?0:1,o=null,c=null,a=null;function d(){a&&ht(t,a)}function f(u,h){const y=u.b-r;return h*=Math.abs(y),{a:r,b:u.b,d:y,duration:h,start:u.start,end:u.start+h,group:u.group}}function _(u){const{delay:h=0,duration:y=300,easing:m=nt,tick:g=x,css:w}=l||It,k={start:ct()+h,b:u};u||(k.group=E,E.r+=1),o||c?c=k:(w&&(d(),a=K(t,r,u,y,h,m,w)),u&&g(0,1),o=f(k,y),z(()=>J(t,u,"start")),lt(S=>{if(c&&S>c.start&&(o=f(c,y),c=null,J(t,o.b,"start"),w&&(d(),a=K(t,r,o.b,o.duration,0,m,l.css))),o){if(S>=o.end)g(r=o.b,1-r),J(t,o.b,"end"),c||(o.b?d():--o.group.r||C(o.group.c)),o=null;else if(S>=o.start){const T=S-o.start;r=o.a+o.d*m(T/o.duration),g(r,1-r)}}return!!(o||c)}))}return{run(u){F(l)?Ft().then(()=>{l=l(s),_(u)}):_(u)},end(){d(),o=c=null}}}function qe(t,e){const n=e.token={};function i(s,l,r,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;r!==void 0&&(c=c.slice(),c[r]=o);const a=s&&(e.current=s)(c);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,_)=>{_!==l&&f&&(Ht(),yt(f,1,1,()=>{e.blocks[_]===f&&(e.blocks[_]=null)}),Wt())}):e.block.d(1),a.c(),Z(a,1),a.m(e.mount(),e.anchor),d=!0),e.block=a,e.blocks&&(e.blocks[l]=a),d&&Y()}if(bt(t)){const s=W();if(t.then(l=>{v(s),i(e.then,1,e.value,l),v(null)},l=>{if(v(s),i(e.catch,2,e.error,l),v(null),!e.hasCatch)throw l}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Oe(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}function Be(t,e){t.d(1),e.delete(t.key)}function Gt(t,e){yt(t,1,1,()=>{e.delete(t.key)})}function Pe(t,e){t.f(),Gt(t,e)}function Le(t,e,n,i,s,l,r,o,c,a,d,f){let _=t.length,u=l.length,h=_;const y={};for(;h--;)y[t[h].key]=h;const m=[],g=new Map,w=new Map,k=[];for(h=u;h--;){const p=f(s,l,h),b=n(p);let $=r.get(b);$?i&&k.push(()=>$.p(p,e)):($=a(b,p),$.c()),g.set(b,m[h]=$),b in y&&w.set(b,Math.abs(h-y[b]))}const S=new Set,T=new Set;function I(p){Z(p,1),p.m(o,d),r.set(p.key,p),d=p.first,u--}for(;_&&u;){const p=m[u-1],b=t[_-1],$=p.key,q=b.key;p===b?(d=p.first,_--,u--):g.has(q)?!r.has($)||S.has($)?I(p):T.has(q)?_--:w.get($)>w.get(q)?(T.add($),I(p)):(S.add(q),_--):(c(b,r),_--)}for(;_--;){const p=t[_];g.has(p.key)||c(p,r)}for(;u;)I(m[u-1]);return C(k),m}function ze(t,e){const n={},i={},s={$$scope:1};let l=t.length;for(;l--;){const r=t[l],o=e[l];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[l]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Fe(t){return typeof t=="object"&&t!==null?t:{}}const Jt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Jt];function He(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function We(t){t&&t.c()}function Ie(t,e){t&&t.l(e)}function Kt(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||z(()=>{const r=t.$$.on_mount.map(it).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):C(r),t.$$.on_mount=[]}),l.forEach(z)}function Qt(t,e){const n=t.$$;n.fragment!==null&&(zt(n.after_update),C(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(A.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ge(t,e,n,i,s,l,r,o=[-1]){const c=R;v(t);const a=t.$$={fragment:null,ctx:[],props:l,update:x,not_equal:s,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:tt(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,_,...u)=>{const h=u.length?u[0]:_;return a.ctx&&s(a.ctx[f],a.ctx[f]=h)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](h),d&&Ut(t,f)),_}):[],a.update(),d=!0,C(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){kt();const f=Mt(e.target);a.fragment&&a.fragment.l(f),f.forEach(ut)}else a.fragment&&a.fragment.c();e.intro&&Z(t.$$.fragment),Kt(t,e.target,e.anchor,e.customElement),vt(),Y()}v(c)}class Je{$destroy(){Qt(this,1),this.$destroy=x}$on(e,n){if(!F(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{be as $,Kt as A,Qt as B,Zt as C,ee as D,ne as E,te as F,jt as G,x as H,Yt as I,Le as J,Be as K,ve as L,oe as M,ue as N,C as O,ke as P,z as Q,Me as R,Je as S,fe as T,qe as U,Oe as V,gt as W,He as X,ze as Y,Fe as Z,Re as _,le as a,xe as a0,pe as a1,he as a2,_e as a3,we as a4,F as a5,Ce as a6,Pt as a7,Se as a8,Te as a9,Pe as aa,ie as ab,Gt as ac,ct as ad,lt as ae,nt as af,re as ag,je as ah,Xt as ai,se as aj,ce as b,ye as c,yt as d,ae as e,Wt as f,Z as g,ut as h,Ge as i,Ae as j,ft as k,me as l,Mt as m,de as n,Ne as o,$e as p,X as q,Tt as r,Vt as s,De as t,ge as u,Ht as v,et as w,Ee as x,We as y,Ie as z};