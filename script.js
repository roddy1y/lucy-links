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
    label: "𝑜𝓃𝓁𝓎𝒻𝒶𝓃𝓈",
    url: "", // inserisci il link OnlyFans quando è pronto
    icon: "onlyfans",
    badge: "a breve",
  },
  {
    label: "𝒹𝒾𝓈𝒸𝑜𝓇𝒹",
    url: "https://discord.com/invite/mami",
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
  { name: "Discord", url: "https://discord.com/invite/mami", icon: "discord" },
];

/* ---------- Icone SVG ---------- */

const ICONS = {
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.04 15.3 8.7 20.1c.5 0 .7-.2 1-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.6c.3-1.3-.5-1.8-1.3-1.5L2 11.2c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5L17.3 7.3c.5-.3 1-.1.6.2z"/></svg>`,
  tag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 5.3A17 17 0 0 0 15.3 4l-.2.4a15.6 15.6 0 0 1 3.9 1.9 14 14 0 0 0-14 0A15.6 15.6 0 0 1 8.9 4.4L8.7 4a17 17 0 0 0-4.2 1.3C1.8 9.3 1.1 13.2 1.4 17a17 17 0 0 0 5.2 2.6l1.1-1.8a11 11 0 0 1-1.7-.8l.4-.3a12.3 12.3 0 0 0 11.2 0l.4.3-1.7.8 1.1 1.8a17 17 0 0 0 5.2-2.6c.4-4.4-.7-8.3-3.1-11.7zM8.7 14.6c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.9 2.1-1.9 2.1zm6.6 0c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
  onlyfans: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10" cy="12" r="7"/><circle cx="10" cy="12" r="2.5" fill="currentColor" stroke="none"/><path d="M15.5 5.5c3.3 0 5.5 1.5 6 4.5-.5 3-2.7 4.5-6 4.5" stroke-linecap="round"/></svg>`,
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
    a.classList.add("soon");
    a.addEventListener("click", (e) => {
      e.preventDefault();
      toast(`${link.label} disponibile a breve ✨ nel frattempo scrivimi su Telegram 💗`);
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
    background: #ff5fbf; color: #1a0716; padding: .7rem 1.2rem; border-radius: 999px;
    box-shadow: 0 0 20px #ff5fbf; font-weight: 700;
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
  const items = document.querySelectorAll(".hl, .step-list li");
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

/* ---------- Sparkles e cuoricini rosa su Canvas HTML5 ---------- */

const canvas = document.getElementById("sparkles");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, sparkles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

const PALETTE = ["#ff5fbf", "#ff9ad5", "#ffc6e8", "#c76bff", "#ffffff"];

class Sparkle {
  constructor() { this.reset(true); }
  reset(initial = false) {
    this.x = Math.random() * W;
    this.y = initial ? Math.random() * H : H + 10;
    this.size = Math.random() * 2.5 + 0.8;
    this.vy = Math.random() * 0.5 + 0.15;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
    this.twinkle = Math.random() * Math.PI * 2;
    this.isHeart = Math.random() < 0.18;
  }
  update() {
    this.y -= this.vy;
    this.x += this.vx;
    this.twinkle += 0.05;
    if (this.y < -10) this.reset();
  }
  draw() {
    ctx.globalAlpha = Math.max(0, 0.4 + Math.sin(this.twinkle) * 0.4);
    ctx.fillStyle = this.color;
    if (this.isHeart) {
      drawHeart(this.x, this.y, this.size * 3);
    } else {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }
}

function drawHeart(x, y, s) {
  ctx.beginPath();
  ctx.moveTo(x, y + s / 4);
  ctx.bezierCurveTo(x, y, x - s / 2, y, x - s / 2, y + s / 4);
  ctx.bezierCurveTo(x - s / 2, y + s / 2, x, y + s * 0.75, x, y + s);
  ctx.bezierCurveTo(x, y + s * 0.75, x + s / 2, y + s / 2, x + s / 2, y + s / 4);
  ctx.bezierCurveTo(x + s / 2, y, x, y, x, y + s / 4);
  ctx.fill();
}

function initSparkles() {
  const n = Math.min(160, Math.floor((W * H) / 10000));
  sparkles = Array.from({ length: n }, () => new Sparkle());
}

function loop() {
  ctx.clearRect(0, 0, W, H);
  sparkles.forEach((s) => { s.update(); s.draw(); });
  requestAnimationFrame(loop);
}

window.addEventListener("resize", () => { resize(); initSparkles(); });
resize();
initSparkles();
loop();

/* ---------- Esplosione di cuori al click ---------- */

function burst(x, y, symbols = ["💗", "🩷", "💖", "✨", "🐾"]) {
  for (let i = 0; i < 14; i++) {
    const el = document.createElement("span");
    el.className = "burst";
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.fontSize = `${Math.random() * 14 + 14}px`;
    document.body.appendChild(el);
    const a = Math.random() * Math.PI * 2;
    const d = Math.random() * 140 + 60;
    requestAnimationFrame(() => {
      el.style.transform = `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d - 80}px) rotate(${Math.random() * 360}deg)`;
      el.style.opacity = "0";
    });
    setTimeout(() => el.remove(), 1200);
  }
}

document.addEventListener("click", (e) => burst(e.clientX, e.clientY));

/* ---------- Gattini 3D da schiacciare ---------- */

const GOAL = 15;
const REWARD_URL = "https://t.me/etilat"; // chat privata di Lucy
const REWARD_DELAY = 1600; // ms prima del redirect
const PET_MESSAGES = [
  "miao~ 💗", "purr purr", "ancora! ✨", "che coccole", "nyaa~", "sono tuo 🐾",
  "più forte!", "mrrrp", "adoro", "non fermarti", "meow meow", "❤️❤️❤️",
];

const cards = document.querySelectorAll(".card3d");
const petCountEl = document.getElementById("petCount");
const progressFill = document.getElementById("progressFill");
const reward = document.getElementById("reward");
document.getElementById("goal").textContent = GOAL;

let petCount = 0;
let rewarded = false;

cards.forEach((card) => {
  const msg = document.createElement("div");
  msg.className = "card-msg";
  card.appendChild(msg);
  let msgTimer;

  card.querySelector("img").addEventListener("error", () => card.classList.add("no-img"));

  const tilt = (cx, cy) => {
    if (card.classList.contains("squish")) return;
    const r = card.getBoundingClientRect();
    const px = (cx - r.left) / r.width - 0.5;
    const py = (cy - r.top) / r.height - 0.5;
    card.style.transform = `rotateY(${px * 28}deg) rotateX(${-py * 28}deg) translateZ(16px) scale(1.04)`;
  };
  const resetTilt = () => { card.style.transform = ""; };

  card.addEventListener("mousemove", (e) => tilt(e.clientX, e.clientY));
  card.addEventListener("mouseleave", resetTilt);
  card.addEventListener("touchmove", (e) => tilt(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
  card.addEventListener("touchend", resetTilt);

  card.addEventListener("click", (e) => {
    // squish
    card.style.transform = "";
    card.classList.remove("squish");
    void card.offsetWidth;
    card.classList.add("squish");
    setTimeout(() => card.classList.remove("squish"), 460);

    // messaggio
    msg.textContent = PET_MESSAGES[Math.floor(Math.random() * PET_MESSAGES.length)];
    msg.classList.add("show");
    clearTimeout(msgTimer);
    msgTimer = setTimeout(() => msg.classList.remove("show"), 900);

    // contatore
    petCount++;
    petCountEl.textContent = petCount;
    petCountEl.classList.remove("pop");
    void petCountEl.offsetWidth;
    petCountEl.classList.add("pop");
    progressFill.style.width = `${Math.min(100, (petCount / GOAL) * 100)}%`;

    burst(e.clientX, e.clientY, ["🐾", "💗", "🩷", "✨"]);

    if (petCount >= GOAL && !rewarded) {
      rewarded = true;
      reward.hidden = false;
      document.getElementById("rewardBtn").href = REWARD_URL;
      setTimeout(() => reward.scrollIntoView({ behavior: "smooth", block: "center" }), 200);
      let n = 0;
      const rain = setInterval(() => {
        burst(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        if (++n > 6) clearInterval(rain);
      }, 160);
      // Redirect alla chat privata (stessa scheda: non viene bloccato dai popup blocker)
      setTimeout(() => { window.location.href = REWARD_URL; }, REWARD_DELAY);
    }
  });
});
