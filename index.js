import{a as m,S as h,N as b,K as y}from"./assets/vendor-CIDwANU8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const n={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};n.mobileMenuOpenBtn.addEventListener("click",()=>{n.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});n.mobileMenuCloseBtn.addEventListener("click",()=>{n.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});n.mobileMenuLinks.forEach(e=>{e.addEventListener("click",()=>{n.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const v="https://sound-wave.b.goit.study/api",L="/artists/",$="/feedbacks/";async function M(e,s){const a=v+L,o={limit:e,page:s};return(await m.get(a,{params:o})).data}async function k(){const e=v+$,s={limit:10};return(await m.get(e,{params:s})).data}const i="/goit-js-project-ArtistsHub/assets/icons-B_PfIQ6b.svg",c={artistsContainer:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),feedbacksContainer:document.querySelector(".swiper-wrapper")};function S(e){const{_id:s,strArtist:a,strArtistThumb:o,strBiographyEN:t,genres:r}=e,l=r.map(g=>`<li class="artist-genres-item">${g}</li>`).join("");return`<li class="artists-item">
        <img
          src="${o}"
          alt="Artist ${a}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${l}
        </ul>
        <h3 class="artist-name">${a}</h3>
        <p class="artist-text">
          ${t.split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-id="${s}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${i}#caret-right"></use>
          </svg>
        </button>
      </li>`}function w(e){const s=e.map(S).join("");c.artistsContainer.insertAdjacentHTML("beforeend",s)}function A(){c.loader.classList.remove("is-hidden")}function E(){c.loader.classList.add("is-hidden")}function q(e,s){e<s?c.loadMoreBtn.classList.remove("is-hidden"):c.loadMoreBtn.classList.add("is-hidden")}function B(e){const{name:s,descr:a,rating:o}=e;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(o)} color-default">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${i}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${i}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${i}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${i}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${i}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${i}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${i}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${i}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${i}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${i}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${i}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${i}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${i}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${i}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${i}#star-filled"></use>
          </svg>
        </div>
      </div>
    </div>
    <p class="feedback-message">"${a}"</p>
    <p class="feedback-author-name">${s}</p>
  </div>
</div>`}function P(e){const s=e.map(B).join("");c.feedbacksContainer.innerHTML=s}const N={loadMoreBtn:document.querySelector(".load-more-btn")},u=8;let d=1;async function p(){A();try{const{artists:e,totalArtists:s}=await M(u,d),a=Math.ceil(s/u);w(e),q(d,a)}catch(e){console.log(e)}E()}p();N.loadMoreBtn.addEventListener("click",async()=>{d++,await p()});async function O(){const{data:e}=await k();P(e)}O();new h(".swiper",{modules:[b,y],on:{init:f,slideChange:f},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function f(e){const s=e.slides.length,a=e.activeIndex,o=document.querySelector(".dot-first"),t=document.querySelector(".dot-middle"),r=document.querySelector(".dot-last");a===0?o.classList.add("active"):a===s-1?r.classList.add("active"):t.classList.add("active"),a!==0&&a!==s-1?(t.classList.add("active"),o.classList.remove("active"),r.classList.remove("active")):t.classList.remove("active")}
//# sourceMappingURL=index.js.map
