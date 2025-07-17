import{S as u,i as a,a as f}from"./assets/vendor-DqB7j7Ix.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),l=document.querySelector(".gallery"),p=document.querySelector(".loader"),d=new u(".gallery a"),m="51317900-f0372c6e5a84e0989a980511e",y="https://pixabay.com/api/";c.addEventListener("submit",async s=>{s.preventDefault();const o=c.elements["search-text"].value.trim();if(o){l.innerHTML="",g();try{const t=await h(o);if(t.hits.length===0){a.warning({title:"Sorry",message:"there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits),d.refresh()}catch{a.error({title:"Error",message:"Something went wrong!",position:"topRight"})}finally{}}});function g(){p.classList.remove("hidden")}async function h(s){return(await f.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}})).data}function b(s){const o=s.map(t=>`
               <li class="gallery-item">
               <a href="${t.largeImageURL}">
               <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
               </a>
               <div class="image-info">
               <p><b>Likes:</b> ${t.likes}</p>
               <p><b>Views:</b> ${t.views}</p>
               <p><b>Comments:</b> ${t.comments}</p>
               <p><b>Downloads:</b> ${t.downloads}</p>
               </div>
               </li>
               `).join("");l.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=index.js.map
