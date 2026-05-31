/* ============================================================
   AVIRAJ VIRAPE — interactions
   ============================================================ */

/* ---------- FAILSAFE: never let content stay hidden ----------
   Registered first & independently so a throw elsewhere, a stalled
   observer, or odd timing can't leave the page blank.            */
(function failsafe() {
  function revealChrome() {
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('lit');
    var nav = document.getElementById('nav');
    if (nav) nav.classList.add('show');
    var boot = document.getElementById('boot');
    if (boot) { boot.classList.add('done'); boot.style.display = 'none'; }
  }
  // hard cap: if the intro hasn't resolved in 4.2s, force the chrome visible.
  // (Section content is visible by default in CSS, so it never needs this.)
  setTimeout(revealChrome, 4200);
})();

/* ---------- image frames: load real file, fallback to placeholder ---------- */
(function initFrames() {
  document.querySelectorAll('.frame[data-img]').forEach((frame) => {
    const img = frame.querySelector('img');
    const src = frame.getAttribute('data-img');
    if (!img || !src) return;
    img.addEventListener('load', () => {
      if (img.naturalWidth > 1) frame.classList.remove('is-empty');
    });
    img.addEventListener('error', () => frame.classList.add('is-empty'));
    img.src = src; // if file exists in /assets, it shows; else placeholder stays
  });
})();

/* ---------- BOOT SEQUENCE ---------- */
(function boot() {
  const boot = document.getElementById('boot');
  const linesBox = document.getElementById('bootLines');
  const nameEl = document.getElementById('bootName');
  const bar = document.getElementById('bootBar');
  const hero = document.querySelector('.hero');
  const nav = document.getElementById('nav');

  const steps = [
    'Initializing systems…',
    'Loading neural modules…',
    'Compiling ambition…',
    'Online.'
  ];

  // skip boot if already seen this session
  const seen = sessionStorage.getItem('av_booted');
  if (seen) {
    boot.classList.add('done');
    boot.style.display = 'none';
    hero.classList.add('lit');
    nav.classList.add('show');
    document.querySelector('.boot__name').classList.add('show');
    return;
  }

  nameEl.classList.add('show');
  bar.style.transition = 'width 2.2s cubic-bezier(0.22,1,0.36,1)';
  requestAnimationFrame(() => { bar.style.width = '100%'; });

  let i = 0;
  const line = linesBox.querySelector('.boot__line');
  function nextLine() {
    line.classList.remove('show');
    void line.offsetWidth;
    line.textContent = steps[i];
    line.classList.add('show');
    i++;
    if (i < steps.length) setTimeout(nextLine, 560);
  }
  nextLine();

  setTimeout(() => {
    boot.classList.add('done');
    hero.classList.add('lit');
    nav.classList.add('show');
    sessionStorage.setItem('av_booted', '1');
    setTimeout(() => { boot.style.display = 'none'; }, 1200);
  }, 2600);
})();

/* ---------- TYPING EFFECT (hero subtitle) ---------- */
(function typing() {
  const el = document.getElementById('typed');
  const cursor = document.getElementById('cursor');
  if (!el) return;
  const phrases = [
    'Machine Learning & GenAI',
    'Founder-in-the-making',
    'IEEE-published researcher',
    'I cannot stop building.'
  ];
  let p = 0, c = 0, deleting = false;

  function tick() {
    const word = phrases[p];
    if (!deleting) {
      el.textContent = word.slice(0, ++c);
      if (c === word.length) { deleting = true; return setTimeout(tick, 1600); }
    } else {
      el.textContent = word.slice(0, --c);
      if (c === 0) { deleting = false; p = (p + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 42 : 70);
  }
  // start after boot
  setTimeout(tick, sessionStorage.getItem('av_booted') ? 600 : 2800);

  setInterval(() => { cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0'; }, 530);
})();

/* ---------- SCROLL REVEALS ---------- */
(function reveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();

/* ---------- NAVBAR: scroll state + active section + mobile ---------- */
(function navbar() {
  const nav = document.getElementById('nav');
  const links = [...document.querySelectorAll('.nav__link')];
  const burger = document.getElementById('burger');
  const mobile = document.getElementById('navMobile');
  const sections = ['home', 'about', 'arsenal', 'missions', 'journey', 'contact'];

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 24);
    let current = 'home';
    for (const id of sections) {
      const s = document.getElementById(id);
      if (!s) continue;
      const r = s.getBoundingClientRect();
      if (r.top <= 160 && r.bottom >= 160) { current = id; break; }
    }
    links.forEach((l) => l.classList.toggle('active', l.dataset.sec === current));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  burger.addEventListener('click', () => mobile.classList.toggle('open'));
  mobile.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => mobile.classList.remove('open'))
  );
})();

/* ---------- ID CARD TILT ---------- */
(function tilt() {
  const card = document.getElementById('idcard');
  if (!card) return;
  const wrap = card.parentElement;
  const MAX = 12;

  function move(e) {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * MAX * 2;
    const ry = (px - 0.5) * MAX * 2;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    card.style.setProperty('--mx', (px * 100) + '%');
    card.style.setProperty('--my', (py * 100) + '%');
  }
  function reset() {
    card.style.transform = 'rotateX(0) rotateY(0)';
  }
  wrap.addEventListener('mousemove', move);
  wrap.addEventListener('mouseleave', reset);

  // gentle idle float before first interaction
  let interacted = false;
  wrap.addEventListener('mouseenter', () => { interacted = true; });
})();

/* ---------- IMAGE FRAME TILT (cohesive 3D effect on all media boxes) ---------- */
(function frameTilt() {
  if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
  const frames = document.querySelectorAll('.frame.mission__media, .about__photo, .feature__media .frame');
  frames.forEach((frame) => {
    frame.classList.add('is-tilt');
    // the about photo gets a stronger, hero-like tilt
    const MAX = frame.classList.contains('about__photo') ? 11 : 8;
    function move(e) {
      const r = frame.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      const rx = (0.5 - py) * MAX * 2;
      const ry = (px - 0.5) * MAX * 2;
      frame.style.transform =
        'perspective(1000px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateZ(6px)';
      frame.style.setProperty('--mx', (px * 100) + '%');
      frame.style.setProperty('--my', (py * 100) + '%');
    }
    function enter() { frame.classList.add('is-active'); }
    function leave() {
      frame.classList.remove('is-active');
      frame.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
    frame.addEventListener('mouseenter', enter);
    frame.addEventListener('mousemove', move);
    frame.addEventListener('mouseleave', leave);
  });
})();

/* ---------- INTERACTIVE BACKGROUND ---------- */
(function bgInteractive() {
  const layer = document.querySelector('.bg-layer');
  if (!layer) return;

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* floating motes (skip if reduced motion) */
  const field = document.getElementById('bgParticles');
  if (field && !reduce) {
    const COUNT = window.innerWidth < 700 ? 14 : 26;
    let html = '';
    for (let i = 0; i < COUNT; i++) {
      const left = Math.random() * 100;
      const size = 1.5 + Math.random() * 2.5;
      const dur  = 14 + Math.random() * 18;
      const delay = -Math.random() * dur;
      const op = 0.25 + Math.random() * 0.45;
      html += '<span class="mote" style="left:' + left + '%;width:' + size + 'px;height:' + size +
              'px;opacity:' + op + ';animation-duration:' + dur + 's;animation-delay:' + delay + 's"></span>';
    }
    field.innerHTML = html;
  }

  if (reduce) return;

  /* cursor spotlight + parallax — lerped for smoothness */
  const W = () => window.innerWidth, H = () => window.innerHeight;
  let tx = W() / 2, ty = H() * 0.32;     // target cursor
  let cx = tx, cy = ty;                    // eased cursor
  let tpx = 0, tpy = 0, px = 0, py = 0;    // target / eased parallax

  window.addEventListener('mousemove', (e) => {
    tx = e.clientX; ty = e.clientY;
    tpx = (e.clientX / W() - 0.5) * 36;
    tpy = (e.clientY / H() - 0.5) * 36;
  }, { passive: true });

  function raf() {
    cx += (tx - cx) * 0.12;  cy += (ty - cy) * 0.12;
    px += (tpx - px) * 0.06; py += (tpy - py) * 0.06;
    layer.style.setProperty('--cx', cx.toFixed(1) + 'px');
    layer.style.setProperty('--cy', cy.toFixed(1) + 'px');
    layer.style.setProperty('--px', px.toFixed(2) + 'px');
    layer.style.setProperty('--py', py.toFixed(2) + 'px');
    requestAnimationFrame(raf);
  }
  raf();
})();