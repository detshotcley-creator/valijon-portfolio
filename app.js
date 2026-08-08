/*
  One-time setup: put your Supabase details below after creating the project.
  They are safe to expose only when Row Level Security is enabled (see supabase.sql).
*/
const SUPABASE_URL = "https://yadcquengcxicxxjkdpa.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Sv5cLP3kzG8wjrF-slaQ2g_YyRrO1Eq";
const OWNER_EMAIL = "detshotcley@gmail.com";

const translations = {
  en: {
    navAbout: "About", navProjects: "Projects", navContact: "Contact", managePortfolio: "Manage portfolio <span aria-hidden=\"true\">↗</span>", available: "Available for meaningful work",
    heroTitle: "Building with<br /><em>depth.</em>", heroCopy: "Software engineer, ethical cybersecurity specialist, and scientific innovator pursuing technology that moves the world forward.", exploreWork: "Explore work <span>↓</span>", githubProfile: "GitHub profile <span>↗</span>", basedIn: "BASED IN UZBEKISTAN", softwareEngineering: "SOFTWARE ENGINEERING", focusMode: "FOCUS MODE: ON",
    aboutIndex: "01 / ABOUT", aboutTitle: "A restless mind for <em>real problems.</em>", aboutCopyOne: "I am a high-achieving second-year Software Engineering student at the University of Science and Technology. I work where programming, ethical cybersecurity, and scientific curiosity meet.", aboutCopyTwo: "My long-term mission is simple: create useful technology, solve difficult problems, and help change the world through innovation.",
    toolkitIndex: "02 / TOOLKIT", languagesSystems: "LANGUAGES & SYSTEMS", mindsetIndex: "03 / MINDSET", mindsetQuote: "I choose focused learning over short-form distractions. My aim is to develop exceptional concentration, discipline, and depth of thought.",
    researchIndex: "04 / PHANTOM RESEARCH LAB", researchTitle: "Ideas with a<br /><em>future.</em>", researchLabel: "CONCEPTS / 2026", researchNotice: "All three works below are concept and research-stage explorations. They are not presented as working prototypes.", conceptVisual: "CONCEPT VISUAL", carMeta: "SUSTAINABLE MOBILITY / RESEARCH STAGE", carDescription: "An ecological family electric-car concept designed to reduce dependence on external charging.", carFacts: "550 W solar roof · regenerative braking · LiFePO4 battery · thermoelectric generation (TEG) · AI energy management", blockMeta: "EV ENERGY SYSTEM / RESEARCH STAGE", blockDescription: "A central energy-management concept for electric vehicles that brings multiple energy sources into one intelligent system.", blockFacts: "Energy-source integration · monitoring · intelligent distribution · system control", windMeta: "CLEAN ENERGY / RESEARCH & DESIGN STAGE", windTitle: "Phantom Wind Generator", windDescription: "A vertical-axis wind-turbine concept designed for changing wind directions and urban installation.", windFacts: "Wind-direction flexibility · rooftop potential · low-noise objective · serviceable modular design",
    workIndex: "05 / SELECTED WORK", workTitle: "Projects in<br /><em>progress.</em>", addProject: "Add a project <span>+</span>", nextBuild: "01 / YOUR NEXT BUILD", emptyProjectTitle: "New projects will appear here.", emptyProjectCopy: "Use “Add a project” to publish your work one card at a time.",
    achievementIndex: "06 / ACHIEVEMENTS", addAchievement: "Add achievement <span>+</span>", emptyAchievements: "Your certificates, awards, and competition results can be added here whenever you are ready.",
    contactIndex: "07 / CONTACT", contactTitle: "Let’s build something<br /><em>that matters.</em>", contactCopy: "For collaborations, research, and ambitious ideas — get in touch.", footer: "DESIGNED FOR FOCUS.",
    privateAccess: "PRIVATE ACCESS", modalTitle: "Manage your <em>portfolio.</em>", modalCopy: "Sign in with your owner account to add projects and achievements. The public site stays view-only.", emailLabel: "Email", passwordLabel: "Password", signIn: "Sign in <span>→</span>", ownerAccess: "OWNER ACCESS", editorTitle: "Add an <em>entry.</em>", signOut: "Sign out", entryType: "Entry type", project: "Project", achievement: "Achievement", titleLabel: "Title", titlePlaceholder: "e.g. Network Security Scanner", descriptionLabel: "Description", descriptionPlaceholder: "What did you build or achieve?", technologiesLabel: "Technologies", optionalComma: "(optional, separate with commas)", projectLink: "Project link", optional: "(optional)", publishEntry: "Publish entry <span>→</span>",
    recoveryAccess: "PASSWORD RECOVERY", recoveryTitle: "Create a new <em>password.</em>", recoveryCopy: "Choose a new password for your private portfolio editor.", newPassword: "New password", confirmPassword: "Confirm password", savePassword: "Save password <span>→</span>", passwordsMismatch: "The passwords do not match.", passwordSaved: "Password saved. You can now sign in.",
    connectSupabase: "Connect Supabase in app.js before using the online editor.", notAuthorized: "This account is not authorized to manage this portfolio.", signedOut: "Signed out.", signingIn: "Signing in…", signedIn: "Signed in.", publishing: "Publishing…", published: "Published successfully.", validLink: "Please use a valid http or https link.", nightMode: "Switch to night mode", dayMode: "Switch to day mode"
  },
  ru: {
    navAbout: "Обо мне", navProjects: "Проекты", navContact: "Контакты", managePortfolio: "Управление портфолио <span aria-hidden=\"true\">↗</span>", available: "Открыт для значимой работы",
    heroTitle: "Создаю с<br /><em>глубиной.</em>", heroCopy: "Инженер-программист, специалист по этической кибербезопасности и научный новатор, создающий технологии, которые двигают мир вперёд.", exploreWork: "Смотреть работы <span>↓</span>", githubProfile: "Профиль GitHub <span>↗</span>", basedIn: "УЗБЕКИСТАН", softwareEngineering: "ПРОГРАММНАЯ ИНЖЕНЕРИЯ", focusMode: "РЕЖИМ ФОКУСА: ВКЛ.",
    aboutIndex: "01 / ОБО МНЕ", aboutTitle: "Неугомонный ум для <em>реальных задач.</em>", aboutCopyOne: "Я — успешный студент второго курса направления «Программная инженерия» Университета науки и технологий. Я работаю на пересечении программирования, этической кибербезопасности и научного любопытства.", aboutCopyTwo: "Моя долгосрочная цель проста: создавать полезные технологии, решать сложные задачи и менять мир через инновации.",
    toolkitIndex: "02 / ИНСТРУМЕНТЫ", languagesSystems: "ЯЗЫКИ И СИСТЕМЫ", mindsetIndex: "03 / МЫШЛЕНИЕ", mindsetQuote: "Я выбираю глубокое обучение вместо короткого контента. Моя цель — развить исключительную концентрацию, дисциплину и глубину мышления.",
    researchIndex: "04 / ЛАБОРАТОРИЯ PHANTOM", researchTitle: "Идеи с<br /><em>будущим.</em>", researchLabel: "КОНЦЕПТЫ / 2026", researchNotice: "Все три работы ниже находятся на стадии концепции и исследования. Они не представлены как работающие прототипы.", conceptVisual: "ВИЗУАЛЬНЫЙ КОНЦЕПТ", carMeta: "ЭКОЛОГИЧНАЯ МОБИЛЬНОСТЬ / ИССЛЕДОВАНИЕ", carDescription: "Концепт экологичного семейного электромобиля, призванный уменьшить зависимость от внешней зарядки.", carFacts: "Солнечная крыша 550 Вт · рекуперативное торможение · батарея LiFePO4 · термоэлектрическая генерация (TEG) · ИИ-управление энергией", blockMeta: "ЭНЕРГОСИСТЕМА ЭЛЕКТРОМОБИЛЯ / ИССЛЕДОВАНИЕ", blockDescription: "Концепт центрального блока управления энергией для электромобилей, объединяющего несколько источников в одну интеллектуальную систему.", blockFacts: "Интеграция источников энергии · мониторинг · интеллектуальное распределение · управление системой", windMeta: "ЧИСТАЯ ЭНЕРГИЯ / ИССЛЕДОВАНИЕ И ДИЗАЙН", windTitle: "Ветрогенератор Phantom", windDescription: "Концепт вертикально-осевой ветротурбины для переменных направлений ветра и городской установки.", windFacts: "Адаптация к направлению ветра · возможность установки на крыше · цель низкого шума · модульная конструкция для обслуживания",
    workIndex: "05 / ИЗБРАННЫЕ РАБОТЫ", workTitle: "Проекты в<br /><em>развитии.</em>", addProject: "Добавить проект <span>+</span>", nextBuild: "01 / СЛЕДУЮЩАЯ РАЗРАБОТКА", emptyProjectTitle: "Новые проекты появятся здесь.", emptyProjectCopy: "Используйте «Добавить проект», чтобы публиковать работы по одной.",
    achievementIndex: "06 / ДОСТИЖЕНИЯ", addAchievement: "Добавить достижение <span>+</span>", emptyAchievements: "Сертификаты, награды и результаты соревнований можно добавить сюда в любое время.",
    contactIndex: "07 / КОНТАКТЫ", contactTitle: "Давайте создадим то,<br /><em>что важно.</em>", contactCopy: "Для сотрудничества, исследований и амбициозных идей — свяжитесь со мной.", footer: "СОЗДАНО ДЛЯ ФОКУСА.",
    privateAccess: "ЗАКРЫТЫЙ ДОСТУП", modalTitle: "Управляйте своим <em>портфолио.</em>", modalCopy: "Войдите в учётную запись владельца, чтобы добавлять проекты и достижения. Публичный сайт доступен только для просмотра.", emailLabel: "Электронная почта", passwordLabel: "Пароль", signIn: "Войти <span>→</span>", ownerAccess: "ДОСТУП ВЛАДЕЛЬЦА", editorTitle: "Добавить <em>запись.</em>", signOut: "Выйти", entryType: "Тип записи", project: "Проект", achievement: "Достижение", titleLabel: "Название", titlePlaceholder: "например, сканер сетевой безопасности", descriptionLabel: "Описание", descriptionPlaceholder: "Что вы создали или чего достигли?", technologiesLabel: "Технологии", optionalComma: "(необязательно, через запятую)", projectLink: "Ссылка на проект", optional: "(необязательно)", publishEntry: "Опубликовать <span>→</span>",
    recoveryAccess: "ВОССТАНОВЛЕНИЕ ПАРОЛЯ", recoveryTitle: "Создайте новый <em>пароль.</em>", recoveryCopy: "Придумайте новый пароль для закрытого редактора портфолио.", newPassword: "Новый пароль", confirmPassword: "Подтвердите пароль", savePassword: "Сохранить пароль <span>→</span>", passwordsMismatch: "Пароли не совпадают.", passwordSaved: "Пароль сохранён. Теперь можно войти.",
    connectSupabase: "Подключите Supabase в app.js, чтобы использовать онлайн-редактор.", notAuthorized: "Эта учётная запись не имеет прав на управление портфолио.", signedOut: "Вы вышли из учётной записи.", signingIn: "Выполняется вход…", signedIn: "Вход выполнен.", publishing: "Публикация…", published: "Успешно опубликовано.", validLink: "Укажите корректную ссылку http или https.", nightMode: "Включить ночной режим", dayMode: "Включить дневной режим"
  },
  uz: {
    navAbout: "Men haqimda", navProjects: "Loyihalar", navContact: "Aloqa", managePortfolio: "Portfolioni boshqarish <span aria-hidden=\"true\">↗</span>", available: "Muhim ishlarga ochiqman",
    heroTitle: "Chuqur<br /><em>fikrlab yarataman.</em>", heroCopy: "Dasturiy injener, etik kiberxavfsizlik mutaxassisi va dunyoni oldinga siljituvchi texnologiyalar ustida ishlaydigan ilmiy novator.", exploreWork: "Ishlarni ko‘rish <span>↓</span>", githubProfile: "GitHub profili <span>↗</span>", basedIn: "O‘ZBEKISTON", softwareEngineering: "DASTURIY INJENERIYA", focusMode: "DIQQAT REJIMI: YOQILGAN",
    aboutIndex: "01 / MEN HAQIMDA", aboutTitle: "Haqiqiy muammolar uchun <em>izlanuvchan ong.</em>", aboutCopyOne: "Men Fan va Texnologiyalar Universitetining Dasturiy injeneriya yo‘nalishida tahsil olayotgan iqtidorli ikkinchi kurs talabasiman. Dasturlash, etik kiberxavfsizlik va ilmiy qiziqish kesishgan nuqtada ishlayman.", aboutCopyTwo: "Uzoq muddatli maqsadim oddiy: foydali texnologiyalar yaratish, murakkab muammolarni hal qilish va innovatsiyalar orqali dunyoni o‘zgartirish.",
    toolkitIndex: "02 / VOSITALAR", languagesSystems: "TILLAR VA TIZIMLAR", mindsetIndex: "03 / DUNYOQARASH", mindsetQuote: "Men qisqa videolardagi chalg‘itishlar o‘rniga chuqur o‘rganishni tanlayman. Maqsadim — juda kuchli diqqat, intizom va teran fikrlashni rivojlantirish.",
    researchIndex: "04 / PHANTOM TADQIQOT LABORATORIYASI", researchTitle: "Kelajak uchun<br /><em>g‘oyalar.</em>", researchLabel: "KONSEPTLAR / 2026", researchNotice: "Quyidagi uchala ish ham konsept va tadqiqot bosqichidagi izlanishdir. Ular ishlaydigan prototip sifatida taqdim etilmaydi.", conceptVisual: "KONSEPT VIZUAL", carMeta: "EKOLOGIK MOBILLIK / TADQIQOT BOSQICHI", carDescription: "Tashqi zaryadlashga qaramlikni kamaytirishga mo‘ljallangan ekologik oilaviy elektr avtomobil konsepti.", carFacts: "550 Vt quyosh tomi · regenerativ tormoz · LiFePO4 batareya · termoelektr generator (TEG) · AI energiya boshqaruvi", blockMeta: "ELEKTR AVTOMOBIL ENERGIYA TIZIMI / TADQIQOT BOSQICHI", blockDescription: "Bir nechta energiya manbalarini yagona aqlli tizimga birlashtiradigan elektr avtomobil uchun markaziy energiya boshqaruv bloki konsepti.", blockFacts: "Energiya manbalarini birlashtirish · monitoring · aqlli taqsimlash · tizim boshqaruvi", windMeta: "TOZA ENERGIYA / TADQIQOT VA DIZAYN BOSQICHI", windTitle: "Phantom Shamol Generatori", windDescription: "O‘zgaruvchan shamol yo‘nalishlari va shahar sharoitiga mo‘ljallangan vertikal o‘qli shamol turbinasi konsepti.", windFacts: "Shamol yo‘nalishiga moslashish · tomga o‘rnatish salohiyati · kam shovqin maqsadi · xizmat ko‘rsatishga qulay modulli dizayn",
    workIndex: "05 / TANLANGAN ISHLAR", workTitle: "Rivojlanishdagi<br /><em>loyihalar.</em>", addProject: "Loyiha qo‘shish <span>+</span>", nextBuild: "01 / KEYINGI LOYIHANGIZ", emptyProjectTitle: "Yangi loyihalar shu yerda paydo bo‘ladi.", emptyProjectCopy: "Ishlaringizni bittadan nashr qilish uchun «Loyiha qo‘shish» tugmasidan foydalaning.",
    achievementIndex: "06 / YUTUQLAR", addAchievement: "Yutuq qo‘shish <span>+</span>", emptyAchievements: "Sertifikatlar, mukofotlar va tanlov natijalarini tayyor bo‘lganingizda shu yerga qo‘shishingiz mumkin.",
    contactIndex: "07 / ALOQA", contactTitle: "Keling, muhim<br /><em>narsa yarataylik.</em>", contactCopy: "Hamkorlik, tadqiqotlar va katta g‘oyalar uchun — men bilan bog‘laning.", footer: "DIQQAT UCHUN YARATILGAN.",
    privateAccess: "YOPIQ KIRISH", modalTitle: "Portfoliongizni <em>boshqaring.</em>", modalCopy: "Loyihalar va yutuqlar qo‘shish uchun egasi akkaunti bilan kiring. Ommaviy sayt faqat ko‘rish uchun ochiq.", emailLabel: "Email", passwordLabel: "Parol", signIn: "Kirish <span>→</span>", ownerAccess: "EGA KIRISHI", editorTitle: "Yangi <em>yozuv qo‘shish.</em>", signOut: "Chiqish", entryType: "Yozuv turi", project: "Loyiha", achievement: "Yutuq", titleLabel: "Nomi", titlePlaceholder: "masalan, tarmoq xavfsizligi skaneri", descriptionLabel: "Tavsifi", descriptionPlaceholder: "Nima yaratdingiz yoki nimaga erishdingiz?", technologiesLabel: "Texnologiyalar", optionalComma: "(ixtiyoriy, vergul bilan ajrating)", projectLink: "Loyiha havolasi", optional: "(ixtiyoriy)", publishEntry: "Nashr qilish <span>→</span>",
    recoveryAccess: "PAROLNI TIKLASH", recoveryTitle: "Yangi <em>parol yarating.</em>", recoveryCopy: "Yopiq portfolio tahrirlovchisi uchun yangi parol tanlang.", newPassword: "Yangi parol", confirmPassword: "Parolni tasdiqlang", savePassword: "Parolni saqlash <span>→</span>", passwordsMismatch: "Parollar bir xil emas.", passwordSaved: "Parol saqlandi. Endi tizimga kirishingiz mumkin.",
    connectSupabase: "Onlayn tahrirlovchidan foydalanish uchun app.js ichida Supabase-ni ulang.", notAuthorized: "Bu akkaunt portfolioni boshqarishga ruxsatga ega emas.", signedOut: "Akkauntdan chiqdingiz.", signingIn: "Kirish amalga oshirilmoqda…", signedIn: "Muvaffaqiyatli kirdingiz.", publishing: "Nashr qilinmoqda…", published: "Muvaffaqiyatli nashr qilindi.", validLink: "To‘g‘ri http yoki https havolasini kiriting.", nightMode: "Tungi rejimga o‘tish", dayMode: "Kunduzgi rejimga o‘tish"
  }
};
let activeLanguage = localStorage.getItem("phantom-language") || "en";
let activeTheme = localStorage.getItem("phantom-theme") || "light";

const $ = (selector) => document.querySelector(selector);
const modal = $("#adminModal");
const projectsGrid = $("#projectsGrid");
const achievementsList = $("#achievementsList");
let client = null;

function t(key) { return translations[activeLanguage]?.[key] || translations.en[key] || key; }
function applyLanguage(language) {
  activeLanguage = translations[language] ? language : "en";
  document.documentElement.lang = activeLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = t(element.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-language]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.language === activeLanguage)));
  document.title = `Phantom — Valijonov Valijon`;
  localStorage.setItem("phantom-language", activeLanguage);
  if (configured()) loadEntries();
}
function applyTheme(theme) {
  activeTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.classList.toggle("dark", activeTheme === "dark");
  $("#themeToggle").innerHTML = activeTheme === "dark" ? "☀" : "☾";
  $("#themeToggle").setAttribute("aria-label", t(activeTheme === "dark" ? "dayMode" : "nightMode"));
  localStorage.setItem("phantom-theme", activeTheme);
}
function configured() { return SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase; }
function message(text, error = false) { const el = $("#formMessage"); el.textContent = text; el.classList.toggle("error", error); }
function escapeHTML(value = "") { const el = document.createElement("div"); el.textContent = value; return el.innerHTML; }
function safeUrl(url) { try { const parsed = new URL(url); return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : ""; } catch { return ""; } }

function openEditor(type = "project") {
  $("#entryType").value = type;
  message("");
  modal.showModal();
  if (!configured()) {
    $("#loginView").hidden = false; $("#editorView").hidden = true; $("#recoveryView").hidden = true;
    message(t("connectSupabase"), true);
    return;
  }
  checkSession();
}
function closeEditor() { modal.close(); }

async function checkSession() {
  const { data } = await client.auth.getSession();
  const email = data.session?.user?.email?.toLowerCase();
  const owner = email === OWNER_EMAIL.toLowerCase();
  $("#loginView").hidden = owner;
  $("#editorView").hidden = !owner;
  $("#recoveryView").hidden = true;
  if (data.session && !owner) message(t("notAuthorized"), true);
}

function renderEntries(entries) {
  const projects = entries.filter((entry) => entry.type === "project");
  const achievements = entries.filter((entry) => entry.type === "achievement");
  projectsGrid.innerHTML = projects.length ? projects.map((entry) => {
    const tags = (entry.technologies || []).map((tag) => `<span>${escapeHTML(tag)}</span>`).join("");
    const link = safeUrl(entry.link);
    return `<article class="entry-card"><p class="mono-label">PROJECT / ${new Date(entry.created_at).getFullYear()}</p><h3>${escapeHTML(entry.title)}</h3><p>${escapeHTML(entry.description)}</p><div class="entry-tags">${tags}</div>${link ? `<a class="entry-link" href="${link}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(entry.title)}">↗</a>` : ""}</article>`;
  }).join("") : `<article class="empty-card"><p class="mono-label">${t("nextBuild")}</p><h3>${t("emptyProjectTitle")}</h3><p>${t("emptyProjectCopy")}</p></article>`;
  achievementsList.innerHTML = achievements.length ? achievements.map((entry) => `<article class="achievement"><p class="mono-label">${t("achievement")}</p><div><h3>${escapeHTML(entry.title)}</h3><p>${escapeHTML(entry.description)}</p></div>${safeUrl(entry.link) ? `<a class="entry-link" href="${safeUrl(entry.link)}" target="_blank" rel="noopener noreferrer">↗</a>` : ""}</article>`).join("") : `<p class="empty-achievements">${t("emptyAchievements")}</p>`;
}

async function loadEntries() {
  if (!configured()) return;
  const { data, error } = await client.from("portfolio_entries").select("*").order("created_at", { ascending: false });
  if (error) { console.error(error); return; }
  renderEntries(data || []);
}

$("#adminTrigger").addEventListener("click", () => openEditor());
$("#addProjectTrigger").addEventListener("click", () => openEditor("project"));
$("#addAchievementTrigger").addEventListener("click", () => openEditor("achievement"));
document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
$("#themeToggle").addEventListener("click", () => applyTheme(activeTheme === "dark" ? "light" : "dark"));
$("#closeModal").addEventListener("click", closeEditor);
$("#signOut").addEventListener("click", async () => { await client.auth.signOut(); $("#loginView").hidden = false; $("#editorView").hidden = true; message(t("signedOut")); });

$("#loginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!configured()) return;
  message(t("signingIn"));
  const { error } = await client.auth.signInWithPassword({ email: $("#loginEmail").value.trim(), password: $("#loginPassword").value });
  if (error) return message(error.message, true);
  await checkSession(); message(t("signedIn"));
});

$("#entryForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = $("#entryTitle").value.trim();
  const description = $("#entryDescription").value.trim();
  const link = $("#entryLink").value.trim();
  const technologies = $("#entryTechnologies").value.split(",").map((item) => item.trim()).filter(Boolean);
  if (link && !safeUrl(link)) return message(t("validLink"), true);
  message(t("publishing"));
  const { error } = await client.from("portfolio_entries").insert({ type: $("#entryType").value, title, description, technologies, link: link || null });
  if (error) return message(error.message, true);
  event.target.reset(); message(t("published")); await loadEntries();
});

$("#recoveryForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const newPassword = $("#newPassword").value;
  if (newPassword !== $("#confirmPassword").value) return message(t("passwordsMismatch"), true);
  const { error } = await client.auth.updateUser({ password: newPassword });
  if (error) return message(error.message, true);
  event.target.reset(); message(t("passwordSaved"));
  await checkSession();
});

$("#year").textContent = new Date().getFullYear();
applyLanguage(activeLanguage);
applyTheme(activeTheme);
if (configured()) {
  client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  client.auth.onAuthStateChange((event) => {
    if (event === "PASSWORD_RECOVERY") {
      $("#loginView").hidden = true; $("#editorView").hidden = true; $("#recoveryView").hidden = false; message("");
      if (!modal.open) modal.showModal();
    }
    if (event === "SIGNED_IN") checkSession();
  });
  loadEntries();
}
