/* =========================================================
   Study Hub | Giovana Amorim Campos
   JavaScript (ES6 Vanilla)
   ---------------------------------------------------------
   Índice:
   1. Configuração (links e dados editáveis)
   2. Tema claro/escuro
   3. Renderização de projetos + filtro dinâmico
   4. Renderização de disciplinas
   5. Modal de detalhes
   6. Smooth scroll, menu ativo e voltar ao topo
   ========================================================= */

'use strict';

/* ---------- 1. CONFIGURAÇÃO ---------- */

// Altere aqui o link do repositório: todos os botões com o atributo [data-repo] serão atualizados.
const CONFIG = {
  repoUrl: 'https://github.com/giovanaamorim/Giovana_Study_Hub_TI',
  email: 'giamorim2101@gmail.com',
  linkedin: 'https://www.linkedin.com/in/giovana-amorime/'
};

// Nomes legíveis das categorias de filtro
const CATEGORIES = {
  eng: 'Engenharia de Software',
  gestao: 'Gestão & Requisitos',
  mobile: 'Mobile/Back-end'
};

// Projetos em destaque. Para adicionar um projeto, basta incluir um novo objeto aqui.
const PROJECTS = [
  {
    id: 'ponto',
    title: 'Sistema Ponto Eletrônico',
    icon: 'bi-alarm',
    status: 'Concluído',
    categories: ['gestao', 'mobile'],
    summary: 'Gestão de jornada de trabalho, controle de registros e regras de negócio.',
    description: 'Sistema para registro e acompanhamento da jornada de trabalho. O foco está na modelagem correta das regras de negócio, como cálculo de horas, entradas e saídas, e na rastreabilidade dos registros.',
    tech: ['Java', 'Spring', 'REST API', 'Git'],
    highlights: [
      'Levantamento e modelagem de requisitos funcionais e não funcionais',
      'Regras de negócio para controle e consistência dos registros de jornada',
      'API REST organizada em camadas (controller, service e repository)',
      'Versionamento com commits descritivos'
    ],
    folder: '04_Projetos_e_Certificados'
  },
  {
    id: 'clinico',
    title: 'Sistema Clínico Unificado',
    icon: 'bi-heart-pulse',
    status: 'Concluído',
    categories: ['eng', 'mobile'],
    summary: 'Centralização de prontuários e registros de saúde com foco em segurança de dados.',
    description: 'Plataforma que unifica prontuários e registros de saúde em um único lugar, com atenção especial à proteção, à integridade e ao controle de acesso às informações sensíveis.',
    tech: ['Java', 'Spring', 'REST API', 'Segurança de Dados'],
    highlights: [
      'Arquitetura pensada para dados sensíveis',
      'Controle de acesso e boas práticas de segurança',
      'Modelagem de requisitos com foco em casos de uso',
      'Documentação técnica do sistema'
    ],
    folder: '04_Projetos_e_Certificados'
  },
  {
    id: 'readflow',
    title: 'ReadFlow',
    icon: 'bi-book-half',
    status: 'Em evolução',
    categories: ['eng', 'gestao'],
    summary: 'Plataforma para fluxo e organização de leitura e estudos.',
    description: 'Aplicação para organizar hábitos de leitura e estudo: metas, progresso e fluxo de atividades. Une a visão de planejamento e organização pessoal à construção de uma solução de software.',
    tech: ['Node.js', 'REST API', 'Git'],
    highlights: [
      'Organização do fluxo de leitura e estudos',
      'Planejamento incremental com mentalidade ágil',
      'API REST em Node.js',
      'Evolução contínua registrada no GitHub'
    ],
    folder: '04_Projetos_e_Certificados'
  },
  {
    id: 'paradigmas',
    title: 'Paradigmas',
    icon: 'bi-bricks',
    status: 'Concluído',
    categories: ['eng'],
    summary: 'Exploração de padrões de projeto e múltiplos paradigmas de desenvolvimento de software.',
    description: 'Estudo prático de padrões de projeto e de diferentes paradigmas de programação, comparando abordagens e discutindo quando cada uma é mais adequada.',
    tech: ['Java', 'Padrões de Projeto', 'Orientação a Objetos'],
    highlights: [
      'Implementação de padrões de projeto clássicos',
      'Comparação entre paradigmas de desenvolvimento',
      'Código limpo e boas práticas de arquitetura'
    ],
    folder: '04_Projetos_e_Certificados'
  }
];

// Disciplinas e evidências de aprendizado.
// status: 'cursada' (pasta 02) ou 'em-curso' (pasta 03). Ajuste conforme o seu histórico.
const COURSES = [
  {
    id: 'seguranca',
    title: 'Segurança de Dados & Segurança Digital',
    icon: 'bi-shield-lock',
    status: 'em-curso',
    summary: 'Códigos práticos e artigo acadêmico sobre integridade e proteção de dados.',
    description: 'Estudo de princípios de segurança da informação (confidencialidade, integridade e disponibilidade) com implementações práticas e produção de um artigo acadêmico.',
    evidences: ['Códigos práticos de proteção de dados', 'Artigo acadêmico sobre integridade e proteção de dados'],
    tech: ['Criptografia', 'Integridade', 'Boas práticas']
  },
  {
    id: 'ihc',
    title: 'Interação Humano-Computador (IHC)',
    icon: 'bi-window-sidebar',
    status: 'cursada',
    summary: 'Protótipos, códigos e foco em usabilidade e experiência do usuário (UX).',
    description: 'Disciplina centrada no usuário: heurísticas de usabilidade, prototipação e validação de interfaces para construir produtos mais acessíveis e intuitivos.',
    evidences: ['Protótipos de interface', 'Códigos de implementação das interfaces', 'Análises de usabilidade e experiência do usuário'],
    tech: ['Usabilidade', 'UX', 'Prototipação']
  },
  {
    id: 'mobile',
    title: 'Programação para Dispositivos Móveis',
    icon: 'bi-phone',
    status: 'cursada',
    summary: 'Desenvolvimento de aplicações mobile completas.',
    description: 'Construção de aplicações mobile completas, do planejamento das telas à integração com serviços, com atenção à organização do código.',
    evidences: ['Aplicações mobile completas', 'Código versionado no repositório'],
    tech: ['Mobile', 'Interfaces', 'Integração com APIs']
  },
  {
    id: 'so',
    title: 'Sistemas Operacionais',
    icon: 'bi-motherboard',
    status: 'cursada',
    summary: 'Implementação prática de rotinas de baixo nível e processos.',
    description: 'Compreensão do funcionamento interno de um sistema operacional por meio de implementações práticas: processos, escalonamento e gerenciamento de recursos.',
    evidences: ['Implementações de rotinas de baixo nível', 'Exercícios práticos com processos'],
    tech: ['Processos', 'Escalonamento', 'Baixo nível']
  },
  {
    id: 'testes',
    title: 'Testes e Qualidade de Software',
    icon: 'bi-bug',
    status: 'em-curso',
    summary: 'Análise de casos de uso, requisitos e garantia de qualidade.',
    description: 'Estratégias para garantir a qualidade do software: análise de requisitos e casos de uso, planejamento de testes e verificação do comportamento esperado.',
    evidences: ['Análises de casos de uso e requisitos', 'Planos e casos de teste', 'Práticas de garantia de qualidade'],
    tech: ['Casos de uso', 'Requisitos', 'QA']
  }
];

/* ---------- Utilitários ---------- */

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

// Escapa texto antes de inserir como HTML (boa prática de segurança)
const esc = (text) => String(text).replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));

const repoFolderUrl = (folder) => `${CONFIG.repoUrl}/tree/main/${folder}`;

/* ---------- 2. TEMA CLARO/ESCURO ---------- */

const THEME_KEY = 'studyhub-theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  const icon = $('#themeIcon');
  const label = $('#themeLabel');
  const isDark = theme === 'dark';
  icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  label.textContent = isDark ? 'Tema claro' : 'Tema escuro';
  $('#themeToggle').setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', isDark ? '#0b1220' : '#f8fafc');
}

function initTheme() {
  applyTheme(document.documentElement.getAttribute('data-bs-theme') || 'dark');
  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* sem persistência */ }
  });
}

/* ---------- 3. PROJETOS + FILTRO DINÂMICO ---------- */

function projectCard(project) {
  const cats = project.categories.map((c) => `<span class="tech-tag">${esc(CATEGORIES[c])}</span>`).join('');
  const techs = project.tech.map((t) => `<span class="tech-tag">${esc(t)}</span>`).join('');
  const statusClass = project.status === 'Concluído' ? 'status-done' : 'status-progress';
  const statusIcon = project.status === 'Concluído' ? 'bi-check-circle-fill' : 'bi-arrow-repeat';

  return `
    <div class="col-md-6 col-xl-3 project-item" data-categories="${project.categories.join(' ')}">
      <article class="card sh-card h-100">
        <div class="card-body p-4 d-flex flex-column">
          <div class="d-flex justify-content-between align-items-start mb-3">
            <div class="icon-box"><i class="bi ${esc(project.icon)}" aria-hidden="true"></i></div>
            <span class="status-tag ${statusClass}"><i class="bi ${statusIcon}" aria-hidden="true"></i>${esc(project.status)}</span>
          </div>
          <h3 class="h5 fw-bold">${esc(project.title)}</h3>
          <p class="text-body-secondary small flex-grow-1">${esc(project.summary)}</p>
          <div class="d-flex flex-wrap gap-2 mb-3">${techs}</div>
          <button type="button" class="btn btn-outline-accent btn-sm mt-auto" data-open-project="${project.id}">
            <i class="bi bi-plus-circle me-1" aria-hidden="true"></i>Detalhes
          </button>
        </div>
      </article>
    </div>`;
}

function renderProjects() {
  $('#projectGrid').innerHTML = PROJECTS.map(projectCard).join('');
}

function filterProjects(filter) {
  let visible = 0;
  $$('.project-item').forEach((item) => {
    const matches = filter === 'all' || item.dataset.categories.split(' ').includes(filter);
    item.classList.toggle('d-none', !matches);
    if (matches) {
      visible++;
      // Reinicia a animação de entrada
      item.style.animation = 'none';
      void item.offsetWidth;
      item.style.animation = '';
    }
  });
  $('#projectEmpty').classList.toggle('d-none', visible > 0);
}

function initFilters() {
  const group = $('#projectFilters');
  group.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-filter]');
    if (!btn) return;
    $$('[data-filter]', group).forEach((b) => {
      const active = b === btn;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    filterProjects(btn.dataset.filter);
  });
}

/* ---------- 4. DISCIPLINAS ---------- */

function courseCard(course) {
  const done = course.status === 'cursada';
  const statusClass = done ? 'status-done' : 'status-progress';
  const statusText = done ? 'Cursada' : 'Em curso';
  const statusIcon = done ? 'bi-check-circle-fill' : 'bi-hourglass-split';
  const folder = done ? '02_Disciplinas_Cursadas' : '03_Disciplinas_em_Curso';

  return `
    <div class="timeline-item">
      <button type="button" class="card sh-card course-card" data-open-course="${course.id}">
        <div class="card-body p-4 d-flex gap-3 align-items-start">
          <div class="course-icon"><i class="bi ${esc(course.icon)}" aria-hidden="true"></i></div>
          <div class="flex-grow-1">
            <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-1">
              <h3 class="h6 fw-bold mb-0">${esc(course.title)}</h3>
              <span class="status-tag ${statusClass}"><i class="bi ${statusIcon}" aria-hidden="true"></i>${statusText}</span>
            </div>
            <p class="text-body-secondary small mb-2">${esc(course.summary)}</p>
            <span class="small text-accent"><i class="bi bi-folder2 me-1" aria-hidden="true"></i><code>${folder}</code></span>
          </div>
        </div>
      </button>
    </div>`;
}

function renderCourses() {
  $('#courseTimeline').innerHTML = COURSES.map(courseCard).join('');
}

/* ---------- 5. MODAL DE DETALHES ---------- */

let detailModal;

function openModal({ kicker, title, description, listTitle, list, tech, links }) {
  $('#detailModalKicker').textContent = kicker;
  $('#detailModalTitle').textContent = title;
  $('#detailModalBody').innerHTML = `
    <p class="text-body-secondary">${esc(description)}</p>
    <h4>${esc(listTitle)}</h4>
    <ul class="check-list">${list.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    <h4>Tecnologias e conceitos</h4>
    <div class="d-flex flex-wrap gap-2">${tech.map((t) => `<span class="tech-tag">${esc(t)}</span>`).join('')}</div>`;
  $('#detailModalFooter').innerHTML = links.map((l) => `
    <a class="btn ${l.primary ? 'btn-gradient' : 'btn-outline-accent'}" href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">
      <i class="bi ${esc(l.icon)} me-2" aria-hidden="true"></i>${esc(l.label)}
    </a>`).join('') + `<button type="button" class="btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Fechar</button>`;
  detailModal.show();
}

function initModal() {
  detailModal = new bootstrap.Modal($('#detailModal'));

  // Delegação de eventos: cliques em "Detalhes" (projetos) e nos cartões de disciplina
  document.addEventListener('click', (event) => {
    const projectBtn = event.target.closest('[data-open-project]');
    if (projectBtn) {
      const p = PROJECTS.find((item) => item.id === projectBtn.dataset.openProject);
      if (!p) return;
      openModal({
        kicker: `Projeto · ${p.status}`,
        title: p.title,
        description: p.description,
        listTitle: 'Destaques técnicos',
        list: p.highlights,
        tech: p.tech,
        links: [
          { label: 'Ver no GitHub', href: repoFolderUrl(p.folder), icon: 'bi-github', primary: true }
        ]
      });
      return;
    }

    const courseBtn = event.target.closest('[data-open-course]');
    if (courseBtn) {
      const c = COURSES.find((item) => item.id === courseBtn.dataset.openCourse);
      if (!c) return;
      const folder = c.status === 'cursada' ? '02_Disciplinas_Cursadas' : '03_Disciplinas_em_Curso';
      openModal({
        kicker: c.status === 'cursada' ? 'Disciplina cursada' : 'Disciplina em curso',
        title: c.title,
        description: c.description,
        listTitle: 'Evidências de aprendizado',
        list: c.evidences,
        tech: c.tech,
        links: [
          { label: 'Ver evidências no GitHub', href: repoFolderUrl(folder), icon: 'bi-github', primary: true }
        ]
      });
    }
  });
}

/* ---------- 6. SCROLL SUAVE, MENU ATIVO E VOLTAR AO TOPO ---------- */

function initNavigation() {
  const navbarHeight = () => $('.sh-navbar').offsetHeight;
  const collapseEl = $('#menuPrincipal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Smooth scroll com compensação da navbar fixa
  $$('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (id.length < 2) return;
      const target = $(id);
      if (!target) return;
      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight() + 1;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
      history.replaceState(null, '', id);
      // Fecha o menu retrátil no mobile
      if (collapseEl.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
    });
  });

  // Destaca o link do menu correspondente à seção visível
  const sections = ['inicio', 'sobre', 'projetos', 'disciplinas', 'repositorio', 'contato']
    .map((id) => document.getElementById(id)).filter(Boolean);
  const navLinks = $$('.sh-navbar .nav-link');

  const setActive = () => {
    const probe = window.scrollY + navbarHeight() + window.innerHeight * 0.3;
    let current = sections[0].id;
    sections.forEach((s) => { if (s.offsetTop <= probe) current = s.id; });
    // Ao chegar no fim da página, destaca "Contato"
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'contato';
    navLinks.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
  };

  // Botão "voltar ao topo"
  const backToTop = $('#backToTop');
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setActive();
      backToTop.classList.toggle('show', window.scrollY > 500);
      ticking = false;
    });
  }, { passive: true });
  setActive();
}

/* ---------- Inicialização ---------- */

document.addEventListener('DOMContentLoaded', () => {
  // Atualiza os links do repositório a partir da configuração
  $$('[data-repo]').forEach((a) => { a.href = CONFIG.repoUrl; });
  $('#year').textContent = new Date().getFullYear();

  initTheme();
  renderProjects();
  renderCourses();
  initFilters();
  initModal();
  initNavigation();
});
