import{a as m,S as O,N as j,K as _}from"./assets/vendor-CIDwANU8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const d={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};d.mobileMenuOpenBtn.addEventListener("click",()=>{d.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});d.mobileMenuCloseBtn.addEventListener("click",()=>{d.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});d.mobileMenuLinks.forEach(t=>{t.addEventListener("click",()=>{d.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const r={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal")},f="https://sound-wave.b.goit.study/api",h="/artists/",x="/albums/",F="/feedbacks/";async function K(t,s){const a=f+h,i={limit:t,page:s};return(await m.get(a,{params:i})).data}async function H(){const t=f+F,s={limit:10};return(await m.get(t,{params:s})).data}async function R(t){const s=f+h+t+x,a={};return(await m.get(s,{params:a})).data}const l="/goit-js-project-ArtistsHub/assets/icons-B_PfIQ6b.svg";function g(t){return t.map(s=>`<li class="artist-genres-item">${s}</li>`).join("")}function Y(t){const{_id:s,strArtist:a,strArtistThumb:i,strBiographyEN:e,genres:o}=t,n=g(o);return`<li class="artists-item">
        <img
          src="${i}"
          alt="Artist ${a}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${n}
        </ul>
        <h3 class="artist-name">${a}</h3>
        <p class="artist-text">
          ${e.split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${s}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${l}#caret-right"></use>
          </svg>
        </button>
      </li>`}function G(t){const s=t.map(Y).join("");r.artistsListContainer.insertAdjacentHTML("beforeend",s)}function U(){r.loader.classList.remove("is-hidden")}function Q(){r.loader.classList.add("is-hidden")}function V(){r.modalLoader.classList.remove("is-hidden")}function W(){r.modalLoader.classList.add("is-hidden")}function z(t,s){t<s?r.loadMoreBtn.classList.remove("is-hidden"):r.loadMoreBtn.classList.add("is-hidden")}function J(t){const{name:s,descr:a,rating:i}=t;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(i)} color-default">
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
    <p class="feedback-author-name">${s}</p>
  </div>
</div>`}function X(t){const s=t.map(J).join("");r.feedbacksContainer.innerHTML=s}function Z(t){const s=Math.floor(t/1e3),a=Math.floor(s/60),i=s%60,e=i<10?`0${i}`:i;return`${a}:${e}`}function tt(t){const{strArtist:s,strArtistThumb:a,intFormedYear:i,intDiedYear:e,strGender:o,intMembers:n,strCountry:k,strBiographyEN:S,genres:D,albumsList:w}=t,A=g(D),E=w.map(T=>{const{strAlbum:B,tracks:q}=T,C=q.map(I=>{const{intDuration:N,movie:p,strTrack:P}=I;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${P}</td>
                  <td class="artist-modal-album-time col-2">${Z(N)}</td>
                  <td class="artist-modal-album-link col-3">
                  ${p?`<a
                      class="clip-link"
                      href="${p}"
                      target="_blank"
                    >
                      <svg width="24" height="24">
                        <use href="${l}#youtube"></use>
                      </svg>
                    </a>`:""} 
                  </td>
                </tr>`}).join("");return`<li class="artist-modal-album-card">
            <table class="artist-modal-album-table">
              <caption class="artist-modal-album-name">${B}</caption>
              <thead>
                <tr class="artist-modal-album-row">
                  <th class="artist-modal-album-th col-1">Track</th>
                  <th class="artist-modal-album-th col-2">Time</th>
                  <th class="artist-modal-album-th col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${C}
              </tbody>
            </table>
          </li>`}).join("");return`<h2 class="artist-modal-name">${s}</h2>

  <div class="artist-modal-info-wrapper">
    <img
      class="artist-modal-photo"
      src="${a}"
      alt="Photo ${s}"
    />
    <div class="artist-modal-info-block">
      <div class="artist-modal-info-list">
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Years active</dt>
          <dd class="artist-modal-info-value">${i||"information missing"}–${e||"present"}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Sex</dt>
          <dd class="artist-modal-info-value">${o}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Members</dt>
          <dd class="artist-modal-info-value">${n}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Country</dt>
          <dd class="artist-modal-info-value">${k}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${S}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${A}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${E}</ul>`}function st(t){const s=tt(t);r.artistDetailsContainer.innerHTML=s}const v=8;let u=1;async function y(){U();try{const{artists:t,totalArtists:s}=await K(v,u),a=Math.ceil(s/v);G(t),z(u,a)}catch(t){console.log(t)}Q()}y();r.loadMoreBtn.addEventListener("click",async()=>{u++,await y()});function L(t){const s=t.target.closest(".modal-close-btn"),a=t.target===r.artistDetailsModal;!s&&!a||$()}function M(t){t.key==="Escape"&&$()}function $(){r.artistDetailsModal.classList.remove("is-open"),r.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),r.artistDetailsModal.removeEventListener("click",L),document.removeEventListener("keydown",M)}r.artistsListContainer.addEventListener("click",async t=>{const s=t.target.closest(".artist-btn");if(!s)return;const a=s.dataset.artistId;r.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),V();const i=await R(a);st(i),W(),r.artistModal.classList.remove("is-hidden"),r.artistDetailsModal.scrollTop=0,r.artistDetailsModal.addEventListener("click",L),document.addEventListener("keydown",M)});async function et(){const{data:t}=await H();X(t)}et();new O(".swiper",{modules:[j,_],on:{init:b,slideChange:b},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function b(t){const s=t.slides.length,a=t.activeIndex,{paginationDotFirst:i,paginationDotMiddle:e,paginationDotLast:o}=r;i.classList.remove("active"),e.classList.remove("active"),o.classList.remove("active"),a===0?c(i):a===s-1?c(o):c(e)}function c(t){t.classList.remove("active"),t.offsetWidth,t.classList.add("active")}
//# sourceMappingURL=index.js.map
