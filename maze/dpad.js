// Cyber Maze — controles touch: D-pad com repetição + swipe no labirinto
(function () {
  const DIR_MAP = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0]
  };

  let repeatInterval = null;
  let activeBtn = null;
  const listeners = [];

  const clearRepeat = () => {
    if (repeatInterval) {
      clearInterval(repeatInterval);
      repeatInterval = null;
    }
    if (activeBtn) {
      activeBtn.classList.remove('pressed');
      activeBtn = null;
    }
  };

  const addListener = (el, event, handler, options) => {
    el.addEventListener(event, handler, options);
    listeners.push({ el, event, handler, options });
  };

  const bindButton = (btn, onMove) => {
    const dir = DIR_MAP[btn.dataset.dir];
    if (!dir) return;

    const move = () => onMove(dir[0], dir[1]);

    const start = (e) => {
      if (e.cancelable) e.preventDefault();
      clearRepeat();
      activeBtn = btn;
      btn.classList.add('pressed');
      move();
      repeatInterval = setInterval(move, 150);
    };

    const end = () => clearRepeat();

    addListener(btn, 'touchstart', start, { passive: false });
    addListener(btn, 'touchend', end);
    addListener(btn, 'touchcancel', end);
    addListener(btn, 'mousedown', start);
    addListener(btn, 'mouseup', end);
    addListener(btn, 'mouseleave', end);
  };

  const bindSwipe = (el, onMove) => {
    let startX = 0;
    let startY = 0;

    addListener(el, 'touchstart', (e) => {
      const t = e.changedTouches[0];
      startX = t.clientX;
      startY = t.clientY;
    }, { passive: true });

    addListener(el, 'touchend', (e) => {
      const t = e.changedTouches[0];
      const dx = t.clientX - startX;
      const dy = t.clientY - startY;
      const min = 28;

      if (Math.abs(dx) < min && Math.abs(dy) < min) return;

      if (Math.abs(dx) > Math.abs(dy)) {
        onMove(dx > 0 ? 1 : -1, 0);
      } else {
        onMove(0, dy > 0 ? 1 : -1);
      }
    }, { passive: true });
  };

  window.MazeDpad = {
    bind(onMove) {
      this.unbind();
      if (typeof onMove !== 'function') return;

      document.querySelectorAll('.dpad-btn').forEach((btn) => bindButton(btn, onMove));

      const swipeTarget = document.querySelector('.maze-wrap') ||
        document.getElementById('maze-canvas');
      if (swipeTarget) bindSwipe(swipeTarget, onMove);
    },

    unbind() {
      clearRepeat();
      listeners.forEach(({ el, event, handler, options }) => {
        el.removeEventListener(event, handler, options);
      });
      listeners.length = 0;
    }
  };
})();
