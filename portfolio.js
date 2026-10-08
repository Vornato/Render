(() => {
  'use strict';
  const dialog = document.querySelector('#video-dialog');
  const data = document.querySelector('#portfolio-films');
  if (!dialog || !data) return;
  const films = JSON.parse(data.textContent);
  const translate = text => window.RenderI18n?.t(text) ?? text;
  const frameHost = dialog.querySelector('.video-frame');
  const status = dialog.querySelector('#video-status');
  const queueHost = dialog.querySelector('.video-queue');
  const previous = dialog.querySelector('[data-film-step="-1"]');
  const next = dialog.querySelector('[data-film-step="1"]');
  const close = dialog.querySelector('.video-close');
  let queue = [], active = null, trigger = null, player = null;
  let generation = 0, loadTimer = 0, apiPromise = null, statusKey = '';

  function setStatus(key) {
    statusKey = key;
    status.textContent = key ? translate(key) : '';
    status.hidden = !key;
  }
  function loadAPI() {
    if (window.YT?.Player) return Promise.resolve(window.YT);
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((resolve, reject) => {
      const existingCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof existingCallback === 'function') existingCallback();
        resolve(window.YT);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      script.async = true;
      script.onerror = () => { apiPromise = null; reject(new Error('YouTube player unavailable')); };
      document.head.append(script);
    });
    return apiPromise;
  }
  function stopPlayback() {
    generation++;
    clearTimeout(loadTimer);
    if (player) { try { player.destroy(); } catch {} }
    player = null;
    frameHost.replaceChildren();
  }
  function updateDetails() {
    dialog.querySelectorAll('[data-player-label]').forEach(element => {
      element.textContent = translate(element.dataset.playerLabel);
    });
    close.setAttribute('aria-label', translate('Close player'));
    previous.setAttribute('aria-label', translate('Previous film'));
    next.setAttribute('aria-label', translate('Next film'));
    queueHost.setAttribute('aria-label', translate('More films'));
    if (!active) return;
    dialog.querySelector('#video-dialog-category').textContent = translate(active.category);
    dialog.querySelector('#video-dialog-title').textContent = translate(active.title);
    dialog.querySelector('#video-description').textContent = translate(active.description);
    dialog.querySelector('#video-tags').replaceChildren(...active.tags.map(text => {
      const span = document.createElement('span'); span.textContent = translate(text); return span;
    }));
    const watch = dialog.querySelector('#video-watch-link');
    watch.href = 'https://www.youtube.com/watch?v=' + active.id;
    const index = queue.indexOf(active);
    dialog.querySelector('#video-position').textContent = (index + 1) + ' / ' + queue.length;
    previous.disabled = index <= 0;
    next.disabled = index >= queue.length - 1;
    queueHost.querySelectorAll('button').forEach(button => {
      const film = films.find(item => item.key === button.dataset.queueFilm);
      const selected = film === active;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
      button.setAttribute('aria-label', translate('Watch film') + ': ' + translate(film.title));
      button.querySelector('span').textContent = translate(film.title);
    });
    const iframe = frameHost.querySelector('iframe');
    if (iframe) iframe.title = translate('Video player') + ': ' + translate(active.title);
    setStatus(statusKey);
  }
  function buildQueue() {
    queueHost.replaceChildren(...queue.map(film => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'video-queue-item'; button.dataset.queueFilm = film.key;
      const image = document.createElement('img');
      image.src = 'https://img.youtube.com/vi/' + film.id + '/hqdefault.jpg';
      image.alt = ''; image.width = 32; image.height = 56; image.loading = 'lazy';
      const label = document.createElement('span');
      button.append(image, label);
      button.addEventListener('click', () => { if (active !== film) playFilm(film); });
      return button;
    }));
  }
  function playFilm(film) {
    stopPlayback();
    const token = generation;
    active = film;
    dialog.dataset.format = film.format;
    setStatus('Loading video…');
    updateDetails();
    const iframe = document.createElement('iframe');
    iframe.id = 'portfolio-youtube-frame';
    iframe.title = translate('Video player') + ': ' + translate(film.title);
    iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    const parameters = new URLSearchParams({autoplay:'1', controls:'1', playsinline:'1', rel:'0', enablejsapi:'1', hl:window.RenderI18n?.language || 'en'});
    if (location.protocol === 'http:' || location.protocol === 'https:') parameters.set('origin', location.origin);
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + film.id + '?' + parameters;
    frameHost.append(iframe);
    loadTimer = window.setTimeout(() => {
      if (token === generation && dialog.open) setStatus('Taking longer to load? You can watch on YouTube.');
    }, 12000);
    loadAPI().then(YT => {
      if (token !== generation || !dialog.open) return;
      player = new YT.Player(iframe, {events:{
        onReady: () => { if (token !== generation) return; clearTimeout(loadTimer); setStatus(''); },
        onStateChange: event => {
          if (token !== generation) return;
          if (event.data === YT.PlayerState.PLAYING) { clearTimeout(loadTimer); setStatus(''); }
          if (event.data === YT.PlayerState.ENDED) setStatus('Film finished. Explore another project.');
        },
        onAutoplayBlocked: () => { if (token === generation) { clearTimeout(loadTimer); setStatus('Press play to start the film.'); } },
        onError: () => { if (token === generation) { clearTimeout(loadTimer); setStatus('Playback unavailable here. Watch this film on YouTube.'); } }
      }});
    }).catch(() => {
      if (token === generation && dialog.open) { clearTimeout(loadTimer); setStatus('Taking longer to load? You can watch on YouTube.'); }
    });
  }
  function move(direction) {
    const film = queue[queue.indexOf(active) + direction];
    if (film) playFilm(film);
  }
  function closePlayer() { dialog.close(); }
  document.querySelectorAll('[data-film]').forEach(link => link.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (typeof dialog.showModal !== 'function') return;
    const film = films.find(item => item.key === link.dataset.film);
    if (!film) return;
    event.preventDefault();
    trigger = link;
    queue = films.filter(item => !document.querySelector('[data-film="' + item.key + '"]').closest('.project').hidden);
    if (!queue.includes(film)) queue = films;
    buildQueue();
    dialog.showModal();
    document.documentElement.classList.add('dialog-open');
    if (typeof pauseVideo === 'function') pauseVideo();
    else document.querySelector('#brand-video')?.pause();
    playFilm(film);
  }));
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  close.addEventListener('click', closePlayer);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closePlayer();
  });
  dialog.addEventListener('close', () => {
    stopPlayback(); active = null; setStatus('');
    document.documentElement.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]')));
    if (trigger?.isConnected && !trigger.closest('[hidden]')) trigger.focus({preventScroll:true});
  });
  dialog.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) player?.pauseVideo?.(); });
  window.addEventListener('render-language-change', updateDetails);
  updateDetails();
})();
