import{a as m,S as G,N as K,K as Y}from"./assets/vendor-BiXr4j9g.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();const a={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-modal-content"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last"),modalLoader:document.querySelector(".modal-loader-wrapper .loader"),artistModal:document.querySelector(".artist-modal"),genreList:document.querySelector(".genre-list"),mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link"),filtersToggle:document.querySelector(".filters-toggle"),filtersMenu:document.querySelector(".filters-menu"),filtersPanel:document.querySelector(".filters-panel")};a.mobileMenuOpenBtn.addEventListener("click",()=>{a.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});a.mobileMenuCloseBtn.addEventListener("click",()=>{a.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});a.mobileMenuLinks.forEach(t=>{t.addEventListener("click",()=>{a.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const f="https://sound-wave.b.goit.study/api",A="/artists/",U="/albums/",V="/feedbacks/",W="/genres/";async function v(t,e,s,r,i){const o=f+A,l={limit:t,page:e,name:s,sortName:r,genre:i};return(await m.get(o,{params:l})).data}async function z(){const t=f+V,e={limit:10};return(await m.get(t,{params:e})).data}async function J(t){const e=f+A+t+U,s={};return(await m.get(e,{params:s})).data}async function Q(){const t=f+W;return(await m.get(t)).data}const n="/goit-js-project-ArtistsHub/assets/icons-CHuY687n.svg";function w(t){return t.map(e=>`<li class="artist-genres-item">${e}</li>`).join("")}function X(t){const{_id:e,strArtist:s,strArtistThumb:r,strBiographyEN:i,genres:o}=t,l=w(o);return`<li class="artists-item">
        <img
          src="${r}"
          alt="Artist ${s}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${l}
        </ul>
        <h3 class="artist-name">${s}</h3>
        <p class="artist-text">
          ${i.split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${e}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${n}#caret-right"></use>
          </svg>
        </button>
      </li>`}function h(t){const e=t.map(X).join("");a.artistsListContainer.insertAdjacentHTML("beforeend",e)}function b(){a.loader.classList.remove("is-hidden")}function L(){a.loader.classList.add("is-hidden")}function Z(){a.modalLoader.classList.remove("is-hidden")}function tt(){a.modalLoader.classList.add("is-hidden")}function y(t,e){t<e?a.loadMoreBtn.classList.remove("is-hidden"):a.loadMoreBtn.classList.add("is-hidden")}function et(t){const{name:e,descr:s,rating:r}=t;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(r)} color-default">
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
</div>`}function st(t){const e=t.map(et).join("");a.feedbacksContainer.innerHTML=e}function at(t){const e=Math.floor(t/1e3),s=Math.floor(e/60),r=e%60,i=r<10?`0${r}`:r;return`${s}:${i}`}function rt(t){const{strArtist:e,strArtistThumb:s,intFormedYear:r,intDiedYear:i,strGender:o,intMembers:l,strCountry:k,strBiographyEN:C,genres:B,albumsList:P}=t,N=w(B),x=P.map(O=>{const{strAlbum:j,tracks:I}=O,F=I.map(_=>{const{intDuration:H,movie:$,strTrack:R}=_;return`<tr class="artist-modal-album-row">
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
          <dd class="artist-modal-info-value">${r||"information missing"}–${i||"present"}</dd>
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
        <dd class="artist-modal-bio-value">${C}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${N}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${x}</ul>`}function it(t){const e=rt(t);a.artistDetailsContainer.innerHTML=e}function ot({genre:t}){return`<li class="genre-item" tabindex="0" role="option"
                aria-selected="false">${t}</li>`}function nt(t){const e=t.toSorted((s,r)=>s.genre.localeCompare(r.genre)).map(ot).join("");a.genreList.innerHTML=e}const d=8;let c=1,p,M;async function lt(){b();try{const[t,e]=await Promise.all([v(d,c,void 0,p,M),Q()]),{artists:s,totalArtists:r}=t,i=Math.ceil(r/d);h(s),y(c,i),nt(e)}catch(t){console.log(t)}finally{L()}}async function ct(){c++,b();try{const{artists:t,totalArtists:e}=await v(d,c,void 0,p),s=Math.ceil(e/d);h(t),y(c,s),dt()}catch(t){console.log(t)}L()}async function S(){c=1,a.artistsListContainer.innerHTML="",b();try{const{artists:t,totalArtists:e}=await v(d,c,void 0,p,M),s=Math.ceil(e/d);h(t),y(c,s)}catch(t){console.log(t)}finally{L()}}lt();a.loadMoreBtn.addEventListener("click",ct);function dt(){const e=a.artistsListContainer.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e})}const u=t=>{!a.filtersPanel.contains(t.target)&&!a.filtersMenu.contains(t.target)&&(a.filtersMenu.querySelectorAll(".is-open").forEach(s=>{s.classList.remove("is-open")}),a.filtersPanel.classList.remove("is-open"),document.removeEventListener("click",u))};a.filtersPanel.addEventListener("click",t=>{if(!t.target.closest(".filters-toggle"))return;const e=a.filtersPanel.classList.toggle("is-open");a.filtersToggle.setAttribute("aria-expanded",e),e?document.addEventListener("click",u):document.removeEventListener("click",u)});a.filtersMenu.addEventListener("click",ut);function ut(t){const e=t.target.closest(".sorting-item, .genre-item");if(e){mt(e);return}ft(t.target)}function mt(t){var r;const e=t.parentElement.querySelector(".is-active");e&&(e.classList.remove("is-active"),e.setAttribute("aria-selected","false")),t.classList.add("is-active"),t.setAttribute("aria-selected","true"),t.classList.contains("sorting-item")&&(p=t.dataset.sort,S()),t.classList.contains("genre-item")&&(M=t.textContent.toLowerCase().trim(),S());const s=t.closest(".js-dropdown");s&&(s.classList.remove("is-open"),(r=s.querySelector("button"))==null||r.setAttribute("aria-expanded","false"),document.removeEventListener("click",u))}function ft(t){var o;const e=t.closest("button");if(!e)return;const s=e.closest(".js-dropdown");if(!s)return;const r=a.filtersMenu.querySelector(".is-open");r&&r!==s&&(r.classList.remove("is-open"),(o=r.querySelector("button"))==null||o.setAttribute("aria-expanded","false"));const i=s.classList.toggle("is-open");e.setAttribute("aria-expanded",i),i?document.addEventListener("click",u):document.removeEventListener("click",u)}function D(t){const e=t.target.closest(".modal-close-btn"),s=t.target===a.artistDetailsModal;!e&&!s||q()}function T(t){t.key==="Escape"&&q()}function q(){a.artistDetailsModal.classList.remove("is-open"),a.artistModal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),a.artistDetailsModal.removeEventListener("click",D),document.removeEventListener("keydown",T)}a.artistsListContainer.addEventListener("click",async t=>{const e=t.target.closest(".artist-btn");if(!e)return;const s=e.dataset.artistId;a.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),Z();const r=await J(s);it(r),tt(),a.artistModal.classList.remove("is-hidden"),a.artistDetailsModal.scrollTop=0,a.artistDetailsModal.addEventListener("click",D),document.addEventListener("keydown",T)});async function pt(){const{data:t}=await z();st(t)}pt();new G(".swiper",{modules:[K,Y],on:{init:E,slideChange:E},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function E(t){const e=t.slides.length,s=t.activeIndex,{paginationDotFirst:r,paginationDotMiddle:i,paginationDotLast:o}=a;r.classList.remove("active"),i.classList.remove("active"),o.classList.remove("active"),s===0?g(r):s===e-1?g(o):g(i)}function g(t){t.classList.remove("active"),t.offsetWidth,t.classList.add("active")}
//# sourceMappingURL=index.js.map
