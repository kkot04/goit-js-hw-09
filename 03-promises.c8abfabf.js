var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("iQIUW");const u=document.querySelector(".form"),i=document.querySelectorAll("input"),l=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]'),a=document.querySelector('button[type="submit"]');function c(e,t){const r=Math.random()>.3;return new Promise(((n,o)=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)})).then((e=>{setTimeout((()=>{o.Notify.success(e)}),t)})).catch((e=>{setTimeout((()=>{o.Notify.failure(e)}),t)}))}a.setAttribute("disabled",!0),u.addEventListener("input",(()=>{[...i].some((e=>""===e.value))?a.setAttribute("disabled",!0):a.removeAttribute("disabled")})),u.addEventListener("submit",(e=>{e.preventDefault();let t=Number(l.value);const r=Number(d.value),n=Number(s.value);for(let e=1;e<=n;e+=1)c(e,t),t+=r}));
//# sourceMappingURL=03-promises.c8abfabf.js.map
