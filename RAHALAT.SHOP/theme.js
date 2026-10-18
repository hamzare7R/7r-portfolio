(function () {
  var btn = document.getElementById("theme");
  if (!btn) return;
  function set(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
    try { localStorage.setItem("theme", mode); } catch (e) {}
  }
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  var prefersDark = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  set(saved || (prefersDark ? "dark" : "light"));
  btn.addEventListener("click", function () {
    set(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
})();
