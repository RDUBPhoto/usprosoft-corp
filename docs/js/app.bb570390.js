(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"35b057a7"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://rdubphoto.github.io/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var r=n("2dad"),o=n.n(r);o.a},"25f2":function(t,e,n){"use strict";var r=n("5c56"),o=n.n(r);o.a},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("router-view")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("section",{staticClass:"navigation d-flex justify-content-between align-items-center"},[r("div",[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"mr-5",attrs:{src:n("9b19"),height:"85px;"}})])],1),t._m(0)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center"},[n("ul",{staticClass:"d-flex justify-content-center mr-3"}),n("button",{staticClass:"btn btn-outline-primary"},[t._v("Contact Us")])])}],c={name:"Navigation",props:{}},l=c,u=(n("25f2"),n("2877")),f=Object(u["a"])(l,s,i,!1,null,"7b8861ec",null),d=f.exports,p={components:{Navigation:d}},v=p,m=(n("5c0b"),Object(u["a"])(v,o,a,!1,null,null,null)),b=m.exports,h=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._m(1),n("div",{staticClass:"container-fluid border-top"},[n("Footer")],1)])},y=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-5 col-sm-12 d-flex"},[r("div",{staticClass:"d-flex flex-column justify-content-center align-items-center"},[r("div",{staticClass:"text-white hero-text"},[t._v(" We're a software development company ")])])]),r("div",{staticClass:"col-md-7 col-sm-12"},[r("div",{staticClass:"d-flex justify-content-center"},[r("img",{attrs:{src:n("e969"),height:"372"}})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("p",{staticClass:"h5 mb-4"},[t._v("We take on projects as a whole or as a compliment to the organization as “The” Dev/QA/Prod Support team, working side by side as a strategic partner for our clients.")]),n("p",{staticClass:"h5 mb-4"},[t._v("We provide business analysis, UI/UX, Quality Assurance, full backend implementations and leveraging cloud topography.")]),n("p",{staticClass:"h5 mb-4"},[t._v("We focus on Microsoft Technologies like .NET, C#, SQL Server, ASP.net and other front end frameworks such as Angular")])])]),n("div",{staticClass:"row mt-5 mb-5"},[n("div",{staticClass:"col d-flex justify-content-center align-items-center"},[n("button",{staticClass:"btn btn-danger btn-lg w-25"},[t._v("Contact us")])])])])}],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mb-5"},[n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col d-flex align-items-center justify-content-end"},[n("div",{staticClass:"small"},[t._v("Copyright © "+t._s((new Date).getFullYear())+" US ProSoft")])])])])},_=[],w={name:"Footer",props:{}},x=w,j=(n("7d45"),Object(u["a"])(x,C,_,!1,null,"2cb6c89e",null)),O=j.exports,k={name:"home",components:{Footer:O}},E=k,P=(n("21bb"),Object(u["a"])(E,g,y,!1,null,null,null)),S=P.exports;r["a"].use(h["a"]);const T=[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],$=new h["a"]({mode:"history",linkExactActiveClass:"active",base:"https://rdubphoto.github.io/",routes:T});var A=$;r["a"].config.productionTip=!1,new r["a"]({router:A,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5c56":function(t,e,n){},"7d45":function(t,e,n){"use strict";var r=n("8711"),o=n.n(r);o.a},8711:function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.605d953c.svg"},"9c0c":function(t,e,n){},e969:function(t,e,n){t.exports=n.p+"img/banner-image.22d79c3d.png"}});
//# sourceMappingURL=app.bb570390.js.map