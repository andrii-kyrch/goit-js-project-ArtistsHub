import{i as e,n as t,r as n,t as r}from"./assets/vendor-Ci8frC6t.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i={artistsListContainer:document.querySelector(`.artists-list`),loadMoreBtn:document.querySelector(`.load-more-btn`),loader:document.querySelector(`.loader`),artistDetailsModal:document.querySelector(`.js-artist-details-backdrop`),artistDetailsContainer:document.querySelector(`.artist-modal-content`),feedbacksContainer:document.querySelector(`.swiper-wrapper`),paginationDotFirst:document.querySelector(`.dot-first`),paginationDotMiddle:document.querySelector(`.dot-middle`),paginationDotLast:document.querySelector(`.dot-last`),modalLoader:document.querySelector(`.modal-loader-wrapper .loader`),artistModal:document.querySelector(`.artist-modal`),genreList:document.querySelector(`.genre-list`),mobileMenuOpenBtn:document.querySelector(`.mobile-menu-open-btn`),mobileMenuCloseBtn:document.querySelector(`.mobile-menu-close-btn`),mobileMenu:document.querySelector(`.mobile-menu`),mobileMenuLinks:document.querySelectorAll(`.mobile-menu-link`),filtersToggle:document.querySelector(`.filters-toggle`),filtersMenu:document.querySelector(`.filters-menu`),filtersPanel:document.querySelector(`.filters-panel`),emptyState:document.querySelector(`.empty-state`),resetEmptyStateBtn:document.querySelector(`.reset-empty-state-btn`),inputSearch:document.querySelector(`.filters-search`),filtersResetBtn:document.querySelector(`.filters-reset-btn`)};i.mobileMenuOpenBtn.addEventListener(`click`,()=>{i.mobileMenu.classList.add(`is-open`),document.body.classList.add(`modal-open`)}),i.mobileMenuCloseBtn.addEventListener(`click`,()=>{i.mobileMenu.classList.remove(`is-open`),document.body.classList.remove(`modal-open`)}),i.mobileMenuLinks.forEach(e=>{e.addEventListener(`click`,()=>{i.mobileMenu.classList.remove(`is-open`),document.body.classList.remove(`modal-open`)})});var a=`https://sound-wave.b.goit.study/api`,o=`/artists/`,s=`/albums/`,c=`/feedbacks/`,l=`/genres/`;async function u(t){let{perPage:n,page:r,searchQuery:i,sortName:s,genre:c}=t,l=a+o,u={limit:n,page:r,name:i,sortName:s,genre:c};return(await e.get(l,{params:u})).data}async function d(){let t=a+c;return(await e.get(t,{params:{limit:10}})).data}async function f(t){let n=a+o+t+s;return(await e.get(n,{params:{}})).data}async function p(){let t=a+l;return(await e.get(t)).data}var m=`/goit-js-project-ArtistsHub/assets/icons-B_KhKWnp.svg`;function h(e){return e.map(e=>`<li class="artist-genres-item">${e}</li>`).join(``)}function g(e){let{_id:t,strArtist:n,strArtistThumb:r,strBiographyEN:i,genres:a}=e;return`<li class="artists-item">
        <img
          src="${r}"
          alt="Artist ${n}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${h(a)}
        </ul>
        <h3 class="artist-name">${n}</h3>
        <p class="artist-text">
          ${(i||``).split(` `).slice(0,10).join(` `)} ...
        </p>
        <button class="artist-btn" data-artist-id="${t}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${m}#caret-right"></use>
          </svg>
        </button>
      </li>`}function _(e){let t=e.map(g).join(``);i.artistsListContainer.insertAdjacentHTML(`beforeend`,t)}function v(){i.loader.classList.remove(`is-hidden`)}function y(){i.loader.classList.add(`is-hidden`)}function b(){i.modalLoader.classList.remove(`is-hidden`)}function x(){i.modalLoader.classList.add(`is-hidden`)}function S(e,t){e<t?i.loadMoreBtn.classList.remove(`is-hidden`):i.loadMoreBtn.classList.add(`is-hidden`)}function C(e){let{name:t,descr:n,rating:r}=e;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(r)} color-default">
      <div class="star-container">
        <div class="star">
          <svg class="star-empty">
            <use href="${m}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${m}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${m}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${m}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${m}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${m}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${m}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${m}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${m}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${m}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${m}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${m}#star-filled"></use>
          </svg>
        </div>
        <div class="star">
          <svg class="star-empty">
            <use href="${m}#star-empty"></use>
          </svg>
          <svg class="star-half">
            <use href="${m}#star-half"></use>
          </svg>
          <svg class="star-filled">
            <use href="${m}#star-filled"></use>
          </svg>
        </div>
      </div>
    </div>
    <p class="feedback-message">"${n}"</p>
    <p class="feedback-author-name">${t}</p>
  </div>
</div>`}function w(e){let t=e.map(C).join(``);i.feedbacksContainer.innerHTML=t}function T(e){let t=Math.floor(e/1e3),n=Math.floor(t/60),r=t%60;return`${n}:${r<10?`0${r}`:r}`}function E(e){let{strArtist:t,strArtistThumb:n,intFormedYear:r,intDiedYear:i,strGender:a,intMembers:o,strCountry:s,strBiographyEN:c,genres:l,albumsList:u}=e,d=h(l),f=u.map(e=>{let{strAlbum:t,tracks:n}=e;return`<li class="artist-modal-album-card">
            <table class="artist-modal-album-table">
              <caption class="artist-modal-album-name">${t}</caption>
              <thead>
                <tr class="artist-modal-album-row">
                  <th class="artist-modal-album-th col-1">Track</th>
                  <th class="artist-modal-album-th col-2">Time</th>
                  <th class="artist-modal-album-th col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${n.map(e=>{let{intDuration:t,movie:n,strTrack:r}=e;return`<tr class="artist-modal-album-row">
                  <td class="artist-modal-album-track col-1">${r}</td>
                  <td class="artist-modal-album-time col-2">${T(t)}</td>
                  <td class="artist-modal-album-link col-3">
                  ${n?`<a
                      class="clip-link"
                      href="${n}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24">
                        <use href="${m}#youtube"></use>
                      </svg>
                    </a>`:``} 
                  </td>
                </tr>`}).join(``)}
              </tbody>
            </table>
          </li>`}).join(``);return`<h2 class="artist-modal-name">${t}</h2>

  <div class="artist-modal-info-wrapper">
    <img
      class="artist-modal-photo"
      src="${n}"
      alt="Photo ${t}"
    />
    <div class="artist-modal-info-block">
      <div class="artist-modal-info-list">
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Years active</dt>
          <dd class="artist-modal-info-value">${r||`information missing`}–${i||`present`}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Sex</dt>
          <dd class="artist-modal-info-value">${a}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Members</dt>
          <dd class="artist-modal-info-value">${o}</dd>
        </dl>
        <dl class="artist-modal-info-item">
          <dt class="artist-modal-info-label">Country</dt>
          <dd class="artist-modal-info-value">${s}</dd>
        </dl>
      </div>
      <dl class="artist-modal-bio">
        <dt class="artist-modal-bio-label">Biography</dt>
        <dd class="artist-modal-bio-value">${c}</dd>
      </dl>
      <ul class="artist-modal-genres-list artist-genres-list">${d}</ul>
    </div>
  </div>
  <h3 class="artist-modal-albums-title">Albums</h3>
  <ul class="artist-modal-album-cards">${f}</ul>`}function D(e){let t=E(e);i.artistDetailsContainer.innerHTML=t}function O({genre:e}){return`<li class="genre-item" data-genre="${e.toLowerCase()}" tabindex="0" role="option"
                aria-selected="false">${e}</li>`}function k(e){let t=[],n=new Set;for(let r of e){let e=r.genre.trim().toLowerCase();n.has(e)||(n.add(e),t.push(r))}let r=t.toSorted((e,t)=>e.genre.localeCompare(t.genre)).map(O).join(``);i.genreList.innerHTML=r}var A=8,j=1,M=()=>window.matchMedia(`(min-width: 1440px)`).matches,N={sortName:void 0,genre:void 0,searchQuery:void 0};async function P(){try{k(await p()),await L()}catch(e){console.error(`Error loading initial data:`,e)}}async function F(){j++,await L()}async function I(){j=1;let e=i.artistsListContainer.offsetHeight;i.artistsListContainer.style.minHeight=`${e}px`,i.artistsListContainer.scrollIntoView({behavior:`smooth`,block:`start`}),await L(),setTimeout(()=>{i.artistsListContainer.style.minHeight=``},500)}async function L(){let e=j===1,t=i.artistsListContainer.children.length;v();try{let{artists:n,totalArtists:r}=await u({perPage:A,page:j,...N}),a=Math.ceil(r/A);e&&(i.artistsListContainer.innerHTML=``,i.emptyState.classList.toggle(`is-visible`,n.length===0)),n.length>0&&_(n),S(j,a),R(),e||V(t)}catch(e){console.error(`Error fetching artists:`,e)}finally{y()}}function R(){i.inputSearch.value=N.searchQuery||``,i.filtersMenu.querySelectorAll(`.sorting-item, .genre-item`).forEach(e=>{let t=!1;e.classList.contains(`sorting-item`)?t=e.dataset.sort===N.sortName:e.classList.contains(`genre-item`)&&(t=e.dataset.genre===N.genre),e.classList.toggle(`is-active`,t),e.setAttribute(`aria-selected`,t.toString())}),B()}function z(){N.searchQuery=void 0,N.sortName=void 0,N.genre=void 0,i.filtersMenu.reset(),R(),I()}P(),i.filtersMenu.addEventListener(`submit`,e=>{e.preventDefault(),N.searchQuery=e.target.elements.search.value.trim()||void 0,I()}),i.loadMoreBtn.addEventListener(`click`,F),i.filtersResetBtn.addEventListener(`click`,z);function B(){let e=!!(N.searchQuery||N.sortName||N.genre);i.filtersResetBtn&&(i.filtersResetBtn.disabled=!e)}i.resetEmptyStateBtn.addEventListener(`click`,z);function V(e){let t=i.artistsListContainer.children[e];if(!t)return;let n=i.filtersPanel.offsetHeight;t.style.scrollMarginTop=`${n-50}px`,t.scrollIntoView({behavior:`smooth`,block:`start`})}var H=e=>{!i.filtersPanel.contains(e.target)&&!i.filtersMenu.contains(e.target)&&(i.filtersMenu.querySelectorAll(`.is-open`).forEach(e=>{e.classList.remove(`is-open`)}),i.filtersPanel.classList.remove(`is-open`),document.removeEventListener(`click`,H))};i.filtersPanel.addEventListener(`click`,e=>{if(!e.target.closest(`.filters-toggle`))return;let t=i.filtersPanel.classList.toggle(`is-open`);i.filtersToggle.setAttribute(`aria-expanded`,t),t?document.addEventListener(`click`,H):document.removeEventListener(`click`,H)}),i.filtersMenu.addEventListener(`click`,U);function U(e){let t=e.target.closest(`.sorting-item, .genre-item`);t?W(t):G(e.target)}function W(e){e.parentElement.querySelector(`.is-active`),e.classList.contains(`sorting-item`)?N.sortName=e.dataset.sort:e.classList.contains(`genre-item`)&&(N.genre=e.dataset.genre),I();let t=e.closest(`.js-dropdown`);t&&(t.classList.remove(`is-open`),t.querySelector(`button`)?.setAttribute(`aria-expanded`,`false`),M()&&document.removeEventListener(`click`,H))}function G(e){let t=e.closest(`button`);if(!t)return;let n=t.closest(`.js-dropdown`);if(!n)return;let r=i.filtersMenu.querySelector(`.is-open`);r&&r!==n&&(r.classList.remove(`is-open`),r.querySelector(`button`)?.setAttribute(`aria-expanded`,`false`),M()&&document.removeEventListener(`click`,H));let a=n.classList.toggle(`is-open`);t.setAttribute(`aria-expanded`,a),M()&&(a?document.addEventListener(`click`,H):document.removeEventListener(`click`,H))}function K(e){if((e.key===`Enter`||e.key===` `)&&e.target.closest(`.sorting-item, .genre-item`)){e.preventDefault(),W(e.target.closest(`.sorting-item, .genre-item`));return}if(e.target.tagName===`INPUT`||e.target.tagName===`TEXTAREA`)return;let t=i.genreList?.closest(`.js-dropdown`);if(!t||!t.classList.contains(`is-open`))return;let n=Array.from(i.genreList.querySelectorAll(`.genre-item`));if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=n.indexOf(document.activeElement),r;e.key===`ArrowDown`?(r=t+1,r>=n.length&&(r=0)):(r=t-1,r<0&&(r=n.length-1));let i=n[r];i&&(i.scrollIntoView({behavior:`smooth`,block:`nearest`}),i.focus());return}if(e.key.length!==1||e.ctrlKey||e.metaKey||e.altKey)return;let r=e.key.toLowerCase(),a=n.find(e=>e.textContent.trim().toLowerCase().startsWith(r));a&&(e.preventDefault(),a.scrollIntoView({behavior:`smooth`,block:`nearest`}),a.focus())}document.addEventListener(`keydown`,K);function q(e){let t=e.target.closest(`.modal-close-btn`),n=e.target===i.artistDetailsModal;(t||n)&&Y()}function J(e){e.key===`Escape`&&Y()}function Y(){i.artistDetailsModal.classList.remove(`is-open`),i.artistModal.classList.add(`is-hidden`),document.body.classList.remove(`modal-open`),i.artistDetailsModal.removeEventListener(`click`,q),document.removeEventListener(`keydown`,J)}i.artistsListContainer.addEventListener(`click`,async e=>{let t=e.target.closest(`.artist-btn`);if(!t)return;let n=t.dataset.artistId;i.artistDetailsModal.classList.add(`is-open`),document.body.classList.add(`modal-open`),b();try{D(await f(n)),i.artistModal.classList.remove(`is-hidden`),i.artistDetailsModal.scrollTop=0,i.artistDetailsModal.addEventListener(`click`,q),document.addEventListener(`keydown`,J)}catch(e){console.error(`Error loading artist details:`,e)}finally{x()}});async function X(){try{let{data:e}=await d();w(e),new n(`.swiper`,{modules:[r,t],on:{init:Z,slideChange:Z},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:`.feedback-next-btn`,prevEl:`.feedback-prev-btn`}}}})}catch(e){console.error(`Error loading feedbacks:`,e)}}X();function Z(e){let t=e.slides.length,n=e.activeIndex,{paginationDotFirst:r,paginationDotMiddle:a,paginationDotLast:o}=i;r.classList.remove(`active`),a.classList.remove(`active`),o.classList.remove(`active`),n===0?Q(r):n===t-1?Q(o):Q(a)}function Q(e){e.classList.remove(`active`),e.offsetWidth,e.classList.add(`active`)}
//# sourceMappingURL=index.js.map