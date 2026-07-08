// RG Creeper — interactive card (visible layout matches the provided design)

// Default data (mirrors rg_creeper.lua)
const DEFAULT = {
  monsterName: "CREEPER",
  description: {
    en: "A stealthy monster with an explosive temper.",
    "pt-BR": "Um monstro furtivo com um temperamento explosivo.",
    es: "Un monstruo sigiloso con un temperamento explosivo."
  },
  emoji: "💥",
  sound: { en: "Tssssss", "pt-BR": "Tssssss", es: "Tssssss" },
  favoriteTime: { en: "Night", "pt-BR": "Noturno", es: "Nocturno" },
  item: { en: "Gunpowder", "pt-BR": "Pólvora", es: "Pólvora" },
  attributes: {
    Attack: 10,
    Defense: 1,
    Life: 5,
    Speed: 7,
    Intelligence: 2
  }
};

// UI translations
const UI = {
  en: { regenerate: "Regenerate", copyJson: "Copy JSON", credits: "Educational project — RG Creeper", attributesTitle: "Attributes" },
  "pt-BR": { regenerate: "Regenerar", copyJson: "Copiar JSON", credits: "Projeto educacional — RG Creeper", attributesTitle: "Atributos" },
  es: { regenerate: "Regenerar", copyJson: "Copiar JSON", credits: "Proyecto educativo — RG Creeper", attributesTitle: "Atributos" }
};

// State
const state = {
  lang: localStorage.getItem("rg_lang") || "en",
  theme: localStorage.getItem("rg_theme") || "dark",
  data: JSON.parse(JSON.stringify(DEFAULT))
};

// DOM refs
const langSelect = document.getElementById("lang-select");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const monsterNameEl = document.getElementById("monster-name");
const monsterDescEl = document.getElementById("monster-desc");
const itemEl = document.getElementById("item");
const soundEl = document.getElementById("sound");
const favoriteTimeEl = document.getElementById("favorite-time");
const emojiEl = document.getElementById("emoji");
const attrList = document.getElementById("attr-list");
const regenBtn = document.getElementById("regen");
const copyBtn = document.getElementById("copy-btn");
const status = document.getElementById("status");
const credits = document.getElementById("credits");
const attributesTitle = document.getElementById("attributes-title");

// Apply theme
function applyTheme(theme){
  document.body.classList.toggle("theme-light", theme === "light");
  document.body.classList.toggle("theme-dark", theme !== "light");
  themeIcon.textContent = theme === "light" ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-pressed", theme !== "light" ? "true" : "false");
  localStorage.setItem("rg_theme", theme === "light" ? "light" : "dark");
  state.theme = theme;
}

// Apply language and content
function applyLang(lang){
  state.lang = lang;
  localStorage.setItem("rg_lang", lang);
  const t = UI[lang] || UI.en;
  regenBtn.textContent = t.regenerate;
  copyBtn.textContent = t.copyJson;
  credits.textContent = t.credits;
  attributesTitle.textContent = t.attributesTitle;
  // content
  monsterNameEl.textContent = state.data.monsterName;
  monsterDescEl.textContent = state.data.description[lang] || state.data.description.en;
  itemEl.textContent = state.data.item[lang] || state.data.item.en;
  soundEl.textContent = state.data.sound[lang] || state.data.sound.en;
  favoriteTimeEl.textContent = state.data.favoriteTime[lang] || state.data.favoriteTime.en;
  emojiEl.textContent = state.data.emoji;
  langSelect.value = lang;
  renderAttributes();
}

// Render attributes as progress bars
function renderAttributes(){
  attrList.innerHTML = "";
  const attrs = state.data.attributes;
  Object.keys(attrs).forEach(key => {
    const value = Math.max(0, Math.min(10, attrs[key]));
    const li = document.createElement("li");
    li.className = "attr-item";

    const label = document.createElement("div");
    label.className = "attr-label";
    label.textContent = key;

    const progressWrap = document.createElement("div");
    progressWrap.className = "progress";
    progressWrap.setAttribute("role", "progressbar");
    progressWrap.setAttribute("aria-valuemin", "0");
    progressWrap.setAttribute("aria-valuemax", "10");
    progressWrap.setAttribute("aria-valuenow", String(value));
    progressWrap.setAttribute("aria-label", `${key} ${value} of 10`);

    const inner = document.createElement("i");
    inner.style.width = (value * 10) + "%";

    progressWrap.appendChild(inner);
    li.appendChild(label);
    li.appendChild(progressWrap);
    attrList.appendChild(li);
  });
}

// Regenerate attributes (playful)
function regenerate(){
  const attrs = state.data.attributes;
  attrs.Attack = 8 + Math.floor(Math.random() * 3); // 8..10
  attrs.Defense = Math.max(0, Math.floor(Math.random() * 3)); // 0..2
  attrs.Life = 3 + Math.floor(Math.random() * 5); // 3..7
  attrs.Speed = 5 + Math.floor(Math.random() * 5); // 5..9
  attrs.Intelligence = Math.max(0, Math.floor(Math.random() * 4)); // 0..3
  renderAttributes();
  const msg = { en: "Regenerated", "pt-BR": "Regenerado", es: "Regenerado" }[state.lang] || "Regenerated";
  status.textContent = msg;
  setTimeout(()=> status.textContent = "", 1600);
}

// Copy JSON to clipboard
async function copyJSON(){
  const payload = {
    name: state.data.monsterName,
    description: state.data.description[state.lang] || state.data.description.en,
    emoji: state.data.emoji,
    sound: state.data.sound[state.lang] || state.data.sound.en,
    favoriteTime: state.data.favoriteTime[state.lang] || state.data.favoriteTime.en,
    item: state.data.item[state.lang] || state.data.item.en,
    attributes: state.data.attributes
  };
  try{
    await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
    const msg = { en: "Copied to clipboard", "pt-BR": "Copiado para a área de transferência", es: "Copiado al portapapeles" }[state.lang] || "Copied to clipboard";
    status.textContent = msg;
    setTimeout(()=> status.textContent = "", 1600);
  }catch(e){
    const msg = { en: "Copy failed", "pt-BR": "Falha ao copiar", es: "Error al copiar" }[state.lang] || "Copy failed";
    status.textContent = msg;
    setTimeout(()=> status.textContent = "", 1600);
  }
}

// Events
langSelect.addEventListener("change", (e)=> applyLang(e.target.value));
themeToggle.addEventListener("click", ()=>{
  applyTheme(state.theme === "light" ? "dark" : "light");
});
regenBtn.addEventListener("click", regenerate);
copyBtn.addEventListener("click", copyJSON);

// Init
(function init(){
  applyTheme(state.theme === "dark" ? "dark" : "light");
  applyLang(state.lang);
  renderAttributes();
})();
