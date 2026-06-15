/* =========================================================
   Anghell.ink — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Category labels (single source for filters + overlays) ---------- */
  var CAT = {
    fineline:   { en: "Fine Line",  ro: "Linie fină" },
    blackwork:  { en: "Blackwork",  ro: "Blackwork" },
    botanical:  { en: "Botanical",  ro: "Botanic" },
    lettering:  { en: "Lettering",  ro: "Caligrafie" },
    ornamental: { en: "Ornamental", ro: "Ornamental" }
  };

  /* ---------- Translations (values may contain HTML) ---------- */
  var I18N = {
    en: {
      "cursor.look": "look closer",
      "nav.work": "Work", "nav.studio": "Studio", "nav.request": "Request a Session",
      "hero.eyebrow": "Fine-art tattoo · Romania",
      "hero.line": "Black ink and <em>light</em>. Few lines — each one <em>carried for life</em>.",
      "hero.enter": "Enter the gallery", "hero.request": "Request a session", "hero.scroll": "scroll",
      "work.eyebrow": "01 — Portfolio",
      "work.title": "The work, <span class=\"ital\">one piece at a time.</span>",
      "work.sub": "By hand, not by volume. One true line says more than ten.",
      "filter.all": "All", "filter.fineline": "Fine Line", "filter.blackwork": "Blackwork",
      "filter.botanical": "Botanical", "filter.lettering": "Lettering", "filter.ornamental": "Ornamental",
      "statement.cap": "Alina Anghel — studio, Bucharest",
      "statement.eyebrow": "02 — Statement",
      "statement.quote": "<p>A line is a decision you carry for life. So I make <em>few</em> — and I make them slowly.</p>",
      "statement.body": "<p>I work where the devotional meets the anatomical — feathers, thorns, the quiet geometry of the body.</p><p>Few projects. Each one a conversation, then a drawing made for you alone. Never repeated.</p>",
      "statement.link": "Request to work together",
      "drops.eyebrow": "03 — Flash",
      "drops.title": "Limited <span class=\"ital\">drops.</span>",
      "drops.sub": "Ready-made designs, in small editions. Each is worn once, then gone.",
      "drop1.meta": "Fine line · forearm", "drop2.meta": "Blackwork · sternum", "drop3.meta": "Ornamental · spine",
      "drop.available": "Available · 1 of 1", "drop.claimed": "Claimed",
      "request.eyebrow": "04 — Access",
      "request.title": "Request a <span class=\"ital\">session.</span>",
      "request.copy": "<p>I open few slots each season. Tell me the idea, where it sits, the size — and what it should feel like.</p><p>I read every request myself. If we're a match, you'll get the next steps. No rush.</p>",
      "request.n1k": "Studio", "request.n1v": "Bucharest · by appointment",
      "request.n2k": "Takes on", "request.n2v": "Fine line · blackwork · botanical · ornamental",
      "request.n3k": "Waitlist", "request.n3v": "typically 6–10 weeks",
      "form.name": "Your name", "form.email": "Email", "form.placement": "Placement", "form.size": "Approx. size",
      "form.idea": "The idea", "form.dates": "Preferred dates <span class=\"field__opt\">(optional)</span>",
      "form.submit": "Send request",
      "form.placement.ph": "e.g. forearm", "form.size.ph": "e.g. 12 cm",
      "form.idea.ph": "What do you have in mind, and what should it feel like?",
      "form.dates.ph": "Any timing that suits you",
      "footer.city": "Bucharest, RO", "footer.copy": "All work original.",
      "form.err": "Please add your name, a valid email, and your idea.",
      "form.ok": "Opening your mail client… if nothing happens, write to hello@anghell.ink."
    },
    ro: {
      "cursor.look": "privește mai atent",
      "nav.work": "Lucrări", "nav.studio": "Atelier", "nav.request": "Cere o ședință",
      "hero.eyebrow": "Tatuaj fine-art · România",
      "hero.line": "Cerneală neagră și <em>lumină</em>. Puține linii — fiecare, <em>purtată o viață</em>.",
      "hero.enter": "Intră în galerie", "hero.request": "Cere o ședință", "hero.scroll": "derulează",
      "work.eyebrow": "01 — Portofoliu",
      "work.title": "Lucrările, <span class=\"ital\">una câte una.</span>",
      "work.sub": "După mână, nu după volum. O linie adevărată spune mai mult decât zece.",
      "filter.all": "Toate", "filter.fineline": "Linie fină", "filter.blackwork": "Blackwork",
      "filter.botanical": "Botanic", "filter.lettering": "Caligrafie", "filter.ornamental": "Ornamental",
      "statement.cap": "Alina Anghel — atelier, București",
      "statement.eyebrow": "02 — Declarație",
      "statement.quote": "<p>O linie e o decizie pe care o porți o viață. De aceea trasez <em>puține</em> — și le trasez încet.</p>",
      "statement.body": "<p>Lucrez acolo unde sacrul întâlnește anatomicul — pene, spini, geometria tăcută a corpului.</p><p>Puține proiecte. Fiecare, o conversație, apoi un desen făcut doar pentru tine. Niciodată repetat.</p>",
      "statement.link": "Hai să lucrăm împreună",
      "drops.eyebrow": "03 — Flash",
      "drops.title": "Ediții <span class=\"ital\">limitate.</span>",
      "drops.sub": "Desene gata făcute, în ediții mici. Fiecare se poartă o singură dată, apoi dispare.",
      "drop1.meta": "Linie fină · antebraț", "drop2.meta": "Blackwork · stern", "drop3.meta": "Ornamental · coloană",
      "drop.available": "Disponibil · 1 din 1", "drop.claimed": "Rezervat",
      "request.eyebrow": "04 — Acces",
      "request.title": "Cere o <span class=\"ital\">ședință.</span>",
      "request.copy": "<p>Deschid puține locuri pe sezon. Spune-mi ideea, unde stă pe corp, mărimea — și ce ar trebui să simtă.</p><p>Citesc fiecare cerere personal. Dacă ne potrivim, primești pașii următori. Fără grabă.</p>",
      "request.n1k": "Atelier", "request.n1v": "București · pe bază de programare",
      "request.n2k": "Lucrează", "request.n2v": "Linie fină · blackwork · botanic · ornamental",
      "request.n3k": "Așteptare", "request.n3v": "de regulă 6–10 săptămâni",
      "form.name": "Numele tău", "form.email": "Email", "form.placement": "Plasare", "form.size": "Mărime aprox.",
      "form.idea": "Ideea", "form.dates": "Date preferate <span class=\"field__opt\">(opțional)</span>",
      "form.submit": "Trimite cererea",
      "form.placement.ph": "ex. antebraț", "form.size.ph": "ex. 12 cm",
      "form.idea.ph": "Ce ai în minte și ce senzație ar trebui să transmită?",
      "form.dates.ph": "Orice perioadă ți se potrivește",
      "footer.city": "București, RO", "footer.copy": "Toate lucrările originale.",
      "form.err": "Adaugă numele, un email valid și ideea ta.",
      "form.ok": "Se deschide aplicația de email… dacă nu se întâmplă nimic, scrie la hello@anghell.ink."
    }
  };

  var lang = (document.documentElement.lang === "ro") ? "ro" : "en";
  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.en[key]) || ""; }

  /* ---------- Portfolio data ----------
     Drop real photos into assets/gallery/<file> and they appear automatically. */
  var PIECES = [
    { file: "fineline-01.jpg",   title: "Veil",          cat: "fineline",   h: 1.30 },
    { file: "blackwork-01.jpg",  title: "Thorned Halo",  cat: "blackwork",  h: 1.50 },
    { file: "botanical-01.jpg",  title: "Nightshade",    cat: "botanical",  h: 1.20 },
    { file: "ornamental-01.jpg", title: "Reliquary",     cat: "ornamental", h: 1.45 },
    { file: "fineline-02.jpg",   title: "Seraph I",      cat: "fineline",   h: 1.18 },
    { file: "lettering-01.jpg",  title: "Memento",       cat: "lettering",  h: 1.00 },
    { file: "blackwork-02.jpg",  title: "Eclipse",       cat: "blackwork",  h: 1.35 },
    { file: "botanical-02.jpg",  title: "Wormwood",      cat: "botanical",  h: 1.48 },
    { file: "ornamental-02.jpg", title: "Filigree",      cat: "ornamental", h: 1.22 },
    { file: "fineline-03.jpg",   title: "Fallen Feather",cat: "fineline",   h: 1.42 },
    { file: "lettering-02.jpg",  title: "Sic Itur",      cat: "lettering",  h: 1.05 },
    { file: "blackwork-03.jpg",  title: "Mourning",      cat: "blackwork",  h: 1.28 }
  ];

  function catLabel(cat) { return (CAT[cat] && CAT[cat][lang]) || cat; }

  /* ---------- Inline SVG placeholder ---------- */
  function makePlaceholder(title, label, ratio) {
    var w = 600, h = Math.round(600 * ratio);
    var svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '">' +
        '<rect width="100%" height="100%" fill="#121214"/>' +
        '<g fill="none" stroke="#2a2a2e" stroke-width="1">' +
          '<line x1="0" y1="' + (h/2) + '" x2="' + w + '" y2="' + (h/2) + '"/>' +
          '<line x1="' + (w/2) + '" y1="0" x2="' + (w/2) + '" y2="' + h + '"/>' +
          '<circle cx="' + (w/2) + '" cy="' + (h/2) + '" r="60"/>' +
        '</g>' +
        '<text x="50%" y="' + (h/2 - 6) + '" fill="#5E5C58" font-family="Georgia, serif" font-size="30" font-style="italic" text-anchor="middle">' + title + '</text>' +
        '<text x="50%" y="' + (h/2 + 26) + '" fill="#3d3d40" font-family="Inter, sans-serif" font-size="12" letter-spacing="4" text-anchor="middle">' + (label || "").toUpperCase() + '</text>' +
      '</svg>';
    return "url(\"data:image/svg+xml," + encodeURIComponent(svg) + "\")";
  }

  /* Resolve a background: try real photo, fall back to placeholder. */
  function resolveBg(el, path, title, label, ratio) {
    el.style.backgroundImage = makePlaceholder(title, label, ratio);
    var probe = new Image();
    probe.onload = function () { el.style.backgroundImage = 'url("' + path + '")'; };
    probe.src = path;
  }

  /* ---------- Build gallery ---------- */
  var gallery = document.getElementById("gallery");
  PIECES.forEach(function (p, i) {
    var art = document.createElement("div");
    art.className = "piece reveal";
    art.dataset.cat = p.cat;
    art.dataset.index = i;
    art.setAttribute("role", "button");
    art.setAttribute("tabindex", "0");
    art.setAttribute("aria-label", p.title + " — " + catLabel(p.cat) + ", view larger");

    var media = document.createElement("div");
    media.className = "piece__media";
    media.style.aspectRatio = "1 / " + p.h;

    var overlay = document.createElement("div");
    overlay.className = "piece__overlay";
    overlay.innerHTML =
      '<span class="piece__title">' + p.title + '</span>' +
      '<span class="piece__cat">' + catLabel(p.cat) + '</span>';

    art.appendChild(media);
    art.appendChild(overlay);
    gallery.appendChild(art);

    resolveBg(media, "assets/gallery/" + p.file, p.title, catLabel(p.cat), p.h);

    art.addEventListener("click", function () { openLightbox(i); });
    art.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); }
    });
  });

  /* ---------- Filters ---------- */
  var filters = document.querySelectorAll(".filter");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      var f = btn.dataset.filter;
      document.querySelectorAll(".piece").forEach(function (piece) {
        piece.classList.toggle("is-hidden", !(f === "all" || piece.dataset.cat === f));
      });
    });
  });

  /* ---------- Hero / portrait / drop images ---------- */
  document.querySelectorAll("[data-img]").forEach(function (el) {
    var key = el.dataset.img;
    var map = {
      "hero":     { path: "assets/img/hero.jpg",            title: "Hero",          label: "Anghell.ink", r: 0.6 },
      "portrait": { path: "assets/img/alina-portrait.jpg",  title: "Alina Anghel",  label: "Portrait",    r: 1.25 },
      "drop-1":   { path: "assets/gallery/fineline-02.jpg",  title: "Seraph I",       label: "Fine Line",  r: 1.33 },
      "drop-2":   { path: "assets/gallery/blackwork-01.jpg", title: "Thorned Halo",   label: "Blackwork",  r: 1.33 },
      "drop-3":   { path: "assets/gallery/fineline-03.jpg",  title: "Fallen Feather", label: "Ornamental", r: 1.33 }
    };
    var m = map[key];
    if (!m) return;
    var target = el.classList.contains("drop") ? el.querySelector(".drop__media") : el;
    if (target) resolveBg(target, m.path, m.title, m.label, m.r);
  });

  /* ---------- Lightbox ---------- */
  var lb = document.getElementById("lightbox");
  var lbMedia = document.getElementById("lbMedia");
  var lbCap = document.getElementById("lbCap");
  var current = 0;

  function visibleIndexes() {
    return Array.prototype.filter.call(document.querySelectorAll(".piece"), function (p) {
      return !p.classList.contains("is-hidden");
    }).map(function (el) { return parseInt(el.dataset.index, 10); });
  }
  function openLightbox(index) {
    current = index;
    renderLightbox();
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function renderLightbox() {
    var p = PIECES[current];
    lbMedia.style.backgroundImage = makePlaceholder(p.title, catLabel(p.cat), 1.33);
    var probe = new Image();
    probe.onload = function () { lbMedia.style.backgroundImage = 'url("assets/gallery/' + p.file + '")'; };
    probe.src = "assets/gallery/" + p.file;
    lbCap.innerHTML = p.title + "<small>" + catLabel(p.cat) + "</small>";
  }
  function closeLightbox() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function step(dir) {
    var idxList = visibleIndexes();
    if (!idxList.length) return;
    var pos = idxList.indexOf(current);
    pos = (pos + dir + idxList.length) % idxList.length;
    current = idxList[pos];
    renderLightbox();
  }
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", function () { step(-1); });
  document.getElementById("lbNext").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  /* ---------- Scroll reveals ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  /* ---------- Nav: scrolled state + mobile toggle ---------- */
  var nav = document.getElementById("nav");
  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 40); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Custom reticle cursor ---------- */
  var reticle = document.querySelector(".reticle");
  if (window.matchMedia("(pointer: fine)").matches) {
    var rx = 0, ry = 0, tx = 0, ty = 0, raf = null;
    document.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!document.body.classList.contains("cursor-active")) document.body.classList.add("cursor-active");
      if (!raf) loop();
    });
    function loop() {
      rx += (tx - rx) * 0.2; ry += (ty - ry) * 0.2;
      reticle.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
      raf = requestAnimationFrame(loop);
    }
    document.addEventListener("mouseleave", function () { document.body.classList.remove("cursor-active"); });
    document.querySelectorAll(".piece, .drop, .statement__portrait").forEach(function (el) {
      el.addEventListener("mouseenter", function () { reticle.classList.add("is-hover"); });
      el.addEventListener("mouseleave", function () { reticle.classList.remove("is-hover"); });
    });
    // the nav is an inverted band → flip the reticle colour while over it
    nav.addEventListener("mouseenter", function () { document.body.classList.add("reticle-on-nav"); });
    nav.addEventListener("mouseleave", function () { document.body.classList.remove("reticle-on-nav"); });
  }

  /* ---------- Dark / light theme (default: light) ---------- */
  var themeToggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    if (theme === "dark") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "light");
    try { localStorage.setItem("anghell-theme", theme); } catch (e) {}
    var dark = theme === "dark";
    themeToggle.setAttribute("aria-checked", String(dark));
    themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0B0B0C" : "#F2EEE4");
  }
  themeToggle.addEventListener("click", function () {
    var isDark = document.documentElement.getAttribute("data-theme") !== "light";
    applyTheme(isDark ? "light" : "dark");
  });
  applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");

  /* ---------- Language (RO / EN) ---------- */
  var langToggle = document.getElementById("langToggle");
  function applyLang(next) {
    lang = next === "ro" ? "ro" : "en";
    document.documentElement.lang = lang;
    try { localStorage.setItem("anghell-lang", lang); } catch (e) {}

    // text nodes (innerHTML — values are trusted, may carry <em>/<span>)
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n"));
      if (v) el.innerHTML = v;
    });
    // placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-ph"));
      if (v) el.setAttribute("placeholder", v);
    });
    // dynamic gallery labels + open lightbox
    document.querySelectorAll(".piece").forEach(function (piece) {
      var cap = piece.querySelector(".piece__cat");
      if (cap) cap.textContent = catLabel(piece.dataset.cat);
    });
    if (lb.classList.contains("is-open")) renderLightbox();
    // toggle active marker
    langToggle.querySelectorAll("[data-lang-opt]").forEach(function (s) {
      s.classList.toggle("is-active", s.getAttribute("data-lang-opt") === lang);
    });
  }
  langToggle.addEventListener("click", function () {
    applyLang(lang === "ro" ? "en" : "ro");
  });
  // apply the language chosen by the head script (or default EN)
  applyLang(lang);

  /* ---------- Request form (front-end only → mailto fallback) ---------- */
  var form = document.getElementById("requestForm");
  var note = document.getElementById("formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name, email = form.email, idea = form.idea;
    var ok = true;
    [name, email, idea].forEach(function (f) {
      var bad = !f.value.trim() || (f.type === "email" && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.value));
      f.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) {
      note.textContent = t("form.err");
      note.className = "form-note is-err";
      return;
    }
    var subject = encodeURIComponent("Session request — " + name.value);
    var body = encodeURIComponent(
      "Name: " + name.value + "\n" +
      "Email: " + email.value + "\n" +
      "Placement: " + (form.placement.value || "—") + "\n" +
      "Size: " + (form.size.value || "—") + "\n" +
      "Preferred dates: " + (form.dates.value || "—") + "\n\n" +
      "The idea:\n" + idea.value
    );
    window.location.href = "mailto:hello@anghell.ink?subject=" + subject + "&body=" + body;
    note.textContent = t("form.ok");
    note.className = "form-note is-ok";
    form.reset();
  });

  /* ---------- Year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
