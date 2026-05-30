import{a as g,S as K,N as _,K as G}from"./assets/vendor-BiXr4j9g.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const s={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal"),genreList:document.querySelector(".genre-list"),mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link"),filtersToggle:document.querySelector(".filters-toggle"),filtersMenu:document.querySelector(".filters-menu"),filtersPanel:document.querySelector(".filters-panel"),emptyState:document.querySelector(".empty-state"),resetEmptyStateBtn:document.querySelector(".reset-empty-state-btn"),inputSearch:document.querySelector(".filters-search"),filtersResetBtn:document.querySelector(".filters-reset-btn")};s.mobileMenuOpenBtn.addEventListener("click",()=>{s.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});s.mobileMenuCloseBtn.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});s.mobileMenuLinks.forEach(e=>{e.addEventListener("click",()=>{s.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const p="https://sound-wave.b.goit.study/api",w="/artists/",Q="/albums/",U="/feedbacks/",V="/genres/";async function W(e){const{perPage:t,page:r,searchQuery:n,sortName:a,genre:i}=e,l=p+w,d={limit:t,page:r,name:n,sortName:a,genre:i};return(await g.get(l,{params:d})).data}async function Y(){const e=p+U,t={limit:10};return(await g.get(e,{params:t})).data}async function z(e){const t=p+w+e+Q,r={};return(await g.get(t,{params:r})).data}async function X(){const e=p+V;return(await g.get(e)).data}const o="/goit-js-project-ArtistsHub/assets/icons-B_KhKWnp.svg";function S(e){return e.map(t=>`<li class="artist-genres-item">${t}</li>`).join("")}function J(e){const{_id:t,strArtist:r,strArtistThumb:n,strBiographyEN:a,genres:i}=e,l=S(i);return`<li class="artists-item">
        <img
          src="${n}"
          alt="Artist ${r}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${l}
        </ul>
        <h3 class="artist-name">${r}</h3>
        <p class="artist-text">
          ${(a||"").split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${t}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${o}#caret-right"></use>
          </svg>
        </button>
      </li>`}function Z(e){const t=e.map(J).join("");s.artistsListContainer.insertAdjacentHTML("beforeend",t)}function ee(){s.loader.classList.remove("is-hidden")}function te(){s.loader.classList.add("is-hidden")}function se(){s.modalLoader.classList.remove("is-hidden")}function re(){s.modalLoader.classList.add("is-hidden")}function ae(e,t){e<t?s.loadMoreBtn.classList.remove("is-hidden"):s.loadMoreBtn.classList.add("is-hidden")}function ne(e){const{name:t,descr:r,rating:n}=e;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(n)} color-default">
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
    <p class="feedback-message">"${r}"</p>
    <p class="feedback-author-name">${t}</p>
  </div>
</div>`}function ie(e){const t=e.map(ne).join("");s.feedbacksContainer.innerHTML=t}function oe(e){const t=Math.floor(e/1e3),r=Math.floor(t/60),n=t%60,a=n<10?`0${n}`:n;return`${r}:${a}`}function le(e){const{strArtist:t,strArtistThumb:r,intFormedYear:n,intDiedYear:a,strGender:i,intMembers:l,strCountry:d,strBiographyEN:m,genres:C,albumsList:B}=e,I=S(C),N=B.map(x=>{const{strAlbum:P,tracks:O}=x,F=O.map(j=>{const{intDuration:R,movie:L,strTrack:H}=j;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${H}</td>
                  <td class="artist-modal-album-time col-2">${oe(R)}</td>
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
              <caption class="artist-modal-album-name">${P}</caption>
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
          </li>`}).join("");return`<h2 class="artist-modal-name">${t}</h2>

  <div class="artist-modal-info-wrapper">
    <img
      class="artist-modal-photo"
      src="${r}"
      alt="Photo ${t}"
    />
    <div class="artist-modal-info-block">
      <div class="artist-modal-info-list">
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Years active</dt>
          <dd class="artist-modal-info-value">${n||"information missing"}–${a||"present"}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Sex</dt>
          <dd class="artist-modal-info-value">${i}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Members</dt>
          <dd class="artist-modal-info-value">${l}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Country</dt>
          <dd class="artist-modal-info-value">${d}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${m}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${I}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${N}</ul>`}function ce(e){const t=le(e);s.artistDetailsContainer.innerHTML=t}function de({genre:e}){return`<li class="genre-item" data-genre="${e.toLowerCase()}" tabindex="0" role="option"
                aria-selected="false">${e}</li>`}function ue(e){const t=[],r=new Set;for(const a of e){const i=a.genre.trim().toLowerCase();r.has(i)||(r.add(i),t.push(a))}const n=t.toSorted((a,i)=>a.genre.localeCompare(i.genre)).map(de).join("");s.genreList.innerHTML=n}const k=8;let f=1;const h=()=>window.matchMedia("(min-width: 1440px)").matches,c={sortName:void 0,genre:void 0,searchQuery:void 0};async function me(){try{const e=await X();ue(e),await b()}catch(e){console.error("Error loading initial data:",e)}}async function fe(){f++,await b()}async function y(){f=1;const e=s.artistsListContainer.offsetHeight;s.artistsListContainer.style.minHeight=`${e}px`,s.artistsListContainer.scrollIntoView({behavior:"smooth",block:"start"}),await b(),setTimeout(()=>{s.artistsListContainer.style.minHeight=""},500)}async function b(){const e=f===1,t=s.artistsListContainer.children.length;ee();try{const{artists:r,totalArtists:n}=await W({perPage:k,page:f,...c}),a=Math.ceil(n/k);e&&(s.artistsListContainer.innerHTML="",s.emptyState.classList.toggle("is-visible",r.length===0)),r.length>0&&Z(r),ae(f,a),E(),e||pe(t)}catch(r){console.error("Error fetching artists:",r)}finally{te()}}function E(){s.inputSearch.value=c.searchQuery||"",s.filtersMenu.querySelectorAll(".sorting-item, .genre-item").forEach(t=>{let r=!1;t.classList.contains("sorting-item")?r=t.dataset.sort===c.sortName:t.classList.contains("genre-item")&&(r=t.dataset.genre===c.genre),t.classList.toggle("is-active",r),t.setAttribute("aria-selected",r.toString())}),ge()}function $(){c.searchQuery=void 0,c.sortName=void 0,c.genre=void 0,s.filtersMenu.reset(),E(),y()}me();s.filtersMenu.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value.trim();c.searchQuery=t||void 0,y()});s.loadMoreBtn.addEventListener("click",fe);s.filtersResetBtn.addEventListener("click",$);function ge(){const e=!!(c.searchQuery||c.sortName||c.genre);s.filtersResetBtn&&(s.filtersResetBtn.disabled=!e)}s.resetEmptyStateBtn.addEventListener("click",$);function pe(e){const t=s.artistsListContainer.children[e];if(!t)return;const r=s.filtersPanel.offsetHeight;t.style.scrollMarginTop=`${r-50}px`,t.scrollIntoView({behavior:"smooth",block:"start"})}const u=e=>{!s.filtersPanel.contains(e.target)&&!s.filtersMenu.contains(e.target)&&(s.filtersMenu.querySelectorAll(".is-open").forEach(r=>{r.classList.remove("is-open")}),s.filtersPanel.classList.remove("is-open"),document.removeEventListener("click",u))};s.filtersPanel.addEventListener("click",e=>{if(!e.target.closest(".filters-toggle"))return;const t=s.filtersPanel.classList.toggle("is-open");s.filtersToggle.setAttribute("aria-expanded",t),t?document.addEventListener("click",u):document.removeEventListener("click",u)});s.filtersMenu.addEventListener("click",ve);function ve(e){const t=e.target.closest(".sorting-item, .genre-item");if(t){A(t);return}he(e.target)}function A(e){var r;e.parentElement.querySelector(".is-active"),e.classList.contains("sorting-item")?c.sortName=e.dataset.sort:e.classList.contains("genre-item")&&(c.genre=e.dataset.genre),y();const t=e.closest(".js-dropdown");t&&(t.classList.remove("is-open"),(r=t.querySelector("button"))==null||r.setAttribute("aria-expanded","false"),h()&&document.removeEventListener("click",u))}function he(e){var i;const t=e.closest("button");if(!t)return;const r=t.closest(".js-dropdown");if(!r)return;const n=s.filtersMenu.querySelector(".is-open");n&&n!==r&&(n.classList.remove("is-open"),(i=n.querySelector("button"))==null||i.setAttribute("aria-expanded","false"),h()&&document.removeEventListener("click",u));const a=r.classList.toggle("is-open");t.setAttribute("aria-expanded",a),h()&&(a?document.addEventListener("click",u):document.removeEventListener("click",u))}function ye(e){var i;if((e.key==="Enter"||e.key===" ")&&e.target.closest(".sorting-item, .genre-item")){e.preventDefault(),A(e.target.closest(".sorting-item, .genre-item"));return}if(e.target.tagName==="INPUT"||e.target.tagName==="TEXTAREA")return;const t=(i=s.genreList)==null?void 0:i.closest(".js-dropdown");if(!t||!t.classList.contains("is-open"))return;const r=Array.from(s.genreList.querySelectorAll(".genre-item"));if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();const l=r.indexOf(document.activeElement);let d;e.key==="ArrowDown"?(d=l+1,d>=r.length&&(d=0)):(d=l-1,d<0&&(d=r.length-1));const m=r[d];m&&(m.scrollIntoView({behavior:"smooth",block:"nearest"}),m.focus());return}if(e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;const n=e.key.toLowerCase(),a=r.find(l=>l.textContent.trim().toLowerCase().startsWith(n));a&&(e.preventDefault(),a.scrollIntoView({behavior:"smooth",block:"nearest"}),a.focus())}document.addEventListener("keydown",ye);function D(e){const t=e.target.closest(".modal-close-btn"),r=e.target===s.artistDetailsModal;!t&&!r||T()}function q(e){e.key==="Escape"&&T()}function T(){s.artistDetailsModal.classList.remove("is-open"),s.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),s.artistDetailsModal.removeEventListener("click",D),document.removeEventListener("keydown",q)}s.artistsListContainer.addEventListener("click",async e=>{const t=e.target.closest(".artist-btn");if(!t)return;const r=t.dataset.artistId;s.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),se();try{const n=await z(r);ce(n),s.artistModal.classList.remove("is-hidden"),s.artistDetailsModal.scrollTop=0,s.artistDetailsModal.addEventListener("click",D),document.addEventListener("keydown",q)}catch(n){console.error("Error loading artist details:",n)}finally{re()}});let be;async function Le(){try{const{data:e}=await Y();ie(e),be=new K(".swiper",{modules:[_,G],on:{init:M,slideChange:M},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}})}catch(e){console.error("Error loading feedbacks:",e)}}Le();function M(e){const t=e.slides.length,r=e.activeIndex,{paginationDotFirst:n,paginationDotMiddle:a,paginationDotLast:i}=s;n.classList.remove("active"),a.classList.remove("active"),i.classList.remove("active"),r===0?v(n):r===t-1?v(i):v(a)}function v(e){e.classList.remove("active"),e.offsetWidth,e.classList.add("active")}
//# sourceMappingURL=index.js.map
