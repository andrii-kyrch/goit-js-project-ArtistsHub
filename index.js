import{a as u,S as P,N as O,K as j}from"./assets/vendor-CIDwANU8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();const c={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};c.mobileMenuOpenBtn.addEventListener("click",()=>{c.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});c.mobileMenuCloseBtn.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});c.mobileMenuLinks.forEach(s=>{s.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const n={artistsListContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),loader:document.querySelector(".loader"),artistDetailsModal:document.querySelector(".js-artist-details-backdrop"),artistDetailsContainer:document.querySelector(".artist-details-info"),feedbacksContainer:document.querySelector(".swiper-wrapper")},m="https://sound-wave.b.goit.study/api",g="/artists/",_="/albums/",x="/feedbacks/";async function F(s,t){const e=m+g,i={limit:s,page:t};return(await u.get(e,{params:i})).data}async function K(){const s=m+x,t={limit:10};return(await u.get(s,{params:t})).data}async function H(s){const t=m+g+s+_,e={};return(await u.get(t,{params:e})).data}const l="/goit-js-project-ArtistsHub/assets/icons-B_PfIQ6b.svg";function h(s){return s.map(t=>`<li class="artist-genres-item">${t}</li>`).join("")}function R(s){const{_id:t,strArtist:e,strArtistThumb:i,strBiographyEN:a,genres:r}=s,o=h(r);return`<li class="artists-item">
        <img
          src="${i}"
          alt="Artist ${e}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${o}
        </ul>
        <h3 class="artist-name">${e}</h3>
        <p class="artist-text">
          ${a.split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-artist-id="${t}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="${l}#caret-right"></use>
          </svg>
        </button>
      </li>`}function U(s){const t=s.map(R).join("");n.artistsListContainer.insertAdjacentHTML("beforeend",t)}function Y(){n.loader.classList.remove("is-hidden")}function G(){n.loader.classList.add("is-hidden")}function Q(s,t){s<t?n.loadMoreBtn.classList.remove("is-hidden"):n.loadMoreBtn.classList.add("is-hidden")}function V(s){const{name:t,descr:e,rating:i}=s;return`<div class="swiper-slide">
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
    <p class="feedback-message">"${e}"</p>
    <p class="feedback-author-name">${t}</p>
  </div>
</div>`}function z(s){const t=s.map(V).join("");n.feedbacksContainer.innerHTML=t}function J(s){const t=Math.floor(s/1e3),e=Math.floor(t/60),i=t%60,a=i<10?`0${i}`:i;return`${e}:${a}`}function W(s){const{strArtist:t,strArtistThumb:e,intFormedYear:i,intDiedYear:a,strGender:r,intMembers:o,strCountry:M,strBiographyEN:k,genres:S,albumsList:A}=s,E=h(S),w=A.map(T=>{const{strAlbum:B,tracks:D}=T,C=D.map(q=>{const{intDuration:I,movie:p,strTrack:N}=q;return`<tr class="row">
                  <td class="col-1">${N}</td>
                  <td class="col-2">${J(I)}</td>
                  <td class="col-3">
                  ${p?`<a
                      class="song-link"
                      href="${p}"
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
                ${C}
              </tbody>
            </table>
          </li>`}).join("");return`<h2 class="artist-details-name">${t}</h2>
        <img
          class="artist-photo-details"
          src="${e}"
          alt=""
        />
        <ul class="artist-details-list">
          <li class="artist-details-item">
            <p class="artist-details-label">Years active</p>
            <p class="artist-details-value">${i||"Unknown"}–${a||"present"}</p>
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
            <p class="artist-details-value">${M}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Biography</p>
            <p class="artist-details-value">${k}</p>
          </li>
          <li class="artist-details-item">
            <ul class="artist-genres-list">${E}</ul>
          </li>
        </ul>
        <h3 class="section-artist-albums-title">Albums</h3>
        <ul class="artist-album-cards">${w}</ul>`}function X(s){const t=W(s);n.artistDetailsContainer.innerHTML=t}const f=8;let d=1;async function b(){Y();try{const{artists:s,totalArtists:t}=await F(f,d),e=Math.ceil(t/f);U(s),Q(d,e)}catch(s){console.log(s)}G()}b();n.loadMoreBtn.addEventListener("click",async()=>{d++,await b()});function y(s){const t=s.target.closest(".modal-close-btn"),e=s.target===n.artistDetailsModal;!t&&!e||$()}function L(s){s.key==="Escape"&&$()}function $(){n.artistDetailsModal.classList.remove("is-open"),document.body.classList.remove("modal-open"),n.artistDetailsModal.removeEventListener("click",y),document.removeEventListener("keydown",L)}n.artistsListContainer.addEventListener("click",async s=>{const t=s.target.closest(".artist-btn");if(!t)return;const e=t.dataset.artistId,i=await H(e);X(i),n.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),n.artistDetailsModal.addEventListener("click",y),document.addEventListener("keydown",L)});async function Z(){const{data:s}=await K();z(s)}Z();new P(".swiper",{modules:[O,j],on:{init:v,slideChange:v},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function v(s){const t=s.slides.length,e=s.activeIndex,i=document.querySelector(".dot-first"),a=document.querySelector(".dot-middle"),r=document.querySelector(".dot-last");e===0?i.classList.add("active"):e===t-1?r.classList.add("active"):a.classList.add("active"),e!==0&&e!==t-1?(a.classList.add("active"),i.classList.remove("active"),r.classList.remove("active")):a.classList.remove("active")}
//# sourceMappingURL=index.js.map
