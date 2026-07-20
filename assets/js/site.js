/* ============================================================
   ESC Club — Shared header, navigation & footer
   ------------------------------------------------------------
   EDIT NAVIGATION HERE (once, for every page & language).
   Each page only needs:
     <script>window.PAGE = { lang:'en', root:'', translations:{en:'', zh:'zh/', es:'es/'} }</script>
     <div id="site-header"></div> ... <div id="site-footer"></div>
   - lang: 'en' | 'zh' | 'es'
   - root: relative path back to the site root ('' , '../', '../../' ...)
   - translations: site-root-relative path of THIS page in each language
   ============================================================ */

/* ---------- NAVIGATION DATA (labels + links per language) ---------- */
const ESC_NAV = {
  en: [
    { label: 'Home', href: '' },
    { label: 'About', children: [
      { label: 'Mission', href: 'mission/' },
      { label: 'Team', href: 'team/' },
      { label: 'History', href: 'history/' },
    ]},
    { label: 'Program', href: 'program/', children: [
      { label: 'Culture Promotion', group: true, children: [
        { label: 'Multi-ethnic cultural integration', href: 'online-language-resource/' },
        { label: 'Border Youth Research Project 🌟', href: 'border-youth-research-project/' },
        { label: 'Achievement', href: 'culture-promotion-achievement/' },
      ]},
      { label: 'STEM Promotion', group: true, children: [
        { label: 'MIT APP Inventor Classes', href: 'mit-app-inventor-classes/' },
        { label: '3D Creative Classes', href: '3d-printing-classes/' },
        { label: 'FLL Robotic Classes', href: 'fll-robotic-classes/' },
        { label: 'Achievements', href: 'stem-promotion-achievements/' },
      ]},
      { label: 'Volunteer and Community Service', href: 'volunteer-and-community-service/' },
    ]},
    { label: 'Crossing Borders', href: 'crossing-borders-building-futures/' },
    { label: 'Annual Events', children: [
      { label: 'Annual Hackathon', group: true, children: [
        { label: '2025 AGI Innovation AI APP Challenge', href: 'agi/' },
        { label: '2024 Hackathon-SAIC', href: 'saic/' },
      ]},
      { label: 'Flea Market for Kids', group: true, children: [
        { label: '2024 Flea Market for Kids', href: '2024-flea-market-for-kids/' },
        { label: '2023 Flea Market for Kids', href: '2023-flea-market-for-kids/' },
      ]},
    ]},
    { label: 'News', href: 'blog/' },
    { label: 'Contact', href: 'contact/' },
  ],

  zh: [
    { label: '主页', href: 'zh/' },
    { label: '关于', children: [
      { label: '使命', href: 'zh/mission/' },
      { label: '团队', href: 'zh/team/' },
      { label: '历史', href: 'zh/history/' },
    ]},
    { label: '项目', href: 'zh/program/', children: [
      { label: '文化推广', group: true, children: [
        { label: '多民族文化融合', href: 'zh/online-language-resource/' },
        { label: '边境青少年研究项目 🌟', href: 'zh/border-youth-research-project/' },
        { label: '成果', href: 'zh/culture-promotion-achievement/' },
      ]},
      { label: 'STEM 推广', group: true, children: [
        { label: 'MIT APP Inventor 课程', href: 'zh/mit-app-inventor-classes/' },
        { label: '3D 创意课程', href: 'zh/3d-printing-classes/' },
        { label: 'FLL 机器人课程', href: 'zh/fll-robotic-classes/' },
        { label: '成果', href: 'zh/stem-promotion-achievements/' },
      ]},
      { label: '志愿者与社区服务', href: 'zh/volunteer-and-community-service/' },
    ]},
    { label: '跨越边境', href: 'crossing-borders-building-futures/' },
    { label: '年度活动', children: [
      { label: '年度黑客马拉松', group: true, children: [
        { label: '2025 AGI 创新 AI APP 挑战赛', href: 'zh/agi/' },
        { label: '2024 SAIC 黑客马拉松', href: 'zh/saic/' },
      ]},
      { label: '儿童跳蚤市场', group: true, children: [
        { label: '2024 儿童跳蚤市场', href: 'zh/2024-flea-market-for-kids/' },
        { label: '2023 儿童跳蚤市场', href: 'zh/2023-flea-market-for-kids/' },
      ]},
    ]},
    { label: '新闻', href: 'blog/' },
    { label: '联系', href: 'zh/contact/' },
  ],

  es: [
    { label: 'Inicio', href: 'es/' },
    { label: 'Nosotros', children: [
      { label: 'Misión', href: 'es/mission/' },
      { label: 'Equipo', href: 'es/team/' },
      { label: 'Historia', href: 'es/history/' },
    ]},
    { label: 'Programa', href: 'es/program/', children: [
      { label: 'Promoción Cultural', group: true, children: [
        { label: 'Integración cultural multiétnica', href: 'es/online-language-resource/' },
        { label: 'Proyecto de Jóvenes Fronterizos 🌟', href: 'es/border-youth-research-project/' },
        { label: 'Logros', href: 'es/culture-promotion-achievement/' },
      ]},
      { label: 'Promoción STEM', group: true, children: [
        { label: 'Clases de MIT APP Inventor', href: 'es/mit-app-inventor-classes/' },
        { label: 'Clases Creativas 3D', href: 'es/3d-printing-classes/' },
        { label: 'Clases de Robótica FLL', href: 'es/fll-robotic-classes/' },
        { label: 'Logros', href: 'es/stem-promotion-achievements/' },
      ]},
      { label: 'Voluntariado y Servicio Comunitario', href: 'es/volunteer-and-community-service/' },
    ]},
    { label: 'Cruzando Fronteras', href: 'crossing-borders-building-futures/' },
    { label: 'Eventos Anuales', children: [
      { label: 'Hackathon Anual', group: true, children: [
        { label: '2025 AGI Innovation AI APP Challenge', href: 'es/agi/' },
        { label: '2024 Hackathon-SAIC', href: 'es/saic/' },
      ]},
      { label: 'Mercadito para Niños', group: true, children: [
        { label: 'Mercadito 2024', href: 'es/2024-flea-market-for-kids/' },
        { label: 'Mercadito 2023', href: 'es/2023-flea-market-for-kids/' },
      ]},
    ]},
    { label: 'Noticias', href: 'blog/' },
    { label: 'Contacto', href: 'es/contact/' },
  ],
};

/* ---------- FOOTER TEXT (per language) ---------- */
const ESC_FOOTER = {
  en: { tagline: 'Inspired by Humanity and Empowered by Technology',
        quick: 'Quick Links', langs: 'Languages', top: 'Scroll to Top',
        links: [['Programs','program/'],['Annual Events','agi/'],['News','blog/'],['Contact','contact/']] },
  zh: { tagline: '以人文为魂，以科技为翼',
        quick: '快速链接', langs: '语言', top: '滚动至顶部',
        links: [['项目','zh/program/'],['年度活动','zh/agi/'],['新闻','blog/'],['联系','zh/contact/']] },
  es: { tagline: 'Inspirado por la humanidad, impulsado por la tecnología',
        quick: 'Enlaces', langs: 'Idiomas', top: 'Volver arriba',
        links: [['Programa','es/program/'],['Eventos Anuales','es/agi/'],['Noticias','blog/'],['Contacto','es/contact/']] },
};

const LOGO_URL = 'https://escedu.org/wp-content/uploads/2024/02/ESC-Club-Logo-print-300x300.png';

/* ---------- RENDERING (no need to edit below this line) ---------- */
(function () {
  const P = window.PAGE || { lang: 'en', root: '', translations: { en: '', zh: 'zh/', es: 'es/' } };
  const R = P.root || '';
  const nav = ESC_NAV[P.lang] || ESC_NAV.en;
  const ftr = ESC_FOOTER[P.lang] || ESC_FOOTER.en;

  const link = (href) => R + href;

  function renderItems(items, depth) {
    return items.map((it) => {
      let inner = it.children
        ? `<${it.href ? `a href="${link(it.href)}"` : 'button type="button"'}>${it.label} ▾${it.href ? '</a>' : '</button>'}`
        : `<a href="${link(it.href)}">${it.label}</a>`;
      if (it.group) inner = `<div class="group-label">${it.label}</div>`;
      const kids = it.children ? `<ul class="dropdown">${renderItems(it.children, depth + 1)}</ul>` : '';
      return `<li>${inner}${kids}</li>`;
    }).join('');
  }

  const langLinks = ['en', 'zh', 'es'].map((l) => {
    const names = { en: 'EN', zh: '中文', es: 'ES' };
    const t = (P.translations && P.translations[l] != null) ? P.translations[l] : (l === 'en' ? '' : l + '/');
    return `<a href="${R + t}" class="${l === P.lang ? 'on' : ''}" lang="${l}">${names[l]}</a>`;
  }).join('');

  const headerEl = document.getElementById('site-header');
  if (headerEl) headerEl.outerHTML = `
  <header class="site-header">
    <div class="wrap nav-bar">
      <a class="brand" href="${link(P.lang === 'en' ? '' : P.lang + '/')}">
        <img src="${LOGO_URL}" alt="ESC Club logo">
        <span>ESC Club<small>ESCEDU.ORG</small></span>
      </a>
      <button class="nav-toggle" aria-label="Menu" onclick="document.querySelector('.nav-menu').classList.toggle('open')">☰</button>
      <ul class="nav-menu">${renderItems(nav, 0)}</ul>
      <nav class="lang-switch" aria-label="Language">${langLinks}</nav>
    </div>
  </header>`;

  const footerEl = document.getElementById('site-footer');
  if (footerEl) footerEl.outerHTML = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="cols">
        <div>
          <h4>ESC Club</h4>
          <p>${ftr.tagline}</p>
        </div>
        <div>
          <h4>${ftr.quick}</h4>
          <ul>${ftr.links.map(([t, h]) => `<li><a href="${R + h}">${t}</a></li>`).join('')}</ul>
        </div>
        <div>
          <h4>${ftr.langs}</h4>
          <ul>
            <li><a href="${R + (P.translations?.en ?? '')}">English</a></li>
            <li><a href="${R + (P.translations?.zh ?? 'zh/')}">中文</a></li>
            <li><a href="${R + (P.translations?.es ?? 'es/')}">Español</a></li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <span>Copyright © 2026 ESCEDU | Developed by <a href="http://www.webcindy.com">WebCindy</a></span>
        <a href="#top">${ftr.top} ↑</a>
      </div>
    </div>
  </footer>`;
})();
