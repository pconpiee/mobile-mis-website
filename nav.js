// Shared navigation — included on every page
// Usage: <script src="/nav.js"></script> + <div id="site-nav"></div>

(function () {
  const NAV_HTML = `
<header>
  <div class="header-inner">
    <a href="/index.html" class="site-logo" style="text-decoration:none">
      <span class="logo-main">ILS International</span>
      <span class="logo-sub">Mobile Info Systems</span>
    </a>
    <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
    <nav id="mainNav">
      <ul>
        <li><a href="/index.html">Home</a></li>
        <li class="has-dropdown">
          <a href="/africa-mis1.html">Africa-MIS</a>
          <ul class="dropdown">
            <li><a href="/africa-mis.html">Africa-MIS Project</a></li>
            <li><a href="/africa-mis--cities-atlas.html">Cities Atlas</a></li>
            <li><a href="/africa-mis--towns-atlas.html">Towns Atlas</a></li>
            <li><a href="/africa-mis--customize-maps.html">Customize Maps</a></li>
            <li><a href="/africa-mis--quickref-etools.html">QuickRef eTools</a></li>
            <li><a href="/africa-mis-116m-atlas-10-maps.html">1:16m Atlas</a></li>
            <li><a href="/ils-map-sampler.html">Map Sampler</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="/congo-drc-mis.html">Congo DRC-MIS</a>
          <ul class="dropdown">
            <li><a href="/drc--country-topo-atlas.html">Country Topo Atlas</a></li>
            <li><a href="/drc--village-topo-atlas.html">Village Topo Atlas</a></li>
          </ul>
        </li>
        <li class="has-dropdown">
          <a href="/ils-etools.html">ILS eTools</a>
          <ul class="dropdown">
            <li><a href="/global-mis-quick-ref-etools.html">Global-MIS Quick Ref</a></li>
            <li><a href="/africa-mis-quick-ref-etools.html">Africa-MIS Quick Ref</a></li>
            <li><a href="/guide-offline-nav--tracking.html">Offline Nav & Tracking</a></li>
            <li><a href="/mobile-tools-low-cost.html">Low-Cost Mobile Tools</a></li>
            <li><a href="/avenza-maps-app.html">Avenza Maps App</a></li>
          </ul>
        </li>
        <li><a href="/ils-store.html">Store</a></li>
        <li><a href="/about-ils.html">About ILS</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>`;

  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="logo-main">ILS International</div>
      <p>Information &amp; Learning Systems — equipping our pioneers for the digital frontiers of Sub-Sahara Africa and beyond.</p>
      <p style="margin-top:0.75rem;font-size:0.82rem;">Marv Bowers, President &amp; Founder<br>
      <a href="mailto:marvbowers@gmail.com">marvbowers@gmail.com</a></p>
    </div>
    <div>
      <h4>Africa-MIS</h4>
      <ul>
        <li><a href="/africa-mis.html">Africa-MIS Project</a></li>
        <li><a href="/africa-mis--cities-atlas.html">Cities Atlas</a></li>
        <li><a href="/africa-mis--towns-atlas.html">Towns Atlas</a></li>
        <li><a href="/congo-drc-mis.html">Congo DRC-MIS</a></li>
        <li><a href="/ils-map-sampler.html">Map Sampler</a></li>
      </ul>
    </div>
    <div>
      <h4>Resources</h4>
      <ul>
        <li><a href="/ils-etools.html">ILS eTools</a></li>
        <li><a href="/global-mis-quick-ref-etools.html">Global-MIS eTools</a></li>
        <li><a href="/ils-store.html">ILS Store</a></li>
        <li><a href="/about-ils.html">About ILS</a></li>
        <li><a href="/contact.html">Contact &amp; Donate</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 ILS International. All rights reserved.</span>
    <span>Marv &amp; Evie Bowers · <a href="mailto:marvbowers@gmail.com">marvbowers@gmail.com</a></span>
  </div>
</footer>`;

  // Inject header
  const navEl = document.getElementById('site-nav');
  if (navEl) navEl.outerHTML = NAV_HTML;
  else document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;
  else document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Mobile toggle
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header nav a').forEach(a => {
    if (a.getAttribute('href') === '/' + path) a.classList.add('active');
  });
})();
