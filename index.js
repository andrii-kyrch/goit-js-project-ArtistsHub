import{a as m,S as _,N as H,K}from"./assets/vendor-BiXr4j9g.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const s={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal"),genreList:document.querySelector(".genre-list"),mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link"),filtersToggle:document.querySelector(".filters-toggle"),filtersMenu:document.querySelector(".filters-menu"),filtersPanel:document.querySelector(".filters-panel"),emptyState:document.querySelector(".empty-state"),resetEmptyStateBtn:document.querySelector(".reset-empty-state-btn"),inputSearch:document.querySelector(".filters-search"),filtersResetBtn:document.querySelector(".filters-reset-btn")};s.mobileMenuOpenBtn.addEventListener("click",()=>{s.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});s.mobileMenuCloseBtn.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});s.mobileMenuLinks.forEach(e=>{e.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const f="https://sound-wave.b.goit.study/api",S="/artists/",Q="/albums/",G="/feedbacks/",U="/genres/";async function Y(e){const{perPage:t,page:a,searchQuery:i,sortName:r,genre:n}=e,c=f+S,p={limit:t,page:a,name:i,sortName:r,genre:n};return(await m.get(c,{params:p})).data}async function V(){const e=f+G,t={limit:10};return(await m.get(e,{params:t})).data}async function W(e){const t=f+S+e+Q,a={};return(await m.get(t,{params:a})).data}async function z(){const e=f+U;return(await m.get(e)).data}const o="/goit-js-project-ArtistsHub/assets/icons-B_KhKWnp.svg";function $(e){return e.map(t=>`<li class="artist-genres-item">${t}</li>`).join("")}function J(e){const{_id:t,strArtist:a,strArtistThumb:i,strBiographyEN:r,genres:n}=e,c=$(n);return`<li class="artists-item">
        <img
          src="${i}"
          alt="Artist ${a}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${c}
        </ul>
        <h3 class="artist-name">${a}</h3>
        <p class="artist-text">
          ${(r||"").split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${t}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${o}#caret-right"></use>
          </svg>
        </button>
      </li>`}function X(e){const t=e.map(J).join("");s.artistsListContainer.insertAdjacentHTML("beforeend",t)}function Z(){s.loader.classList.remove("is-hidden")}function ee(){s.loader.classList.add("is-hidden")}function te(){s.modalLoader.classList.remove("is-hidden")}function se(){s.modalLoader.classList.add("is-hidden")}function ae(e,t){e<t?s.loadMoreBtn.classList.remove("is-hidden"):s.loadMoreBtn.classList.add("is-hidden")}function re(e){const{name:t,descr:a,rating:i}=e;return`<div class="swiper-slide">
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
    <p class="feedback-author-name">${t}</p>
  </div>
</div>`}function ie(e){const t=e.map(re).join("");s.feedbacksContainer.innerHTML=t}function ne(e){const t=Math.floor(e/1e3),a=Math.floor(t/60),i=t%60,r=i<10?`0${i}`:i;return`${a}:${r}`}function oe(e){const{strArtist:t,strArtistThumb:a,intFormedYear:i,intDiedYear:r,strGender:n,intMembers:c,strCountry:p,strBiographyEN:y,genres:T,albumsList:B}=e,C=$(T),N=B.map(P=>{const{strAlbum:I,tracks:O}=P,x=O.map(F=>{const{intDuration:j,movie:L,strTrack:R}=F;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${R}</td>
                  <td class="artist-modal-album-time col-2">${ne(j)}</td>
                  <td class="artist-modal-album-link col-3">
                  ${L?`<a
                      class="clip-link"
                      href="${L}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href="${o}#youtube"></use>
                      </svg>
                    </a>`:""} 
                  </td>
                </tr>`}).join("");return`<li class="artist-modal-album-card">
            <table class="artist-modal-album-table">
              <caption class="artist-modal-album-name">${I}</caption>
              <thead>
                <tr class="artist-modal-album-row">
                  <th class="artist-modal-album-th col-1">Track</th>
                  <th class="artist-modal-album-th col-2">Time</th>
                  <th class="artist-modal-album-th col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${x}
              </tbody>
            </table>
          </li>`}).join("");return`<h2 class="artist-modal-name">${t}</h2>

  <div class="artist-modal-info-wrapper">
    <img
      class="artist-modal-photo"
      src="${a}"
      alt="Photo ${t}"
    />
    <div class="artist-modal-info-block">
      <div class="artist-modal-info-list">
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Years active</dt>
          <dd class="artist-modal-info-value">${i||"information missing"}–${r||"present"}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Sex</dt>
          <dd class="artist-modal-info-value">${n}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Members</dt>
          <dd class="artist-modal-info-value">${c}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Country</dt>
          <dd class="artist-modal-info-value">${p}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${y}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${C}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${N}</ul>`}function le(e){const t=oe(e);s.artistDetailsContainer.innerHTML=t}function ce({genre:e}){return`<li class="genre-item" data-genre="${e.toLowerCase()}" tabindex="0" role="option"
                aria-selected="false">${e}</li>`}function de(e){const t=e.toSorted((a,i)=>a.genre.localeCompare(i.genre)).map(ce).join("");s.genreList.innerHTML=t}const M=8;let u=1;const v=()=>window.matchMedia("(min-width: 1440px)").matches,l={sortName:void 0,genre:void 0,searchQuery:void 0};async function ue(){try{const e=await z();de(e),await b()}catch(e){console.error("Error loading initial data:",e)}}async function me(){u++,await b()}async function h(){u=1,await b()}async function b(){const e=u===1,t=s.artistsListContainer.children.length;Z();try{const{artists:a,totalArtists:i}=await Y({perPage:M,page:u,...l}),r=Math.ceil(i/M);e&&(s.artistsListContainer.innerHTML="",s.emptyState.classList.toggle("is-visible",a.length===0)),a.length>0&&X(a),ae(u,r),E(),e||pe(t)}catch(a){console.error("Error fetching artists:",a)}finally{ee()}}function E(){s.inputSearch.value=l.searchQuery||"",s.filtersMenu.querySelectorAll(".sorting-item, .genre-item").forEach(t=>{let a=!1;t.classList.contains("sorting-item")?a=t.dataset.sort===l.sortName:t.classList.contains("genre-item")&&(a=t.dataset.genre===l.genre),t.classList.toggle("is-active",a),t.setAttribute("aria-selected",a.toString())}),fe()}function w(){l.searchQuery=void 0,l.sortName=void 0,l.genre=void 0,s.filtersMenu.reset(),E(),h()}ue();s.filtersMenu.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value.trim();l.searchQuery=t||void 0,h()});s.loadMoreBtn.addEventListener("click",me);s.filtersResetBtn.addEventListener("click",w);function fe(){const e=!!(l.searchQuery||l.sortName||l.genre);s.filtersResetBtn&&(s.filtersResetBtn.disabled=!e)}s.resetEmptyStateBtn.addEventListener("click",w);function pe(e){const t=s.artistsListContainer.children[e];if(!t)return;const a=s.filtersPanel.offsetHeight;t.style.scrollMarginTop=`${a-50}px`,t.scrollIntoView({behavior:"smooth",block:"start"})}const d=e=>{!s.filtersPanel.contains(e.target)&&!s.filtersMenu.contains(e.target)&&(s.filtersMenu.querySelectorAll(".is-open").forEach(a=>{a.classList.remove("is-open")}),s.filtersPanel.classList.remove("is-open"),document.removeEventListener("click",d))};s.filtersPanel.addEventListener("click",e=>{if(!e.target.closest(".filters-toggle"))return;const t=s.filtersPanel.classList.toggle("is-open");s.filtersToggle.setAttribute("aria-expanded",t),t?document.addEventListener("click",d):document.removeEventListener("click",d)});s.filtersMenu.addEventListener("click",ge);function ge(e){const t=e.target.closest(".sorting-item, .genre-item");if(t){ve(t);return}he(e.target)}function ve(e){var a;e.parentElement.querySelector(".is-active"),e.classList.contains("sorting-item")?l.sortName=e.dataset.sort:e.classList.contains("genre-item")&&(l.genre=e.dataset.genre),h();const t=e.closest(".js-dropdown");t&&(t.classList.remove("is-open"),(a=t.querySelector("button"))==null||a.setAttribute("aria-expanded","false"),v()&&document.removeEventListener("click",d))}function he(e){var n;const t=e.closest("button");if(!t)return;const a=t.closest(".js-dropdown");if(!a)return;const i=s.filtersMenu.querySelector(".is-open");i&&i!==a&&(i.classList.remove("is-open"),(n=i.querySelector("button"))==null||n.setAttribute("aria-expanded","false"),v()&&document.removeEventListener("click",d));const r=a.classList.toggle("is-open");t.setAttribute("aria-expanded",r),v()&&(r?document.addEventListener("click",d):document.removeEventListener("click",d))}function A(e){const t=e.target.closest(".modal-close-btn"),a=e.target===s.artistDetailsModal;!t&&!a||q()}function D(e){e.key==="Escape"&&q()}function q(){s.artistDetailsModal.classList.remove("is-open"),s.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),s.artistDetailsModal.removeEventListener("click",A),document.removeEventListener("keydown",D)}s.artistsListContainer.addEventListener("click",async e=>{const t=e.target.closest(".artist-btn");if(!t)return;const a=t.dataset.artistId;s.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),te();const i=await W(a);le(i),se(),s.artistModal.classList.remove("is-hidden"),s.artistDetailsModal.scrollTop=0,s.artistDetailsModal.addEventListener("click",A),document.addEventListener("keydown",D)});async function be(){const{data:e}=await V();ie(e)}be();new _(".swiper",{modules:[H,K],on:{init:k,slideChange:k},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function k(e){const t=e.slides.length,a=e.activeIndex,{paginationDotFirst:i,paginationDotMiddle:r,paginationDotLast:n}=s;i.classList.remove("active"),r.classList.remove("active"),n.classList.remove("active"),a===0?g(i):a===t-1?g(n):g(r)}function g(e){e.classList.remove("active"),e.offsetWidth,e.classList.add("active")}
//# sourceMappingURL=index.js.map
