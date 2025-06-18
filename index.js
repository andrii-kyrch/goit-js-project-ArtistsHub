import{a as m,S as k,N as S,K as B}from"./assets/vendor-CIDwANU8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();const c={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};c.mobileMenuOpenBtn.addEventListener("click",()=>{c.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});c.mobileMenuCloseBtn.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});c.mobileMenuLinks.forEach(s=>{s.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const p="https://sound-wave.b.goit.study/api",g="/artists/",A="/feedbacks/";async function E(s,e){const a=p+g,r={limit:s,page:e};return(await m.get(a,{params:r})).data}async function q(){const s=p+A,e={limit:10};return(await m.get(s,{params:e})).data}async function w(s){const e=p+g+s,a={};return(await m.get(e,{params:a})).data}const l="/goit-js-project-ArtistsHub/assets/icons-B_PfIQ6b.svg",o={artistsContainer:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),feedbacksContainer:document.querySelector(".swiper-wrapper"),artistDetailsContainer:document.querySelector(".artist-details-info")};function b(s){return s.map(e=>`<li class="artist-genres-item">${e}</li>`).join("")}function C(s){const{_id:e,strArtist:a,strArtistThumb:r,strBiographyEN:t,genres:i}=s,n=b(i);return`<li class="artists-item">
        <img
          src="${r}"
          alt="Artist ${a}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${n}
        </ul>
        <h3 class="artist-name">${a}</h3>
        <p class="artist-text">
          ${t.split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${e}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${l}#caret-right"></use>
          </svg>
        </button>
      </li>`}function T(s){const e=s.map(C).join("");o.artistsContainer.insertAdjacentHTML("beforeend",e)}function D(){o.loader.classList.remove("is-hidden")}function I(){o.loader.classList.add("is-hidden")}function N(s,e){s<e?o.loadMoreBtn.classList.remove("is-hidden"):o.loadMoreBtn.classList.add("is-hidden")}function P(s){const{name:e,descr:a,rating:r}=s;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(r)} color-default">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${l}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${l}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${l}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${l}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${l}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${l}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${l}#star-filled"></use>
          </svg>
        </div>
      </div>
    </div>
    <p class="feedback-message">"${a}"</p>
    <p class="feedback-author-name">${e}</p>
  </div>
</div>`}function O(s){const e=s.map(P).join("");o.feedbacksContainer.innerHTML=e}function x(s){const{strArtist:e,strArtistThumb:a,intFormedYear:r,intDiedYear:t,strGender:i,intMembers:n,strCountry:y,strBiographyEN:L,genres:$}=s,M=b($);return`<h2 class="artist-details-name">${e}</h2>
        <img
          class="artist-photo-details"
          src="${a}"
          alt=""
        />
        <ul class="artist-details-list">
          <li class="artist-details-item">
            <p class="artist-details-label">Years active</p>
            <p class="artist-details-value">${r}–${t||"present"}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Sex</p>
            <p class="artist-details-value">${i}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Members</p>
            <p class="artist-details-value">${n}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Country</p>
            <p class="artist-details-value">${y}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Biography</p>
            <p class="artist-details-value">${L}</p>
          </li>
          <li class="artist-details-item">
            <ul class="artist-genres-list">${M}</ul>
          </li>
        </ul>`}function j(s){const e=x(s);o.artistDetailsContainer.innerHTML=e}const d={artistsContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),artistDetailsModal:document.querySelector(".backdrop")},f=8;let u=1;async function h(){D();try{const{artists:s,totalArtists:e}=await E(f,u),a=Math.ceil(e/f);T(s),N(u,a)}catch(s){console.log(s)}I()}h();d.loadMoreBtn.addEventListener("click",async()=>{u++,await h()});d.artistsContainer.addEventListener("click",async s=>{const e=s.target.closest(".artist-btn");if(!e)return;const a=e.dataset.artistId,r=await w(a);j(r),d.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),d.artistDetailsModal.addEventListener("click",t=>{t.target.closest(".modal-close-btn")&&(d.artistDetailsModal.classList.remove("is-open"),document.body.classList.remove("modal-open"))})});async function F(){const{data:s}=await q();O(s)}F();new k(".swiper",{modules:[S,B],on:{init:v,slideChange:v},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function v(s){const e=s.slides.length,a=s.activeIndex,r=document.querySelector(".dot-first"),t=document.querySelector(".dot-middle"),i=document.querySelector(".dot-last");a===0?r.classList.add("active"):a===e-1?i.classList.add("active"):t.classList.add("active"),a!==0&&a!==e-1?(t.classList.add("active"),r.classList.remove("active"),i.classList.remove("active")):t.classList.remove("active")}
//# sourceMappingURL=index.js.map
