(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>a});var o=t(645),i=t.n(o)()((function(n){return n[1]}));i.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n',""]);const a=i},426:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(645),i=t.n(o),a=t(667),r=t.n(a),d=t(567),c=t(65),s=i()((function(n){return n[1]}));s.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);var l=r()(d),p=r()(c);s.push([n.id,'/*Font import*/\n\n:root {\n  --theme1: #008938;\n  --theme2: #f2b700;\n  --bk: #f4f5f4;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  background: var(--theme1);\n  box-sizing: border-box;\n}\n\n.head-cont {\n  text-align: center;\n  width: auto;\n  background-color: var(--bk);\n  z-index: 1;\n}\n.head-img {\n  margin: 20px;\n  width: 150px;\n}\n.link-cont {\n  display: flex;\n  justify-content: center;\n  color: var(--theme1);\n  font-weight: 600;\n  font-size: 20px;\n  background-color: var(--theme2);\n}\n.main-flex-link {\n  padding: 10px 20px;\n  display: inline-block;\n}\n.main-flex-link:link,\n.main-flex-link:visited {\n  color: var(--theme1);\n  text-decoration: none;\n}\n.main-flex-link:hover {\n  text-decoration: underline;\n}\n.link-cont-listing {\n  display: inline;\n  margin: 0px;\n}\n\n.menu-selected {\n  background: var(--bk);\n}\n.foot-main {\n  width: 100%;\n  display: block;\n  position: fixed;\n  bottom: 0;\n}\n.foot-text {\n  display: block;\n  text-align: center;\n  padding: 5px 0;\n  background-color: var(--bk);\n}\n\n.content-background {\n  width: 70%;\n  margin: 20px auto;\n  color: #016b2d;\n  background-image: url('+l+");\n  background-color: rgba(255, 255, 255, 0.6);\n  background-blend-mode: lighten;\n  background-position: 0% 50%;\n  background-size: 100%;\n  position: relative;\n  opacity: 1;\n  border-radius: 10px;\n}\n\n.content-background-1 {\n  background-image: url("+l+");\n}\n\n.content-background-2 {\n  background-image: url("+p+');\n}\n\n.content-title-cont {\n  text-align: center;\n}\n.content-title {\n  padding: 50px;\n  font-size: 4rem;\n}\n.content-title::before {\n  content: "\\201c";\n}\n.content-title::after {\n  content: "\\201d";\n}\n.home-page-text {\n  text-align: center;\n  padding: 0 10px;\n  font-size: 1.5rem;\n  color: #016b2d;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-bottom: 4px;\n}\n\n.menu-cont {\n  background: #ffc400;\n  margin: 25px auto;\n  width: 70%;\n  color: white;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 75px;\n}\n\n.menu-title {\n  text-align: center;\n  font-size: 3.5rem;\n}\n.menu-subheading {\n  text-align: right;\n  font-size: 2.5rem;\n  font-weight: 600;\n  border-bottom: 4px solid var(--bk);\n  margin: 40px 0;\n}\n.item-image {\n  width: 350px;\n  height: 200px;\n  background-color: #fff;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.menu-image {\n  max-width: 100%;\n  max-height: 100%;\n  border-radius: 10px;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.item-card {\n  width: 350px;\n  height: 275px;\n  font-weight: 400;\n  border-radius: 10px;\n  background-color: #000;\n  box-shadow: 0 5px 10px rgba(23, 23, 24, 0.63),\n    0 15px 40px rgba(166, 173, 201, 0.2);\n  font-size: 30px;\n  text-align: center;\n  cursor: pointer;\n}\n.item-card > p {\n  padding: 20px;\n}\n\n.display-menu-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  justify-items: end;\n  gap: 10px;\n}\n\n.item-card:hover {\n  animation-name: cardHov;\n  animation-iteration-count: 1;\n  animation-duration: 0.25s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes cardHov {\n  0% {\n  }\n  100% {\n    color: black;\n    background: white;\n  }\n}\n\n.contact-cont {\n  background: var(--theme2);\n  width: 60%;\n  margin: 50px auto;\n  padding: 20px;\n  color: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.contact-title {\n  text-align: center;\n  font-size: 3rem;\n  padding: 20px;\n}\n.contact-left {\n  width: 40%;\n}\n.contact-right {\n  padding: 25px;\n  text-align: center;\n  width: 100%;\n  border-left: 3px solid white;\n}\n.contact-form-title {\n  font-size: 2rem;\n}\n.cf-label {\n  text-align: left;\n  display: block;\n  padding: 0;\n  margin-top: 20px;\n  font-weight: 400;\n  font-size: 1.5rem;\n}\n.cf-input {\n  outline: none;\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 2px solid var(--theme1);\n\n  color: var(--theme1);\n  font-weight: 600;\n}\n\ntextarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n}\n\n.cf-submit {\n  background-color: #04aa6d;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-top: 10px;\n  position: relative;\n}\n\n.cf-submit:hover {\n  background-color: var(--theme1);\n}\n\n.img-cont {\n  text-align: center;\n}\n.gitImg {\n  width: 50px;\n  height: 50px;\n}\n\n@media only screen and (max-width: 1540px) {\n  .display-menu-grid {\n    justify-items: center;\n  }\n}\n@media only screen and (max-width: 1000px) {\n  .contact-cont {\n    display: block;\n  }\n  .contact-form-title {\n    text-align: center;\n    padding-bottom: 10px;\n    border-bottom: 3px solid white;\n  }\n  .contact-left {\n    width: 100%;\n  }\n  .contact-right {\n    padding: 0px;\n    text-align: left;\n    border: none;\n  }\n  .cf-input {\n    width: 100%;\n  }\n  .gitImg {\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .contact-cont {\n    width: 80%;\n  }\n  .menu-cont {\n    width: 80%;\n  }\n  .content-title {\n    font-size: 3rem;\n  }\n  .home-page-text {\n    font-size: 1rem;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  .item-image {\n    width: 255px;\n    height: 200px;\n  }\n  .item-card {\n    width: 255px;\n  }\n  .display-menu-grid {\n    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));\n  }\n}\n',""]);const m=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(i[r]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},695:n=>{var e={};n.exports=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},r=[],d=0;d<n.length;d++){var c=n[d],s=o.base?c[0]+o.base:c[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==m?(e[m].references++,e[m].updater(u)):e.push({identifier:p,updater:i(u,o),references:1}),r.push(p)}return r}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var a=o(n=n||[],i=i||{});return function(n){n=n||[];for(var r=0;r<a.length;r++){var d=t(a[r]);e[d].references--}for(var c=o(n,i),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e),e}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o=t.css,i=t.media,a=t.sourceMap;i?n.setAttribute("media",i):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},567:(n,e,t)=>{n.exports=t.p+"images/efcb9241900c894fee19.jpg"},65:(n,e,t)=>{n.exports=t.p+"images/d3ba202a3982a7d39e16.jpg"},666:(n,e,t)=>{t.d(e,{c:()=>r}),t(567),t(65);const o=["Subway has a variety of choices. These choices can be seen in the Menu tab.","Subway is focused on environmental sustainability and personal nutrition. This is reflected by the food offered at the subway which is reduced in sugars, sodium, while containing more whole grains and vegetables."],i=["Variety","Eat Fresh"];function a(n,e,t){let o,i,a,r;return o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("h1"),r=document.createElement("p"),o.classList.add("content-background"),i.classList.add("content-title-cont"),a.classList.add("content-title"),r.classList.add("home-page-text"),i.appendChild(a),o.appendChild(i),o.appendChild(r),a.textContent=n,r.textContent=e,o.classList.add(`content-background-${t+1}`),o}function r(){let n=document.getElementById("content");for(let e=0;e<o.length;e++)n.appendChild(a(i[e],o[e],e))}},284:(n,e,t)=>{n.exports=t.p+"images/0b4d29e1da427b8297b0.jpg"},450:(n,e,t)=>{n.exports=t.p+"images/fdfa0cfe7be9e2b62777.jpg"},162:(n,e,t)=>{n.exports=t.p+"images/a931c5a54136430349d3.png"},245:(n,e,t)=>{n.exports=t.p+"images/017990eeface4d12ef8b.png"},846:(n,e,t)=>{n.exports=t.p+"images/c9cfc57ae3234591cf0a.jpeg"},454:(n,e,t)=>{n.exports=t.p+"images/30d130dfae094d58d03b.png"},780:(n,e,t)=>{n.exports=t.p+"images/032e50f222d7e674119f.jpeg"},428:(n,e,t)=>{n.exports=t.p+"images/aa308ea049b905a2e695.jpg"},414:(n,e,t)=>{n.exports=t.p+"images/22944b647ac3af1a93db.jpg"},832:(n,e,t)=>{n.exports=t.p+"images/f26cb0de47094ca509b5.jpg"},804:(n,e,t)=>{n.exports=t.p+"images/45277a1c7974d6a569ba.jpg"},266:(n,e,t)=>{var o=t(379),i=t.n(o),a=t(795),r=t.n(a),d=t(695),c=t.n(d),s=t(216),l=t.n(s),p=t(426),m={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=c()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};m.domAPI=r(),m.insertStyleElement=l(),i()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;var u=t(917),h={styleTagTransform:function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}},setAttributes:function(n){var e=t.nc;e&&n.setAttribute("nonce",e)},insert:function(n){var e=c()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}};h.domAPI=r(),h.insertStyleElement=l(),i()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var g=t(666),f=t(83),b=t(245);function x(n,e,t,o){const i=document.createElement(e);return i.textContent=o,t.forEach((n=>i.classList.toggle(n))),Object.keys(n).forEach((e=>{i.setAttribute(e,n[e])})),i}var v="Home";const y={Home:g.c,Menu:f.r,"Contact Me":function(){let n,e,t,o,i,a,r,d,c,s,l,p,m,u,h;n=document.createElement("div"),n.classList.add("contact-cont"),e=document.createElement("div"),e.classList.add("contact-left"),o=document.createElement("h1"),o.classList.add("contact-title"),o.textContent="Contact Me",e.appendChild(o),t=document.createElement("div"),t.classList.add("contact-right"),i=document.createElement("h1"),i.classList.add("contact-form-title"),i.textContent="Contact Form",t.appendChild(i),a=x({for:"name"},"label",["cf-label"],"Name:"),r=x({type:"text",id:"name",name:"name",placeholder:"Name..."},"input",["cf-input"],""),t.appendChild(a),t.appendChild(r),d=x({for:"email"},"label",["cf-label"],"Name:"),c=x({type:"text",id:"email",name:"email",placeholder:"email@org.ext"},"input",["cf-input"],""),t.appendChild(d),t.appendChild(c),s=x({for:"subject"},"label",["cf-label"],"Subject:"),l=x({id:"subject",name:"subject",placeholder:"Write your message here"},"textarea",["cf-input"],""),t.appendChild(s),t.appendChild(l),n.appendChild(e),n.appendChild(t),p=x({id:"submitBtnContactForm"},"button",["cf-submit"],"Submit Form"),t.appendChild(p),m=x({},"div",["img-cont"],""),u=x({href:"https://github.com/Parth099",target:"_blank"},"a",["cf-link"],""),h=new Image,h.src=b,h.classList.add("gitImg"),u.appendChild(h),m.appendChild(u),e.append(m),document.getElementById("content").appendChild(n)}};function w(){const n=document.querySelectorAll(".main-flex-link");for(let e=0;e<n.length;e++)n[e].textContent==(this.option??"Home")?v!=this.option&&(n[e].classList.add("menu-selected"),k(),v=this.option,y[this.option]()):n[e].classList.remove("menu-selected")}function k(){document.getElementById("content").remove();let n=document.createElement("div");n.setAttribute("id","content"),document.body.appendChild(n)}y[v](),console.log("Fart"),function(){const n=document.querySelectorAll(".main-flex-link");for(let e=0;e<n.length;e++)n[e].addEventListener("click",w.bind({option:n[e].textContent}))}()},83:(n,e,t)=>{t.d(e,{r:()=>g});var o=t(414),i=t(846),a=t(428),r=t(832),d=t(454),c=t(780),s=t(804),l=t(284),p=t(450),m=t(162);let u;function h(n,e){let t,o,i;t=document.createElement("div"),o=document.createElement("div"),i=document.createElement("p"),i.textContent=n,t.classList.add("item-card"),o.classList.add("item-image");const a=new Image;return a.src=e,a.classList.add("menu-image"),o.appendChild(a),t.appendChild(o),t.appendChild(i),t}function g(){u=document.createElement("div");const n=document.createElement("h1");u.classList.add("menu-cont"),n.classList.add("menu-title"),n.textContent="Menu",u.appendChild(n),f("Sandwiches",["Steak & Cheese","Spherical Meat","Spicy Italian","Turkey"],[o,i,a,r]),f("Miscellaneous Items",["Protein Bowls","Salads","Wraps"],[d,c,s]),f("Sides",["Drinks","Chips","Cookies"],[m,l,p]),f(" ",[],[]),document.getElementById("content").appendChild(u)}function f(n,e,t){u.appendChild(function(n){let e=document.createElement("div");return e.classList.add("menu-subheading"),e.textContent=n,e}(n));let o=function(){let n=document.createElement("div");return n.classList.add("display-menu-grid"),n}();const i=Math.min(t.length,e.length);for(var a=0;a<i;a++)o.appendChild(h(e[a],t[a]));u.appendChild(o)}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t(266),t(666),t(83)})();