const G = "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/u8udtywogw8ah62/";
const products = [
  {n:"Mini Ultra-Light Portable Air Pump",c:"Air Pump",e:"💨",d:"Compact USB-rechargeable pump for camping pads and air mattresses, with a built-in light.",i:"images/3",l:"https://s.click.aliexpress.com/e/_EGKoqMm"},
  {n:"UV Flashlight Blacklight 60W 365nm",c:"UV Flashlight",e:"🔦",d:"Rechargeable UV torch for camping, scorpion spotting and resin curing. USB Type-C charging.",i:G+"86888ffa92524e03bb19415ce1af922c/original/S4fb4b2188c48435e885a1a10df7dbd66u.jpg",l:"https://s.click.aliexpress.com/e/_EjIDWRy"},
  {n:"Portable Heating Stove",c:"Cooking & Protection",e:"🔥",d:"3500W outdoor water heater and winter camping stove.",l:"https://s.click.aliexpress.com/e/_c3cb2hTv"},
  {n:"BISINNA Portable Camping Gas Burner",c:"Cooking & Protection",e:"🍳",d:"3300W folding, lightweight gas burner for hiking, picnics and barbecue.",l:"https://s.click.aliexpress.com/e/_c3FgLAQ3"},
  {n:"Naturehike Mosquito Killer",c:"Cooking & Protection",e:"🦟",d:"Electric insect zapper light for the campsite.",l:"https://s.click.aliexpress.com/e/_c3KogegP"},
  {n:"Portable Folding Camping Stool",c:"Cooking & Protection",e:"🪑",d:"Shoulder-bag style folding stool with a storage bag, easy to carry.",l:"https://s.click.aliexpress.com/e/_c3lhal3V"},
  {n:"WESTTUNE Ultra-Light Camping Mattress",c:"WESTTUNE",e:"🛏️",d:"Self-inflating mat with a built-in pillow. Water-resistant and tear-proof.",i:G+"6630a3d2796245f89bb4986535307f3c/original/Screenshot-2026-08-04-201654.png",l:"https://s.click.aliexpress.com/e/_c3BetsYf"},
  {n:"Rechargeable Camping Fan with LED Light",c:"Rechargeable",e:"🔋",d:"50000mAh fan, power bank and hanging lantern in one, with remote control. Up to 100 hours.",i:G+"3ca6e2e9293f41be987171eaee28dad5/optimized/S112306a908bc47889cac7cf83358aeb4B.jpg_220x220q75.jpg_.avif",l:"https://s.click.aliexpress.com/e/_c34HxAbl"},
  {n:"tent outdoor",c:"Camp Comfort & Sleep",e:"⛺",d:"Quality Car Rear Automatic Camping Shelter SUV Car Rear Extended Tent Pop Up 4-6 Person Self Driving Beach Canopy Fishing Awning",l:"https://s.click.aliexpress.com/e/_c3Nmh9dN"},
  {n:"Naturehike Cotton Sleeping Bag",c:"Camp Comfort & Sleep",e:"🛌",d:"Ultralight sleeping bag with cotton lining for cold nights.",l:"https://s.click.aliexpress.com/e/_EHKHNPG"},
  {n:"Sleeping Bag Liner",c:"Camp Comfort & Sleep",e:"🧺",d:"Lightweight, breathable liner that adds warmth and keeps your bag clean.",l:"https://s.click.aliexpress.com/e/_c4n5VvQn"},
  {n:"50L Waterproof Backpack",c:"Camp Comfort & Sleep",e:"🎒",d:"Tactical backpack with ergonomic straps and multiple compartments.",l:"https://s.click.aliexpress.com/e/_c3wN7LVV"},
  {n:"Camping Hammock with Mosquito Net",c:"Camping Hammock",e:"🗻",d:"Parachute nylon hammock with an integrated mosquito net.",l:"https://s.click.aliexpress.com/e/_c4EQVVyb"},
  {n:"Outdoor Camping Pot 1.3L 2.3L ",c:"Cooking & Protection",e:"🫕",d:" Cookware Outdoor Cooking Kettle Set Heat Cooker Travel Tableware Tourist Kitchen Utensil Equipment. ",l:"https://s.click.aliexpress.com/e/_c4EQVVyb"},
  {n:"Naturehike Hiking Poles",c:"Camping Hammock",e:"🥾",d:"Lightweight, high-strength trekking poles for stability on rough trails.",l:"https://s.click.aliexpress.com/e/_c32Qqith"},
  {n:"HUMTTO Waterproof Hiking Shoes",c:"Camping Hammock",e:"👟",d:"Waterproof trail shoes with all-terrain grip.",l:"https://s.click.aliexpress.com/e/_c4Vbels3"},
  {n:"Camel Hiking Jacket",c:"Apparel",e:"🧥",d:"Soft shell, waterproof windbreaker for hiking, travel and cycling.",i:G+"2770e3ce921749eb8b07c7afbcc45725/optimized/1.avif",l:"https://s.click.aliexpress.com/e/_c3WxvTsx"},
  {n:"JNLN Fleece Winter Waterproof Outdoor Pants",c:"Apparel",e:"👖",d:"Thick thermal fleece, waterproof softshell pants for hiking and winter outdoor sports.",i:G+"561639780933407991553de6e1430632/original/Screenshot-2026-08-10-223816.png",l:"https://s.click.aliexpress.com/e/_c39esLmh"},
  {n:"Golden Camel Men's Hiking Shoes",c:"Apparel",e:"👟",d:"Breathable mesh, wear-resistant and splashproof climbing shoes.",i:G+"cfc1d862febe4c38aa6d04f3c589537c/original/Screenshot-2026-08-18-125055.png",l:"https://s.click.aliexpress.com/e/_c3hTR4aL"},
  {n:"JNLN Waterproof Outdoor Hiking Jacket",c:"Apparel",e:"🧥",d:"Waterproof, windproof breathable hiking jacket for outdoor adventures.",i:G+"82d0038e05fa44e385462a57c2660145/original/Screenshot-2026-08-12-114957.png",l:"https://s.click.aliexpress.com/e/_c33ohWA7"},
  {n:"UV Protection Hiking Hat",c:"Apparel",e:"👒",d:"UPF50+ quick-drying, waterproof bucket hat with adjustable fit.",i:G+"15d4e0c57d5a4204b7a07bef927c708c/original/Screenshot-2026-08-12-120958.png",l:"https://s.click.aliexpress.com/e/_c33GopdV"},
  {n:"Waterproof Camping Bucket Hat",c:"Apparel",e:"🎩",d:"Thin, stowable, sun-shading hat that dries fast.",i:G+"99ed0fcbd18844ad825c79493dbe4703/original/Screenshot-2026-08-12-121826.png",l:"https://s.click.aliexpress.com/e/_c3MijfFh"},
  {n:"Durable Inflatable Water Raft",c:"Water Raft",e:"🚣",d:"Puncture-resistant, non-slip raft for adults and kids. Easy to inflate and store.",i:G+"346d3b2a37604786ba2108cff415534b/original/Screenshot-2026-07-24-215758.png",l:"https://s.click.aliexpress.com/e/_c3wI0u6x"},
  {n:"XL-1 Off-Road Fat Bike",c:"Road Fat Bike",e:"🚲",d:"4.0 fat tires, dual shock absorption and variable speed for sand, snow and trails.",i:G+"c5f28fc504cd4f2aadd4b49bd5ebb38e/original/Screenshot-2026-07-26-163301.png",l:"https://s.click.aliexpress.com/e/_c450h0Pl"},
  {n:"Molle First Aid Kit (IFAK)", c:"Safety & Tools", e:"🩹", d:"Compact tactical medical pouch for camping, hiking and hunting. Molle-compatible, wears on a belt or backpack.",l:"https://s.click.aliexpress.com/e/_c3ieZ7x3"},
];


const WA = "https://wa.me/212688962517";
const FEATURED = [0, 1, 6, 7];
products.forEach((p, k) => { p.id = k; p.featured = FEATURED.includes(k); });

const T = {
  en: {}, ar: {
    search:"ابحث عن خيمة، حذاء، موقد...", contact:"تواصل", heroTitle:"معدات تذهب أبعد من الطريق.",
    heroText:"معدات تخييم وتسلق ومياه مختارة بعناية من بائعين موثوقين على AliExpress. اختر، اضغط، ويصلك الطلب.",
    browse:"تصفح المعدات", products:"منتج", rating:"تقييم البائعين", cats:"فئات",
    t1:"شحن سريع", t2:"دفع آمن عبر AliExpress", t3:"بائعون موثوقون",
    featured:"منتجات مميزة", all:"كل المنتجات", aboutT:"عن رحلات شوب",
    aboutP:"رحلات شوب مقره في طنجة، المغرب. نختار معدات الطبيعة من أفضل البائعين على AliExpress حتى لا تضيع بين آلاف المنتجات.",
    faqT:"أسئلة شائعة", q1:"هل تبيعون المنتجات مباشرة؟", a1:"لا. كل منتج يوجه إلى البائع على AliExpress، وهناك تدفع وتستلم طلبك.",
    q2:"كم يستغرق التوصيل؟", a2:"يحدده كل بائع، وتجد المدة المتوقعة في صفحة المنتج على AliExpress.",
    q3:"أحتاج مساعدة في الاختيار.", a3:"راسلنا على واتساب وسنساعدك.",
    contactT:"لنعمل معا", contactP:"عندك سؤال عن منتج أو طلب؟ تواصل معنا.",
    foot:"رحلات شوب يستعمل روابط الأفلييت. الأثمنة والشحن يحددهم البائعون على AliExpress.",
    shop:"اشتري من AliExpress", ask:"اسأل عبر واتساب", seePrice:"شاهد الثمن على AliExpress",
    favs:"المفضلة", favT:"مفضلتك", none:"لا توجد منتجات مطابقة.", close:"إغلاق"
  }
};
const D = {
  shop:"Shop on AliExpress", ask:"Ask on WhatsApp", seePrice:"See price on AliExpress",
  favs:"Favorites", none:"No products match your search.", close:"Close"
};
let lang = "en";
const t = k => (lang === "ar" && T.ar[k]) || D[k] || "";

const $ = id => document.getElementById(id);
const grid = $("grid"), filters = $("filters"), count = $("count"), search = $("q"), modal = $("modal");
const cats = ["All", ...new Set(products.map(p => p.c))];
let active = "All";
let favs = new Set();
try { favs = new Set(JSON.parse(localStorage.getItem("favs") || "[]")); } catch (e) {}
const saveFavs = () => { try { localStorage.setItem("favs", JSON.stringify([...favs])); } catch (e) {} };

const EXT = ["jpg", "jpeg", "png", "webp", "avif"];
function fb(img) {
  const x = +img.dataset.x + 1;
  if (x < EXT.length) { img.dataset.x = x; img.src = "images/" + img.dataset.n + "." + EXT[x]; return; }
  if (img.dataset.r && !img.dataset.t) { img.dataset.t = 1; img.src = img.dataset.r; return; }
  img.replaceWith(Object.assign(document.createElement("span"), { textContent: img.dataset.e }));
}
window.fb = fb;
const pic = p => '<img loading="lazy" alt="' + p.n + '" src="images/' + (p.id + 1) + '.jpg" data-n="' + (p.id + 1) + '" data-x="0" data-r="' + (p.i || "") + '" data-e="' + p.e + '" onerror="fb(this)">';
const price = p => p.price
  ? '<div class="price">' + (p.old ? "<s>" + p.old + "</s> " : "") + "<b>" + p.price + "</b></div>"
  : '<div class="price muted">' + t("seePrice") + "</div>";

function card(p) {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML =
    '<button class="pic" type="button" aria-label="' + p.n + '">' + pic(p) + '<span class="badge">' + p.c + "</span></button>" +
    '<button class="heart" type="button" aria-label="Favorite" aria-pressed="' + favs.has(p.id) + '">' + (favs.has(p.id) ? "♥" : "♡") + "</button>" +
    '<div class="body"><h2><button type="button" class="link">' + p.n + "</button></h2><p>" + p.d + "</p>" + price(p) +
    '<a class="buy" target="_blank" rel="noopener sponsored" href="' + p.l + '">' + t("shop") + "</a></div>";
  el.querySelectorAll(".pic,.link").forEach(b => b.onclick = () => openModal(p));
  el.querySelector(".heart").onclick = () => { favs.has(p.id) ? favs.delete(p.id) : favs.add(p.id); saveFavs(); render(); };
  return el;
}

function openModal(p) {
  const msg = encodeURIComponent("Hi, I'm interested in: " + p.n);
  modal.innerHTML =
    '<button class="x" type="button" aria-label="' + t("close") + '">×</button>' +
    '<div class="mpic">' + pic(p) + '</div><div class="mbody"><span class="cat">' + p.c + "</span><h2>" + p.n + "</h2><p>" + p.d + "</p>" + price(p) +
    '<a class="buy" target="_blank" rel="noopener sponsored" href="' + p.l + '">' + t("shop") + "</a>" +
    '<a class="buy wa" target="_blank" rel="noopener" href="' + WA + "?text=" + msg + '">' + t("ask") + "</a></div>";
  modal.querySelector(".x").onclick = () => modal.close();
  modal.showModal();
}
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

function render() {
  const q = search.value.trim().toLowerCase();
  const list = products.filter(p =>
    (active === "All" || (active === "♥" ? favs.has(p.id) : p.c === active)) &&
    (p.n + " " + p.d + " " + p.c).toLowerCase().includes(q));
  count.textContent = list.length + " / " + products.length;
  grid.innerHTML = list.length ? "" : '<p class="empty">' + t("none") + "</p>";
  list.forEach(p => grid.appendChild(card(p)));
  const fg = $("favGrid"), mine = products.filter(p => favs.has(p.id));
  fg.innerHTML = "";
  mine.forEach(p => fg.appendChild(card(p)));
  $("favSection").hidden = !mine.length;
  $("favLink").hidden = !mine.length;
  $("favCount").textContent = mine.length;
  const f = $("featured"); f.innerHTML = "";
  products.filter(p => p.featured).forEach(p => f.appendChild(card(p)));
  filters.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.c === active));
}

function buildFilters() {
  filters.innerHTML = "";
  cats.forEach(c => {
    const b = document.createElement("button");
    b.dataset.c = c;
    b.textContent = c === "All" ? (lang === "ar" ? "الكل" : "All") : c === "♥" ? "♥ " + t("favs") : c;
    b.onclick = () => { active = c; render(); };
    filters.appendChild(b);
  });
}

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("lang").textContent = lang === "ar" ? "EN" : "AR";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.dataset.en = el.dataset.en || el.textContent;
    el.textContent = lang === "ar" ? T.ar[el.dataset.i18n] : el.dataset.en;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.dataset.en = el.dataset.en || el.placeholder;
    el.placeholder = lang === "ar" ? T.ar[el.dataset.i18nPh] : el.dataset.en;
  });
  buildFilters(); render();
}
$("lang").onclick = () => { lang = lang === "ar" ? "en" : "ar"; applyLang(); };
search.addEventListener("input", render);
applyLang();
