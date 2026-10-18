/* ===== INTRO ANIMATION (shows when the store opens) ===== */
(function () {
  /* ---------- SETTINGS ---------- */
  var SHOW_EVERY_TIME = false;  // false = once per visit | true = every time the page loads
  var DURATION = 2600;          // how long the intro stays (milliseconds)
  var TITLE = "RAHALAT SHOP";
  var TAGLINE = "Gear for every trail, camp and summit.";
  var LOGO = "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/https://cdn.gamma.app/u8udtywogw8ah62/118fa53836d04482bfbeda97febf7bfd/original/gamma.jpeg";
  /* Tip: add ?intro at the end of the page link to force it, for testing. */

  var root = document.documentElement;
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var force = /[?&]intro\b/.test(location.search);
  var seen = false;
  try { seen = sessionStorage.getItem("introSeen") === "1"; } catch (e) {}
  if (reduce || (!force && !SHOW_EVERY_TIME && seen)) return;
  try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}

  var css =
    "html.intro-on{overflow:hidden}" +
    ".intro-on .card.reveal.in{animation-play-state:paused}" +
    "#intro{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;background:#0f1b2d;color:#f7f4ee;font-family:Outfit,Poppins,Arial,sans-serif;cursor:pointer;transition:transform .85s cubic-bezier(.7,0,.2,1)}" +
    "#intro::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 30% 20%,#2f80ed55,transparent 45%),radial-gradient(circle at 75% 80%,#ff6b4a44,transparent 45%)}" +
    "#intro.out{transform:translateY(-100%)}" +
    "#intro .box{position:relative;display:grid;gap:20px;justify-items:center;text-align:center;padding:0 24px}" +
    "#intro img{width:104px;height:104px;border-radius:50%;object-fit:cover;animation:i-pop .8s cubic-bezier(.34,1.56,.64,1) both,i-ring 1.6s ease-out .7s infinite}" +
    "#intro h1{display:flex;flex-wrap:wrap;justify-content:center;font-size:clamp(2rem,9vw,3.6rem);font-weight:800;letter-spacing:.04em;line-height:1}" +
    "#intro h1 span{display:inline-block;opacity:0;transform:translateY(26px);animation:i-up .55s cubic-bezier(.2,.7,.2,1) forwards}" +
    "#intro h1 .dot{color:#ff6b4a}" +
    "#intro p{opacity:0;color:#9fb2cc;font-size:clamp(.85rem,3.4vw,1.05rem);letter-spacing:.12em;text-transform:uppercase;animation:i-fade .6s ease 1.4s forwards}" +
    "#intro .bar{width:170px;height:3px;border-radius:3px;background:#ffffff22;overflow:hidden}" +
    "#intro .bar i{display:block;height:100%;width:0;background:#ff6b4a;animation:i-bar " + (DURATION - 300) + "ms ease-in-out forwards}" +
    "@keyframes i-pop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}" +
    "@keyframes i-ring{from{box-shadow:0 0 0 0 #ff6b4a99}to{box-shadow:0 0 0 30px #ff6b4a00}}" +
    "@keyframes i-up{to{opacity:1;transform:none}}" +
    "@keyframes i-fade{to{opacity:1}}" +
    "@keyframes i-bar{to{width:100%}}";

  function start() {
    var st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);

    var letters = TITLE.split("").map(function (c, i) {
      return '<span style="animation-delay:' + (0.55 + i * 0.05) + 's">' + (c === " " ? "&nbsp;" : c) + "</span>";
    }).join("") + '<span class="dot" style="animation-delay:1.25s">.</span>';

    var el = document.createElement("div");
    el.id = "intro";
    el.innerHTML = '<div class="box"><img src="' + LOGO + '" alt="" onerror="this.style.display=\'none\'">' +
      "<h1>" + letters + "</h1><p>" + TAGLINE + '</p><div class="bar"><i></i></div></div>';
    document.body.appendChild(el);
    root.classList.add("intro-on");

    var closed = false;
    function close() {
      if (closed) return;
      closed = true;
      root.classList.remove("intro-on");
      el.classList.add("out");
      setTimeout(function () { el.remove(); }, 900);
    }
    el.addEventListener("click", close);
    setTimeout(close, DURATION);
  }

  if (document.body) start();
  else document.addEventListener("DOMContentLoaded", start);
})();
