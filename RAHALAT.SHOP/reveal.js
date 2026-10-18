(function () {
  if (!("IntersectionObserver" in window)) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var seen = {};
  var io = new IntersectionObserver(function (entries) {
    var i = 0;
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.style.setProperty("--d", Math.min(i++, 5) * 0.08 + "s");
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  function watch(grid) {
    grid.querySelectorAll(".card:not(.reveal)").forEach(function (card) {
      var h = card.querySelector("h2");
      var key = grid.id + "|" + (h ? h.textContent : "");
      if (seen[key]) { card.classList.add("reveal", "in"); card.style.animation = "none"; return; }
      seen[key] = true;
      card.classList.add("reveal");
      io.observe(card);
    });
  }

  ["featured", "favGrid", "grid"].forEach(function (id) {
    var g = document.getElementById(id);
    if (!g) return;
    watch(g);
    new MutationObserver(function () { watch(g); }).observe(g, { childList: true });
  });
})();