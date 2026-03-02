const base = `${import.meta.env.BASE_URL}images/projects/casa-oliva-2`;
export const casaOliva2 = {
  key: "casa-oliva-2",
  mapEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3254.813723336545!2d33.289489812578154!3d35.335446923835185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1772196924196!5m2!1str!2str",
  mapUrl: "https://maps.app.goo.gl/eAjzAz1nqy7RvaeN7",
  slug:"casa-oliva-2",
  meta: {
    title: "CASA OLIVA 2 by Özyalçın",
    description:
      "Girne Zeytinlik bölgesinde konumlanmış Casa Oliva 2 projesi. Doğanın içinde şehrin yanı başında lüks yaşam alanları.",
  },

  header: {
    brandLogo: `${base}/brand/ozyalcinlogo.webp`,
    phone1: "+90 (392) 650 2900",
    phone1Href: "tel:+903926502900",
    phone2: "+90 (548) 850 2900",
    phone2Href: "tel:+905488502900",
  },

  hero: {
    projectLogo: `${base}/brand/casa-oliva-logo.webp`,
    lead: "DOĞA İLE DOST, DOĞA İLE UYUMLU BİR YAŞAM.",
    info: [
      { k: "Şehir", v: "Girne" },
      { k: "Tapu", v: "Türk Tapulu" },
      { k: "Bölge", v: "Zeytinlik" },
    ],
    bgImage: `${base}/plan/genelbakis.webp`,
    strip: [
      `${base}/hero/h01.webp`,
      `${base}/hero/h02.webp`,
      `${base}/hero/h03.webp`,
      `${base}/hero/h04.webp`,
    ],
     miniCards: [
      { title: "Hızlı dönüş", text: "Genelde aynı gün dönüş." },
      { title: "Türk Tapulu", text: "Güvenli yatırım fırsatı." },
      { title: "Girne / Zeytinlik", text: "Merkezi lokasyon." },
    ],
  },

  form: {
  scriptUrl: "https://script.google.com/macros/s/AKfycbz6l3RyHmSnIGfo1TMbCJ97uiCJ0ZC16Hxy857m_zE5ZygQx6by5FN7YxICelfYAqvG/exec"
},

  overview: {
    image: `${base}/plan/genelbakis.webp`,
    title: "Genel Bakış",
    chips: ["Girne / Zeytinlik", "Türk Tapulu", "Butik Proje"],
    text:
      "Girne merkeze sadece birkaç dakika uzaklıkta, zeytin ağaçlarının huzur veren dokusu içinde konumlanan Casa Oliva 2; doğayla iç içe ama şehir yaşamından kopmadan seçkin bir hayat sunar. Yalnızca 10 Türk tapulu villadan oluşan bu butik projede, doğal tonlar, zarif mimari detaylar ve işlevsel iç mekan çözümleriyle konforlu ve zamansız yaşam alanları tasarlanmıştır.",
    kpis: [
      { val: "4.000 m²", lbl: "Proje alanı" },
      { val: "10 Villa", lbl: "A / C Tipi" },
      { val: "3+1", lbl: "2 katlı plan" },
    ],
  },

  catalog: {
    pdfUrl:`${import.meta.env.BASE_URL}catalogs/casa-oliva-2.pdf`,
  },

  features: {
    title: "Proje Özellikleri",
    subtitle: "Casa Oliva 2 projesinin öne çıkan özelliklerini keşfedin.",
    items: [
      "Toplam 4000 m2’lik proje alanına sahiptir.",
      "Tüm villalar (3+1) Zemin kat ve birinci kat olmak üzere 2 katlıdır.",
      "Tüm villalarda yüzme havuzu, özel tasarlanmış peyzaj, çamaşır odası, cam kapaklı şömine, ayrı mutfak ve merkezi VRF iklendirme sistemi standart olarak sunulmaktadır.",
    ],
    ctaText: "Detaylı Bilgi Al",
    ctaHref: "#iletisim",
  },

  plans: {
    title: "Vaziyet Planı",
    image: `${base}/plan/PLAN.webp`,
    // opsiyonel: floorPlans: [{ title, image }]
  },

  sliders: {
    dis: {
      title: "Proje Fotoğrafları",
      images: Array.from({ length: 18 }, (_, i) => `${base}/proje/p${String(i + 1).padStart(2, "0")}.webp`),
    },
    a: {
      title: "A Tipi İç Mimari",
      images: Array.from({ length: 21 }, (_, i) => `${base}/a-tipi/a${String(i + 1).padStart(2, "0")}.webp`),
    },
    c: {
      title: "C Tipi İç Mimari",
      images: Array.from({ length: 21 }, (_, i) => `${base}/c-tipi/c${String(i + 1).padStart(2, "0")}.webp`),
    },
  },
  footer: {
    footerBrandlogo: `${base}/brand/ozyalcinlogo.webp`,
  }
};
