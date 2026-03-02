import "./style.css";
import { activeProject } from "./config/activeProject";

/* =========================
   Performance (Core Web Vitals)
   ========================= */

// Observes LCP candidates (useful during performance checks)
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === "largest-contentful-paint") {
      console.log("LCP candidate:", entry.startTime);
    }
  }
});
observer.observe({ type: "largest-contentful-paint", buffered: true });

/* =========================
   Small DOM helpers
   ========================= */

function setText(id, value) {
  const el = document.getElementById(id);
  if (el && value != null) el.textContent = value;
}

function setSrc(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.setAttribute("src", value);
}

function setHref(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.setAttribute("href", value);
}

function setDataFull(id, value) {
  const el = document.getElementById(id);
  if (el && value) el.setAttribute("data-full", value);
}

/* =========================
   Project content injection
   (fills HTML placeholders from activeProject)
   ========================= */


   function applyProjectConfig(p) {
 //project by project budget options
    function applyBudgetOptions(project) {
  const wrap = document.getElementById("budgetOptions");
  if (!wrap) return;

  // Default (Casa + Solea)
  const DEFAULT_BUDGETS = [
    "£400.000 – £500.000",
    "£600.000 – £700.000",
    "£800.000 – £900.000",
    "£1.000.000 ve üzeri",
  ];
  const options = project?.form?.budgetOptions?.length
    ? project.form.budgetOptions
    : DEFAULT_BUDGETS;

  wrap.innerHTML = options
    .map(
      (text, idx) => `
        <label class="radioPill">
          <input type="radio" name="budget" value="${text}" ${idx === 0 ? "required" : ""} />
          <span>${text}</span>
        </label>
      `
    )
    .join("");
}
 //active project budgets
applyBudgetOptions(activeProject);
    // Meta (Tab title + description)
  if (p.meta?.title) {
    document.title = p.meta.title;

    const titleEl = document.getElementById("pageTitle");
    if (titleEl) titleEl.textContent = p.meta.title;

    const metaTitle = document.getElementById("metaTitle");
    if (metaTitle) metaTitle.setAttribute("content", p.meta.title);
  }

  if (p.meta?.description) {
    const metaDesc = document.getElementById("metaDescription");
    if (metaDesc) metaDesc.setAttribute("content", p.meta.description);
  }

  // Header
  setSrc("headerBrandLogo", p.header?.brandLogo);

  // Hero
  setSrc("heroProjectLogo", p.hero?.projectLogo);
  setText("heroLead", p.hero?.lead);

  if (p.hero?.info?.length >= 3) {
    setText("heroInfoK1", p.hero.info[0].k);
    setText("heroInfoV1", p.hero.info[0].v);
    setText("heroInfoK2", p.hero.info[1].k);
    setText("heroInfoV2", p.hero.info[1].v);
    setText("heroInfoK3", p.hero.info[2].k);
    setText("heroInfoV3", p.hero.info[2].v);
  }

  // Hero background image (CSS variable)
  const hero = document.querySelector(".heroSplit");
  if (hero && p.hero?.bgImage) {
    hero.style.setProperty("--hero-bg", `url('${p.hero.bgImage}')`);
  }

  // Hero strip (4 thumbnails)
  if (Array.isArray(p.hero?.strip) && p.hero.strip.length === 4) {
    for (let i = 0; i < 4; i++) {
      setSrc(`heroStripImg${i + 1}`, p.hero.strip[i]);
      setDataFull(`heroStripLink${i + 1}`, p.hero.strip[i]);
    }
  }

  // Overview
  setText("overviewTitle", p.overview?.title);
  setText("overviewText", p.overview?.text);
  setSrc("overviewMediaImg", p.overview?.image);
  setDataFull("overviewMediaLink", p.overview?.image);

  // Overview chips (badges)
  const chips = document.getElementById("overviewChips");
  if (chips && Array.isArray(p.overview?.chips)) {
    chips.innerHTML = p.overview.chips.map((c) => `<span class="chip">${c}</span>`).join("");
  }

  // Overview KPIs
  const kpis = document.getElementById("overviewKpis");
  if (kpis && Array.isArray(p.overview?.kpis)) {
    kpis.innerHTML = p.overview.kpis
      .map(
        (k) => `
        <div class="kpi">
          <div class="kpiVal">${k.val}</div>
          <div class="kpiLbl">${k.lbl}</div>
        </div>
      `
      )
      .join("");
  }

  // Features
  setText("featuresTitle", p.features?.title);
  setText("featuresSubtitle", p.features?.subtitle);

  const list = document.getElementById("featuresList");
  if (list && Array.isArray(p.features?.items)) {
    list.innerHTML = p.features.items.map((x) => `<li>${x}</li>`).join("");
  }

  // Features CTA
  const ctaBtn = document.getElementById("featuresCtaBtn");
  if (ctaBtn) {
    ctaBtn.textContent = p.features?.ctaText || ctaBtn.textContent;
    ctaBtn.setAttribute("href", p.features?.ctaHref || "#iletisim");
  }

  // Site plan
  setText("plansTitle", p.plans?.title);
  setSrc("plansImg", p.plans?.image);
  setDataFull("plansLink", p.plans?.image);

  // Sliders
  const s = p.sliders || {};

  if (s.dis) {
    setText("disTitle", s.dis.title);
    const track = document.getElementById("disTrack");
    if (track && Array.isArray(s.dis.images)) {
      track.innerHTML = s.dis.images.map((src, idx) => `<img src="${src}" alt="Proje fotoğrafı ${idx + 1}" loading="lazy" />`).join("");
    }
  }

  if (s.a) {
    setText("aTitle", s.a.title);
    const track = document.getElementById("aTrack");
    if (track && Array.isArray(s.a.images)) {
      track.innerHTML = s.a.images.map((src, idx) => `<img src="${src}" alt="A tipi iç mimari ${idx + 1}" loading="lazy" />`).join("");
    }
  }

  if (s.c) {
    setText("cTitle", s.c.title);
    const track = document.getElementById("cTrack");
    if (track && Array.isArray(s.c.images)) {
      track.innerHTML = s.c.images.map((src, idx) => `<img src="${src}" alt="C tipi iç mimari ${idx + 1}" loading="lazy" />`).join("");
    }
  }
}

// ==============
// Init config
// ==============

applyProjectConfig(activeProject);

// Footer brand logo
setSrc("footerBrandlogo", activeProject.header?.brandLogo);

// Adds a project-specific class like: p-solea / p-zenith etc.
if (activeProject?.slug){
  document.body.classList.add(`p-${activeProject.slug}`);
}

/* =========================
   Floor Plans (Solea only)
   Shows/hides #kat-planlari based on data
   ========================= */

const fpSection = document.getElementById("kat-planlari");

const hasFloorPlans =
  !!activeProject.floorPlans &&
  (Array.isArray(activeProject.floorPlans.aImages) && activeProject.floorPlans.aImages.length > 0 ||
   Array.isArray(activeProject.floorPlans.bImages) && activeProject.floorPlans.bImages.length > 0 ||
   Array.isArray(activeProject.floorPlans.cImages) && activeProject.floorPlans.cImages.length > 0);

if (fpSection) {
  fpSection.style.display = hasFloorPlans ? "block" : "none";
}

if (hasFloorPlans) {
  setText("floorPlansMainTitle", activeProject.floorPlans.mainTitle || "Kat Planları");
  setText("floorATitle", activeProject.floorPlans.aTitle || "A Kat Planları");
  setText("floorBTitle", activeProject.floorPlans.bTitle || "B Kat Planları");
  setText("floorCTitle", activeProject.floorPlans.cTitle || "C Kat Planları");

  const aTrack = document.getElementById("floorA_track");
  if (aTrack) {
    aTrack.innerHTML = (activeProject.floorPlans.aImages || [])
      .map((src, i) => `<img src="${src}" alt="A Kat Planı ${i + 1}" loading="lazy" />`)
      .join("");
  }

  const bTrack = document.getElementById("floorB_track");
  if (bTrack) {
    bTrack.innerHTML = (activeProject.floorPlans.bImages || [])
      .map((src, i) => `<img src="${src}" alt="B Kat Planı ${i + 1}" loading="lazy" />`)
      .join("");
  }

  const cTrack = document.getElementById("floorC_track");
  if (cTrack) {
    cTrack.innerHTML = (activeProject.floorPlans.cImages || [])
      .map((src, i) => `<img src="${src}" alt="C Kat Planı ${i + 1}" loading="lazy" />`)
      .join("");
  }
}

/* =========================
   Hero mini cards
   ========================= */

if (Array.isArray(activeProject.hero?.miniCards) && activeProject.hero.miniCards.length >= 3) {
  setText("heroMiniTitle1", activeProject.hero.miniCards[0].title);
  setText("heroMiniText1",  activeProject.hero.miniCards[0].text);

  setText("heroMiniTitle2", activeProject.hero.miniCards[1].title);
  setText("heroMiniText2",  activeProject.hero.miniCards[1].text);

  setText("heroMiniTitle3", activeProject.hero.miniCards[2].title);
  setText("heroMiniText3",  activeProject.hero.miniCards[2].text);
}

/* =========================
   Body class + Map
   ========================= */

function applyProjectBodyClass(projectKey) {
  document.body.dataset.project = projectKey;
  document.body.classList.remove("project--casa-oliva-2", "project--zenith", "project--solea");
  document.body.classList.add(`project--${projectKey}`);
}
applyProjectBodyClass(activeProject.key);

function applyProjectMap(project) {
  const iframe = document.getElementById("projectMapIframe");
  const btn = document.getElementById("projectMapOpenBtn");

  if (!iframe || !btn) return;

  const embed = project.mapEmbed || "";
  const url = project.mapUrl || "";

  // If map is not configured, hide the whole card
  const mapCard = iframe.closest(".mapCard");
  if (!embed || !url) {
    if (mapCard) mapCard.style.display = "none";
    return;
  }

  if (mapCard) mapCard.style.display = "";

  iframe.src = embed;
  btn.href = url;
}
applyProjectMap(activeProject);

/* =========================
   Mobile menu toggle
   ========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  nav?.classList.toggle("is-open");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!nav || !menuBtn) return;
  const t = e.target;
  if (
    nav.classList.contains("is-open") &&
    !nav.contains(t) &&
    !menuBtn.contains(t)
  ) {
    nav.classList.remove("is-open");
  }
});

// ESC closes menu
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") nav?.classList.remove("is-open");
});

/* =========================
   Form submit -> Google Sheets (Apps Script)
   ========================= */

const form = document.getElementById("demoForm");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const script_url = activeProject?.form?.scriptUrl;

if (!script_url) {
  alert("Form bağlantısı tanımlı değil.");
  return;
}

    const btn = form.querySelector('button[type="submit"]');
    const original_btn_text = btn ? btn.textContent : "";

    try {
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Gönderiliyor...";
      }

      const form_data = new FormData(form);

      const res = await fetch(script_url, {
        method: "post",
        body: form_data,
      });

      const data = await res.json();

if (data && data.result === "success") {

  const successMessage = document.getElementById("formSuccess");

  if (successMessage) {
    successMessage.style.display = "block";
  }

  form.reset();

      } else {
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        console.warn("Apps script response:", data);
      }
    } catch (err) {
      alert("Bağlantı hatası oluştu. Lütfen tekrar deneyin.");
      console.error(err);
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = original_btn_text;
      }
    }
  });
}

/* =========================
   Catalog modal (PDF.js)
   ========================= */

import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const openCatalogBtn = document.getElementById("openCatalogBtn");
const catalogModal = document.getElementById("catalogModal");
const catalogClose = document.getElementById("catalogClose");
const catalogPrev = document.getElementById("catalogPrev");
const catalogNext = document.getElementById("catalogNext");
const catalogCanvas = document.getElementById("catalogCanvas");
const catalogPageInfo = document.getElementById("catalogPageInfo");

let pdfDoc = null;
let pageNum = 1;
let isRendering = false;

function showCatalogModal() {
  if (!catalogModal) return;
  catalogModal.style.display = "flex";
  requestAnimationFrame(() => {
    catalogModal.classList.add("show");
    catalogModal.setAttribute("aria-hidden", "false");
  });
}

function hideCatalogModal() {
  if (!catalogModal) return;
  catalogModal.classList.remove("show");
  catalogModal.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    catalogModal.style.display = "none";
  }, 200);
}

async function renderPage(num) {
  if (!pdfDoc || !catalogCanvas) return;
  if (isRendering) return;
  isRendering = true;

  const page = await pdfDoc.getPage(num);

  // Responsive width: scales canvas based on viewport width
  const stageWidth = Math.min(window.innerWidth * 0.70, 840);
  const viewport0 = page.getViewport({ scale: 1 });
  const scale = stageWidth / viewport0.width;
  const viewport = page.getViewport({ scale });

  const ctx = catalogCanvas.getContext("2d");
  catalogCanvas.width = Math.floor(viewport.width);
  catalogCanvas.height = Math.floor(viewport.height);

  await page.render({ canvasContext: ctx, viewport }).promise;

  if (catalogPageInfo) catalogPageInfo.textContent = `${pageNum} / ${pdfDoc.numPages}`;
  if (catalogPrev) catalogPrev.disabled = pageNum <= 1;
  if (catalogNext) catalogNext.disabled = pageNum >= pdfDoc.numPages;

  isRendering = false;
}

async function openCatalog(pdfUrl) {
  if (!pdfUrl) {
    alert("Katalog bulunamadı.");
    return;
  }

  showCatalogModal();

  pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;
  pageNum = 1;
  await renderPage(pageNum);
}

function nextPage() {
  if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
  pageNum += 1;
  renderPage(pageNum);
}

function prevPage() {
  if (!pdfDoc || pageNum <= 1) return;
  pageNum -= 1;
  renderPage(pageNum);
}

openCatalogBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  openCatalog(activeProject?.catalog?.pdfUrl);
});

catalogClose?.addEventListener("click", hideCatalogModal);

// Click outside content closes modal
catalogModal?.addEventListener("click", (e) => {
  if (e.target === catalogModal) hideCatalogModal();
});

catalogPrev?.addEventListener("click", prevPage);
catalogNext?.addEventListener("click", nextPage);

// Keyboard controls while modal is open
window.addEventListener("keydown", (e) => {
  if (!catalogModal || catalogModal.getAttribute("aria-hidden") === "true") return;
  if (e.key === "Escape") hideCatalogModal();
  if (e.key === "ArrowRight") nextPage();
  if (e.key === "ArrowLeft") prevPage();
});

window.addEventListener("resize", () => {
  if (!pdfDoc) return;
  renderPage(pageNum);
});

/* =========================
   Lightbox (supports sliders + galleries)
   ========================= */

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");
const lbPrev = document.getElementById("lbPrev");
const lbNext = document.getElementById("lbNext");

let lbList = [];
let lbIndex = -1;

function buildListFromClickTarget(clickedEl) {
  // Priority: if it's inside a slider, use all slider images
  const track = clickedEl.closest(".photoTrack");
  if (track) {
    return Array.from(track.querySelectorAll("img"));
  }

  // Otherwise, use gallery images from the same section
  const gallery = clickedEl.closest(".gallery");
  if (gallery) {
    return Array.from(gallery.querySelectorAll(".gItem img"));
  }

  // Fallback: only the clicked image
  return [clickedEl];
}

function showAt(i) {
  if (!lbList.length) return;
  lbIndex = (i + lbList.length) % lbList.length;

  const imgEl = lbList[lbIndex];
  const src = imgEl.currentSrc || imgEl.src;
  lbImg.src = src;
  lbImg.alt = imgEl.alt || "Fotoğraf";
}

function openLightboxFromElement(clickedEl) {
  if (!lightbox || !lbImg) return;

  lbList = buildListFromClickTarget(clickedEl);
  lbIndex = Math.max(0, lbList.indexOf(clickedEl));

  showAt(lbIndex);

  lightbox.style.display = "flex";
  requestAnimationFrame(() => {
    lightbox.classList.add("show");
    lightbox.setAttribute("aria-hidden", "false");
  });
}

function closeLightbox() {
  if (!lightbox || !lbImg) return;

  lightbox.classList.remove("show");
  lightbox.setAttribute("aria-hidden", "true");

  setTimeout(() => {
    lightbox.style.display = "none";
    lbImg.src = "";
    lbList = [];
    lbIndex = -1;
  }, 250);
}

function prevLb() { showAt(lbIndex - 1); }
function nextLb() { showAt(lbIndex + 1); }

// Single document click handler (open + controls)
document.addEventListener("click", (e) => {
  // Close
  if (e.target.closest("#lbClose")) {
    e.preventDefault();
    closeLightbox();
    return;
  }

  // Prev / Next
  if (e.target.closest("#lbPrev")) {
    e.preventDefault();
    prevLb();
    return;
  }
  if (e.target.closest("#lbNext")) {
    e.preventDefault();
    nextLb();
    return;
  }

  // Backdrop click => close
  if (e.target === lightbox) {
    e.preventDefault();
    closeLightbox();
    return;
  }

  // Slider image click
  const sliderImg = e.target.closest(".photoSlider .photoTrack img");
  if (sliderImg) {
    e.preventDefault();
    openLightboxFromElement(sliderImg);
    return;
  }

  // gItem click (uses data-full if present, but still navigates within same gallery)
  const gItem = e.target.closest(".gItem");
  if (gItem) {
    const imgIn = gItem.querySelector("img");
    if (!imgIn) return;

    const full = gItem.dataset?.full;
    lbList = buildListFromClickTarget(imgIn);
    lbIndex = Math.max(0, lbList.indexOf(imgIn));

    if (full) {
      lbImg.src = full;
      lightbox.style.display = "flex";
      requestAnimationFrame(() => {
        lightbox.classList.add("show");
        lightbox.setAttribute("aria-hidden", "false");
      });
      return;
    }

    e.preventDefault();
    openLightboxFromElement(imgIn);
    return;
  }
});

// Keyboard navigation (only when lightbox is visible)
window.addEventListener("keydown", (e) => {
  if (!lightbox || lightbox.style.display === "none") return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevLb();
  if (e.key === "ArrowRight") nextLb();
});

/* =========================
   Footer year
   ========================= */

const yilEl = document.getElementById("yil");
if (yilEl) yilEl.textContent = new Date().getFullYear();

/* =========================
   Slider arrows (buttons with data-dir + data-target)
   ========================= */

function getSliderMoveBy(sliderEl) {
  return sliderEl.clientWidth; // consistent paging behavior
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".sliderBtn[data-dir][data-target]");
  if (!btn) return;

  const dir = Number(btn.dataset.dir || "0");
  const targetId = btn.dataset.target;
  if (!dir || !targetId) return;

  const slider = document.getElementById(targetId);
  if (!slider) {
    console.warn("Slider bulunamadı:", targetId);
    return;
  }

  const moveBy = getSliderMoveBy(slider);
  if (!moveBy) return;

  slider.scrollBy({ left: dir * moveBy, behavior: "smooth" });
});
