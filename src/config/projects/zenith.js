const base = `${import.meta.env.BASE_URL}images/projects/zenith`;

const makeList = (prefix, count, ext, folder) =>
  Array.from({ length: count }, (_, i) =>
    `${base}/${folder}/${prefix}${String(i + 1).padStart(2, "0")}.${ext}`
  );

export const zenith = {
  key: "zenith",
  mapEmbed:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26041.96486127441!2d33.289722!3d35.32472200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de130047f77b5f%3A0x5aee2d0c8fa9807b!2zWmVuaXRoIGJ5IMOWenlhbMOnxLFu!5e0!3m2!1str!2sus!4v1771844350457!5m2!1str!2sus",
  mapUrl: "https://maps.app.goo.gl/6R4ufc2hqws91zdW6",
  slug: "zenith",
  meta: {
    title: "ZENITH by Özyalçın",
    description: "Zenith projesi detayları. Konum, özellikler, planlar ve görseller.",
  },

  header: {
    brandLogo: `${base}/brand/ozyalcinlogo.webp`,
    phone1: "+90 (392) 650 2900",
    phone1Href: "tel:+903926502900",
    phone2: "+90 (548) 850 2900",
    phone2Href: "tel:+905488502900",
  },

  hero: {
    projectLogo: `${base}/brand/zenith_logo.webp`,
    lead: "Zenith ile zirve bir hedef değil, bir yaşam biçimi.",
    info: [
      { k: "Şehir", v: "Girne" },
      { k: "Tapu", v: "Türk Tapulu" },
      { k: "Bölge", v: "Edremit" },
    ],
    bgImage: `${base}/hero/genel.webp`,
    strip: [
      `${base}/hero/h01.webp`,
      `${base}/hero/h02.webp`,
      `${base}/hero/h03.webp`,
      `${base}/hero/h04.webp`,
    ],
     miniCards: [
      { title: "Hızlı dönüş", text: "Genelde aynı gün dönüş." },
      { title: "Türk Tapulu", text: "Güvenli yatırım fırsatı." },
      { title: "Girne / Edremit", text: "Panoramik manzara." },
    ],
  },

  form: {
  scriptUrl: "https://script.google.com/macros/s/AKfycbwH2geqPRgkZtVI5cmnDKWhjy8JJBDzFSdTHSB9pUzJLFWnh-CxYNpsg-6es5F9O4MQdA/exec",
  budgetOptions: [
    "£1.000.000 - £1.500.000",
    "£1.750.000 - £2.000.000",
    "£2.000.000 ve üzeri",
  ],
},

  overview: {
    image: `${base}/hero/genel.webp`,
    title: "Genel Bakış",
    chips: ["Girne/Edremit", "Türk Tapulu", "Butik Proje"],
    text: "Girne’nin zirvesinde konumlanan Zenith, Akdeniz’in maviliği ile dağ manzarasının eşsiz uyumunu bir araya getiren prestijli bir yaşam sunar. Toplam 18 villadan oluşan Türk koçanlı projede; geniş ve farklı tip villa seçeneklerinin yanı sıra şarap mahzeni, sauna, spor salonu ve jakuzi gibi ayrıcalıklı donatılarla konfor ve lüks üst seviyeye taşınır.",
    kpis: [
      { val: " 19.095", lbl: "Proje alanı (m²)" },
      { val: "18 Villa", lbl: "A / B Tipi" },
      { val: "9+2/5+1", lbl: "2 ve 3 katlı plan" },
    ],
  },

    catalog: {
    pdfUrl:`${import.meta.env.BASE_URL}catalogs/zenith.pdf`,
  },

  features: {
    title: "Proje Özellikleri",
    subtitle: "Zenith projesinin öne çıkan özellikleri.",
    items: [
      "Toplam 19,095 m2’lik proje alanına sahiptir.",
      "Tüm villalar kesintisiz dağ ve deniz manzarasına sahiptir.",
      "Tüm villalarda yüzme havuzu, özel tasarlanmış peyzaj, özel bahçe terasları mevcuttur.",
    ],
    ctaText: "Detaylı Bilgi Al",
    ctaHref: "#iletisim",
  },

  plans: {
    title: "Vaziyet Planı",
    image: `${base}/plan/plan.webp`,
  },

  sliders: {
    dis: {
      title: "Proje Fotoğrafları",
        images: makeList("p", 20, "webp", "proje"),
    },
    a: {
      title: "A Tipi İç Mimari",
      images: makeList("a", 41, "webp", "a-tipi"),
    },
    c: {
      title: "B Tipi İç Mimari",
      images: makeList("b", 27, "webp", "c-tipi"),
    },

  },
  footer: {
    footerBrandlogo: `${base}/brand/ozyalcinlogo.webp`,
  }
};
