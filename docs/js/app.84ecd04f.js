(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"35b057a7"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",l.name="ChunkLoadError",l.type=s,l.request=i,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/usprosoft-corp/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";var s=a("2dad"),r=a.n(s);r.a},"2dad":function(t,e,a){},"397d":function(t,e,a){"use strict";var s=a("74c8"),r=a.n(s);r.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navigation"),a("router-view")],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("section",{staticClass:"navigation d-flex justify-content-between align-items-center"},[s("div",[s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"mr-5",attrs:{src:a("9b19"),height:"85px;"}})])],1),s("div",{staticClass:"d-flex align-items-center"},[s("ul",{staticClass:"d-flex justify-content-center mr-3"},[s("li",{staticClass:"d-flex align-items-center"},[s("router-link",{attrs:{to:"/capabilities"}},[t._v("Capabilities")])],1),s("li",{staticClass:"d-flex align-items-center"},[s("router-link",{attrs:{to:"/work"}},[t._v("Work")])],1),s("li",{staticClass:"d-flex align-items-center"},[s("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),s("li",{staticClass:"d-flex align-items-center"},[s("router-link",{attrs:{to:"/team"}},[t._v("Team")])],1)]),s("button",{staticClass:"btn btn-outline-primary"},[t._v("Contact Us")])])])])},o=[],c={name:"Navigation",props:{}},l=c,u=(a("7eca"),a("2877")),d=Object(u["a"])(l,n,o,!1,null,"65920e0e",null),p=d.exports,v={components:{Navigation:p}},m=v,h=(a("5c0b"),Object(u["a"])(m,r,i,!1,null,null,null)),f=h.exports,g=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._m(1),t._m(2),t._m(3),a("div",{staticClass:"container-fluid"},[a("Footer")],1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-5 col-sm-12"},[a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"text-white hero-text"},[t._v(" We're a software development company ")]),a("div",{staticClass:"hero-tagline"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")])])]),a("div",{staticClass:"col-md-7 col-sm-12"},[a("div",{staticClass:"d-flex"},[t._v(" Some Image Here ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"h5 mb-4"},[t._v("We take on projects as a whole or as a compliment to the organization as “The” Dev/QA/Prod Support team, working side by side as a strategic partner for our clients.")]),a("p",{staticClass:"h5 mb-4"},[t._v("We provide business analysis, UI/UX, Quality Assurance, full backend implementations and leveraging cloud topography.")]),a("p",{staticClass:"h5 mb-4"},[t._v("We focus on Microsoft Technologies like .NET, C#, SQL Server, ASP.net and other front end frameworks such as Angular")])])]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card bg-light"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/200?random=1",height:"250px",alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-primary"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card bg-light"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/200?random=2",height:"250px",alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-primary"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])])]),a("div",{staticClass:"row mt-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card bg-light"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/200?random=3",height:"250px",alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-primary"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])]),a("div",{staticClass:"col"},[a("div",{staticClass:"card bg-light"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/200?random=4",height:"250px",alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title text-primary"},[t._v("Card title")]),a("p",{staticClass:"card-text"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])])])]),a("div",{staticClass:"row mt-5 mb-5"},[a("div",{staticClass:"col d-flex justify-content-center align-items-center"},[a("button",{staticClass:"btn btn-danger btn-lg"},[t._v("Learn more about us")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"secondary-content"},[a("div",{staticClass:"container pb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex flex-column justify-content-center align-items-center"},[a("h2",{staticClass:"text-primary our-work text-uppercase"},[t._v("Something here about Our Work")]),a("h5",{staticClass:"mt-3"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])])]),a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/200?random=5",height:"350px",alt:"..."}})]),a("div",{staticClass:"col"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/200?random=6",height:"350px",alt:"..."}})])]),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/300?random=7",height:"350px",alt:"..."}})]),a("div",{staticClass:"col"},[a("img",{staticClass:"card-img-top",attrs:{src:"https://picsum.photos/500/300?random=8",height:"350px",alt:"..."}})])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-0"},[a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex align-items-center justify-content-center flex-column"},[a("h2",{staticClass:"text-white contact text-uppercase"},[t._v("Something about contacting us")]),a("h5",{staticClass:"mt-3 contact-sub"},[t._v("Some quick example text to build on the card title and make up the bulk of the card's content.")])]),a("div",{staticClass:"row mt-5 mb-5"},[a("div",{staticClass:"col d-flex justify-content-center align-items-center"},[a("button",{staticClass:"btn btn-danger btn-lg"},[t._v("Contact Us")])])])])])])}],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],k={name:"HelloWorld",props:{msg:String}},y=k,w=(a("cee7"),Object(u["a"])(y,C,x,!1,null,"7fc28546",null)),j=w.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mb-5"},[a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col d-flex align-items-center justify-content-center"},[a("h6",[t._v("Something")])]),a("div",{staticClass:"col d-flex align-items-center justify-content-center"},[a("h6",[t._v("Something")])]),a("div",{staticClass:"col d-flex align-items-center justify-content-center"},[a("h6",[t._v("Something")])]),a("div",{staticClass:"col d-flex align-items-center justify-content-center"},[a("h6",[t._v("Something")])])])])}],O={name:"Footer",props:{}},$=O,P=(a("397d"),Object(u["a"])($,S,E,!1,null,"426b3bd7",null)),T=P.exports,q={name:"home",components:{Home:j,Footer:T}},A=q,L=(a("21bb"),Object(u["a"])(A,b,_,!1,null,null,null)),W=L.exports;s["a"].use(g["a"]);const F=[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],M=new g["a"]({mode:"history",linkExactActiveClass:"active",base:"/usprosoft-corp/",routes:F});var N=M;s["a"].config.productionTip=!1,new s["a"]({router:N,render:function(t){return t(f)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"74c8":function(t,e,a){},"7eca":function(t,e,a){"use strict";var s=a("d485"),r=a.n(s);r.a},"9b19":function(t,e,a){t.exports=a.p+"img/logo.605d953c.svg"},"9c0c":function(t,e,a){},abaf:function(t,e,a){},cee7:function(t,e,a){"use strict";var s=a("abaf"),r=a.n(s);r.a},d485:function(t,e,a){}});
//# sourceMappingURL=app.84ecd04f.js.map