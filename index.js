import{a as f}from"./assets/vendor-BvLu_gPC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const i={mobileMenuOpenBtn:document.querySelector(".mobile-menu-open-btn"),mobileMenuCloseBtn:document.querySelector(".mobile-menu-close-btn"),mobileMenu:document.querySelector(".mobile-menu"),mobileMenuLinks:document.querySelectorAll(".mobile-menu-link")};i.mobileMenuOpenBtn.addEventListener("click",()=>{i.mobileMenu.classList.add("is-open"),document.body.classList.add("no-scroll")});i.mobileMenuCloseBtn.addEventListener("click",()=>{i.mobileMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")});i.mobileMenuLinks.forEach(t=>{t.addEventListener("click",()=>{i.mobileMenu.classList.remove("is-open"),document.body.classList.remove("no-scroll")})});const p="https://sound-wave.b.goit.study/api",b="/artists/";async function y(t,s){const r=p+b,n={limit:t,page:s};return(await f.get(r,{params:n})).data}const a={artistsContainer:document.querySelector(".artists-list"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};function L(t){const{_id:s,strArtist:r,strArtistThumb:n,strBiographyEN:e,genres:o}=t,c=o.map(m=>`<li class="artist-genres-item">${m}</li>`).join("");return`<li class="artists-item">
        <img
          src="${n}"
          alt="Artist ${r}"
          class="artist-photo"
        />
        <ul class="artist-genres-list">
          ${c}
        </ul>
        <h3 class="artist-name">${r}</h3>
        <p class="artist-text">
          ${e.split(" ").slice(0,10).join(" ")} ...
        </p>
        <button class="artist-btn" data-id="${s}">
          Learn More
          <svg class="artist-btn-icon" width="24" height="24">
            <use href="/img/icons.svg#caret-right"></use>
          </svg>
        </button>
      </li>`}function g(t){const s=t.map(L).join("");a.artistsContainer.insertAdjacentHTML("beforeend",s)}function h(){a.loader.classList.remove("is-hidden")}function M(){a.loader.classList.add("is-hidden")}function v(t,s){t<s?a.loadMoreBtn.classList.remove("is-hidden"):a.loadMoreBtn.classList.add("is-hidden")}const A={loadMoreBtn:document.querySelector(".load-more-btn")},d=8;let l=1;async function u(){h();try{const{artists:t,totalArtists:s}=await y(d,l),r=Math.ceil(s/d);g(t),v(l,r)}catch(t){console.log(t)}M()}u();A.loadMoreBtn.addEventListener("click",async()=>{l++,await u()});
//# sourceMappingURL=index.js.map
