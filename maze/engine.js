// Cyber Maze — engine mínima Canvas 2D + tilemap
(function () {
  const TILE = { FLOOR: 0, WALL: 1, SPAWN: 2, EXIT: 3, DISTRACTION: 4 };

  const COLORS = {
    wall: '#1a3a1a',
    wallBorder: '#00ff41',
    floor: '#0d0d0d',
    spawn: '#0a0a0a',
    exit: '#7b2fff',
    exitGlow: 'rgba(123, 47, 255, 0.4)',
    player: '#00ff41',
    playerGlow: 'rgba(0, 255, 65, 0.5)',
    distraction: '#ffaa00'
  };

  let canvas = null;
  let ctx = null;
  let tilemap = null;
  let player = { x: 0, y: 0, px: 0, py: 0 };
  let animId = null;
  let running = false;
  let triggeredDistractions = new Set();
  let callbacks = {};
  let keyHandler = null;
  let moveQueue = null;

  const tileAt = (x, y) => {
    if (!tilemap || y < 0 || y >= tilemap.rows || x < 0 || x >= tilemap.cols) return TILE.WALL;
    return tilemap.grid[y][x];
  };

  const isWalkable = (x, y) => {
    const t = tileAt(x, y);
    return t !== TILE.WALL;
  };

  const findSpawn = () => {
    for (let y = 0; y < tilemap.rows; y++) {
      for (let x = 0; x < tilemap.cols; x++) {
        if (tilemap.grid[y][x] === TILE.SPAWN) return { x, y };
      }
    }
    return { x: 1, y: 1 };
  };

  const setPlayerTile = (x, y) => {
    player.x = x;
    player.y = y;
    player.px = x * tilemap.tileSize;
    player.py = y * tilemap.tileSize;
  };

  const drawTile = (x, y, type) => {
    const ts = tilemap.tileSize;
    const px = x * ts;
    const py = y * ts;

    if (type === TILE.WALL) {
      ctx.fillStyle = COLORS.wall;
      ctx.fillRect(px, py, ts, ts);
      ctx.strokeStyle = COLORS.wallBorder;
      ctx.lineWidth = 1;
      ctx.strokeRect(px + 0.5, py + 0.5, ts - 1, ts - 1);
      return;
    }

    ctx.fillStyle = type === TILE.EXIT ? COLORS.exitGlow : COLORS.floor;
    ctx.fillRect(px, py, ts, ts);

    if (type === TILE.EXIT) {
      ctx.fillStyle = COLORS.exit;
      ctx.fillRect(px + 6, py + 6, ts - 12, ts - 12);
    }

    if (type === TILE.DISTRACTION) {
      ctx.fillStyle = COLORS.distraction;
      ctx.beginPath();
      ctx.arc(px + ts / 2, py + ts / 2, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const drawPlayer = () => {
    const ts = tilemap.tileSize;
    const cx = player.px + ts / 2;
    const cy = player.py + ts / 2;

    ctx.shadowColor = COLORS.playerGlow;
    ctx.shadowBlur = 12;
    ctx.fillStyle = COLORS.player;
    ctx.beginPath();
    ctx.arc(cx, cy, ts / 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  };

  const render = () => {
    if (!ctx || !tilemap) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let y = 0; y < tilemap.rows; y++) {
      for (let x = 0; x < tilemap.cols; x++) {
        drawTile(x, y, tilemap.grid[y][x]);
      }
    }
    drawPlayer();
  };

  const loop = () => {
    if (!running) return;
    render();
    animId = requestAnimationFrame(loop);
  };

  const checkTriggers = (x, y) => {
    const type = tileAt(x, y);
    const key = `${x},${y}`;

    if (type === TILE.DISTRACTION && !triggeredDistractions.has(key)) {
      triggeredDistractions.add(key);
      if (callbacks.onDistraction) callbacks.onDistraction({ x, y });
    }

    if (type === TILE.EXIT && callbacks.onExit) {
      running = false;
      callbacks.onExit();
    }
  };

  const tryMove = (dx, dy) => {
    if (!running) return;
    const nx = player.x + dx;
    const ny = player.y + dy;
    if (!isWalkable(nx, ny)) return;

    setPlayerTile(nx, ny);
    checkTriggers(nx, ny);
    render();
  };

  const onKeyDown = (e) => {
    if (!running) return;
    const map = {
      ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0],
      w: [0, -1], W: [0, -1], s: [0, 1], S: [0, 1],
      a: [-1, 0], A: [-1, 0], d: [1, 0], D: [1, 0]
    };
    const dir = map[e.key];
    if (!dir) return;
    e.preventDefault();
    tryMove(dir[0], dir[1]);
  };

  const bindKeys = () => {
    keyHandler = onKeyDown;
    document.addEventListener('keydown', keyHandler);
  };

  const unbindKeys = () => {
    if (keyHandler) {
      document.removeEventListener('keydown', keyHandler);
      keyHandler = null;
    }
  };

  window.MazeEngine = {
    start(options) {
      this.stop();
      canvas = options.canvas;
      ctx = canvas.getContext('2d');
      tilemap = options.tilemap;
      callbacks = {
        onExit: options.onExit || null,
        onDistraction: options.onDistraction || null
      };
      triggeredDistractions = new Set();
      moveQueue = options;

      canvas.width = tilemap.cols * tilemap.tileSize;
      canvas.height = tilemap.rows * tilemap.tileSize;

      const spawn = findSpawn();
      setPlayerTile(spawn.x, spawn.y);
      running = true;
      bindKeys();
      loop();
      return { spawnX: spawn.x, spawnY: spawn.y };
    },

    stop() {
      running = false;
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
      unbindKeys();
    },

    resetPlayer() {
      if (!tilemap) return;
      const spawn = findSpawn();
      setPlayerTile(spawn.x, spawn.y);
      render();
    },

    move(dx, dy) {
      tryMove(dx, dy);
    },

    getSpawn() {
      return findSpawn();
    },

    isRunning() {
      return running;
    }
  };
})();
