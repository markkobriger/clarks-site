window.PrimeSite = (() => {
  function toggleNav() {
    const nav = document.getElementById("nav");
    const btn = document.getElementById("navToggle");
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }

  function wireNav() {
    const btn = document.getElementById("navToggle");
    const nav = document.getElementById("nav");
    if (!btn || !nav) return;

    btn.addEventListener("click", toggleNav);

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        nav.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-label", "Open menu");
      }
    });
  }

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = (form.elements.namedItem("name").value || "").trim();
    const phone = (form.elements.namedItem("phone").value || "").trim();
    const msg = (form.elements.namedItem("message").value || "").trim();

    const text = [
      "Hi Prime Maintenance,",
      "",
      "I would like a quote.",
      `Name: ${name}`,
      `My phone: ${phone}`,
      "",
      msg
    ].join("\n");

    const smsUrl = "sms:+19206190801?&body=" + encodeURIComponent(text);
    window.location.href = smsUrl;
    return false;
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireNav();
    setYear();
  });

  return { handleSubmit };
})();
