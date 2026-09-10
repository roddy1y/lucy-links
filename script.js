/* ==========================================================
   CONFIGURAZIONE — modifica qui i link di Lucy
   ========================================================== */
const LINKS = [
  {
    label: "𝓉𝑒𝓁𝑒𝑔𝓇𝒶𝓂 𝑔𝓇𝑜𝓊𝓅",
    url: "https://t.me/lucyegirl",
    icon: "telegram",
    featured: true,
    badge: "start here",
  },
  {
    label: "𝓉𝑒𝓁𝑒𝑔𝓇𝒶𝓂 𝓁𝒾𝓈𝓉 𝓅𝓇𝒾𝒸𝑒",
    url: "https://t.me/listinokitty",
    icon: "tag",
  },
  {
    label: "𝒹𝒾𝓈𝒸𝑜𝓇𝒹",
    url: "", // inserisci il link d'invito Discord quando disponibile
    icon: "discord",
  },
  {
    label: "𝒾𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂",
    url: "https://www.instagram.com/lucymilks",
    icon: "instagram",
  },
  {
    label: "𝓉𝒾𝓀𝓉𝑜𝓀",
    url: "https://www.tiktok.com/@.succubae",
    icon: "tiktok",
  },
];

const SOCIALS = [
  { name: "Instagram", url: "https://www.instagram.com/lucymilks", icon: "instagram" },
  { name: "TikTok", url: "https://www.tiktok.com/@.succubae", icon: "tiktok" },
  { name: "Telegram", url: "https://t.me/lucyegirl", icon: "telegram" },
];

/* ---------- Icone SVG ---------- */

const ICONS = {
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.04 15.3 8.7 20.1c.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.8-1.3-1.5L2 11.2c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5L17.3 7.3c.5-.3 1-.1.6.2z"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.3A17 17 0 0 0 15.3 4l-.2.4a15.6 15.6 0 0 1 3.9 1.9 14 14 0 0 0-14 0A15.6 15.6 0 0 1 8.9 4.4L8.7 4a17 17 0 0 0-4.2 1.3C1.8 9.3 1.1 13.2 1.4 17a17 17 0 0 0 5.2 2.6l1.1-1.8a11 11 0 0 1-1.7-.8l.4-.3a12.3 12.3 0 0 0 11.2 0l.4.3-1.7.8 1.1 1.8a17 17 0 0 0 5.2-2.6c.4-4.4-.7-8.3-3.1-11.7zM8.7 14.6c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.9 2.1-1.9 2.1zm6.6 0c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2c.3 2.4 1.7 3.9 4 4.1v3.3c-1.5 0-2.9-.5-4-1.3v6.9c0 3.7-3 6.5-6.5 6.5A6.4 6.4 0 0 1 3.5 15c0-3.7 3.1-6.6 6.9-6.4v3.4c-1.8-.3-3.5 1-3.5 3 0 1.7 1.4 3.1 3.1 3.1 1.8 0 3.2-1.4 3.2-3.2V2h3.3z"/></svg>`,
};

/* ---------- Render link ---------- */

const linksEl = document.getElementById("links");

LINKS.forEach((link, i) => {
  const a = document.createElement("a");
  a.className = "btn" + (link.featured ? " featured" : "");
  a.style.animationDelay = `${0.15 + i * 0.1}s`;

  if (link.url) {
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.href = "#";
    a.title = "Disponibile a breve";
    a.style.opacity = "0.55";
    a.addEventListener("click", (e) => {
      e.preventDefault();
      toast("Disponibile a breve ✨");
    });
  }

  a.innerHTML = `
    <span class="icon">${ICONS[link.icon] || ""}</span>
    <span class="label">${link.label}</span>
    ${link.badge ? `<span class="badge">${link.badge}</span>` : ""}
  `;
  linksEl.appendChild(a);
});

/* ---------- Render social ---------- */

const socialsEl = document.getElementById("socials");
SOCIALS.forEach((s) => {
  if (!s.url) return;
  const a = document.createElement("a");
  a.className = "social";
  a.href = s.url;
  a.target = "_blank";
  a.rel = "noopener";
  a.setAttribute("aria-label", s.name);
  a.innerHTML = ICONS[s.icon] || "";
  socialsEl.appendChild(a);
});

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Toast ---------- */

function toast(msg) {
  const t = document.createElement("div");
  t.textContent = msg;
  t.style.cssText = `
    position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%) translateY(20px);
    background: #000; color: #e9e1e9; padding: .7rem 1.2rem; border-radius: 999px;
    font-family: inherit; font-size: .9rem; z-index: 60; opacity: 0;
    transition: opacity .3s ease, transform .3s ease;
  `;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.opacity = "1";
    t.style.transform = "translateX(-50%) translateY(0)";
  });
  setTimeout(() => {
    t.style.opacity = "0";
    setTimeout(() => t.remove(), 300);
  }, 1800);
}

/* ---------- Age gate ---------- */

const gate = document.getElementById("gate");
const page = document.getElementById("page");
const GATE_KEY = "lucy_age_ok";

function openSite() {
  gate.classList.add("hidden");
  document.body.classList.remove("locked");
  page.classList.add("visible");
  startObservers();
}

if (sessionStorage.getItem(GATE_KEY) === "1") {
  openSite();
} else {
  document.body.classList.add("locked");
  document.getElementById("gateYes").addEventListener("click", () => {
    sessionStorage.setItem(GATE_KEY, "1");
    openSite();
  });
}

/* ---------- Reveal on scroll ---------- */

function startObservers() {
  const items = document.querySelectorAll(".card, .step-list li");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = [...entry.target.parentElement.children];
          const i = siblings.indexOf(entry.target);
          setTimeout(() => entry.target.classList.add("visible"), i * 90);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Petali / cuoricini soft su Canvas ---------- */

const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, petals = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

class Petal {
  constructor() { this.reset(true); }
  reset(initial = false) {
    this.x = Math.random() * W;
    this.y = initial ? Math.random() * H : -20;
    this.size = Math.random() * 6 + 4;
    this.vy = Math.random() * 0.5 + 0.25;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.rot = Math.random() * Math.PI * 2;
    this.vr = (Math.random() - 0.5) * 0.02;
    this.color = Math.random() > 0.5 ? "rgba(201,139,214,0.45)" : "rgba(242,183,216,0.5)";
  }
  update() {
    this.y += this.vy;
    this.x += this.vx + Math.sin(this.y / 60) * 0.3;
    this.rot += this.vr;
    if (this.y > H + 20) this.reset();
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function initPetals() {
  const n = Math.min(60, Math.floor((W * H) / 30000));
  petals = Array.from({ length: n }, () => new Petal());
}

function loop() {
  ctx.clearRect(0, 0, W, H);
  petals.forEach((p) => { p.update(); p.draw(); });
  requestAnimationFrame(loop);
}

window.addEventListener("resize", () => { resize(); initPetals(); });
resize();
initPetals();
loop();
