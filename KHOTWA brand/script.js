// Khotwa landing page: language switcher (AR / EN) and the staircase intro

const translations = {
  ar: {
    skip: "انتقل إلى المحتوى",
    brand: "خطوة",
    "nav.how": "كيف نشتغل",
    "nav.programs": "البرامج",
    "nav.faq": "أسئلة شائعة",
    "cta.header": "احجز مكالمة",

    "hero.title": "ابدأ بخطوة واحدة اليوم.",
    "hero.text": "برامج تمارين وتغذية للمبتدئين، مع متابعة أسبوعية تعدّل الخطة حسب تقدمك.",
    "hero.primary": "احجز مكالمة مجانية",
    "hero.secondary": "تصفح البرامج",
    "facts.time": "من 30 دقيقة في اليوم",
    "facts.equipment": "بدون معدات في البداية",
    "facts.checkin": "متابعة كل أسبوع",
    "stairs.label": "رسم يوضح 8 أسابيع من التقدم",
    "stairs.caption": "تقدّم تدريجي، أسبوع بعد أسبوع",

    "how.title": "ثلاث خطوات فقط",
    "how.s1.title": "مكالمة تعارف",
    "how.s1.text": "15 دقيقة نحدد فيها هدفك ومستواك والوقت المتاح لك.",
    "how.s2.title": "برنامجك الخاص",
    "how.s2.text": "تتوصل ببرنامج تمارين ودليل تغذية بسيط، مكتوبين لمستواك.",
    "how.s3.title": "متابعة أسبوعية",
    "how.s3.text": "كل أسبوع ترسل تقدمك، وأعدّل لك الأسبوع الجاي.",

    "programs.title": "اختر مدة برنامجك",
    "programs.note": "الأسعار هنا أمثلة لهذا المشروع التصوري.",
    "plan.choose": "اختر هذا البرنامج",
    "plan.selected": "تم الاختيار",
    "summary.label": "البرنامج المختار:",
    "summary.continue": "تابع للحجز",
    "wa.message": "السلام عليكم، بغيت برنامج {plan}.",
    "plan1.name": "ابدأ",
    "plan1.length": "4 أسابيع",
    "plan1.price": "199 درهم",
    "plan1.f1": "3 حصص في الأسبوع",
    "plan1.f2": "دليل تغذية بسيط",
    "plan1.f3": "متابعة مرة في الأسبوع",
    "plan2.flag": "موصى به للمبتدئين",
    "plan2.name": "تقدّم",
    "plan2.length": "8 أسابيع",
    "plan2.price": "349 درهم",
    "plan2.f1": "كل ما في برنامج ابدأ",
    "plan2.f2": "تعديل البرنامج كل أسبوع",
    "plan2.f3": "تمارين للبيت أو للنادي",
    "plan3.name": "التزام",
    "plan3.length": "12 أسبوعًا",
    "plan3.price": "499 درهم",
    "plan3.f1": "كل ما في برنامج تقدّم",
    "plan3.f2": "دردشة للأسئلة بين المتابعات",
    "plan3.f3": "مراجعة شهرية للأهداف",

    "faq.title": "أسئلة شائعة",
    "faq.q1": "هل احتاج الى نادي رياضي؟",
    "faq.a1": " لا، تتضمن البرامج خيارات للتدريب في المنزل بمعدات بسيطة أو بدونها، بالإضافة إلى خيارات مخصصة للنادي الرياضي إذا كنت مشتركاً.",

    "faq.q2": "كم احتاج من الوقت؟",
    "faq.a2": "تتراوح مدة الحصة بين 30 و 45 دقيقة، بمعدل ثلاثة أيام في الأسبوع في البداية.",

    "faq.q3": "هل مناسب للمبتدئين؟",
    "faq.a3": "نعم، كل تمرين متبوع بشرح مفصل، وستبدأ بالتدرج وفقاً لمستواك الحالي.",

    "faq.q4": "كيف تكون المتابعة الأسبوعية؟",
    "faq.a4": "ترسل تقرير تقدمك وتجيب عن أسئلة قصيرة مرة واحدة في الأسبوع، وبناءً على ذلك أعدّل لك خطة الأسبوع القادم.",

    "faq.health": "قبل البدء، استشر طبيبك إذا كانت عندك أي حالة صحية.",

    "contact.title": "جاهز للخطوة الأولى؟",
    "contact.text": "احجز مكالمة تعارف مجانية مدتها 15 دقيقة، بلا التزام.",
    "contact.whatsapp": "تواصل عبر واتساب",
    "contact.email": "أرسل بريدًا",

    "footer.concept": "مشروع تصوري: علامة خيالية صمّمها وبرمجها حمزة ر."
  },

  en: {
    skip: "Skip to content",
    brand: "Khotwa",
    "nav.how": "How it works",
    "nav.programs": "Programs",
    "nav.faq": "FAQ",
    "cta.header": "Book a call",

    "hero.title": "Start with one step today.",
    "hero.text": "Workout and nutrition programs for beginners, with a weekly check-in that adjusts the plan to your progress.",
    "hero.primary": "Book a free intro call",
    "hero.secondary": "See the programs",
    "facts.time": "From 30 minutes a day",
    "facts.equipment": "No equipment needed to start",
    "facts.checkin": "A check-in every week",
    "stairs.label": "Chart showing 8 weeks of progress",
    "stairs.caption": "Progress, one week at a time",

    "how.title": "Three steps, that's all",
    "how.s1.title": "Intro call",
    "how.s1.text": "15 minutes to talk about your goal, your level, and the time you have.",
    "how.s2.title": "Your own plan",
    "how.s2.text": "You get a workout plan and a simple nutrition guide, written for your level.",
    "how.s3.title": "Weekly check-in",
    "how.s3.text": "Each week you send your progress, and I adjust the next week for you.",

    "programs.title": "Pick your program length",
    "programs.note": "Prices here are samples for this concept project.",
    "plan.choose": "Choose this program",
    "plan.selected": "Selected",
    "summary.label": "Selected program:",
    "summary.continue": "Continue to booking",
    "wa.message": "Hi, I'd like the {plan} program.",
    "plan1.name": "Start",
    "plan1.length": "4 weeks",
    "plan1.price": "199 MAD",
    "plan1.f1": "3 workouts a week",
    "plan1.f2": "Simple nutrition guide",
    "plan1.f3": "One check-in a week",
    "plan2.flag": "Recommended for beginners",
    "plan2.name": "Progress",
    "plan2.length": "8 weeks",
    "plan2.price": "349 MAD",
    "plan2.f1": "Everything in Start",
    "plan2.f2": "Plan adjusted every week",
    "plan2.f3": "Home or gym options",
    "plan3.name": "Commit",
    "plan3.length": "12 weeks",
    "plan3.price": "499 MAD",
    "plan3.f1": "Everything in Progress",
    "plan3.f2": "Chat for questions between check-ins",
    "plan3.f3": "Monthly goal review",

    "faq.title": "Common questions",
    "faq.q1": "Do I need a gym?",
    "faq.a1": "No. The programs include home options with little or no equipment, and gym options if you have a membership.",
    "faq.q2": "How much time do I need?",
    "faq.a2": "30 to 45 minutes, three days a week to start.",
    "faq.q3": "Is it right for complete beginners?",
    "faq.a3": "Yes. Every exercise is explained, and you start from your current level.",
    "faq.q4": "How does the weekly check-in work?",
    "faq.a4": "Once a week you send your progress and answer a few short questions, and I adjust your plan for the next week.",
    "faq.health": "Before you start, check with your doctor if you have any health condition.",

    "contact.title": "Ready for your first step?",
    "contact.text": "Book a free 15-minute intro call, with no commitment.",
    "contact.whatsapp": "Message on WhatsApp",
    "contact.email": "Send an email",

    "footer.concept": "Concept project: a fictional brand designed and built by Hamza R."
  }
};

const SUPPORTED_LANGS = ["ar", "en"];
const pageTitles = {
  ar: "Khotwa | خطوة – مشروع تصوري لتدريب لياقة أونلاين",
  en: "Khotwa | خطوة – Online fitness coaching (Concept)"
};

const langButtons = document.querySelectorAll(".lang-btn");
const stairs = document.getElementById("stairs");
const planCards = document.querySelectorAll(".plan");
const selectedPlanName = document.getElementById("selectedPlanName");
const whatsappLink = document.querySelector('a[href^="https://wa.me/"]');
const whatsappBase = whatsappLink ? whatsappLink.getAttribute("href").split("?")[0] : null;

let currentLang = "ar";
let selectedPlan = "2";

function getInitialLanguage() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (SUPPORTED_LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("khotwa-lang");
    if (SUPPORTED_LANGS.includes(saved)) return saved;
  } catch (e) {}
  return "ar";
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  const t = translations[lang];
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = pageTitles[lang];

  try {
    localStorage.setItem("khotwa-lang", lang);
  } catch (e) {}

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = t[el.dataset.i18n];
    if (text) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const text = t[el.dataset.i18nAria];
    if (text) el.setAttribute("aria-label", text);
  });

  langButtons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  renderSelection();
}

// Plan selection: the chosen plan turns lime and is carried into the WhatsApp message
function renderSelection() {
  const t = translations[currentLang];
  const planName = t["plan" + selectedPlan + ".name"];
  const planLength = t["plan" + selectedPlan + ".length"];

  if (selectedPlanName) {
    selectedPlanName.textContent = planName + " (" + planLength + ")";
  }

  if (whatsappLink && whatsappBase) {
    const message = t["wa.message"].replace("{plan}", planName);
    whatsappLink.setAttribute("href", whatsappBase + "?text=" + encodeURIComponent(message));
  }
}

function selectPlan(id) {
  selectedPlan = id;
  planCards.forEach((card) => {
    const active = card.dataset.plan === id;
    card.classList.toggle("is-selected", active);
    const button = card.querySelector(".plan-btn");
    if (button) button.setAttribute("aria-pressed", active ? "true" : "false");
  });
  renderSelection();
}

planCards.forEach((card) => {
  const button = card.querySelector(".plan-btn");
  if (button) button.addEventListener("click", () => selectPlan(card.dataset.plan));
});

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(getInitialLanguage());

// The bars rise once, in order, right after the page is ready
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    if (stairs) stairs.classList.add("is-ready");
  });
});





// نظام تبديل الوضع النهاري والداكن (Dark / Light Mode)
const themeToggle = document.getElementById("themeToggle");

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("khotwa-theme");
    if (savedTheme) return savedTheme;
  } catch (e) {}
  return "dark"; // الوضع الافتراضي داكن
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("khotwa-theme", theme);
  } catch (e) {}
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "light" ? "dark" : "light");
  });
}

// تطبيق الوضع عند فتح الصفحة
setTheme(getInitialTheme());