const base = `${import.meta.env.BASE_URL}images/projects/solea`;
const makeList = (prefix, count, ext, folder) =>
  Array.from({ length: count }, (_, i) =>
    `${base}/${folder}/${prefix}${String(i + 1).padStart(2, "0")}.${ext}`
  );

export const solea = {
  key: "solea",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.2856318893623!2d33.37147835859385!3d35.32212399142038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de6b006e11bd69%3A0xfe5ec6d1bdc29911!2zU09MRUEgYnkgw5Z6eWFsw6fEsW4!5e0!3m2!1str!2str!4v1771844583544!5m2!1str!2str",
  mapUrl: "https://maps.app.goo.gl/Aed1q2MU45Jve6Hc8",
  slug: "solea",
  meta: {
    title: "SOLEA by Özyalçın",
    description: "Solea projesi detayları. Konum, özellikler, planlar ve görseller.",
  },

  header: {
    brandLogo: `${base}/brand/ozyalcinlogo.webp`,
    phone1: "+90 (392) 650 2900",
    phone1Href: "tel:+903926502900",
    phone2: "+90 (548) 850 2900",
    phone2Href: "tel:+905488502900",
  },

  hero: {
    projectLogo: `${base}/brand/SOLEA.webp`,
    lead: "Akdeniz’i yeniden keşfedin",
    info: [
      { k: "Şehir", v: "Girne" },
      { k: "Tapu", v: "Türk Tapulu" },
      { k: "Bölge", v: "Ozanköy" },
    ],
    bgImage: `${base}/proje/p14.webp`,
    strip: [
      `${base}/hero/h01.webp`,
      `${base}/proje/p17.webp`,
      `${base}/hero/h03.webp`,
      `${base}/hero/h04.webp`,
    ],
     miniCards: [
      { title: "Hızlı dönüş", text: "Genelde aynı gün dönüş." },
      { title: "Türk Tapulu", text: "Güvenli yatırım fırsatı." },
      { title: "Girne / Ozanköy", text: "Seçkin yaşam alanı." },
    ],
  },

  overview: {
    image: `${base}/proje/p01.webp`,
    title: "Genel Bakış",
    chips: ["Girne / Ozanköy", "Türk Tapulu", "Butik Proje"],
    text: "Ozanköy’ün büyüleyici doğasında yükselen Solea, Akdeniz mimarisini zeytin ağaçlarının huzur veren atmosferiyle buluşturan özel bir yaşam projesidir. 24 villadan oluşan Türk koçanlı projede, doğal malzemelerle tasarlanmış geniş iç mekanlar ve ferah teraslar; modern konforu doğanın ışığı ve dinginliğiyle tamamlar.",
    kpis: [
      { val: "4.000 m²", lbl: "Proje alanı" },
      { val: "10 Villa", lbl: "A / B / C Tipi" },
      { val: "6+1/4+1", lbl: "2 ve 3 katlı plan" },
    ],
  },

  form: {
  scriptUrl: "https://script.google.com/macros/s/AKfycbz5kBJxfQVy8hBXjCNuxdlAbE7XLIHfduCfs371iUOy3lrfObij1piFFL8an8wp4N7n/exec"
},

  catalog: {
    pdfUrl:`${import.meta.env.BASE_URL}catalogs/solea.pdf`,
  },

  features: {
    title: "Proje Özellikleri",
    subtitle: "Solea projesinin öne çıkan özellikleri.",
    items: [
     "Projede yer alan A tipi villa 6+1, B ve C tipi villalar ise 4+1 şeklindedir.",
     "Tüm yatak odaları en-suit’tir.",
     "Villalarda havuzlu ve havuzsuz seçenekler mevcuttur.",
     "Tüm villalarımız deniz manzaralıdır."

    ],
    ctaText: "Detaylı Bilgi Al",
    ctaHref: "#iletisim",
  },

  plans: {
    title: "Vaziyet Planı",
    image: `${base}/plan/plan.webp`,
  },

  floorPlans: {
  mainTitle: "-Kat Planları-",
  aTitle: "A Kat Planları",
  bTitle: "B Kat Planları",
  cTitle: "C Kat Planları",
  aImages: [
    `${base}/floor-plans/a01.webp`,
    `${base}/floor-plans/a02.webp`,
    `${base}/floor-plans/a03.webp`,
  ],
  bImages: [
    `${base}/floor-plans/b01.webp`,
    `${base}/floor-plans/b02.webp`,
    `${base}/floor-plans/b03.webp`,
    `${base}/floor-plans/b04.webp`,
    `${base}/floor-plans/b05.webp`,
    `${base}/floor-plans/b06.webp`,
  ],
  cImages: [
    `${base}/floor-plans/c01.webp`,
    `${base}/floor-plans/c02.webp`,
    `${base}/floor-plans/c03.webp`,
    `${base}/floor-plans/c04.webp`,
  ],
},
  sliders: {
    dis: {
      title: "Proje Fotoğrafları",
        images: makeList("p", 24, "webp", "proje"),
    },
    a: {
      title: "A Tipi İç Mimari",
      images: makeList("a", 27, "webp", "a-tipi"),
    },
    c: {
      title: "B/C Tipi İç Mimari",
      images: makeList("c", 22, "webp", "c-tipi"),
    },
  },
  footer: {
    footerBrandlogo: `${base}/brand/ozyalcinlogo.webp`,
  }
};
