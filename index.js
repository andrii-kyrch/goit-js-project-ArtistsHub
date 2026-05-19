import{a as f,S as H,N as Q,K as G}from"./assets/vendor-BiXr4j9g.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const s={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal"),genreList:document.querySelector(".genre-list"),mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link"),filtersToggle:document.querySelector(".filters-toggle"),filtersMenu:document.querySelector(".filters-menu"),filtersPanel:document.querySelector(".filters-panel"),emptyState:document.querySelector(".empty-state"),inputSearch:document.querySelector(".filters-search"),filtersResetBtn:document.querySelector(".filters-reset-btn")};s.mobileMenuOpenBtn.addEventListener("click",()=>{s.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});s.mobileMenuCloseBtn.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});s.mobileMenuLinks.forEach(e=>{e.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const p="https://sound-wave.b.goit.study/api",D="/artists/",U="/albums/",Y="/feedbacks/",W="/genres/";async function b(e){const{perPage:t,page:a,searchQuery:i,sortName:r,genre:n}=e,c=p+D,v={limit:t,page:a,name:i,sortName:r,genre:n};return(await f.get(c,{params:v})).data}async function z(){const e=p+Y,t={limit:10};return(await f.get(e,{params:t})).data}async function V(e){const t=p+D+e+U,a={};return(await f.get(t,{params:a})).data}async function J(){const e=p+W;return(await f.get(e)).data}const o="/goit-js-project-ArtistsHub/assets/icons-B_KhKWnp.svg";function A(e){return e.map(t=>`<li class="artist-genres-item">${t}</li>`).join("")}function X(e){const{_id:t,strArtist:a,strArtistThumb:i,strBiographyEN:r,genres:n}=e,c=A(n);return`<li class="artists-item">
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
      </li>`}function y(e){const t=e.map(X).join("");s.artistsListContainer.insertAdjacentHTML("beforeend",t)}function L(){s.loader.classList.remove("is-hidden")}function M(){s.loader.classList.add("is-hidden")}function Z(){s.modalLoader.classList.remove("is-hidden")}function ee(){s.modalLoader.classList.add("is-hidden")}function k(e,t){e<t?s.loadMoreBtn.classList.remove("is-hidden"):s.loadMoreBtn.classList.add("is-hidden")}function te(e){const{name:t,descr:a,rating:i}=e;return`<div class="swiper-slide">
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
</div>`}function se(e){const t=e.map(te).join("");s.feedbacksContainer.innerHTML=t}function ae(e){const t=Math.floor(e/1e3),a=Math.floor(t/60),i=t%60,r=i<10?`0${i}`:i;return`${a}:${r}`}function re(e){const{strArtist:t,strArtistThumb:a,intFormedYear:i,intDiedYear:r,strGender:n,intMembers:c,strCountry:v,strBiographyEN:$,genres:C,albumsList:N}=e,P=A(C),I=N.map(O=>{const{strAlbum:x,tracks:R}=O,j=R.map(F=>{const{intDuration:_,movie:E,strTrack:K}=F;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${K}</td>
                  <td class="artist-modal-album-time col-2">${ae(_)}</td>
                  <td class="artist-modal-album-link col-3">
                  ${E?`<a
                      class="clip-link"
                      href="${E}"
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
              <caption class="artist-modal-album-name">${x}</caption>
              <thead>
                <tr class="artist-modal-album-row">
                  <th class="artist-modal-album-th col-1">Track</th>
                  <th class="artist-modal-album-th col-2">Time</th>
                  <th class="artist-modal-album-th col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${j}
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
          <dd class="artist-modal-info-value">${v}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${$}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${P}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${I}</ul>`}function ie(e){const t=re(e);s.artistDetailsContainer.innerHTML=t}function ne({genre:e}){return`<li class="genre-item" data-genre="${e.toLowerCase()}" tabindex="0" role="option"
                aria-selected="false">${e}</li>`}function oe(e){const t=e.toSorted((a,i)=>a.genre.localeCompare(i.genre)).map(ne).join("");s.genreList.innerHTML=t}const m=8;let d=1;const l={sortName:void 0,genre:void 0,searchQuery:void 0};s.filtersMenu.addEventListener("submit",e=>{e.preventDefault(),l.searchQuery=e.target.elements.search.value,S()});async function le(){L();try{const[e,t]=await Promise.all([b({perPage:m,page:d,...l}),J()]),{artists:a,totalArtists:i}=e,r=Math.ceil(i/m);a.length===0?s.emptyState.classList.add("is-visible"):(s.emptyState.classList.remove("is-visible"),y(a)),k(d,r),oe(t),g()}catch(e){console.error("Error loading initial data:",e)}finally{M()}}async function ce(){d++,L();try{const{artists:e,totalArtists:t}=await b({perPage:m,page:d,...l}),a=Math.ceil(t/m);y(e),k(d,a),me()}catch(e){console.error("Error loading more artists:",e)}finally{M()}}async function S(){d=1,s.artistsListContainer.innerHTML="",L();try{const{artists:e,totalArtists:t}=await b({perPage:m,page:d,...l}),a=Math.ceil(t/m);e.length===0?s.emptyState.classList.add("is-visible"):(s.emptyState.classList.remove("is-visible"),y(e)),k(d,a),g()}catch(e){console.error("Error reloading artists:",e)}finally{M()}}function g(){s.inputSearch.value=l.searchQuery||"",s.filtersMenu.querySelectorAll(".sorting-item, .genre-item").forEach(t=>{let a=!1;t.classList.contains("sorting-item")?a=t.dataset.sort===l.sortName:t.classList.contains("genre-item")&&(a=t.dataset.genre===l.genre),t.classList.toggle("is-active",a),t.setAttribute("aria-selected",a.toString())}),ue()}function de(){l.searchQuery=void 0,l.sortName=void 0,l.genre=void 0,s.filtersMenu.reset(),g(),S()}le();s.loadMoreBtn.addEventListener("click",ce);s.filtersResetBtn&&s.filtersResetBtn.addEventListener("click",de);function ue(){const e=!!(l.searchQuery||l.sortName||l.genre);s.filtersResetBtn&&(s.filtersResetBtn.disabled=!e)}function me(){const e=s.artistsListContainer.firstElementChild;if(!e)return;const t=e.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t})}const u=e=>{!s.filtersPanel.contains(e.target)&&!s.filtersMenu.contains(e.target)&&(s.filtersMenu.querySelectorAll(".is-open").forEach(a=>{a.classList.remove("is-open")}),s.filtersPanel.classList.remove("is-open"),document.removeEventListener("click",u))};s.filtersPanel.addEventListener("click",e=>{if(!e.target.closest(".filters-toggle"))return;const t=s.filtersPanel.classList.toggle("is-open");s.filtersToggle.setAttribute("aria-expanded",t),t?document.addEventListener("click",u):document.removeEventListener("click",u)});s.filtersMenu.addEventListener("click",fe);function fe(e){const t=e.target.closest(".sorting-item, .genre-item");if(t){pe(t);return}ge(e.target)}function pe(e){var a;e.parentElement.querySelector(".is-active"),e.classList.contains("sorting-item")?l.sortName=e.dataset.sort:e.classList.contains("genre-item")&&(l.genre=e.dataset.genre),g(),S();const t=e.closest(".js-dropdown");t&&(t.classList.remove("is-open"),(a=t.querySelector("button"))==null||a.setAttribute("aria-expanded","false"),window.getComputedStyle(s.filtersToggle).display==="none"&&document.removeEventListener("click",u))}function ge(e){var c;const t=e.closest("button");if(!t)return;const a=t.closest(".js-dropdown");if(!a)return;const i=window.getComputedStyle(s.filtersToggle).display==="none",r=s.filtersMenu.querySelector(".is-open");r&&r!==a&&(r.classList.remove("is-open"),(c=r.querySelector("button"))==null||c.setAttribute("aria-expanded","false"),i&&document.removeEventListener("click",u));const n=a.classList.toggle("is-open");t.setAttribute("aria-expanded",n),i&&(n?document.addEventListener("click",u):document.removeEventListener("click",u))}function q(e){const t=e.target.closest(".modal-close-btn"),a=e.target===s.artistDetailsModal;!t&&!a||T()}function B(e){e.key==="Escape"&&T()}function T(){s.artistDetailsModal.classList.remove("is-open"),s.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),s.artistDetailsModal.removeEventListener("click",q),document.removeEventListener("keydown",B)}s.artistsListContainer.addEventListener("click",async e=>{const t=e.target.closest(".artist-btn");if(!t)return;const a=t.dataset.artistId;s.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),Z();const i=await V(a);ie(i),ee(),s.artistModal.classList.remove("is-hidden"),s.artistDetailsModal.scrollTop=0,s.artistDetailsModal.addEventListener("click",q),document.addEventListener("keydown",B)});async function ve(){const{data:e}=await z();se(e)}ve();new H(".swiper",{modules:[Q,G],on:{init:w,slideChange:w},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function w(e){const t=e.slides.length,a=e.activeIndex,{paginationDotFirst:i,paginationDotMiddle:r,paginationDotLast:n}=s;i.classList.remove("active"),r.classList.remove("active"),n.classList.remove("active"),a===0?h(i):a===t-1?h(n):h(r)}function h(e){e.classList.remove("active"),e.offsetWidth,e.classList.add("active")}
//# sourceMappingURL=index.js.map
