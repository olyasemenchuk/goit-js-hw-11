import{S as p,i as m,a as d}from"./assets/vendor-B0XWlCgv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const h="55861557-2268365b5b48955757ff78c80";function y(r){const o=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const g=new p(".photo-container a",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".gallery"),c=document.querySelector(".loader");function b(){g.refresh()}function L(r){const o=r.map(({webformatURL:t,largeImageURL:l,tags:e,likes:s,views:i,comments:u,downloads:f})=>`<li class="photo-container">
          <a class="photo-link" href="${l}"><img src="${t}" alt="${e}" class="photo-icon"/></a>
            <ul class="info-list">
            <li class="item-info">
                <p class="label">Likes</p>
                <p class="value">${s}</p></li>
            <li class="item-info">
                <p class="label">Views</p>
                <p class="value">${i}</p></li>
            <li class="item-info">
                <p class="label">Comments</p>
                <p class="value">${u}</p></li>
            <li class="item-info">
                <p class="label">Downloads</p>
                <p class="value">${f}</p></li>
            </ul></li>`).join("");n.innerHTML=o,b()}function v(){n.innerHTML=""}function w(){c.classList.add("is-visible")}function S(){c.classList.remove("is-visible")}const $=document.querySelector(".form"),a=document.querySelector("input");$.addEventListener("submit",q);function q(r){r.preventDefault(),w();const o=a.value.trim();a.value="",y(o).then(t=>{if(v(),t.hits.length===0){m.show({title:"Message",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(t.hits)}).catch(t=>{d.isCancel(t)&&console.log(t)}).finally(()=>{S()})}
//# sourceMappingURL=index.js.map
