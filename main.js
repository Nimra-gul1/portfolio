/* ── PROJECT DATA ── */
const projects = {
  threatconsole:{
    emoji:'🛡️', bannerClass:'threatconsole', year:'2026', type:'Security Lab · Full-Stack',
    title:'Threat Console',
    tagline:'A LIVE-ACTION SECURITY LAB AND DASHBOARD',
    desc:'A full-stack, real-time security console featuring a live TCP port scanner and a local network ARP discovery radar. Built to demonstrate networking concepts and provide functional cybersecurity utilities directly in the browser.',
    features:[
      'Live TCP port scanner that resolves open, closed, and filtered ports in real time via Server-Sent Events (SSE)',
      'Network radar sweep using ARP table discovery to map active physical devices on the local subnet',
      'Parallelized backend execution optimized for Vercel serverless functions to bypass execution timeouts',
      'Client-side Hash Generator (SHA-1, SHA-256) via Web Crypto API',
      'Advanced Password Strength Analyzer evaluating entropy and common patterns',
      'Interactive CTF (Capture The Flag) challenges evaluating vulnerability awareness'
    ],
    stack:['Node.js','Express.js','Server-Sent Events (SSE)','Web Crypto API','Vercel Serverless'],
    github:'https://github.com/Nimra-gul1/threat-console',
    demo:'https://threat-console.vercel.app/'
  },
  shophub:{
    emoji:'🛒', bannerClass:'shophub', year:'2026', type:'Full-Stack E-Commerce Platform',
    title:'ShopHub',
    tagline:'A PRODUCTION-READY FULL-STACK E-COMMERCE EXPERIENCE',
    desc:'ShopHub is a production-ready full-stack e-commerce application that delivers a complete online shopping experience — from product discovery and secure authentication to checkout and order management. It also includes a comprehensive admin dashboard for managing products, customers, orders, and store operations.',
    features:[
      'Secure JWT authentication with role-based access control for users and administrators',
      'Product catalog with live search, advanced filtering, sorting, categories, brands, ratings, and price ranges',
      'Fully functional shopping cart, wishlist, coupon system, shipping calculation, and checkout workflow',
      'Product reviews and ratings with verified purchase support',
      'Admin dashboard featuring sales analytics, inventory management, order tracking, and customer management',
      'Complete CRUD operations for products, categories, and coupons via admin panel',
      'Responsive, modern UI with smooth animations, loading states, empty states, and real-time toast notifications',
      'RESTful API architecture with secure backend validation and MongoDB database integration'
    ],
    stack:['React (Vite)','Tailwind CSS','React Router','Context API','Axios','Framer Motion','Node.js','Express.js','MongoDB','Mongoose','JWT','bcrypt'],
    github:'https://github.com/Nimra-gul1/ShophubEcommerce-website.git',
    demo:'https://drive.google.com/file/d/1vBoxGYDg5Qs_TfFHSRgRpbhvwxBbmHSl/view?usp=drive_link'
  },
  qalbify:{
    emoji:'🫀', bannerClass:'qalbify', year:'2026', type:'AI Platform · Final Year Project',
    title:'Qalbify',
    tagline:'AN AI POWERED SPIRITUAL AND EMOTIONAL COMPANION',
    desc:"Qalbify is an AI-driven android and web-based platform designed to support emotional and spiritual well-being. The mobile application analyzes user emotions using a hugging face NLP model and provides empathetic responses along with relevant Qur’anic verses and translations fetched from a custom dataset stored in MongoDB. The web-based admin panel includes user management, red flag monitoring, hallucination detection, content control, and system analytics.",
    features:[
      'Emotion detection via HuggingFace DistilRoBERTa Inference API — analyzes user emotional state in real time',
      'OpenAI GPT-4o for empathetic, context-aware conversational responses',
      'AssemblyAI integration for voice-based interaction and speech-to-text',
      "Custom Qur'an dataset with verse matching, deduplication logic, and personalized spiritual guidance",
      'Admin panel with red-flag detection, hallucination detection, content moderation, and analytics dashboard',
      'Secure authentication using JWT, bcrypt, and Google OAuth',
      'Streak tracking system, mood check-ins, journal features, and a breathing widget in the mobile app',
      'Full system deployed on Vercel for production use'
    ],
    stack:['React Native (Expo)','React.js','Node.js','Express.js','MongoDB Atlas','OpenAI GPT-4o','HuggingFace API','AssemblyAI','JWT','Google OAuth','Vercel'],
    github:'https://github.com/Nimra-gul1/Qalbify',
    demo:'https://drive.google.com/file/d/1XrmDROffLcvQSY6Yo_uydoSRFCZ-btz6/view',
    demo2:'https://drive.google.com/file/d/1H92kAwod7zVvH3XQe8nuWplCt3-hjhuj/view',
    demo3:'https://drive.google.com/file/d/10tim27xQJECKj28271-ipXME2dbckzvd/view'
  },
  food:{
    emoji:'🍜', bannerClass:'food', year:'2025', type:'Full-Stack MERN Application',
    title:'Food Fusion',
    tagline:'A seamless food ordering experience from browse to delivery.',
    desc:'Food Fusion is a full-stack MERN food ordering platform built for a smooth, responsive user experience on both desktop and mobile. It covers the full ordering lifecycle — menu browsing, cart management, checkout, and order history — with a dedicated admin panel.',
    features:[
      'Real-time order placement and cart management with responsive UI',
      'Menu browsing with category filtering and item detail views',
      'User authentication with account management and order history tracking',
      'Admin panel for restaurant management — menus, orders, and analytics',
      'Smooth frontend-backend integration for consistent data flow and real-time updates',
      'Payment integration ready and deployment on Vercel'
    ],
    stack:['MongoDB','Express.js','React.js','Node.js','REST APIs','JWT Auth'],
    github:'https://github.com/Nimra-gul1/FoodFusion-Website.git',
    demo:'https://drive.google.com/file/d/1tH6WiKa7tj8IfKVVy2tTftIdi-BAw2vC/view'
  },
  carzo:{
    emoji:'🚗', bannerClass:'carzo', year:'2024', type:'Mobile Application',
    title:'Carzo',
    tagline:'Emergency car repair on demand, at your fingertips.',
    desc:'Carzo is a React Native mobile app designed to connect drivers with emergency car repair services quickly and reliably. The UX is built for stress moments — clear flows, fast booking, and live service status.',
    features:[
      'Service booking system with a step-by-step request flow',
      'Real-time service status tracking and push notifications',
      'Feedback and review collection for service providers',
      'Optimized UI for mobile responsiveness and smooth navigation across device sizes',
      'Service provider location mapping and estimated time of arrival',
      'Payment processing and receipt generation'
    ],
    stack:['React Native','JavaScript','REST APIs','Mobile UI'],
    github:'https://github.com/Nimra-gul1/Car-APP.git',
    demo:'https://drive.google.com/file/d/1xEpn7J0eQb_oiJILliAbmLSvLLMLJxlA/view'
  },
  tailoring:{
    emoji:'🧵', bannerClass:'tailoring', year:'2023', type:'UI/UX Design · Figma Prototype',
    title:'Tailoring Management System',
    tagline:'Turning a paper-based tailoring workflow into a clean digital system.',
    desc:"A complete UI/UX prototype designed in Figma for a tailoring service. The goal was to digitize the full workflow — from taking a customer's order to tracking its completion — in a way that's simple enough for non-technical users.",
    features:[
      'Order customization screens with detailed measurement and fabric selection flows',
      'Order tracking interface showing live status from creation to completion',
      'Customer management dashboard for tracking client history and preferences',
      'Focused on simplicity — organized layouts, clear affordances, and minimal friction',
      'Full clickable prototype showing how every screen connects',
      'Payment and delivery scheduling features'
    ],
    stack:['Figma','UI/UX Design','Wireframing','Prototyping','User Flows'],
    linkedin1:'https://www.linkedin.com/posts/nimra-gul-25020b310_figma-uiuxdesign-interfacedesign-activity-7207651679716933632-wG4A?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAE8No5wB87Gn1VEkTrxI7Luv7tRgeQQSvXs&utm_campaign=copy_link',
    linkedin2:'https://www.linkedin.com/posts/nimra-gul-25020b310_figma-uiuxdesign-interfacedesign-activity-7207662281369821184-CIvg?utm_source=social_share_video_v2&utm_medium=android_app&rcm=ACoAAE8No5wB87Gn1VEkTrxI7Luv7tRgeQQSvXs&utm_campaign=copy_link'
  },
  bank:{
    emoji:'🏦', bannerClass:'bank', year:'2023', type:'Software System · C++',
    title:'Bank Management System',
    tagline:'Core banking operations modeled as structured software.',
    desc:'A software system built to simulate and manage core banking operations. The project deepened my understanding of how real-world financial workflows can be modeled in structured code.',
    features:[
      'Account creation, deposit, and withdrawal operations with validation',
      'Transaction record management with full activity history per account',
      'Account balance inquiry and statement viewing',
      'Focus on correct data handling and error-free execution of banking operations',
      'Data persistence with file-based storage',
      'User-friendly command-line interface for all operations'
    ],
    stack:['C++','Object-Oriented Programming','Data Structures','File Handling'],
    github:'https://github.com/Nimra-gul1/Banking-website.git',
    demo:'https://drive.google.com/file/d/1gw6ceQfLV1c0YlpAZNfkyIJkeiGe0xnJ/view'
  },
  library:{
    emoji:'📚', bannerClass:'library', year:'2022', type:'Software System · C++',
    title:'Library Management System',
    tagline:'Replacing manual borrowing logs with digital structured software.',
    desc:'A software system developed in C++ to manage library operations, automating book inventory, borrower transactions, and due dates.',
    features:[
      'Add, catalog, search, and update book inventory details',
      'Issue and return books with automated borrowing record updates',
      'Maintain student borrower indexes and manage overdue return flags',
      'Improved overall data accessibility and organizational workflow efficiency',
      'Detailed book tracking with ISBN and publication details',
      'Automated due date calculation and fine computation'
    ],
    stack:['C++','Data Structures','File Handling'],
    github:'https://github.com/Nimra-gul1/library-management-system.git',
    demo:'https://drive.google.com/file/d/12-Jam2vSbmSMRlQWH-82JuFcCdpicm--/view'
  },
  student:{
    emoji:'🎓', bannerClass:'library', year:'2022', type:'Software System · C++',
    title:'Student Management System',
    tagline:'Digital academic logging for student files, attendance, and grades.',
    desc:'A terminal-based C++ application designed to manage student directories, attendance tracking, grades, and automatic GPA calculation.',
    features:[
      'Add, search, filter, and maintain detailed student profiles',
      'Track student attendance and calculate lecture percentages',
      'Manage academic grades and compute GPAs automatically',
      'Generate neat formatted reports for academic monitoring',
      'Student ID generation and directory sorting by roll number',
      'Academic transcript and performance analysis tools'
    ],
    stack:['C++','OOP','File Handling'],
    github:'https://github.com/Nimra-gul1/student-management-system.git',
    demo:'https://drive.google.com/file/d/1HPbcqjt0B7asaRqO35V7AKnK4JFoCwrG/view'
  }
};

/* ── PRELOADER — handled entirely by CSS animation, no JS needed ── */

/* ── SCROLL PROGRESS BAR ── */
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('scrollProgress');
  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (totalHeight > 0) {
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
  }
});

/* ── THEME ACCENT SYSTEM ── */
const themeButtons = document.querySelectorAll('.theme-btn');
const savedTheme = localStorage.getItem('nimra-accent-theme');

if (savedTheme) {
  document.body.className = savedTheme !== 'violet' ? `theme-${savedTheme}` : '';
  themeButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === savedTheme);
  });
}

themeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    themeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const theme = btn.dataset.theme;
    localStorage.setItem('nimra-accent-theme', theme);
    
    if (theme === 'violet') {
      document.body.className = '';
    } else {
      document.body.className = `theme-${theme}`;
    }
  });
});

/* ── TYPEWRITER EFFECT ── */
const words = ["Software Engineer.", "Full-Stack Developer.", "AI Enthusiast.", "Problem Solver."];
let i = 0;
let timer;

function typingEffect() {
  const word = words[i].split("");
  const loopTyping = () => {
    if (word.length > 0) {
      document.getElementById('typedText').innerHTML += word.shift();
    } else {
      setTimeout(deletingEffect, 2000);
      return false;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  const word = words[i].split("");
  const loopDeleting = () => {
    if (word.length > 0) {
      word.pop();
      document.getElementById('typedText').innerHTML = word.join("");
    } else {
      if (words.length > (i + 1)) {
        i++;
      } else {
        i = 0;
      }
      setTimeout(typingEffect, 500);
      return false;
    }
    timer = setTimeout(loopDeleting, 60);
  };
  loopDeleting();
}

// Start typewriter after preloader finishes (preloader fades at ~2.6s)
setTimeout(typingEffect, 2800);

/* ── INTERACTIVE CANVAS PARTICLES ── */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x: null,
  y: null,
  radius: 120
};

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    
    // Check mouse proximity
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 2;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 2;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 2;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 2;
      }
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function initParticles() {
  particlesArray = [];
  let numberOfParticles = (canvas.width * canvas.height) / 16000;
  numberOfParticles = Math.min(numberOfParticles, 80); // Cap at 80 for perf
  
  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 1.5) + 0.5;
    let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
    let directionX = (Math.random() * 0.4) - 0.2;
    let directionY = (Math.random() * 0.4) - 0.2;
    particlesArray.push(new Particle(x, y, directionX, directionY, size, ''));
  }
}

function getAccentColor() {
  return getComputedStyle(document.body).getPropertyValue('--accent-bright').trim() || '#9D6FFF';
}

function animateParticles() {
  requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  
  const particleColor = getAccentColor();
  
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].color = particleColor;
    particlesArray[i].update();
  }
  connectParticles(particleColor);
}

function connectParticles(color) {
  let opacityValue = 1;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let dx = particlesArray[a].x - particlesArray[b].x;
      let dy = particlesArray[a].y - particlesArray[b].y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      
      if (distance < 110) {
        opacityValue = 1 - (distance / 110);
        ctx.strokeStyle = color.replace(')', `, ${opacityValue * 0.15})`).replace('rgb', 'rgba').replace('#', 'rgba(');
        // Fallback for hex conversion in style connections
        if (color.startsWith('#')) {
          const r = parseInt(color.slice(1, 3), 16);
          const g = parseInt(color.slice(3, 5), 16);
          const b = parseInt(color.slice(5, 7), 16);
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacityValue * 0.15})`;
        }
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

initParticles();
animateParticles();

/* ── STATS COUNTER ANIMATION ── */
const statsSection = document.querySelector('.stats-grid');
const statNumbers = document.querySelectorAll('.stat-num');

const countUp = (el) => {
  const target = parseInt(el.getAttribute('data-val'));
  let count = 0;
  const speed = 120 / target;
  
  const increment = () => {
    if (count < target) {
      count++;
      if (el.innerText.includes('+')) {
        el.innerHTML = `${count}<span>+</span>`;
      } else if (el.innerText.includes('yr')) {
        el.innerHTML = `${count}<span>yr</span>`;
      } else if (el.innerText.includes('✦')) {
        el.innerHTML = `${count}<span>✦</span>`;
      } else {
        el.innerHTML = `${count}<span></span>`;
      }
      setTimeout(increment, speed);
    }
  };
  increment();
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      statNumbers.forEach(num => countUp(num));
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

if (statsSection) {
  statsObserver.observe(statsSection);
}

/* ── 3D TILT EFFECT ON CARDS ── */
const cards = document.querySelectorAll('.proj-tile');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 6; // Max 6 degrees
    const rotateY = ((x - centerX) / centerX) * 6;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── CONTACT FORM HANDLER ── */
// The real contact form logic using Web3Forms is located in index.html


/* ── MODAL LOGIC ── */
const overlay = document.getElementById('modalOverlay');
const modalBanner = document.getElementById('modalBanner');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(key) {
  const p = projects[key];
  if(!p) return;
  modalBanner.className = `modal-banner ${p.bannerClass}`;
  modalBanner.innerHTML = `<span style="font-size:5.5rem;position:relative;z-index:1">${p.emoji}</span>`;
  modalContent.innerHTML = `
    <div class="modal-year-badge">${p.year} · ${p.type}</div>
    <div class="modal-title">${p.title}</div>
    <div class="modal-tagline">${p.tagline}</div>
    
    <div class="modal-links-row">
      ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="modal-link-btn github-link">
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>` : ''}
      ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="modal-link-btn demo-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
        Live Demo
      </a>` : ''}
      ${p.demo2 ? `<a href="${p.demo2}" target="_blank" rel="noopener" class="modal-link-btn demo-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
        Live Demo 2
      </a>` : ''}
      ${p.demo3 ? `<a href="${p.demo3}" target="_blank" rel="noopener" class="modal-link-btn demo-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
        Live Demo 3
      </a>` : ''}
      ${p.linkedin1 ? `<a href="${p.linkedin1}" target="_blank" rel="noopener" class="modal-link-btn github-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        Post 1
      </a>` : ''}
      ${p.linkedin2 ? `<a href="${p.linkedin2}" target="_blank" rel="noopener" class="modal-link-btn github-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        Post 2
      </a>` : ''}
    </div>
    
    <div class="modal-section-label">Overview</div>
    <div class="modal-desc">${p.desc}</div>
    <div class="modal-section-label">Key Features</div>
    <ul class="modal-features">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
    <div class="modal-section-label">Tech Stack</div>
    <div class="modal-stack-row">${p.stack.map(s=>`<span class="modal-stack-chip">${s}</span>`).join('')}</div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

document.querySelectorAll('.proj-tile').forEach(tile => {
  tile.addEventListener('click', () => openModal(tile.dataset.project));
});

// Prevent icon links (GitHub, Demo) from also triggering the modal
document.querySelectorAll('.tile-action-icon').forEach(link => {
  link.addEventListener('click', e => e.stopPropagation());
});

/* ── FILTER ── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function(){
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const f = this.dataset.filter;
    document.querySelectorAll('.proj-tile').forEach(tile => {
      const cats = tile.dataset.cats || '';
      const show = f === 'all' || cats.includes(f);
      tile.style.opacity = show ? '1' : '0.2';
      tile.style.pointerEvents = show ? 'auto' : 'none';
      tile.style.transform = show ? '' : 'scale(.97)';
    });
  });
});

/* ── SCROLL REVEAL ── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target); // stop observing once visible
    }
  });
}, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Immediately reveal any elements already in the viewport on page load
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      el.classList.add('visible');
    }
  });
}, 100);

/* ── NAV SCROLL ── */
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── HAMBURGER MENU ── */
const hamburger = document.getElementById('navHamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('mobile-open');
  });
});

/* ── CUSTOM CURSOR ── */
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx=0, my=0, rx=0, ry=0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx - 4 + 'px';
  dot.style.top = my - 4 + 'px';
});

function animRing() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll('a,button,.proj-tile,.interest-pill,.chip').forEach(el => {
  el.addEventListener('mouseenter', () => {
    dot.style.transform = 'scale(2)';
    ring.style.width = '56px';
    ring.style.height = '56px';
    ring.style.marginLeft = '-10px';
    ring.style.marginTop = '-10px';
    ring.style.borderColor = getAccentColor();
  });
  el.addEventListener('mouseleave', () => {
    dot.style.transform = 'scale(1)';
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.marginLeft = '0';
    ring.style.marginTop = '0';
    ring.style.borderColor = '';
  });
});

/* ── CV / RESUME MODAL HANDLERS ── */
const cvOverlay = document.getElementById('cvModalOverlay');
const cvBox = document.getElementById('cvModalBox');
const cvClose = document.getElementById('cvModalClose');
const openCvBtn = document.getElementById('openCvBtn');
const heroOpenCvBtn = document.getElementById('heroOpenCvBtn');
const printCvBtn = document.getElementById('printCvBtn');

function openCvModal() {
  if (cvOverlay) {
    cvOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCvModal() {
  if (cvOverlay) {
    cvOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

if (openCvBtn) openCvBtn.addEventListener('click', openCvModal);
if (heroOpenCvBtn) heroOpenCvBtn.addEventListener('click', openCvModal);
if (cvClose) cvClose.addEventListener('click', closeCvModal);
if (cvOverlay) {
  cvOverlay.addEventListener('click', e => {
    if (e.target === cvOverlay) closeCvModal();
  });
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCvModal();
});

if (printCvBtn) {
  printCvBtn.addEventListener('click', () => {
    window.print();
  });
}

