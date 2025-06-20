import{a as m,S as O,N as j,K as _}from"./assets/vendor-CIDwANU8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const c={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};c.mobileMenuOpenBtn.addEventListener("click",()=>{c.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});c.mobileMenuCloseBtn.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});c.mobileMenuLinks.forEach(t=>{t.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const l={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last")},f="https://sound-wave.b.goit.study/api",g="/artists/",x="/albums/",F="/feedbacks/";async function K(t,s){const a=f+g,i={limit:t,page:s};return(await m.get(a,{params:i})).data}async function H(){const t=f+F,s={limit:10};return(await m.get(t,{params:s})).data}async function R(t){const s=f+g+t+x,a={};return(await m.get(s,{params:a})).data}const o="/goit-js-project-ArtistsHub/assets/icons-B_PfIQ6b.svg";function h(t){return t.map(s=>`<li class="artist-genres-item">${s}</li>`).join("")}function Y(t){const{_id:s,strArtist:a,strArtistThumb:i,strBiographyEN:e,genres:r}=t,n=h(r);return`<li class="artists-item">
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
            <use href="${o}#caret-right"></use>
          </svg>
        </button>
      </li>`}function G(t){const s=t.map(Y).join("");l.artistsListContainer.insertAdjacentHTML("beforeend",s)}function U(){l.loader.classList.remove("is-hidden")}function Q(){l.loader.classList.add("is-hidden")}function V(t,s){t<s?l.loadMoreBtn.classList.remove("is-hidden"):l.loadMoreBtn.classList.add("is-hidden")}function W(t){const{name:s,descr:a,rating:i}=t;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(i)} color-default">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${o}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${o}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${o}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${o}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${o}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${o}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${o}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${o}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${o}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${o}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${o}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${o}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${o}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${o}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${o}#star-filled"></use>
          </svg>
        </div>
      </div>
    </div>
    <p class="feedback-message">"${a}"</p>
    <p class="feedback-author-name">${s}</p>
  </div>
</div>`}function z(t){const s=t.map(W).join("");l.feedbacksContainer.innerHTML=s}function J(t){const s=Math.floor(t/1e3),a=Math.floor(s/60),i=s%60,e=i<10?`0${i}`:i;return`${a}:${e}`}function X(t){const{strArtist:s,strArtistThumb:a,intFormedYear:i,intDiedYear:e,strGender:r,intMembers:n,strCountry:k,strBiographyEN:S,genres:A,albumsList:D}=t,E=h(A),w=D.map(T=>{const{strAlbum:B,tracks:C}=T,q=C.map(I=>{const{intDuration:N,movie:v,strTrack:P}=I;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${P}</td>
                  <td class="artist-modal-album-time col-2">${J(N)}</td>
                  <td class="artist-modal-album-link col-3">
                  ${v?`<a
                      class="clip-link"
                      href="${v}"
                      target="_blank"
                    >
                      <svg width="24" height="24">
                        <use href="${o}#youtube"></use>
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
          <dd class="artist-modal-info-value">${i||"information missing"}–${e||"present"}</dd>
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
      <ul class="artist-modal-genres-list artist-genres-list">${E}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${w}</ul>`}function Z(t){const s=X(t);l.artistDetailsContainer.innerHTML=s}const p=8;let u=1;async function y(){U();try{const{artists:t,totalArtists:s}=await K(p,u),a=Math.ceil(s/p);G(t),V(u,a)}catch(t){console.log(t)}Q()}y();l.loadMoreBtn.addEventListener("click",async()=>{u++,await y()});function L(t){const s=t.target.closest(".modal-close-btn"),a=t.target===l.artistDetailsModal;!s&&!a||M()}function $(t){t.key==="Escape"&&M()}function M(){l.artistDetailsModal.classList.remove("is-open"),document.body.classList.remove("modal-open"),l.artistDetailsModal.removeEventListener("click",L),document.removeEventListener("keydown",$)}l.artistsListContainer.addEventListener("click",async t=>{const s=t.target.closest(".artist-btn");if(!s)return;const a=s.dataset.artistId,i=await R(a);Z(i),l.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),l.artistDetailsModal.addEventListener("click",L),document.addEventListener("keydown",$)});async function tt(){const{data:t}=await H();z(t)}tt();new O(".swiper",{modules:[j,_],on:{init:b,slideChange:b},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function b(t){const s=t.slides.length,a=t.activeIndex,{paginationDotFirst:i,paginationDotMiddle:e,paginationDotLast:r}=l;i.classList.remove("active"),e.classList.remove("active"),r.classList.remove("active"),a===0?d(i):a===s-1?d(r):d(e)}function d(t){t.classList.remove("active"),t.offsetWidth,t.classList.add("active")}
//# sourceMappingURL=index.js.map
