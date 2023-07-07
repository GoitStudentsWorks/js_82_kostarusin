function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},o.parcelRequired7c6=i),i.register("kyEFX",(function(t,o){var r,n;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return n}),(function(e){return n=e}));var i={};r=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},n=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("2Zoty",(function(o,r){e(o.exports,"default",(function(){return l}));var n=i("jkMrE"),s=i("g6yUq"),a=new WeakMap;class l{async getCategories(){const e=await fetch(`${t(n)(this,a)}/books/category-list`);return await e.json()}async getTopBook(){const e=await fetch(`${t(n)(this,a)}/books/top-books`);return await e.json()}async getBooksByCategory(e){const o=await fetch(`${t(n)(this,a)}/books/category?category=${e}`);return await o.json()}async getBookDetail(e){const o=await fetch(`${t(n)(this,a)}/books/${e}`);return await o.json()}constructor(){t(s)(this,a,{writable:!0,value:"https://books-backend.p.goit.global"})}}})),i.register("jkMrE",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){var n=o.default(e,t,"get");return r.default(e,n)};var o=n(i("fExtF")),r=n(i("iaRLo"));function n(e){return e&&e.__esModule?e:{default:e}}})),i.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to "+o+" private field on non-instance");return t.get(e)}})),i.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),i.register("g6yUq",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){r.default(e,t),t.set(e,o)};var o,r=(o=i("7K24o"))&&o.__esModule?o:{default:o}})),i.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),i.register("69giC",(function(t,o){e(t.exports,"updateBookCounter",(function(){return n}));const r=document.querySelector(".header-book-count");function n(){const e=JSON.parse(localStorage.getItem("shopping-list"))||[];e.length>0?(r.textContent=e.length,r.style.display="flex"):(r.style.display="none",r.textContent="")}n()})),i.register("5uEKZ",(function(o,r){e(o.exports,"default",(function(){return p}));var n=i("jkMrE"),s=i("g6yUq"),a=i("gMe87"),l=i("hl3Cc"),c=i("8iF6T"),u=new WeakMap,d=new WeakMap,g=new WeakSet;class p{setBook(e){t(a)(this,d,JSON.parse(localStorage.getItem(t(n)(this,u)))),t(n)(this,d).push(e),localStorage.setItem(t(n)(this,u),JSON.stringify(t(n)(this,d)))}removeBook(e){t(a)(this,d,JSON.parse(localStorage.getItem(t(n)(this,u))));const o=t(n)(this,d).splice(t(n)(this,d).findIndex((t=>t._id===e)),1);return o&&localStorage.setItem(t(n)(this,u),JSON.stringify(t(n)(this,d))),o.length>0}findBook(e){t(a)(this,d,JSON.parse(localStorage.getItem(t(n)(this,u))));return!!t(n)(this,d).find((t=>t._id===e))}constructor(){t(c)(this,g),t(s)(this,u,{writable:!0,value:"shopping-list"}),t(s)(this,d,{writable:!0,value:[]}),t(l)(this,g,f).call(this)}}function f(){t(a)(this,d,JSON.parse(localStorage.getItem(t(n)(this,u)))),t(n)(this,d)||localStorage.setItem(t(n)(this,u),"[]")}})),i.register("gMe87",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){var i=o.default(e,t,"set");return r.default(e,i,n),n};var o=n(i("fExtF")),r=n(i("3LGG3"));function n(e){return e&&e.__esModule?e:{default:e}}})),i.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(t.set)t.set.call(e,o);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=o}}})),i.register("hl3Cc",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,o){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return o}})),i.register("8iF6T",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){r.default(e,t),t.add(e)};var o,r=(o=i("7K24o"))&&o.__esModule?o:{default:o}})),i.register("76jN1",(function(e,o){var r=i("10Ei3");const n=document.querySelector(".slider_line"),s=document.querySelector(".ol_support");t(r).map((e=>{let t=document.createElement("li");return t.className="list",t.innerHTML=`\n      <a class="support_link" target="_blank" href="${e.url}">\n        <img class="image" src="${e.img}" alt="${e.title}"/>\n      </a>`,t})).forEach((e=>{s.appendChild(e)}));let a=0;document.querySelector(".scroll").addEventListener("click",(()=>{a+=150,a>300&&(a=0),n.style.top=-a+"px"}))})),i.register("10Ei3",(function(e,t){e.exports=JSON.parse('[{"title":"Save the Children","url":"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis","img":"https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/save-the-children.png?raw=true"},{"title":"Project HOPE","url":"https://www.projecthope.org/country/ukraine/","img":"https://github.com/AlexGoIT/images/blob/ed53d7b428e549d083f21afe53d954c4f4d99b3f/support-icons/hope.png?raw=true"},{"title":"UNITED24","url":"https://u24.gov.ua/uk","img":"https://github.com/AlexGoIT/images/blob/b54b19358d2d9e95d2472b43b54376b1ef1dc3e9/support-icons/united24.png?raw=true"},{"title":"International Medical Corps","url":"https://internationalmedicalcorps.org/country/ukraine/","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/international-medical-corps.png?raw=true"},{"title":"Medicins Sans Frontieres","url":"https://www.msf.org/ukraine","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/medicins-sans-frontieres.png?raw=true"},{"title":"RAZOM","url":"https://www.razomforukraine.org/","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/razom.png?raw=true"},{"title":"Action against hunger","url":"https://www.actionagainsthunger.org/location/europe/ukraine/","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/action-against-hunger.png?raw=true"},{"title":"World vision","url":"https://www.wvi.org/emergencies/ukraine","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/world-vision.png?raw=true"},{"title":"Serhiy Prytula Charity Foundation","url":"https://prytulafoundation.org/en","img":"https://github.com/AlexGoIT/images/blob/18a7d3a22e12fa57006455b4b8605dee207572f4/support-icons/sergiy-prytula.png?raw=true"}]')})),i.register("4S0r6",(function(e,t){!function(){const e=new URL(i("6ZrJh")),t=new URL(i("9ZjCy")),o=document.getElementById("theme-styles-link"),r=document.getElementById("js-switch-theme");let n=localStorage.getItem("theme"),s=localStorage.getItem("state");function a(e,t){o.setAttribute("href",e),r.checked=t}n||(n=e,localStorage.setItem("theme",n)),r.addEventListener("change",(function(){this.checked?(a(t,this.checked),n=t,s=this.checked):(a(e,!1),n=e,s=!1);localStorage.setItem("theme",n),localStorage.setItem("state",s)})),r.checked="true"===s,a(n,r.checked)}()})),i.register("6ZrJh",(function(e,t){e.exports=new URL(i("kyEFX").resolve("3shj9"),import.meta.url).toString()})),i.register("9ZjCy",(function(e,t){e.exports=new URL(i("kyEFX").resolve("bctJO"),import.meta.url).toString()})),i.register("bUb57",(function(e,t){let o=window.pageYOffset;window.onscroll=function(){const e=window.pageYOffset;document.getElementById("main-header").style.top=o>e?"0":"-72px",o=e}})),i.register("kNOsD",(function(e,t){(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-desk]"),closeModalBtn:document.querySelector("[data-modal-close-desk]"),modal:document.querySelector("[data-modal-new]")};function t(){e.modal.classList.toggle("is-hiddens")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),(()=>{const e={openModalBtn:document.querySelector("[data-modal-open-mobile]"),closeModalBtn:document.querySelector("[data-modal-close-mobile]"),modal:document.querySelector("[data-modal-new]")};e.openModalBtn.addEventListener("click",(function(){e.modal.classList.toggle("is-hiddens")}))})()})),i.register("ezWpW",(function(e,t){const o=document.querySelector(".header-burger"),r=document.querySelector(".js-box-menu"),n=document.body,i=o.querySelector(".icon-burger-menu"),s=o.querySelector(".head-icon-close");o.addEventListener("click",(function(){s.classList.toggle("is-hidden"),i.classList.toggle("is-hidden"),r.classList.toggle("show"),n.classList.toggle("no-scroll")}))})),i("kyEFX").register(JSON.parse('{"4jukI":"shopping.47e6528e.js","3shj9":"default-theme.f14d05d4.css","bctJO":"dark-theme.dc29a8c3.css"}'));
//# sourceMappingURL=shopping.47e6528e.js.map
