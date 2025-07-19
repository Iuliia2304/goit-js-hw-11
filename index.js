import{a as f,S as p,i as c}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="51317900-f0372c6e5a84e0989a980511e",y="https://pixabay.com/api/";async function h(n){try{const r={key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return(await f.get(y,{params:r})).data}catch{throw new Error("Failed to fetch images")}}const i=document.querySelector(".gallery"),u=document.querySelector(".loader");let g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(n){const r=n.map(e=>`
          <li class="gallery-item">
          <a href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
          </a>
          <div class="info">
          <p>👍 ${e.likes}</p>
          <p>👁️ ${e.views}</p>
          <p>💬 ${e.comments}</p>
          <p>⬇️ ${e.downloads}</p>
          </div>
          </li>`).join("");i.insertAdjacentHTML("beforeend",r);const o=i.querySelectorAll("img"),a=Array.from(o).map(e=>new Promise(t=>{e.complete?t():(e.onload=()=>t(),e.onerror=()=>t())}));Promise.all(a).then(()=>{g.refresh(),d()})}function w(){i.innerHTML=""}function S(){u.classList.remove("hidden")}function d(){u.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async n=>{n.preventDefault();const r=l.elements["search-text"].value.trim();if(r){w(),S();try{const o=await h(r);if(o.hits.length===0){c.warning({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});return}await L(o.hits)}catch{c.error({title:"Error",message:"Something went wrong!",position:"topRight"})}finally{d()}}});
//# sourceMappingURL=index.js.map
