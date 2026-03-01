import{a as m,S as G,N as K,K as Y}from"./assets/vendor-BiXr4j9g.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const a={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal"),genreList:document.querySelector(".genre-list"),mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link"),filtersToggle:document.querySelector(".filters-toggle"),filtersMenu:document.querySelector(".filters-menu"),filtersPanel:document.querySelector(".filters-panel")};a.mobileMenuOpenBtn.addEventListener("click",()=>{a.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});a.mobileMenuCloseBtn.addEventListener("click",()=>{a.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});a.mobileMenuLinks.forEach(t=>{t.addEventListener("click",()=>{a.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const f="https://sound-wave.b.goit.study/api",w="/artists/",U="/albums/",V="/feedbacks/",W="/genres/";async function h({perPage:t,page:e,name:s,sortName:i,genre:r}={}){const o=f+w,l={limit:t,page:e,name:s,sortName:i,genre:r};return(await m.get(o,{params:l})).data}async function z(){const t=f+V,e={limit:10};return(await m.get(t,{params:e})).data}async function J(t){const e=f+w+t+U,s={};return(await m.get(e,{params:s})).data}async function Q(){const t=f+W;return(await m.get(t)).data}const n="/goit-js-project-ArtistsHub/assets/icons-CHuY687n.svg";function A(t){return t.map(e=>`<li class="artist-genres-item">${e}</li>`).join("")}function X(t){const{_id:e,strArtist:s,strArtistThumb:i,strBiographyEN:r,genres:o}=t,l=A(o);return`<li class="artists-item">
        <img
          src="${i}"
          alt="Artist ${s}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${l}
        </ul>
        <h3 class="artist-name">${s}</h3>
        <p class="artist-text">
          ${(r||"").split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${e}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${n}#caret-right"></use>
          </svg>
        </button>
      </li>`}function b(t){const e=t.map(X).join("");a.artistsListContainer.insertAdjacentHTML("beforeend",e)}function L(){a.loader.classList.remove("is-hidden")}function y(){a.loader.classList.add("is-hidden")}function Z(){a.modalLoader.classList.remove("is-hidden")}function tt(){a.modalLoader.classList.add("is-hidden")}function M(t,e){t<e?a.loadMoreBtn.classList.remove("is-hidden"):a.loadMoreBtn.classList.add("is-hidden")}function et(t){const{name:e,descr:s,rating:i}=t;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(i)} color-default">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${n}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${n}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${n}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${n}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${n}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${n}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${n}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${n}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${n}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${n}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${n}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${n}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${n}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${n}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${n}#star-filled"></use>
          </svg>
        </div>
      </div>
    </div>
    <p class="feedback-message">"${s}"</p>
    <p class="feedback-author-name">${e}</p>
  </div>
</div>`}function st(t){const e=t.map(et).join("");a.feedbacksContainer.innerHTML=e}function at(t){const e=Math.floor(t/1e3),s=Math.floor(e/60),i=e%60,r=i<10?`0${i}`:i;return`${s}:${r}`}function rt(t){const{strArtist:e,strArtistThumb:s,intFormedYear:i,intDiedYear:r,strGender:o,intMembers:l,strCountry:k,strBiographyEN:q,genres:B,albumsList:P}=t,N=A(B),x=P.map(O=>{const{strAlbum:j,tracks:I}=O,F=I.map(_=>{const{intDuration:H,movie:$,strTrack:R}=_;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${R}</td>
                  <td class="artist-modal-album-time col-2">${at(H)}</td>
                  <td class="artist-modal-album-link col-3">
                  ${$?`<a
                      class="clip-link"
                      href="${$}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href="${n}#youtube"></use>
                      </svg>
                    </a>`:""} 
                  </td>
                </tr>`}).join("");return`<li class="artist-modal-album-card">
            <table class="artist-modal-album-table">
              <caption class="artist-modal-album-name">${j}</caption>
              <thead>
                <tr class="artist-modal-album-row">
                  <th class="artist-modal-album-th col-1">Track</th>
                  <th class="artist-modal-album-th col-2">Time</th>
                  <th class="artist-modal-album-th col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${F}
              </tbody>
            </table>
          </li>`}).join("");return`<h2 class="artist-modal-name">${e}</h2>

  <div class="artist-modal-info-wrapper">
    <img
      class="artist-modal-photo"
      src="${s}"
      alt="Photo ${e}"
    />
    <div class="artist-modal-info-block">
      <div class="artist-modal-info-list">
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Years active</dt>
          <dd class="artist-modal-info-value">${i||"information missing"}–${r||"present"}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Sex</dt>
          <dd class="artist-modal-info-value">${o}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Members</dt>
          <dd class="artist-modal-info-value">${l}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Country</dt>
          <dd class="artist-modal-info-value">${k}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${q}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${N}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${x}</ul>`}function it(t){const e=rt(t);a.artistDetailsContainer.innerHTML=e}function ot({genre:t}){return`<li class="genre-item" tabindex="0" role="option"
                aria-selected="false">${t}</li>`}function nt(t){const e=t.toSorted((s,i)=>s.genre.localeCompare(i.genre)).map(ot).join("");a.genreList.innerHTML=e}const u=8;let c=1,p,g;async function lt(){L();try{const[t,e]=await Promise.all([h({perPage:u,page:c,sortName:p,genre:g}),Q()]),{artists:s,totalArtists:i}=t,r=Math.ceil(i/u);b(s),M(c,r),nt(e)}catch(t){console.error("Error loading initial data:",t)}finally{y()}}async function ct(){c++,L();try{const{artists:t,totalArtists:e}=await h({perPage:u,page:c,sortName:p,genre:g}),s=Math.ceil(e/u);b(t),M(c,s),dt()}catch(t){console.error("Error loading more artists:",t)}y()}async function E(){c=1,a.artistsListContainer.innerHTML="",L();try{const{artists:t,totalArtists:e}=await h({perPage:u,page:c,sortName:p,genre:g}),s=Math.ceil(e/u);b(t),M(c,s)}catch(t){console.error("Error reloading artists:",t)}finally{y()}}lt();a.loadMoreBtn.addEventListener("click",ct);function dt(){const t=a.artistsListContainer.firstElementChild;if(!t)return;const e=t.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e})}const d=t=>{!a.filtersPanel.contains(t.target)&&!a.filtersMenu.contains(t.target)&&(a.filtersMenu.querySelectorAll(".is-open").forEach(s=>{s.classList.remove("is-open")}),a.filtersPanel.classList.remove("is-open"),document.removeEventListener("click",d))};a.filtersPanel.addEventListener("click",t=>{if(!t.target.closest(".filters-toggle"))return;const e=a.filtersPanel.classList.toggle("is-open");a.filtersToggle.setAttribute("aria-expanded",e),e?document.addEventListener("click",d):document.removeEventListener("click",d)});a.filtersMenu.addEventListener("click",ut);function ut(t){const e=t.target.closest(".sorting-item, .genre-item");if(e){mt(e);return}ft(t.target)}function mt(t){var i;const e=t.parentElement.querySelector(".is-active");e&&(e.classList.remove("is-active"),e.setAttribute("aria-selected","false")),t.classList.add("is-active"),t.setAttribute("aria-selected","true"),t.classList.contains("sorting-item")&&(p=t.dataset.sort,E()),t.classList.contains("genre-item")&&(g=t.textContent.toLowerCase().trim(),E());const s=t.closest(".js-dropdown");s&&(s.classList.remove("is-open"),(i=s.querySelector("button"))==null||i.setAttribute("aria-expanded","false"),window.getComputedStyle(a.filtersToggle).display==="none"&&document.removeEventListener("click",d))}function ft(t){var l;const e=t.closest("button");if(!e)return;const s=e.closest(".js-dropdown");if(!s)return;const i=window.getComputedStyle(a.filtersToggle).display==="none",r=a.filtersMenu.querySelector(".is-open");r&&r!==s&&(r.classList.remove("is-open"),(l=r.querySelector("button"))==null||l.setAttribute("aria-expanded","false"),i&&document.removeEventListener("click",d));const o=s.classList.toggle("is-open");e.setAttribute("aria-expanded",o),i&&(o?document.addEventListener("click",d):document.removeEventListener("click",d))}function D(t){const e=t.target.closest(".modal-close-btn"),s=t.target===a.artistDetailsModal;!e&&!s||C()}function T(t){t.key==="Escape"&&C()}function C(){a.artistDetailsModal.classList.remove("is-open"),a.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),a.artistDetailsModal.removeEventListener("click",D),document.removeEventListener("keydown",T)}a.artistsListContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-btn");if(!e)return;const s=e.dataset.artistId;a.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),Z();const i=await J(s);it(i),tt(),a.artistModal.classList.remove("is-hidden"),a.artistDetailsModal.scrollTop=0,a.artistDetailsModal.addEventListener("click",D),document.addEventListener("keydown",T)});async function pt(){const{data:t}=await z();st(t)}pt();new G(".swiper",{modules:[K,Y],on:{init:S,slideChange:S},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function S(t){const e=t.slides.length,s=t.activeIndex,{paginationDotFirst:i,paginationDotMiddle:r,paginationDotLast:o}=a;i.classList.remove("active"),r.classList.remove("active"),o.classList.remove("active"),s===0?v(i):s===e-1?v(o):v(r)}function v(t){t.classList.remove("active"),t.offsetWidth,t.classList.add("active")}
//# sourceMappingURL=index.js.map
