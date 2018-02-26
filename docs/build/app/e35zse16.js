/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{matchPath as e}from"./chunk1.js";class n{componentWillLoad(){return this.fetchNewContent()}fetchNewContent(){return fetch(`/docs-content/${this.doc}`).then(t=>t.text()).then(t=>{this.content=t;const e=document.createElement("div");e.innerHTML=t;const n=e.querySelector("h1");document.title=n&&n.textContent+" - WP OptionsKit"||"WP OptionsKit",this.isServer||window.requestAnimationFrame(()=>{window.scrollTo(0,0)})})}render(){return t("div",{innerHTML:this.content})}static get is(){return"app-marked"}static get properties(){return{content:{state:!0},doc:{type:String,attr:"doc",watchCallbacks:["fetchNewContent"]},isServer:{context:"isServer"}}}static get style(){return""}}class o{constructor(){this.pages=[]}render(){return console.log(this.pages),t("div",null,this.pages.map(e=>t("app-marked",{doc:e})))}static get is(){return"document-component"}static get properties(){return{pages:{type:"Any",attr:"pages"}}}static get style(){return"document-component ul{-webkit-padding-start:0}document-component ul code,document-component ul li{font-size:16px;margin-left:18px}document-component p a{color:#5850ff;text-decoration:none}document-component p code{font-weight:600;font-family:\"Source Code Pro\",monospace;font-size:14px;letter-spacing:-.02em}document-component #introButton{background:var(--primary-color);color:#fff;text-decoration:none;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer}document-component #introButton:hover{box-shadow:0 3px 6px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);transform:translateY(1px)}"}}class s{render(){return t("div",{class:"site-header"},t("stencil-route-link",{url:"/",class:"logo-link"},t("img",{class:"logo",alt:"OptionsKit",src:"https://alessandrotesoro.github.io/wp-optionskit/assets/img/logo.png"})),t("div",{class:"pull-right"},t("stencil-route-link",{urlMatch:"/docs",url:"/docs/intro"},"Documentation"),t("a",{href:"https://github.com/alessandrotesoro/wp-optionskit"},"GitHub"),t("a",{href:"https://twitter.com/_alessandrotes"},"Twitter")))}static get is(){return"site-header"}static get style(){return"site-header{position:fixed;top:0;left:0;right:0;background-color:rgba(255,255,255,.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);z-index:99}site-header .logo-link a{margin:0}site-header .site-header{padding:20px 15px;max-width:1080px;margin:auto;display:flex;flex-direction:row;flex-wrap:nowrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}site-header a,site-header stencil-route-link a{font-size:14px;margin:8px 8px;margin-right:1.4em;color:#86869c;text-decoration:none;font-weight:500;letter-spacing:-.02em;text-decoration:none;transition:all .2s ease}site-header a:hover,site-header stencil-route-link a.link-active,site-header stencil-route-link a:hover{color:#2b2b38!important;text-decoration:none}site-header .pull-right{order:0;flex:1 1 auto;text-align:right}\@media screen and (max-width:450px){site-header img{padding-bottom:20px}site-header .pull-right{display:block;text-align:center}}\@media screen and (max-width:465px){site-header .button{display:none}}\@media screen and (min-width:450px){site-header .logo{height:32px}}\@media screen and (max-width:722px){site-header a,site-header stencil-route-link a{font-size:12px;margin:8px 12px}site-header .pull-right{justify-content:space-around;display:flex}site-header .site-header{flex-direction:column}site-header stencil-route-link{margin-right:unset}}"}}class i{constructor(){this.version="Loading..."}render(){return t("div",null,t("div",{id:"version"},"Version 1.0.0"),t("lazy-iframe",{class:"star-button",src:"https://ghbtns.com/github-btn.html?user=alessandrotesoro&repo=wp-optionskit&type=star&count=true",frameBorder:"0",scrolling:"0",width:"170px",height:"20px"}),t("ul",{id:"menu-list"},t("li",null,t("h4",null,"Essentials"),t("ul",null,t("li",null,t("stencil-route-link",{url:"/docs/intro"},"Introduction")),t("li",null,t("stencil-route-link",{url:"/docs/getting-started"},"Getting Started")))),t("li",null,t("h4",null,"Basics"),t("ul",null,t("li",null,t("stencil-route-link",{url:"/docs/menu-setup"},"Setting up the menu")),t("li",null,t("stencil-route-link",{url:"/docs/tabs-and-sections"},"Adding tabs and sections")),t("li",null,t("stencil-route-link",{url:"/docs/adding-fields"},"Adding fields")),t("li",null,t("stencil-route-link",{url:"/docs/labels"},"Labels customization")))),t("li",null,t("h4",null,"Advanced"),t("ul",null,t("li",null,t("stencil-route-link",{url:"/docs/sanitization-filters"},"Custom sanitization filters")),t("li",null,t("stencil-route-link",{url:"/docs/error-handling"},"Errors handling")),t("li",null,t("stencil-route-link",{url:"/docs/custom-fields"},"Custom fields")))),t("li",null,t("h4",null,"Social"),t("ul",null,t("li",null,t("a",{href:"https://twitter.com/_alessandrotes?ref_src=twsrc%5Etfw",class:"twitter-follow-button","data-show-count":"false"},"Follow @Alessandro Tesoro"),t("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})),t("li",null,t("a",{class:"github-button",href:"https://github.com/alessandrotesoro","aria-label":"Follow @alessandrotesoro on GitHub"},"Follow @alessandrotesoro"),t("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"})),t("li",null,t("a",{class:"github-button",href:"https://github.com/alessandrotesoro/wp-optionskit","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star alessandrotesoro/wp-optionskit on GitHub"},"Star"),t("script",{async:!0,defer:!0,src:"https://buttons.github.io/buttons.js"}))))))}static get is(){return"site-menu"}static get properties(){return{version:{state:!0}}}static get style(){return"site-menu .star-button{margin-bottom:-2px;width:120px;margin-top:26px}site-menu h4{font-size:16px;font-weight:700;margin-bottom:0}site-menu #menu-list{list-style-type:none;margin:0;padding:0;-webkit-padding-start:0}site-menu #menu-list ul{padding:0;color:#2d2d4c;font-size:15px;line-height:2em;margin:0 0 28px}site-menu #menu-list li{list-style:none;margin:0;text-indent:0;font-size:14px;font-weight:400}site-menu a{color:#484854;text-decoration:none}site-menu stencil-route-link a{color:#484854;text-decoration:none}site-menu stencil-route-link .link-active{font-weight:700;color:#5850ff;letter-spacing:-.013em}site-menu stencil-route-link:hover a:not(.link-active){color:#2f2f35!important;font-weight:500;letter-spacing:-.013em}"}}class r{render(){return[t("div",{id:"main-div"},t("site-header",null),t("div",{class:"app"},t("stencil-router",null,t("stencil-route",{url:"/",component:"landing-page",exact:!0}),t("stencil-route",{url:["/docs"],routeRender:()=>t("div",{class:"wrapper"},t("div",{class:"pull-left"},t("site-menu",null)),t("div",{class:"pull-right"},t("stencil-route",{url:"/docs/:pageName",routeRender:e=>t("document-component",{pages:[{intro:"intro/index.html","getting-started":"start/index.html","menu-setup":"basics/menu-setup.html","tabs-and-sections":"basics/tabs-and-sections.html","adding-fields":"basics/adding-fields.html",labels:"basics/labels.html","sanitization-filters":"advanced/sanitization-filters.html","error-handling":"advanced/error-handling.html","custom-fields":"advanced/custom-fields.html"}[e.match.params.pageName]]})})))})))),t("footer",null,t("div",{id:"open-source"},t("p",null,"Designed and built with ❤️️ by Alessandro Tesoro"),t("p",null,"Released under the ",t("span",{id:"mit"},"GPLv3 License")," | Copyright @ 2018")),t("div",{id:"footer-icons"},t("a",{class:"svg-button",id:"stencil-repo",href:"https://github.com/alessandrotesoro/wp-optionskit",target:"_blank",rel:"noopener",title:"Open OptionsKit repository on github"},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},t("path",{d:"M256 32C132.3 32 32 135 32 261.7c0 101.5 64.2 187.5 153.2 218l3.8.3c8.3 0 11.5-6 11.5-11.4l-.3-39c-8.4 1.8-16 2.6-22.6 2.6-43 0-53-33.5-53-33.5-10-26.5-24.8-33.6-24.8-33.6-19.5-13.6 0-14 1.4-14 22.6 2 34.4 23.8 34.4 23.8 11.2 19.6 26.2 25 39.6 25 10.5 0 20-3.3 25.6-6 2-14.7 7.8-24.8 14.2-30.6-49.7-5.8-102-25.5-102-113.5 0-25 8.7-45.6 23-61.6-2.3-5.7-10-29 2.2-60.7 0 0 1.6-.5 5-.5 8 0 26.4 3 56.6 24 18-5 37-7.5 56-7.6 19 0 38.3 2.6 56.2 7.7 30.2-21 48.5-24.2 56.6-24.2 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.2 23 36.7 23 61.7 0 88.2-52.4 107.6-102.3 113.3 8 7 15.2 21 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3 11.5 11.4 11.5 1.2 0 2.6 0 4-.4 89-30.4 153.2-116.5 153.2-218C480 135 379.7 32 256 32z"}))),t("a",{class:"svg-button",id:"stencil-twitter",href:"https://twitter.com/_alessandrotes",target:"_blank",rel:"noopener",title:"Open twitter"},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},t("path",{d:"M492 109.5c-17.4 7.7-36 13-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11-39.4 19.2-61.5 23.5-17.7-19-43-30.7-70.7-30.7-53.5 0-96.8 43.4-96.8 97 0 7.5.8 15 2.5 22-80.5-4-152-42.6-199.6-101.3-8.4 14.3-13.2 31-13.2 48.7C39.8 164 57 193.7 83 211c-16-.3-31-4.7-44-12v1.2c0 47 33.4 86 77.7 95-8 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48 66.5 90.5 67.3-33 26-75 41.6-120.3 41.6-7.8 0-15.5-.5-23-1.4C62.7 432 113.6 448 168 448 346.7 448 444 300.3 444 172.2c0-4.2 0-8.4-.3-12.5 19-13.7 35.3-30.7 48.3-50.2z"})))))]}static get is(){return"stencil-site"}static get style(){return"*{box-sizing:border-box}stencil-site{height:100%;display:flex;flex-flow:column}.app{height:100%;max-width:1080px;margin:auto}#main-div{flex-grow:1;flex-shrink:0}::selection{background:#e7e7f2}::-moz-selection{background:#e7e7f2}body,html{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";width:100%;height:100%;padding:0;margin:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}h1,h2,h3,h4{color:#16161d}h1{font-size:28px;font-weight:700}h2{font-size:20px;font-weight:700}h2,h3{margin-top:48px;margin-bottom:8px}p,ul{color:#2d2d4c;font-size:15px;line-height:2em;margin:24px 0}stencil-route-link:hover{cursor:pointer}.wrapper{line-height:32px;min-height:100%;padding-top:60px;margin:15px;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start}pre{word-break:break-all;word-wrap:break-word;display:block;white-space:pre-wrap;margin:24px 0 28px;padding:16px 24px;border-radius:4px;color:#abb2bf;background-color:#16161d}pre code{font-weight:500;display:block;overflow-x:auto;word-wrap:normal;white-space:pre;box-sizing:border-box;font-size:14px;line-height:20px}code{font-weight:400;font-family:\"Source Code Pro\",monospace;font-size:14px}.nextButton{background:var(--primary-color);color:#fff;text-decoration:none;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer;float:right;margin-right:5px}.nextButton:hover{text-decoration:none;transform:translateY(1px);box-shadow:var(--button-shadow-hover)}.backButton{color:var(--primary-color);background:#fff;text-decoration:none;float:left;border:none;font-size:13px;font-weight:700;text-transform:uppercase;padding:16px 20px;border-radius:2px;box-shadow:0 8px 16px rgba(0,0,0,.1),0 3px 6px rgba(0,0,0,.08);outline:0;letter-spacing:.04em;transition:all .15s ease;cursor:pointer;margin-bottom:15px;margin-left:5px}.backButton:hover{text-decoration:none;transform:translateY(1px);box-shadow:var(--button-shadow-hover)}.hljs-comment,.hljs-quote{color:#5c6370;font-style:italic}.hljs-doctag,.hljs-formula,.hljs-keyword{color:#c678dd}.hljs-deletion,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-subst{color:#e06c75}.hljs-literal{color:#56b6c2}.hljs-addition,.hljs-attribute,.hljs-meta-string,.hljs-regexp,.hljs-string{color:#98c379}.hljs-built_in,.hljs-class .hljs-title{color:#e6c07b}.hljs-attr,.hljs-number,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-pseudo,.hljs-template-variable,.hljs-type,.hljs-variable{color:#d19a66}.hljs-bullet,.hljs-link,.hljs-meta,.hljs-selector-id,.hljs-symbol,.hljs-title{color:#61aeee}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}.hljs-link{text-decoration:underline}footer{bottom:0;left:0;width:100%;background:#f8f8fc;height:8em;display:flex;justify-content:space-around;align-items:center;flex:0 0 8em;margin-top:32px}footer .svg-button{margin-left:16px;transition:all .15s ease}footer .svg-button:hover{opacity:.5}#open-source img{width:50%}#open-source p{margin-top:0;margin-bottom:0;color:#a5a4b8;font-size:10px}\@media screen and (max-width:355px){.wrapper{padding-top:100px}}\@media screen and (max-width:450px){.wrapper{padding-top:80px}site-header a{display:none}site-header stencil-route-link a{display:initial}}\@media screen and (max-width:590px){.wrapper{margin-right:0;margin-left:0;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.wrapper .pull-right{padding:0 15px;width:100%;min-height:100vh}.wrapper .pull-left{position:relative;padding:15px;width:100%;bottom:0;background-color:#16161d}.wrapper .pull-left *{color:#fff}}\@media screen and (min-width:590px){.wrapper .pull-left{min-width:250px;max-width:250px;position:-webkit-sticky;position:sticky;top:50px}.wrapper #version{color:#484854}.wrapper .pull-right{padding-left:96px;padding-right:32px;flex:1 1 auto;overflow:auto;min-height:100vh}}"}}class a{constructor(){this.unsubscribe=(()=>{}),this.componentProps={},this.exact=!1,this.group=null,this.routeRender=null,this.match=null}computeMatch(t){t||(t=this.activeRouter.get("location").pathname);const n=e(t,{path:this.url,exact:this.exact,strict:!0});if(n){if(this.group&&this.activeRouter.didGroupAlreadyMatch(this.group))return null;this.group&&this.activeRouter.setGroupMatched(this.group)}return n}componentWillLoad(){this.group&&this.activeRouter.addToGroup(this,this.group),this.unsubscribe=this.activeRouter.subscribe(()=>{this.match=this.computeMatch()}),this.match=this.computeMatch()}componentDidUnload(){this.activeRouter.removeFromGroups(this),this.unsubscribe()}render(){if(!this.activeRouter||!this.match)return null;const e=Object.assign({},this.componentProps,{history:this.activeRouter.get("history"),match:this.match});if(this.routeRender)return this.routeRender(Object.assign({},e,{component:this.component}));if(this.component){const n=this.component;return t(n,Object.assign({},e))}}static get is(){return"stencil-route"}static get properties(){return{activeRouter:{context:"activeRouter"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},exact:{type:Boolean,attr:"exact"},group:{type:String,attr:"group"},location:{context:"location"},match:{state:!0},routeRender:{type:"Any",attr:"route-render"},url:{type:"Any",attr:"url"}}}}function c(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function l(t,e){return c(t,e)?t.substr(e.length):t}function h(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function u(t){return"/"===t.charAt(0)?t:"/"+t}function d(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t){const{pathname:e,search:n,hash:o}=t;let s=e||"/";return n&&"?"!==n&&(s+="?"===n.charAt(0)?n:`?${n}`),o&&"#"!==o&&(s+="#"===o.charAt(0)?o:`#${o}`),s}function g(t){return"/"===t.charAt(0)}function f(t,e){for(let n=e,o=n+1,s=t.length;o<s;n+=1,o+=1)t[n]=t[o];t.pop()}function m(t,e,n,o){let s;"string"==typeof t?(s=function(t){let e=t||"/",n="",o="";const s=e.indexOf("#");-1!==s&&(o=e.substr(s),e=e.substr(0,s));const i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===o?"":o}}(t)).state=e:(void 0===(s=Object.assign({},t)).pathname&&(s.pathname=""),s.search?"?"!==s.search.charAt(0)&&(s.search="?"+s.search):s.search="",s.hash?"#"!==s.hash.charAt(0)&&(s.hash="#"+s.hash):s.hash="",void 0!==e&&void 0===s.state&&(s.state=e));try{s.pathname=decodeURI(s.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+s.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}var i;return n&&(s.key=n),o?s.pathname?"/"!==s.pathname.charAt(0)&&(s.pathname=function(t,e=""){const n=t&&t.split("/")||[];let o=e&&e.split("/")||[];const s=t&&g(t),i=e&&g(e),r=s||i;if(t&&g(t)?o=n:n.length&&(o.pop(),o=o.concat(n)),!o.length)return"/";let a;if(o.length){const t=o[o.length-1];a="."===t||".."===t||""===t}else a=!1;let c=0;for(let t=o.length;t>=0;t--){const e=o[t];"."===e?f(o,t):".."===e?(f(o,t),c++):c&&(f(o,t),c--)}if(!r)for(;c--;c)o.unshift("..");!r||""===o[0]||o[0]&&g(o[0])||o.unshift("");let l=o.join("/");return a&&"/"!==l.substr(-1)&&(l+="/"),l}(s.pathname,o.pathname)):s.pathname=o.pathname:s.pathname||(s.pathname="/"),s.query=(i=s.search)?(/^[?#]/.test(i)?i.slice(1):i).split("&").reduce((t,e)=>{let[n,o]=e.split("=");return t[n]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t},{}):{},s}function w(t,...e){t||console.error(...e)}function y(t,...e){t||console.warn(...e)}const b=()=>{let t,e=[];return{setPrompt:e=>(y(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,n,o,s)=>{if(null!=t){const i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof o?o(i,s):(y(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),s(!0)):s(!1!==i)}else s(!0)},appendListener:t=>{let n=!0;const o=(...e)=>{n&&t(...e)};return e.push(o),()=>{n=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},v=!("undefined"==typeof window||!window.document||!window.document.createElement),x=(t,e,n)=>t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n),k=(t,e,n)=>t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n),O=(t,e)=>e(window.confirm(t)),A=()=>{try{return window.history.state||{}}catch(t){return{}}},R={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+d(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:d,decodePath:u},slash:{encodePath:u,decodePath:u}},P=()=>{const t=window.location.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},S=t=>{const e=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,e>=0?e:0)+"#"+t)},L={browser:(t={})=>{w(v,"Browser history needs a DOM");const e=window.history,n=(()=>{const t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history})(),o=!(()=>-1===window.navigator.userAgent.indexOf("Trident"))(),{forceRefresh:s=!1,getUserConfirmation:i=O,keyLength:r=6}=t,a=t.basename?h(u(t.basename)):"",d=t=>{t=t||{};const{key:e,state:n}=t,{pathname:o,search:s,hash:i}=window.location;let r=o+s+i;return y(!a||c(r,a),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+a+'".'),a&&(r=l(r,a)),m(r,n,e)},g=()=>Math.random().toString(36).substr(2,r),f=b(),R=t=>{Object.assign(z,t),z.length=e.length,f.notifyListeners(z.location,z.action)},P=t=>{(t=>void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS"))(t)||T(d(t.state))},S=()=>{T(d(A()))};let L=!1;const T=t=>{if(L)L=!1,R();else{const e="POP";f.confirmTransitionTo(t,e,i,n=>{n?R({action:e,location:t}):E(t)})}},E=t=>{const e=z.location;let n=j.indexOf(e.key);-1===n&&(n=0);let o=j.indexOf(t.key);-1===o&&(o=0);const s=n-o;s&&(L=!0,M(s))},C=d(A());let j=[C.key];const H=t=>a+p(t),M=t=>{e.go(t)};let U=0;const B=t=>{1===(U+=t)?(x(window,"popstate",P),o&&x(window,"hashchange",S)):0===U&&(k(window,"popstate",P),o&&k(window,"hashchange",S))};let G=!1;const z={length:e.length,action:"POP",location:C,createHref:H,push:(t,o)=>{y(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const r=m(t,o,g(),z.location);f.confirmTransitionTo(r,"PUSH",i,t=>{if(!t)return;const o=H(r),{key:i,state:a}=r;if(n)if(e.pushState({key:i,state:a},null,o),s)window.location.href=o;else{const t=j.indexOf(z.location.key),e=j.slice(0,-1===t?0:t+1);e.push(r.key),j=e,R({action:"PUSH",location:r})}else y(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=o})},replace:(t,o)=>{y(!("object"==typeof t&&void 0!==t.state&&void 0!==o),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const r=m(t,o,g(),z.location);f.confirmTransitionTo(r,"REPLACE",i,t=>{if(!t)return;const o=H(r),{key:i,state:a}=r;if(n)if(e.replaceState({key:i,state:a},null,o),s)window.location.replace(o);else{const t=j.indexOf(z.location.key);-1!==t&&(j[t]=r.key),R({action:"REPLACE",location:r})}else y(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(o)})},go:M,goBack:()=>M(-1),goForward:()=>M(1),block:(t="")=>{const e=f.setPrompt(t);return G||(B(1),G=!0),()=>(G&&(G=!1,B(-1)),e())},listen:t=>{const e=f.appendListener(t);return B(1),()=>{B(-1),e()}}};return z},hash:(t={})=>{w(v,"Hash history needs a DOM");const e=window.history,n=(()=>-1===window.navigator.userAgent.indexOf("Firefox"))(),{getUserConfirmation:o=O,hashType:s="slash"}=t,i=t.basename?h(u(t.basename)):"",{encodePath:r,decodePath:a}=R[s],d=()=>{let t=a(P());return y(!i||c(t,i),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+i+'".'),i&&(t=l(t,i)),m(t)},g=b(),f=t=>{Object.assign(W,t),W.length=e.length,g.notifyListeners(W.location,W.action)};let A=!1,L=null;const C=()=>{const t=P(),e=r(t);if(t!==e)S(e);else{const t=d(),e=W.location;if(!A&&(E=t,(T=e).pathname===E.pathname&&T.search===E.search&&T.hash===E.hash&&T.key===E.key&&function t(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(Array.isArray(e))return Array.isArray(n)&&e.length===n.length&&e.every(function(e,o){return t(e,n[o])});const o=typeof e;if(o!==typeof n)return!1;if("object"===o){const o=e.valueOf(),s=n.valueOf();if(o!==e||s!==n)return t(o,s);const i=Object.keys(e),r=Object.keys(n);return i.length===r.length&&i.every(function(o){return t(e[o],n[o])})}return!1}(T.state,E.state)))return;if(L===p(t))return;L=null,j(t)}},j=t=>{if(A)A=!1,f();else{const e="POP";g.confirmTransitionTo(t,e,o,n=>{n?f({action:e,location:t}):H(t)})}},H=t=>{const e=W.location;let n=G.lastIndexOf(p(e));-1===n&&(n=0);let o=G.lastIndexOf(p(t));-1===o&&(o=0);const s=n-o;s&&(A=!0,z(s))},M=P(),U=r(M);M!==U&&S(U);const B=d();let G=[p(B)];const z=t=>{y(n,"Hash history go(n) causes a full page reload in this browser"),e.go(t)};let F=0;const I=t=>{1===(F+=t)?x(window,"hashchange",C):0===F&&k(window,"hashchange",C)};let D=!1;const W={length:e.length,action:"POP",location:B,createHref:t=>"#"+r(i+p(t)),push:(t,e)=>{y(void 0===e,"Hash history cannot push state; it is ignored");const n=m(t,void 0,void 0,W.location);g.confirmTransitionTo(n,"PUSH",o,t=>{if(!t)return;const e=p(n),o=r(i+e);if(P()!==o){L=e,(t=>window.location.hash=t)(o);const t=G.lastIndexOf(p(W.location)),s=G.slice(0,-1===t?0:t+1);s.push(e),G=s,f({action:"PUSH",location:n})}else y(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),f()})},replace:(t,e)=>{y(void 0===e,"Hash history cannot replace state; it is ignored");const n=m(t,void 0,void 0,W.location);g.confirmTransitionTo(n,"REPLACE",o,t=>{if(!t)return;const e=p(n),o=r(i+e);P()!==o&&(L=e,S(o));const s=G.indexOf(p(W.location));-1!==s&&(G[s]=e),f({action:"REPLACE",location:n})})},go:z,goBack:()=>z(-1),goForward:()=>z(1),block:(t="")=>{const e=g.setPrompt(t);return D||(I(1),D=!0),()=>(D&&(D=!1,I(-1)),e())},listen:t=>{const e=g.appendListener(t);return I(1),()=>{I(-1),e()}}};return W}};var T,E;class C{constructor(){this.root="/",this.historyType="browser",this.titleSuffix="",this.unsubscribe=(()=>{}),this.match=null}titleSuffixChanged(t){this.activeRouter.set({titleSuffix:t})}computeMatch(t){return{path:this.root,url:this.root,isExact:t===this.root,params:{}}}componentWillLoad(){const t=L[this.historyType]();t.listen(t=>{this.activeRouter.set({location:this.getLocation(t)})}),this.activeRouter.set({location:this.getLocation(t.location),titleSuffix:this.titleSuffix,root:this.root,history:t}),this.unsubscribe=this.activeRouter.subscribe(()=>{this.match=this.computeMatch()}),this.match=this.computeMatch()}getLocation(t){const e=0==t.pathname.indexOf(this.root)?"/"+t.pathname.slice(this.root.length):t.pathname;return Object.assign({},t,{pathname:e})}componentDidUnload(){this.unsubscribe()}render(){return t("slot",null)}static get is(){return"stencil-router"}static get properties(){return{activeRouter:{context:"activeRouter"},historyType:{type:"Any",attr:"history-type"},match:{state:!0},root:{type:String,attr:"root"},titleSuffix:{type:String,attr:"title-suffix",watchCallbacks:["titleSuffixChanged"]}}}}export{n as AppMarked,o as DocumentComponent,s as SiteHeader,i as SiteMenu,r as StencilSite,a as StencilRoute,C as StencilRouter};