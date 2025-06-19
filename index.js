import{a as m,S as O,N as j,K as _}from"./assets/vendor-CIDwANU8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const c={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};c.mobileMenuOpenBtn.addEventListener("click",()=>{c.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});c.mobileMenuCloseBtn.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});c.mobileMenuLinks.forEach(s=>{s.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const n={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-details-info"),feedbacksContainer:document.querySelector(".swiper-wrapper"),paginationDotFirst:document.querySelector(".dot-first"),paginationDotMiddle:document.querySelector(".dot-middle"),paginationDotLast:document.querySelector(".dot-last")},p="https://sound-wave.b.goit.study/api",h="/artists/",x="/albums/",F="/feedbacks/";async function K(s,t){const a=p+h,i={limit:s,page:t};return(await m.get(a,{params:i})).data}async function H(){const s=p+F,t={limit:10};return(await m.get(s,{params:t})).data}async function R(s){const t=p+h+s+x,a={};return(await m.get(t,{params:a})).data}const l="/goit-js-project-ArtistsHub/assets/icons-B_PfIQ6b.svg";function b(s){return s.map(t=>`<li class="artist-genres-item">${t}</li>`).join("")}function U(s){const{_id:t,strArtist:a,strArtistThumb:i,strBiographyEN:e,genres:r}=s,o=b(r);return`<li class="artists-item">
        <img
          src="${i}"
          alt="Artist ${a}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${o}
        </ul>
        <h3 class="artist-name">${a}</h3>
        <p class="artist-text">
          ${e.split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${t}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${l}#caret-right"></use>
          </svg>
        </button>
      </li>`}function Y(s){const t=s.map(U).join("");n.artistsListContainer.insertAdjacentHTML("beforeend",t)}function G(){n.loader.classList.remove("is-hidden")}function Q(){n.loader.classList.add("is-hidden")}function V(s,t){s<t?n.loadMoreBtn.classList.remove("is-hidden"):n.loadMoreBtn.classList.add("is-hidden")}function W(s){const{name:t,descr:a,rating:i}=s;return`<div class="swiper-slide">
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
    <p class="feedback-author-name">${t}</p>
  </div>
</div>`}function z(s){const t=s.map(W).join("");n.feedbacksContainer.innerHTML=t}function J(s){const t=Math.floor(s/1e3),a=Math.floor(t/60),i=t%60,e=i<10?`0${i}`:i;return`${a}:${e}`}function X(s){const{strArtist:t,strArtistThumb:a,intFormedYear:i,intDiedYear:e,strGender:r,intMembers:o,strCountry:k,strBiographyEN:S,genres:A,albumsList:D}=s,E=b(A),w=D.map(T=>{const{strAlbum:B,tracks:C}=T,q=C.map(I=>{const{intDuration:N,movie:f,strTrack:P}=I;return`<tr class="row">
                  <td class="col-1">${P}</td>
                  <td class="col-2">${J(N)}</td>
                  <td class="col-3">
                  ${f?`<a
                      class="song-link"
                      href="${f}"
                      target="_blank"
                    >
                      <svg width="24" height="24">
                        <use href="${l}#youtube"></use>
                      </svg>
                    </a>`:""} 
                  </td>
                </tr>`}).join("");return`<li class="artist-album-card">
            <table>
              <caption class="albums-name">${B}</caption>
              <thead>
                <tr class="row">
                  <th class="col-1">Track</th>
                  <th class="col-2">Time</th>
                  <th class="col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${q}
              </tbody>
            </table>
          </li>`}).join("");return`<h2 class="artist-details-name">${t}</h2>
        <img
          class="artist-photo-details"
          src="${a}"
          alt=""
        />
        <ul class="artist-details-list">
          <li class="artist-details-item">
            <p class="artist-details-label">Years active</p>
            <p class="artist-details-value">${i||"Unknown"}–${e||"present"}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Sex</p>
            <p class="artist-details-value">${r}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Members</p>
            <p class="artist-details-value">${o}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Country</p>
            <p class="artist-details-value">${k}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Biography</p>
            <p class="artist-details-value">${S}</p>
          </li>
          <li class="artist-details-item">
            <ul class="artist-genres-list">${E}</ul>
          </li>
        </ul>
        <h3 class="section-artist-albums-title">Albums</h3>
        <ul class="artist-album-cards">${w}</ul>`}function Z(s){const t=X(s);n.artistDetailsContainer.innerHTML=t}const v=8;let u=1;async function y(){G();try{const{artists:s,totalArtists:t}=await K(v,u),a=Math.ceil(t/v);Y(s),V(u,a)}catch(s){console.log(s)}Q()}y();n.loadMoreBtn.addEventListener("click",async()=>{u++,await y()});function L(s){const t=s.target.closest(".modal-close-btn"),a=s.target===n.artistDetailsModal;!t&&!a||M()}function $(s){s.key==="Escape"&&M()}function M(){n.artistDetailsModal.classList.remove("is-open"),document.body.classList.remove("modal-open"),n.artistDetailsModal.removeEventListener("click",L),document.removeEventListener("keydown",$)}n.artistsListContainer.addEventListener("click",async s=>{const t=s.target.closest(".artist-btn");if(!t)return;const a=t.dataset.artistId,i=await R(a);Z(i),n.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),n.artistDetailsModal.addEventListener("click",L),document.addEventListener("keydown",$)});async function ss(){const{data:s}=await H();z(s)}ss();new O(".swiper",{modules:[j,_],on:{init:g,slideChange:g},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function g(s){const t=s.slides.length,a=s.activeIndex,{paginationDotFirst:i,paginationDotMiddle:e,paginationDotLast:r}=n;i.classList.remove("active"),e.classList.remove("active"),r.classList.remove("active"),a===0?d(i):a===t-1?d(r):d(e)}function d(s){s.classList.remove("active"),s.offsetWidth,s.classList.add("active")}
//# sourceMappingURL=index.js.map
