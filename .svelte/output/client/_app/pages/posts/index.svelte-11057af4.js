import{S as s,i as t,s as a,F as e,e as r,t as n,k as c,c as o,a as l,g as f,d as i,n as h,b as u,G as m,f as $,D as d,h as p,H as E,v,r as A,j as g,m as I,o as D,w as N,l as R,E as T,J as w}from"../../chunks/vendor-a24f1eef.js";function x(s){let t,a,g,I,D,N,R,T,w,x,O,C,S,M,b,j,k,y,H,L;const B=s[3].default,G=e(B,s,s[2],null),U=G||function(s){let t;return{c(){t=n("Somecontent")},l(s){t=f(s,"Somecontent")},m(s,a){$(s,t,a)},d(s){s&&i(t)}}}();return{c(){t=r("ion-card"),a=r("ion-card-header"),g=r("div"),I=r("ion-card-title"),D=r("h1"),N=n(s[0]),R=c(),T=r("ion-card-subtitle"),U&&U.c(),w=c(),x=r("ion-avatar"),O=r("img"),S=c(),M=r("details"),b=r("summary"),j=n("more"),k=c(),y=r("ion-card-content"),H=n("Awesome content"),this.h()},l(e){t=o(e,"ION-CARD",{class:!0});var r=l(t);a=o(r,"ION-CARD-HEADER",{class:!0});var n=l(a);g=o(n,"DIV",{class:!0});var c=l(g);I=o(c,"ION-CARD-TITLE",{});var u=l(I);D=o(u,"H1",{});var m=l(D);N=f(m,s[0]),m.forEach(i),u.forEach(i),R=h(c),T=o(c,"ION-CARD-SUBTITLE",{});var $=l(T);U&&U.l($),$.forEach(i),c.forEach(i),w=h(n),x=o(n,"ION-AVATAR",{});var d=l(x);O=o(d,"IMG",{class:!0,src:!0,alt:!0}),d.forEach(i),n.forEach(i),S=h(r),M=o(r,"DETAILS",{class:!0});var p=l(M);b=o(p,"SUMMARY",{class:!0});var E=l(b);j=f(E,"more"),E.forEach(i),k=h(p),y=o(p,"ION-CARD-CONTENT",{});var v=l(y);H=f(v,"Awesome content"),v.forEach(i),p.forEach(i),r.forEach(i),this.h()},h(){u(g,"class","w-1/2"),u(O,"class","h-15"),O.src!==(C="https://placekitten.com/"+s[1]+"/"+s[1])&&u(O,"src",C),u(O,"alt","avt"),m(a,"class","flex justify-between"),u(b,"class","svelte-w4zcr6"),u(M,"class","mx-5"),m(t,"class","border-2")},m(s,e){$(s,t,e),d(t,a),d(a,g),d(g,I),d(I,D),d(D,N),d(g,R),d(g,T),U&&U.m(T,null),d(a,w),d(a,x),d(x,O),d(t,S),d(t,M),d(M,b),d(b,j),d(M,k),d(M,y),d(y,H),L=!0},p(s,[t]){(!L||1&t)&&p(N,s[0]),G&&G.p&&4&t&&E(G,B,s,s[2],t,null,null)},i(s){L||(v(U,s),L=!0)},o(s){A(U,s),L=!1},d(s){s&&i(t),U&&U.d(s)}}}function O(s,t,a){let{$$slots:e={},$$scope:r}=t,{name:n}=t,c=Math.floor(100*Math.random())+200;return s.$$set=s=>{"name"in s&&a(0,n=s.name),"$$scope"in s&&a(2,r=s.$$scope)},[n,c,r,e]}class C extends s{constructor(s){super(),t(this,s,O,x,a,{name:0})}}function S(s,t,a){const e=s.slice();return e[1]=t[a],e}function M(s){let t,a;return{c(){t=n(s[1]),a=c()},l(e){t=f(e,s[1]),a=h(e)},m(s,e){$(s,t,e),$(s,a,e)},p:T,d(s){s&&i(t),s&&i(a)}}}function b(s){let t,a;return t=new C({props:{$$slots:{default:[M]},$$scope:{ctx:s}}}),{c(){g(t.$$.fragment)},l(s){I(t.$$.fragment,s)},m(s,e){D(t,s,e),a=!0},p(s,a){const e={};16&a&&(e.$$scope={dirty:a,ctx:s}),t.$set(e)},i(s){a||(v(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){N(t,s)}}}function j(s){let t,a,e="posts",r=[];for(let n=0;n<e.length;n+=1)r[n]=b(S(s,e,n));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=R()},l(s){for(let t=0;t<r.length;t+=1)r[t].l(s);t=R()},m(s,e){for(let t=0;t<r.length;t+=1)r[t].m(s,e);$(s,t,e),a=!0},p:T,i(s){if(!a){for(let s=0;s<e.length;s+=1)v(r[s]);a=!0}},o(s){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)A(r[t]);a=!1},d(s){w(r,s),s&&i(t)}}}function k(s){return[]}export default class extends s{constructor(s){super(),t(this,s,k,j,a,{})}}
