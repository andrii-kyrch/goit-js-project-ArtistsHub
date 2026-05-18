import{a as m,S as G,N as Y,K as Q}from"./assets/vendor-BiXr4j9g.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const s={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal"),genreList:document.querySelector(".genre-list"),mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link"),filtersToggle:document.querySelector(".filters-toggle"),filtersMenu:document.querySelector(".filters-menu"),filtersPanel:document.querySelector(".filters-panel"),emptyState:document.querySelector(".empty-state"),inputSearch:document.querySelector(".filters-search")};s.mobileMenuOpenBtn.addEventListener("click",()=>{s.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});s.mobileMenuCloseBtn.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});s.mobileMenuLinks.forEach(t=>{t.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const f="https://sound-wave.b.goit.study/api",A="/artists/",U="/albums/",W="/feedbacks/",V="/genres/";async function y(t){const{perPage:e,page:a,searchQuery:i,sortName:r,genre:o}=t,l=f+A,v={limit:e,page:a,name:i,sortName:r,genre:o};return(await m.get(l,{params:v})).data}async function z(){const t=f+W,e={limit:10};return(await m.get(t,{params:e})).data}async function J(t){const e=f+A+t+U,a={};return(await m.get(e,{params:a})).data}async function X(){const t=f+V;return(await m.get(t)).data}const n="/goit-js-project-ArtistsHub/assets/icons-B_KhKWnp.svg";function D(t){return t.map(e=>`<li class="artist-genres-item">${e}</li>`).join("")}function Z(t){const{_id:e,strArtist:a,strArtistThumb:i,strBiographyEN:r,genres:o}=t,l=D(o);return`<li class="artists-item">
        <img
          src="${i}"
          alt="Artist ${a}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${l}
        </ul>
        <h3 class="artist-name">${a}</h3>
        <p class="artist-text">
          ${(r||"").split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${e}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${n}#caret-right"></use>
          </svg>
        </button>
      </li>`}function L(t){const e=t.map(Z).join("");s.artistsListContainer.insertAdjacentHTML("beforeend",e)}function M(){s.loader.classList.remove("is-hidden")}function k(){s.loader.classList.add("is-hidden")}function tt(){s.modalLoader.classList.remove("is-hidden")}function et(){s.modalLoader.classList.add("is-hidden")}function S(t,e){t<e?s.loadMoreBtn.classList.remove("is-hidden"):s.loadMoreBtn.classList.add("is-hidden")}function st(t){const{name:e,descr:a,rating:i}=t;return`<div class="swiper-slide">
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
    <p class="feedback-message">"${a}"</p>
    <p class="feedback-author-name">${e}</p>
  </div>
</div>`}function at(t){const e=t.map(st).join("");s.feedbacksContainer.innerHTML=e}function rt(t){const e=Math.floor(t/1e3),a=Math.floor(e/60),i=e%60,r=i<10?`0${i}`:i;return`${a}:${r}`}function it(t){const{strArtist:e,strArtistThumb:a,intFormedYear:i,intDiedYear:r,strGender:o,intMembers:l,strCountry:v,strBiographyEN:$,genres:P,albumsList:N}=t,x=D(P),O=N.map(j=>{const{strAlbum:I,tracks:_}=j,F=_.map(K=>{const{intDuration:R,movie:E,strTrack:H}=K;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${H}</td>
                  <td class="artist-modal-album-time col-2">${rt(R)}</td>
                  <td class="artist-modal-album-link col-3">
                  ${E?`<a
                      class="clip-link"
                      href="${E}"
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
              <caption class="artist-modal-album-name">${I}</caption>
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
      src="${a}"
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
          <dd class="artist-modal-info-value">${v}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${$}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${x}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${O}</ul>`}function ot(t){const e=it(t);s.artistDetailsContainer.innerHTML=e}function nt({genre:t}){return`<li class="genre-item" tabindex="0" role="option"
                aria-selected="false">${t}</li>`}function lt(t){const e=t.toSorted((a,i)=>a.genre.localeCompare(i.genre)).map(nt).join("");s.genreList.innerHTML=e}const u=8;let c=1,p,g,T;s.filtersMenu.addEventListener("submit",t=>{t.preventDefault(),T=t.target.elements.search.value,b()});async function ct(){M();try{const[t,e]=await Promise.all([y({perPage:u,page:c,sortName:p,genre:g}),X()]),{artists:a,totalArtists:i}=t,r=Math.ceil(i/u);a.length===0?s.emptyState.classList.add("is-visible"):(s.emptyState.classList.remove("is-visible"),L(a)),S(c,r),lt(e)}catch(t){console.error("Error loading initial data:",t)}finally{k()}}async function dt(){c++,M();try{const{artists:t,totalArtists:e}=await y({perPage:u,page:c,sortName:p,genre:g}),a=Math.ceil(e/u);L(t),S(c,a),ut()}catch(t){console.error("Error loading more artists:",t)}finally{k()}}async function b(){c=1,s.artistsListContainer.innerHTML="",M();try{const{artists:t,totalArtists:e}=await y({searchQuery:T,perPage:u,page:c,sortName:p,genre:g}),a=Math.ceil(e/u);t.length===0?s.emptyState.classList.add("is-visible"):(s.emptyState.classList.remove("is-visible"),L(t)),S(c,a)}catch(t){console.error("Error reloading artists:",t)}finally{k()}}ct();s.loadMoreBtn.addEventListener("click",dt);function ut(){const t=s.artistsListContainer.firstElementChild;if(!t)return;const e=t.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e})}const d=t=>{!s.filtersPanel.contains(t.target)&&!s.filtersMenu.contains(t.target)&&(s.filtersMenu.querySelectorAll(".is-open").forEach(a=>{a.classList.remove("is-open")}),s.filtersPanel.classList.remove("is-open"),document.removeEventListener("click",d))};s.filtersPanel.addEventListener("click",t=>{if(!t.target.closest(".filters-toggle"))return;const e=s.filtersPanel.classList.toggle("is-open");s.filtersToggle.setAttribute("aria-expanded",e),e?document.addEventListener("click",d):document.removeEventListener("click",d)});s.filtersMenu.addEventListener("click",mt);function mt(t){const e=t.target.closest(".sorting-item, .genre-item");if(e){ft(e);return}pt(t.target)}function ft(t){var i;const e=t.parentElement.querySelector(".is-active");e&&(e.classList.remove("is-active"),e.setAttribute("aria-selected","false")),t.classList.add("is-active"),t.setAttribute("aria-selected","true"),t.classList.contains("sorting-item")&&(p=t.dataset.sort,b()),t.classList.contains("genre-item")&&(g=t.textContent.toLowerCase().trim(),b());const a=t.closest(".js-dropdown");a&&(a.classList.remove("is-open"),(i=a.querySelector("button"))==null||i.setAttribute("aria-expanded","false"),window.getComputedStyle(s.filtersToggle).display==="none"&&document.removeEventListener("click",d))}function pt(t){var l;const e=t.closest("button");if(!e)return;const a=e.closest(".js-dropdown");if(!a)return;const i=window.getComputedStyle(s.filtersToggle).display==="none",r=s.filtersMenu.querySelector(".is-open");r&&r!==a&&(r.classList.remove("is-open"),(l=r.querySelector("button"))==null||l.setAttribute("aria-expanded","false"),i&&document.removeEventListener("click",d));const o=a.classList.toggle("is-open");e.setAttribute("aria-expanded",o),i&&(o?document.addEventListener("click",d):document.removeEventListener("click",d))}function q(t){const e=t.target.closest(".modal-close-btn"),a=t.target===s.artistDetailsModal;!e&&!a||B()}function C(t){t.key==="Escape"&&B()}function B(){s.artistDetailsModal.classList.remove("is-open"),s.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),s.artistDetailsModal.removeEventListener("click",q),document.removeEventListener("keydown",C)}s.artistsListContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-btn");if(!e)return;const a=e.dataset.artistId;s.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),tt();const i=await J(a);ot(i),et(),s.artistModal.classList.remove("is-hidden"),s.artistDetailsModal.scrollTop=0,s.artistDetailsModal.addEventListener("click",q),document.addEventListener("keydown",C)});async function gt(){const{data:t}=await z();at(t)}gt();new G(".swiper",{modules:[Y,Q],on:{init:w,slideChange:w},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function w(t){const e=t.slides.length,a=t.activeIndex,{paginationDotFirst:i,paginationDotMiddle:r,paginationDotLast:o}=s;i.classList.remove("active"),r.classList.remove("active"),o.classList.remove("active"),a===0?h(i):a===e-1?h(o):h(r)}function h(t){t.classList.remove("active"),t.offsetWidth,t.classList.add("active")}
//# sourceMappingURL=index.js.map
