(()=>{"use strict";var e={7557:(e,t,r)=>{r(7280),r(5363),r(71);var n=r(8880),o=r(6866),a=r(3673);function i(e,t,r,n,o,i){const s=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(s)}const s=(0,a.aZ)({name:"App",preFetch({store:e}){return e.dispatch("news/getNewsByLimit",{limit:10,page:1})}});s.render=i;const c=s;var l=r(2048),u=r(7083),p=r(9582);const d=[{path:"/",component:()=>Promise.all([r.e(736),r.e(64),r.e(810)]).then(r.bind(r,7810)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(141)]).then(r.bind(r,1141))}]},{path:"/news",component:()=>Promise.all([r.e(736),r.e(64),r.e(655)]).then(r.bind(r,5163)),children:[{path:"",component:()=>Promise.all([r.e(736),r.e(64),r.e(730)]).then(r.bind(r,7730))},{path:":id",component:()=>Promise.all([r.e(736),r.e(64),r.e(730)]).then(r.bind(r,7730))}]},{path:"/p",component:()=>Promise.all([r.e(736),r.e(64),r.e(939)]).then(r.bind(r,4547)),children:[{path:"structure",component:()=>Promise.all([r.e(736),r.e(937)]).then(r.bind(r,5937))},{path:"about",component:()=>Promise.all([r.e(736),r.e(423)]).then(r.bind(r,5423))},{path:"contact",component:()=>Promise.all([r.e(736),r.e(465)]).then(r.bind(r,6465))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(86)]).then(r.bind(r,9086))}],h=d,f=(0,u.BC)((function(){const e=p.PO,t=(0,p.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/")});return t}));async function m(e,t){const n="function"===typeof l["default"]?await(0,l["default"])({}):l["default"],{storeKey:a}=await Promise.resolve().then(r.bind(r,2048)),i="function"===typeof f?await f({store:n}):f;n.$router=i;const s=e(c);return s.use(o.Z,t),{app:s,store:n,storeKey:a,router:i}}const g={config:{}};let v="function"===typeof c.preFetch?c.preFetch:void 0!==c.__c&&"function"===typeof c.__c.preFetch&&c.__c.preFetch;function b(e,t){const r=e?e.matched?e:t.resolve(e).route:t.currentRoute;return r?Array.prototype.concat.apply([],r.matched.map((e=>Object.keys(e.components).map((t=>{const r=e.components[t];return{path:e.path,c:r}}))))):[]}function w(e,t,r){e.beforeResolve(((n,o,a)=>{const i=window.location.href.replace(window.location.origin,""),s=b(n,e),c=b(o,e);let l=!1;const u=s.filter(((e,t)=>l||(l=!c[t]||c[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==v&&(u.unshift(v),v=!1),0===u.length)return a();let p=!1;const d=e=>{p=!0,a(e)},h=()=>{!1===p&&a()};u.reduce(((e,a)=>e.then((()=>!1===p&&a({store:t,currentRoute:n,previousRoute:o,redirect:d,urlPath:i,publicPath:r})))),Promise.resolve()).then(h).catch((e=>{console.error(e),h()}))}))}const y="/";async function P({app:e,router:t,store:r,storeKey:n},o){let a=!1;const i=e=>{a=!0;const r=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=r},s=window.location.href.replace(window.location.origin,"");for(let l=0;!1===a&&l<o.length;l++)try{await o[l]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==a&&(e.use(t),e.use(r,n),w(t,r),e.mount("#q-app"))}m(n.ri,g).then((e=>Promise.all([Promise.resolve().then(r.bind(r,5474))]).then((t=>{const r=t.map((e=>e.default)).filter((e=>"function"===typeof e));P(e,r)}))))},5474:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,api:()=>i});var n=r(7083),o=r(52),a=r.n(o);const i=a().create({baseURL:"http://188.93.210.205:3000/"}),s=(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},2048:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n={};r.r(n),r.d(n,{getAllNews:()=>l,getNewsByCount:()=>u});var o={};r.r(o),r.d(o,{setNews:()=>h});var a={};r.r(a),r.d(a,{getAllNews:()=>m,getNewsByLimit:()=>g});var i=r(7083),s=r(7874);function c(){return{news:[],nextPage:!1,prevPage:!1,currentPage:1}}r(7098),r(71);function l(e){return{news:e.news,nextPage:e.nextPage,prevPage:e.prevPage,currentPage:e.currentPage}}const u=({news:e,nextPage:t,prevPage:r,currentPage:n})=>o=>({news:[...e.filter(((e,t)=>++t<=o&&e))].sort(((e,t)=>e.createdAt<t.createdAt)),nextPage:t,prevPage:r,currentPage:n});class p{constructor({_id:e,images:t,title:r,introText:n,fullText:o,date:a,views:i}){this.id=e,this.images=t,this.title=r,this.introText=n,this.fullText=o,this.date=new Date(a).toLocaleDateString("RU"),this.createdAt=a,this.views=i}}const d="http://188.93.210.205:3000/";function h(e,t){e.currentPage=t.page,e.nextPage=t.nextPage,e.prevPage=t.prevPage,t.docs.map((t=>{t.images.length>0?(t.images.map((e=>e.path=d+e.path)),e.news.push(new p(t))):e.news.push(new p(t))}))}var f=r(5474);async function m(e){try{const t=await f.api.get("news/all");e.commit("setNews",await t.data.result)}catch(t){console.error("Error getAllNews",t)}}async function g(e,{limit:t=10,page:r=1}){try{const n=await f.api.get(`news?limit=${t}&page=${r}`),{result:o}=await n.data;e.commit("setNews",o)}catch(n){console.error("Error getNewsByLimit",n)}}const v={namespaced:!0,getters:n,mutations:o,actions:a,state:c},b=(0,i.h)((function(){const e=(0,s.MT)({modules:{news:v},strict:!1});return e}))}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{64:"2a6261db",86:"6f699f7c",141:"eafba3de",423:"8611b0e5",465:"4295c613",655:"de80b26a",730:"16ea14f9",810:"32599800",937:"4b66e9c5",939:"f144138b"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",655:"813a05f7",736:"fcd01870",937:"ab68cf3a",939:"813a05f7"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="mtusi:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+a){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var d=(t,r)=>{s.onerror=s.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),n(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={655:1,937:1,939:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,c=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,c]=n,l=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var u=c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return r.O(u)},n=self["webpackChunkmtusi"]=self["webpackChunkmtusi"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[736],(()=>r(7557)));n=r.O(n)})();