// ============================================
// CONFIG — edit these to personalize the site
// ============================================
const HER_NAME = "Chudail 👻";              // <-- change to her name
const TYPEWRITER_TEXT = `Happy Birthday ${HER_NAME}`;

// ============================================
// TYPEWRITER EFFECT (hero title)
// ============================================
function typewriter() {
  const el = document.getElementById('typewriter');
  let i = 0;
  const speed = 90; // ms per character

  function type() {
    if (i < TYPEWRITER_TEXT.length) {
      el.textContent += TYPEWRITER_TEXT.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// ============================================
// FLOATING DECORATIONS (hearts, butterflies, sparkles)
// ============================================
function createFloaters() {
  const symbols = ['💕', '💗', '🦋', '✨', '💖', '🌸'];
  const container = document.getElementById('floaters');
  const count = window.innerWidth < 700 ? 12 : 22;

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'floater';
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = Math.random() * 100 + 'vw';
    span.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';

    const duration = 10 + Math.random() * 14;
    const delay = Math.random() * duration;
    span.style.animationDuration = duration + 's';
    span.style.animationDelay = '-' + delay + 's';
    span.style.bottom = '-5vh';

    container.appendChild(span);
  }
}

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.memory-card, .gallery-item, .message-card'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => observer.observe(t));
}

// ============================================
// BACKGROUND MUSIC
// ============================================
function initMusic() {
  const audio = document.getElementById('birthday-song');
  const button = document.getElementById('music-control');
  const label = document.getElementById('music-label');

  audio.addEventListener('canplay', () => {
    button.disabled = false;
    label.textContent = 'Play song';
  }, { once: true });

  audio.addEventListener('error', () => {
    button.disabled = true;
    label.textContent = 'Song unavailable';
  });

  button.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      button.setAttribute('aria-label', 'Pause birthday song');
      button.setAttribute('aria-pressed', 'true');
      label.textContent = 'Pause song';
    } else {
      audio.pause();
      button.setAttribute('aria-label', 'Play birthday song');
      button.setAttribute('aria-pressed', 'false');
      label.textContent = 'Play song';
    }
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  typewriter();
  createFloaters();
  initScrollReveal();
  initMusic();
});
