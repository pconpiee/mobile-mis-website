# ILS International — mobile-mis.net

Website for **ILS International** (Information & Learning Systems), founded by Marv & Evie Bowers.

> *"Equipping our pioneers for the digital frontiers"*

## 🌐 Live Site
[www.mobile-mis.net](https://www.mobile-mis.net)

---

## 📁 File Structure

```
/
├── index.html              ← Homepage
├── about-ils.html          ← About ILS International
├── contact.html            ← Contact & Donate
├── ils-store.html          ← ILS Store (eTools for purchase)
├── africa-mis1.html        ← Africa-MIS hub page
├── africa-mis.html         ← Africa-MIS Project overview
├── africa-mis--cities-atlas.html
├── africa-mis--towns-atlas.html
├── africa-mis-116m-atlas-10-maps.html
├── africa-mis--customize-maps.html
├── africa-mis--quickref-etools.html
├── africas-mobile-revolution.html
├── congo-drc-mis.html      ← Congo DRC-MIS hub
├── drc--country-topo-atlas.html
├── drc--village-topo-atlas.html
├── ils-etools.html         ← ILS eTools hub
├── global-mis-quick-ref-etools.html
├── africa-mis-quick-ref-etools.html
├── guide-offline-nav--tracking.html
├── avenza-maps-app.html
├── mobile-tools-low-cost.html
├── ils-map-sampler.html
├── country-mis.html
├── style.css               ← All styles
├── nav.js                  ← Shared nav + footer (auto-injected)
├── CNAME                   ← GitHub Pages custom domain
└── images/                 ← Put recovered images here
```

---

## 🖼️ Recovering Images

The original site had ~249 images hosted on Weebly's CDN. To recover them:

1. Go to [web.archive.org](https://web.archive.org)
2. Search for each image URL, e.g.:
   `https://web.archive.org/web/*/http://www.mobile-mis.net/uploads/4/3/6/1/43615511/p722_1.png`
3. Download the image and save it to the `/images/` folder
4. Update the relevant HTML page to use `<img src="images/p722_1.png" />`

**Or use the Wayback Machine Downloader** (command-line tool):
```bash
gem install wayback_machine_downloader
wayback_machine_downloader http://www.mobile-mis.net --only "/uploads/"
```

---

## 🔧 Editing Pages

Each page follows the same pattern:
1. `<div id="site-nav"></div>` — nav is auto-injected by `nav.js`
2. `.page-header` — page title and breadcrumb
3. Main content section
4. `<div id="site-footer"></div>` — footer is auto-injected by `nav.js`

To update the navigation (add/remove pages), edit `nav.js`.

---

## 🚀 GitHub Pages Setup

1. Push this folder to a GitHub repo
2. Go to **Settings → Pages → Source → main branch**  
3. The `CNAME` file tells GitHub to serve this at `www.mobile-mis.net`
4. GoDaddy DNS should already be pointing to GitHub (4 A records + CNAME)

---

## 💝 Donate to ILS

[actintl.givingfuel.com/bowers-ils](https://actintl.givingfuel.com/bowers-ils)  
All gifts are fully tax deductible.
