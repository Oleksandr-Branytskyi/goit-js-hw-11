import{a as p,S as f,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",m="52538556-e7ad6b62877d90490937495df";async function y(i){const r={key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(g,{params:r})).data}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="image-info">
          <p>👍 ${t}</p>
          <p>👁️ ${a}</p>
          <p>💬 ${u}</p>
          <p>⬇️ ${d}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){l.innerHTML=""}function S(){c.classList.add("is-loading")}function q(){c.classList.remove("is-loading")}const v=document.querySelector(".form");v.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}b(),S();try{const o=await y(r);o.hits.length===0?n.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(o.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
