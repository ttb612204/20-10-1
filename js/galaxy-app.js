/**
 * CONCEPT 1: NGÂN HÀ TRI ÂN (3D CELESTIAL GALAXY)
 * Dành riêng cho Bùi Thị Hương Giang (dân dất) — Ngày 20/10
 * Interactive 3D Stars, Meteor Streaks, Fairy Stardust Trail, Lightbox & Heart Finale
 */
(function () {
  'use strict';

  // 1. DATA: 5 REAL PHOTOS OF BÙI THỊ HƯƠNG GIANG (HOSTED ON CLOUD CDN)
  const celestialPhotos = [
    {
      src: 'https://files.catbox.moe/0vjpta.jpg',
      badge: 'Khoảnh khắc #01',
      title: 'Dịu Dàng & Ngọt Ngào',
      desc: 'Ánh mắt trong trẻo tựa ánh sao sớm mai, luôn mang lại cảm giác bình yên và ấm áp cho mọi người xung quanh.'
    },
    {
      src: 'https://files.catbox.moe/bwolgl.jpg',
      badge: 'Khoảnh khắc #02',
      title: 'Chăm Chỉ & Tự Tin',
      desc: 'Nhiệt huyết, bản lĩnh và luôn kiên định trên mọi bước đường cậu lựa chọn. Một cô gái vô cùng tuyệt vời!'
    },
    {
      src: 'https://files.catbox.moe/7y8h91.jpg',
      badge: 'Khoảnh khắc #03',
      title: 'Thanh Lịch & Rạng Rỡ',
      desc: 'Nét duyên dáng tỏa sáng tự nhiên giữa muôn vì tinh tú, nhẹ nhàng mà khiến ai gặp cũng đều ấn tượng.'
    },
    {
      src: 'https://files.catbox.moe/y2v8my.jpg',
      badge: 'Khoảnh khắc #04',
      title: 'E Ấp & Duyên Dáng',
      desc: 'Nụ cười mỉm xinh xắn sưởi ấm không gian. Hãy luôn giữ nụ cười đáng yêu này trên môi nhé Hương Giang!'
    },
    {
      src: 'https://files.catbox.moe/hj7wu4.jpg',
      badge: 'Khoảnh khắc #05',
      title: 'Tinh Nghịch & Rạng Ngời',
      desc: 'Năng lượng tích cực ngập tràn siêu dễ thương của Dân dất ( Boo Cute ). Cảm ơn cậu vì đã luôn tỏa sáng như thế!'
    }
  ];

  // 2. AUDIO CONTROLLER
  const bgMusic = document.getElementById('bg-music');
  const musicWidget = document.getElementById('music-widget');
  const musicLabel = document.getElementById('music-label');
  let isMusicPlaying = false;

  function toggleAudio() {
    if (!bgMusic) return;
    if (isMusicPlaying) {
      bgMusic.pause();
      isMusicPlaying = false;
      if (musicWidget) musicWidget.classList.remove('is-playing');
      if (musicLabel) musicLabel.textContent = 'Nhạc: Tắt';
    } else {
      bgMusic.volume = 0.55;
      bgMusic.play().then(() => {
        isMusicPlaying = true;
        if (musicWidget) musicWidget.classList.add('is-playing');
        if (musicLabel) musicLabel.textContent = 'Nhạc: Bật';
      }).catch(() => {});
    }
  }

  if (musicWidget) {
    musicWidget.addEventListener('click', toggleAudio);
  }

  // Auto-attempt playback on first interaction
  window.addEventListener('click', function tryAutoplayOnce() {
    if (!isMusicPlaying && bgMusic) {
      bgMusic.volume = 0.55;
      bgMusic.play().then(() => {
        isMusicPlaying = true;
        if (musicWidget) musicWidget.classList.add('is-playing');
        if (musicLabel) musicLabel.textContent = 'Nhạc: Bật';
      }).catch(() => {});
    }
  }, { once: true });


  // 3. CANVAS 1: 3D MULTI-LAYER STARFIELD & SHOOTING METEORS
  const canvasStars = document.getElementById('canvas-stars');
  if (canvasStars) {
    const sCtx = canvasStars.getContext('2d');
    let sw = (canvasStars.width = window.innerWidth);
    let sh = (canvasStars.height = window.innerHeight);

    window.addEventListener('resize', () => {
      sw = canvasStars.width = window.innerWidth;
      sh = canvasStars.height = window.innerHeight;
    });

    const starCount = 90;
    const stars = [];
    const starColors = ['#ffffff', '#ffb8ca', '#f6c886', '#00f0ff', '#ffe6eb'];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * sw,
        y: Math.random() * sh,
        radius: Math.random() * 2 + 0.6,
        alpha: Math.random(),
        speed: Math.random() * 0.02 + 0.008,
        color: starColors[Math.floor(Math.random() * starColors.length)]
      });
    }

    // Shooting Meteors
    const meteors = [];
    function spawnMeteor() {
      meteors.push({
        x: Math.random() * sw * 0.8 + sw * 0.2,
        y: Math.random() * (sh * 0.4),
        length: Math.random() * 80 + 60,
        speed: Math.random() * 7 + 9,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg
        alpha: 1,
        decay: Math.random() * 0.02 + 0.015,
        width: Math.random() * 2 + 1.2
      });
    }

    setInterval(() => {
      if (Math.random() > 0.35) spawnMeteor();
    }, 2800);

    function renderStarfield() {
      sCtx.clearRect(0, 0, sw, sh);

      // Draw Twinkling Stars
      stars.forEach(s => {
        s.alpha += s.speed;
        const opacity = (Math.sin(s.alpha) + 1) / 2 * 0.75 + 0.2;
        sCtx.beginPath();
        sCtx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        sCtx.fillStyle = s.color;
        sCtx.globalAlpha = opacity;
        sCtx.shadowColor = s.color;
        sCtx.shadowBlur = 6;
        sCtx.fill();
        sCtx.shadowBlur = 0;
      });

      // Draw Meteors
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        m.x -= Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= m.decay;

        if (m.alpha <= 0 || m.x < -100 || m.y > sh + 100) {
          meteors.splice(i, 1);
          continue;
        }

        const tailX = m.x + Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const grad = sCtx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
        grad.addColorStop(0.3, `rgba(255, 133, 162, ${m.alpha * 0.7})`);
        grad.addColorStop(1, 'rgba(255, 133, 162, 0)');

        sCtx.beginPath();
        sCtx.moveTo(m.x, m.y);
        sCtx.lineTo(tailX, tailY);
        sCtx.strokeStyle = grad;
        sCtx.lineWidth = m.width;
        sCtx.lineCap = 'round';
        sCtx.stroke();
      }

      requestAnimationFrame(renderStarfield);
    }
    renderStarfield();
  }


  // 4. CANVAS 2: FAIRY STARDUST TRAIL (POINTER / TOUCH)
  const canvasTrail = document.getElementById('canvas-trail');
  if (canvasTrail) {
    const tCtx = canvasTrail.getContext('2d');
    let tw = (canvasTrail.width = window.innerWidth);
    let th = (canvasTrail.height = window.innerHeight);

    window.addEventListener('resize', () => {
      tw = canvasTrail.width = window.innerWidth;
      th = canvasTrail.height = window.innerHeight;
    });

    const trailParticles = [];
    const trailColors = ['#ff85a2', '#f6c886', '#ffffff', '#ffd1dc', '#00f0ff'];

    window.addEventListener('pointermove', (e) => {
      for (let i = 0; i < 2; i++) {
        trailParticles.push({
          x: e.clientX + (Math.random() - 0.5) * 12,
          y: e.clientY + (Math.random() - 0.5) * 12,
          size: Math.random() * 3 + 1.2,
          color: trailColors[Math.floor(Math.random() * trailColors.length)],
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5 - 0.6,
          life: 1,
          decay: 0.026
        });
      }
    });

    function renderTrail() {
      tCtx.clearRect(0, 0, tw, th);
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const p = trailParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;

        if (p.life <= 0) {
          trailParticles.splice(i, 1);
          continue;
        }

        tCtx.beginPath();
        tCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        tCtx.fillStyle = p.color;
        tCtx.globalAlpha = p.life;
        tCtx.shadowColor = p.color;
        tCtx.shadowBlur = 8;
        tCtx.fill();
        tCtx.shadowBlur = 0;
      }
      requestAnimationFrame(renderTrail);
    }
    renderTrail();
  }


  // 4.1 CANVAS: GENTLE DRIFTING ROSE & SAKURA PETALS BREEZE
  const canvasPetals = document.getElementById('canvas-petals');
  if (canvasPetals) {
    const pCtx = canvasPetals.getContext('2d');
    let pw = (canvasPetals.width = window.innerWidth);
    let ph = (canvasPetals.height = window.innerHeight);

    window.addEventListener('resize', () => {
      pw = canvasPetals.width = window.innerWidth;
      ph = canvasPetals.height = window.innerHeight;
    });

    const petalCount = 32;
    const petals = [];
    const petalColors = [
      { base: '#ff85a2', tip: '#ff5983' },
      { base: '#ffa8be', tip: '#ff7096' },
      { base: '#ffd1dc', tip: '#ff9ebb' },
      { base: '#f6c886', tip: '#ff85a2' }
    ];

    for (let i = 0; i < petalCount; i++) {
      petals.push({
        x: Math.random() * pw,
        y: Math.random() * ph,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 1.2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.8,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.03 + 0.015,
        colorPair: petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: Math.random() * 0.4 + 0.5
      });
    }

    function renderPetals() {
      pCtx.clearRect(0, 0, pw, ph);
      petals.forEach(p => {
        p.y += p.speedY;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.9 + p.speedX;
        p.angle += p.rotSpeed;

        if (p.y > ph + 20) {
          p.y = -20;
          p.x = Math.random() * pw;
        }
        if (p.x < -30) p.x = pw + 20;
        if (p.x > pw + 30) p.x = -20;

        const scaleX = Math.cos(p.angle);

        pCtx.save();
        pCtx.translate(p.x, p.y);
        pCtx.rotate(p.angle);
        pCtx.scale(scaleX, 1);
        pCtx.globalAlpha = p.opacity;

        // Draw organic curved flower petal
        const grad = pCtx.createRadialGradient(0, 0, 1, 0, 0, p.size);
        grad.addColorStop(0, p.colorPair.base);
        grad.addColorStop(1, p.colorPair.tip);

        pCtx.fillStyle = grad;
        pCtx.beginPath();
        pCtx.moveTo(0, -p.size);
        pCtx.bezierCurveTo(p.size * 0.85, -p.size * 0.5, p.size * 0.75, p.size * 0.8, 0, p.size);
        pCtx.bezierCurveTo(-p.size * 0.75, p.size * 0.8, -p.size * 0.85, -p.size * 0.5, 0, -p.size);
        pCtx.fill();

        pCtx.restore();
      });
      requestAnimationFrame(renderPetals);
    }
    renderPetals();
  }


  // 5. CANVAS 3: CELESTIAL GALAXY BURST (FIREWORKS / PETALS)
  const canvasBurst = document.getElementById('canvas-burst');
  window.triggerGalaxyBurst = function (x, y) {
    if (!canvasBurst) return;
    const bCtx = canvasBurst.getContext('2d');
    canvasBurst.width = window.innerWidth;
    canvasBurst.height = window.innerHeight;

    const count = 70;
    const burstParticles = [];
    const colors = ['#ff85a2', '#ff5983', '#f6c886', '#ffd700', '#ffffff', '#ffd1dc'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 3.5;
      burstParticles.push({
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.8,
        gravity: 0.16,
        friction: 0.96,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1,
        decay: Math.random() * 0.012 + 0.008,
        angle: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.14
      });
    }

    function animateBurst() {
      bCtx.clearRect(0, 0, canvasBurst.width, canvasBurst.height);
      let alive = false;
      burstParticles.forEach(p => {
        p.vx *= p.friction;
        p.vy = p.vy * p.friction + p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.rotSpeed;
        p.life -= p.decay;

        if (p.life > 0 && p.y < canvasBurst.height + 40) {
          alive = true;
          bCtx.save();
          bCtx.translate(p.x, p.y);
          bCtx.rotate(p.angle);
          bCtx.globalAlpha = Math.max(0, p.life);
          bCtx.fillStyle = p.color;
          bCtx.beginPath();
          bCtx.ellipse(0, 0, p.size * 0.6, p.size, 0, 0, Math.PI * 2);
          bCtx.fill();
          bCtx.restore();
        }
      });

      if (alive) {
        requestAnimationFrame(animateBurst);
      } else {
        bCtx.clearRect(0, 0, canvasBurst.width, canvasBurst.height);
      }
    }
    animateBurst();
  };


  // 6. STAGE TRANSITION CONTROLLER
  const stages = {
    1: document.getElementById('stage-1'),
    2: document.getElementById('stage-2'),
    3: document.getElementById('stage-3')
  };

  function switchStage(stageNum) {
    if (!stages[stageNum]) return;

    Object.keys(stages).forEach(num => {
      const el = stages[num];
      if (parseInt(num, 10) === stageNum) {
        el.classList.add('is-active');
      } else {
        el.classList.remove('is-active');
      }
    });

    window.triggerGalaxyBurst(window.innerWidth / 2, window.innerHeight * 0.4);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Stage 1 Triggers
  const orbWrapper = document.getElementById('orb-interactive-trigger');
  const btnExploreGalaxy = document.getElementById('btn-explore-galaxy');

  if (orbWrapper) {
    orbWrapper.addEventListener('click', () => switchStage(2));
  }
  if (btnExploreGalaxy) {
    btnExploreGalaxy.addEventListener('click', () => switchStage(2));
  }

  // Stage 2 Triggers
  const btnToLetter = document.getElementById('btn-to-letter');
  if (btnToLetter) {
    btnToLetter.addEventListener('click', () => switchStage(3));
  }

  // Stage 3 Triggers
  const btnBackToPhotos = document.getElementById('btn-back-to-photos');
  if (btnBackToPhotos) {
    btnBackToPhotos.addEventListener('click', () => switchStage(2));
  }

  const btnReplayAll = document.getElementById('btn-replay-all');
  if (btnReplayAll) {
    btnReplayAll.addEventListener('click', () => {
      switchStage(1);
    });
  }


  // 7. LIGHTBOX MODAL CONTROLLER
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentPhotoIdx = 0;

  function openLightbox(idx) {
    if (idx < 0 || idx >= celestialPhotos.length) return;
    currentPhotoIdx = idx;
    const item = celestialPhotos[idx];

    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.title;
    }
    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<strong style="color: #ff85a2; font-size: 1.15rem;">${item.title}</strong><br><span style="color: #e2d2dc;">${item.desc}</span>`;
    }
    if (lightboxCounter) {
      lightboxCounter.textContent = `${item.badge} (${idx + 1} / ${celestialPhotos.length})`;
    }

    if (lightboxModal) lightboxModal.classList.add('is-open');
  }

  function closeLightbox() {
    if (lightboxModal) lightboxModal.classList.remove('is-open');
  }

  // Bind Photo Cards in Stage 2 & Nodes in Stage 3
  document.querySelectorAll('.celestial-card-item, .heart-node-photo').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-idx'), 10);
      if (!isNaN(idx)) openLightbox(idx);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      const nextIdx = (currentPhotoIdx - 1 + celestialPhotos.length) % celestialPhotos.length;
      openLightbox(nextIdx);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      const nextIdx = (currentPhotoIdx + 1) % celestialPhotos.length;
      openLightbox(nextIdx);
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lightboxPrev) lightboxPrev.click();
    if (e.key === 'ArrowRight' && lightboxNext) lightboxNext.click();
  });


  // 8. SECRET MESSAGE MODAL (EASTER EGG)
  const heartCenterBadge = document.getElementById('heart-center-badge');
  const secretModal = document.getElementById('secret-modal');
  const secretClose = document.getElementById('secret-close');
  const secretConfirm = document.getElementById('secret-confirm');

  function openSecret() {
    if (secretModal) {
      secretModal.classList.add('is-open');
      window.triggerGalaxyBurst(window.innerWidth / 2, window.innerHeight * 0.45);
    }
  }

  function closeSecret() {
    if (secretModal) secretModal.classList.remove('is-open');
  }

  if (heartCenterBadge) {
    heartCenterBadge.addEventListener('click', openSecret);
  }
  if (secretClose) secretClose.addEventListener('click', closeSecret);
  if (secretConfirm) secretConfirm.addEventListener('click', closeSecret);

  if (secretModal) {
    secretModal.addEventListener('click', (e) => {
      if (e.target === secretModal) closeSecret();
    });
  }

  // 9. INTERACTIVE BLOOMING ROSE GIFT (STAGE 3)
  const bloomingRoseGift = document.getElementById('blooming-rose-gift');
  if (bloomingRoseGift) {
    bloomingRoseGift.addEventListener('click', () => {
      bloomingRoseGift.classList.add('is-bloomed');
      const msg = bloomingRoseGift.querySelector('.rose-revealed-msg');
      const cap = bloomingRoseGift.querySelector('.rose-gift-caption');
      if (msg) msg.style.display = 'block';
      if (cap) cap.style.opacity = '0.5';

      const rect = bloomingRoseGift.getBoundingClientRect();
      window.triggerGalaxyBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    });
  }

})();
