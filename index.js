import{a as m,S as O,N as j,K as x}from"./assets/vendor-CIDwANU8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};d.mobileMenuOpenBtn.addEventListener("click",()=>{d.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});d.mobileMenuCloseBtn.addEventListener("click",()=>{d.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});d.mobileMenuLinks.forEach(t=>{t.addEventListener("click",()=>{d.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const i={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal")},f="https://sound-wave.b.goit.study/api",g="/artists/",F="/albums/",_="/feedbacks/";async function K(t,s){const a=f+g,o={limit:t,page:s};return(await m.get(a,{params:o})).data}async function H(){const t=f+_,s={limit:10};return(await m.get(t,{params:s})).data}async function R(t){const s=f+g+t+F,a={};return(await m.get(s,{params:a})).data}const l="/goit-js-project-ArtistsHub/assets/icons-Bhy9AKb6.svg";function b(t){return t.map(s=>`<li class="artist-genres-item">${s}</li>`).join("")}function Y(t){const{_id:s,strArtist:a,strArtistThumb:o,strBiographyEN:e,genres:r}=t,n=b(r);return`<li class="artists-item">
        <img
          src="${o}"
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
      </li>`}function G(t){const s=t.map(Y).join("");i.artistsListContainer.insertAdjacentHTML("beforeend",s)}function U(){i.loader.classList.remove("is-hidden")}function V(){i.loader.classList.add("is-hidden")}function W(){i.modalLoader.classList.remove("is-hidden")}function z(){i.modalLoader.classList.add("is-hidden")}function J(t,s){t<s?i.loadMoreBtn.classList.remove("is-hidden"):i.loadMoreBtn.classList.add("is-hidden")}function Q(t){const{name:s,descr:a,rating:o}=t;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(o)} color-default">
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
</div>`}function X(t){const s=t.map(Q).join("");i.feedbacksContainer.innerHTML=s}function Z(t){const s=Math.floor(t/1e3),a=Math.floor(s/60),o=s%60,e=o<10?`0${o}`:o;return`${a}:${e}`}function tt(t){const{strArtist:s,strArtistThumb:a,intFormedYear:o,intDiedYear:e,strGender:r,intMembers:n,strCountry:k,strBiographyEN:S,genres:A,albumsList:D}=t,w=b(A),E=D.map(B=>{const{strAlbum:T,tracks:C}=B,q=C.map(I=>{const{intDuration:N,movie:p,strTrack:P}=I;return`<tr class="artist-modal-album-row">
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
              <caption class="artist-modal-album-name">${T}</caption>
              <thead>
                <tr class="artist-modal-album-row">
                  <th class="artist-modal-album-th col-1">Track</th>
                  <th class="artist-modal-album-th col-2">Time</th>
                  <th class="artist-modal-album-th col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${q}
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
          <dd class="artist-modal-info-value">${o||"information missing"}–${e||"present"}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Sex</dt>
          <dd class="artist-modal-info-value">${r}</dd>
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
      <ul class="artist-modal-genres-list artist-genres-list">${w}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${E}</ul>`}function st(t){const s=tt(t);i.artistDetailsContainer.innerHTML=s}const v=8;let c=1;async function y(){U();try{const{artists:t,totalArtists:s}=await K(v,c),a=Math.ceil(s/v);G(t),J(c,a)}catch(t){console.log(t)}V(),c>1&&et()}y();i.loadMoreBtn.addEventListener("click",async()=>{c++,await y()});function et(){const s=i.artistsListContainer.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:s})}function L(t){const s=t.target.closest(".modal-close-btn"),a=t.target===i.artistDetailsModal;!s&&!a||$()}function M(t){t.key==="Escape"&&$()}function $(){i.artistDetailsModal.classList.remove("is-open"),i.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),i.artistDetailsModal.removeEventListener("click",L),document.removeEventListener("keydown",M)}i.artistsListContainer.addEventListener("click",async t=>{const s=t.target.closest(".artist-btn");if(!s)return;const a=s.dataset.artistId;i.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),W();const o=await R(a);st(o),z(),i.artistModal.classList.remove("is-hidden"),i.artistDetailsModal.scrollTop=0,i.artistDetailsModal.addEventListener("click",L),document.addEventListener("keydown",M)});async function at(){const{data:t}=await H();X(t)}at();new O(".swiper",{modules:[j,x],on:{init:h,slideChange:h},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function h(t){const s=t.slides.length,a=t.activeIndex,{paginationDotFirst:o,paginationDotMiddle:e,paginationDotLast:r}=i;o.classList.remove("active"),e.classList.remove("active"),r.classList.remove("active"),a===0?u(o):a===s-1?u(r):u(e)}function u(t){t.classList.remove("active"),t.offsetWidth,t.classList.add("active")}
//# sourceMappingURL=index.js.map
