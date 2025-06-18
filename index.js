import{a as m,S as I,N,K as P}from"./assets/vendor-CIDwANU8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const c={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};c.mobileMenuOpenBtn.addEventListener("click",()=>{c.mobileMenu.classList.add("is-open"),document.body.classList.add("modal-open")});c.mobileMenuCloseBtn.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")});c.mobileMenuLinks.forEach(s=>{s.addEventListener("click",()=>{c.mobileMenu.classList.remove("is-open"),document.body.classList.remove("modal-open")})});const p="https://sound-wave.b.goit.study/api",b="/artists/",O="/albums/",j="/feedbacks/";async function _(s,t){const a=p+b,r={limit:s,page:t};return(await m.get(a,{params:r})).data}async function x(){const s=p+j,t={limit:10};return(await m.get(s,{params:t})).data}async function F(s){const t=p+b+s+O,a={};return(await m.get(t,{params:a})).data}const l="/goit-js-project-ArtistsHub/assets/icons-B_PfIQ6b.svg",n={artistsContainer:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn"),feedbacksContainer:document.querySelector(".swiper-wrapper"),artistDetailsContainer:document.querySelector(".artist-details-info")};function h(s){return s.map(t=>`<li class="artist-genres-item">${t}</li>`).join("")}function H(s){const{_id:t,strArtist:a,strArtistThumb:r,strBiographyEN:e,genres:i}=s,o=h(i);return`<li class="artists-item">
        <img
          src="${r}"
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
      </li>`}function K(s){const t=s.map(H).join("");n.artistsContainer.insertAdjacentHTML("beforeend",t)}function R(){n.loader.classList.remove("is-hidden")}function Y(){n.loader.classList.add("is-hidden")}function G(s,t){s<t?n.loadMoreBtn.classList.remove("is-hidden"):n.loadMoreBtn.classList.add("is-hidden")}function U(s){const{name:t,descr:a,rating:r}=s;return`<div class="swiper-slide">
  <div class="feedback-item">
    <div class="feedback-rating rating star-svg value-${Math.round(r)} color-default">
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
</div>`}function Q(s){const t=s.map(U).join("");n.feedbacksContainer.innerHTML=t}function V(s){const t=Math.floor(s/1e3),a=Math.floor(t/60),r=t%60,e=r<10?`0${r}`:r;return`${a}:${e}`}function z(s){const{strArtist:t,strArtistThumb:a,intFormedYear:r,intDiedYear:e,strGender:i,intMembers:o,strCountry:$,strBiographyEN:L,genres:M,albumsList:k}=s,S=h(M),A=k.map(B=>{const{strAlbum:w,tracks:T}=B,E=T.map(q=>{const{intDuration:C,movie:f,strTrack:D}=q;return`<tr class="row">
                  <td class="col-1">${D}</td>
                  <td class="col-2">${V(C)}</td>
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
              <caption class="albums-name">${w}</caption>
              <thead>
                <tr class="row">
                  <th class="col-1">Track</th>
                  <th class="col-2">Time</th>
                  <th class="col-3">Link</th>
                </tr>
              </thead>
              <tbody>
                ${E}
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
            <p class="artist-details-value">${r}–${e||"present"}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Sex</p>
            <p class="artist-details-value">${i}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Members</p>
            <p class="artist-details-value">${o}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Country</p>
            <p class="artist-details-value">${$}</p>
          </li>
          <li class="artist-details-item">
            <p class="artist-details-label">Biography</p>
            <p class="artist-details-value">${L}</p>
          </li>
          <li class="artist-details-item">
            <ul class="artist-genres-list">${S}</ul>
          </li>
        </ul>
        <h3 class="section-artist-albums-title">Albums</h3>
        <ul class="artist-album-cards">${A}</ul>`}function J(s){const t=z(s);n.artistDetailsContainer.innerHTML=t}const d={artistsContainer:document.querySelector(".artists-list"),loadMoreBtn:document.querySelector(".load-more-btn"),artistDetailsModal:document.querySelector(".backdrop")},v=8;let u=1;async function y(){R();try{const{artists:s,totalArtists:t}=await _(v,u),a=Math.ceil(t/v);K(s),G(u,a)}catch(s){console.log(s)}Y()}y();d.loadMoreBtn.addEventListener("click",async()=>{u++,await y()});d.artistsContainer.addEventListener("click",async s=>{const t=s.target.closest(".artist-btn");if(!t)return;const a=t.dataset.artistId,r=await F(a);console.log(r),J(r),d.artistDetailsModal.classList.add("is-open"),document.body.classList.add("modal-open"),d.artistDetailsModal.addEventListener("click",e=>{e.target.closest(".modal-close-btn")&&(d.artistDetailsModal.classList.remove("is-open"),document.body.classList.remove("modal-open"))})});async function W(){const{data:s}=await x();Q(s)}W();new I(".swiper",{modules:[N,P],on:{init:g,slideChange:g},keyboard:{enabled:!0},breakpoints:{768:{navigation:{nextEl:".feedback-next-btn",prevEl:".feedback-prev-btn"}}}});function g(s){const t=s.slides.length,a=s.activeIndex,r=document.querySelector(".dot-first"),e=document.querySelector(".dot-middle"),i=document.querySelector(".dot-last");a===0?r.classList.add("active"):a===t-1?i.classList.add("active"):e.classList.add("active"),a!==0&&a!==t-1?(e.classList.add("active"),r.classList.remove("active"),i.classList.remove("active")):e.classList.remove("active")}
//# sourceMappingURL=index.js.map
