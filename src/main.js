import Phaser from 'phaser';

const STORAGE_KEY = 'cyberMazeV2Progress';
const VIEW_MODE_KEY = 'cyberMazeViewMode';
const MUTE_KEY = 'cyberMazeMute';
const BGM_PATH = '/audio/bgm-gameplay.ogg';
const BGM_VOLUME = 0.35;
const BGM_DUCKED_VOLUME = 0.12;
const TILE_SIZE = 32;
const LEVEL_COUNT = 10;
const RAYCAST_FOV = Math.PI / 3;
const RAYCAST_COLUMNS = 180;
const PLAYER_TURN_SPEED = 2.7;

const questions = [
  {
    category: 'Dia a dia',
    text: 'Qual atividade ocupa muito tempo no trabalho de Engenharia de Software?',
    options: ['Digitar código sem parar', 'Ler código, entender problemas e colaborar', 'Consertar impressoras', 'Criar posts para redes sociais'],
    answer: 1,
    explanation: 'Grande parte do trabalho é entender contexto, ler código existente, discutir decisões e resolver problemas.'
  },
  {
    category: 'Lógica',
    text: 'O que é programar na prática?',
    options: ['Memorizar comandos', 'Resolver problemas usando código', 'Usar computador caro', 'Copiar tutoriais sem entender'],
    answer: 1,
    explanation: 'Código é a ferramenta; o centro da profissão é resolver problemas com clareza.'
  },
  {
    category: 'Arquitetura',
    text: 'Por que sistemas grandes precisam de arquitetura?',
    options: ['Para deixar tudo mais difícil', 'Para organizar responsabilidades e facilitar evolução', 'Para escrever mais arquivos', 'Para evitar testes'],
    answer: 1,
    explanation: 'Boa arquitetura reduz confusão, melhora manutenção e ajuda várias pessoas a trabalharem no mesmo sistema.'
  },
  {
    category: 'Carreira',
    text: 'O que diferencia um profissional júnior promissor?',
    options: ['Nunca errar', 'Pedir ajuda, aprender rápido e aceitar feedback', 'Saber todas as linguagens', 'Trabalhar sem falar com ninguém'],
    answer: 1,
    explanation: 'Curiosidade, comunicação e evolução constante contam muito no início da carreira.'
  },
  {
    category: 'Produto',
    text: 'Antes de escrever código para uma feature, o que é essencial entender?',
    options: ['A cor do editor', 'O problema do usuário e o objetivo do negócio', 'A marca do notebook', 'A linguagem mais famosa do mês'],
    answer: 1,
    explanation: 'Software bom começa com entendimento do problema, não com tecnologia escolhida no impulso.'
  },
  {
    category: 'Qualidade',
    text: 'Para que servem testes automatizados?',
    options: ['Garantir que mudanças não quebrem comportamentos importantes', 'Substituir todos os usuários', 'Deixar o projeto lento de propósito', 'Eliminar a necessidade de pensar'],
    answer: 0,
    explanation: 'Testes dão confiança para evoluir o sistema e encontrar regressões cedo.'
  },
  {
    category: 'Equipe',
    text: 'Por que engenheiros usam Git?',
    options: ['Para desenhar telas', 'Para versionar mudanças e colaborar com segurança', 'Para acelerar a internet', 'Para criar senhas'],
    answer: 1,
    explanation: 'Git registra mudanças, permite revisão e ajuda times a trabalharem juntos.'
  },
  {
    category: 'Web',
    text: 'Qual é a diferença entre frontend e backend?',
    options: ['Frontend é visual; backend processa regras e dados', 'São exatamente iguais', 'Backend é sempre mais fácil', 'Frontend não usa lógica'],
    answer: 0,
    explanation: 'Frontend cuida da interação; backend normalmente cuida de dados, regras e integrações.'
  },
  {
    category: 'Segurança',
    text: 'Qual atitude reduz riscos em um sistema?',
    options: ['Guardar senhas em texto puro', 'Validar entradas e proteger dados sensíveis', 'Compartilhar tokens no chat', 'Desligar logs para sempre'],
    answer: 1,
    explanation: 'Segurança exige validação, cuidado com dados e decisões defensivas desde o início.'
  },
  {
    category: 'Futuro',
    text: 'O que continua importante mesmo com ferramentas de IA?',
    options: ['Pensamento crítico e revisão humana', 'Aceitar qualquer resposta automaticamente', 'Parar de estudar', 'Apagar documentação'],
    answer: 0,
    explanation: 'IA ajuda, mas engenheiros continuam responsáveis por qualidade, segurança e decisões.'
  }
];

const levels = [
  ['Login Inicial', 'Colete pacotes de autenticação e prove que sabe como um engenheiro trabalha.'],
  ['Firewall Vivo', 'Camadas de defesa se movem pelo setor. Use lógica para encontrar brechas.'],
  ['Arquitetura Quebrada', 'Módulos desconectados formam um labirinto de dependências.'],
  ['Sprint Nebulosa', 'O escopo muda, as rotas fecham e o foco vira recurso crítico.'],
  ['Servidor Central', 'Patrulhas de processo protegem o núcleo da aplicação.'],
  ['Zona de Bugs', 'Riscos vermelhos drenam foco. Depurar também é navegar no caos.'],
  ['Deploy Congelado', 'Antes do portal, garanta que a entrega passou pelo checkpoint.'],
  ['Rede Social Infinita', 'Distrações tentam capturar sua atenção antes da pergunta final do setor.'],
  ['Núcleo Full Stack', 'Frontend, backend e dados se cruzam no mesmo mapa.'],
  ['Escape da Internet', 'A última fase exige domínio técnico e reflexão sobre tecnologia.']
].map(([title, briefing], index) => ({
  title,
  briefing,
  question: questions[index],
  width: 21 + Math.floor(index / 3) * 2,
  height: 15 + Math.floor(index / 4) * 2,
  shards: Math.min(3 + Math.floor(index / 2), 6),
  hazards: 5 + index * 2,
  sentries: 1 + Math.floor(index / 2),
  speed: 126 + index * 8
}));

const ui = {
  menu: document.getElementById('menu'),
  hud: document.getElementById('hud'),
  briefing: document.getElementById('briefing'),
  quiz: document.getElementById('quiz'),
  ending: document.getElementById('ending'),
  start: document.getElementById('start-game'),
  continue: document.getElementById('continue-game'),
  reset: document.getElementById('reset-save'),
  briefingKicker: document.getElementById('briefing-kicker'),
  briefingTitle: document.getElementById('briefing-title'),
  briefingText: document.getElementById('briefing-text'),
  briefingAction: document.getElementById('briefing-action'),
  hudLevel: document.getElementById('hud-level'),
  hudShards: document.getElementById('hud-shards'),
  hudFocus: document.getElementById('hud-focus'),
  hudScore: document.getElementById('hud-score'),
  quizCategory: document.getElementById('quiz-category'),
  quizTitle: document.getElementById('quiz-title'),
  quizOptions: document.getElementById('quiz-options'),
  quizFeedback: document.getElementById('quiz-feedback'),
  playAgain: document.getElementById('play-again'),
  touch: document.getElementById('touch-controls'),
  soundToggle: document.getElementById('sound-toggle'),
  viewToggle: document.getElementById('view-toggle'),
  viewModeInputs: [...document.querySelectorAll('input[name="view-mode"]')]
};

const state = {
  levelIndex: 0,
  focus: 100,
  score: 0,
  shards: 0,
  requiredShards: 0,
  awaitingQuiz: false,
  quizAnswered: false,
  muted: getInitialMuted(),
  viewMode: getInitialViewMode(),
  collectedShards: new Set(),
  playerAngle: 0,
  campaignStarted: false
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasTouchControls = window.matchMedia('(hover: none), (pointer: coarse)').matches;

function getInitialViewMode() {
  try {
    return localStorage.getItem(VIEW_MODE_KEY) === '3d' ? '3d' : '2d';
  } catch {
    return '2d';
  }
}

function getInitialMuted() {
  try {
    const stored = localStorage.getItem(MUTE_KEY);
    if (stored !== null) return stored === 'true';
  } catch {
    return reducedMotion;
  }
  return reducedMotion;
}

function persistMuted(muted) {
  try {
    localStorage.setItem(MUTE_KEY, String(muted));
  } catch {
    // localStorage indisponível — segue sem persistir
  }
}

class GameAudio {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.bgm = null;
    this.ducked = false;
  }

  async ensureCtx() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.45;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') await this.ctx.resume();
  }

  bgmVolume() {
    return this.ducked ? BGM_DUCKED_VOLUME : BGM_VOLUME;
  }

  async start() {
    if (state.muted) return;
    if (!this.bgm) {
      this.bgm = new Audio(BGM_PATH);
      this.bgm.loop = true;
      this.bgm.volume = this.bgmVolume();
    }
    this.bgm.volume = this.bgmVolume();
    try {
      await this.bgm.play();
    } catch (err) {
      console.warn('[GameAudio] trilha indisponível:', err);
    }
    await this.ensureCtx();
  }

  stop() {
    if (!this.bgm) return;
    this.bgm.pause();
    this.bgm.currentTime = 0;
  }

  setDucked(on) {
    this.ducked = on;
    if (this.bgm && !state.muted) this.bgm.volume = this.bgmVolume();
  }

  note(freq, duration, type = 'triangle', volume = 0.1) {
    if (!this.ctx || state.muted) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    osc.connect(gain).connect(this.master);
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  success() {
    [523.25, 659.25, 783.99].forEach((freq, index) => {
      setTimeout(() => this.note(freq, 0.08, 'triangle', 0.1), index * 70);
    });
  }

  error() {
    [220, 164.81].forEach((freq, index) => {
      setTimeout(() => this.note(freq, 0.1, 'sine', 0.09), index * 80);
    });
  }
}

const audio = new GameAudio();

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
    this.grid = [];
    this.walls = null;
    this.hazards = null;
    this.shardGroup = null;
    this.sentries = [];
    this.player = null;
    this.exit = null;
    this.cursors = null;
    this.keys = null;
    this.pausedByUi = true;
    this.lastDamageAt = 0;
    this.colliders = [];
    this.playerFollowers = [];
    this.raycastGraphics = null;
    this.raycastDepths = [];
  }

  create() {
    this.cameras.main.setBackgroundColor('#070916');
    this.input.keyboard?.on('keydown-ESC', () => {
      if (!state.awaitingQuiz) showMenu();
    });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys('W,A,S,D');
    this.events.on('wake', () => {
      if (state.campaignStarted) this.startLevel(state.levelIndex);
    });
    this.pausedByUi = true;
    showMenu();
  }

  startLevel(index) {
    this.clearLevel();
    this.pausedByUi = true;
    state.awaitingQuiz = false;
    state.quizAnswered = false;
    state.levelIndex = index;
    state.shards = 0;
    state.requiredShards = levels[index].shards;
    state.collectedShards = new Set();
    saveProgress();
    updateHud();
    showBriefing(index);
  }

  launchLevel(options = {}) {
    const level = levels[state.levelIndex];
    const maze = makeMaze(level.width, level.height, state.levelIndex + 11);
    this.grid = maze.grid;
    this.walls = this.physics.add.staticGroup();
    this.hazards = this.physics.add.staticGroup();
    this.shardGroup = this.physics.add.group({ allowGravity: false, immovable: true });
    this.sentries = [];

    drawAtmosphere(this, level.width, level.height);
    drawTiles(this, maze.grid, this.walls);
    this.player = makePlayer(this, maze.start);
    if (!options.playerPosition) state.playerAngle = 0;
    if (options.playerPosition) {
      this.player.setPosition(options.playerPosition.x, options.playerPosition.y);
    }
    this.exit = makeExit(this, maze.exit);
    this.exit.setAlpha(0.34);

    placeObjects(this, maze, level);
    this.colliders.push(this.physics.add.collider(this.player, this.walls));
    this.colliders.push(this.physics.add.overlap(this.player, this.shardGroup, (_, shard) => collectShard(this, shard)));
    this.colliders.push(this.physics.add.overlap(this.player, this.hazards, () => damagePlayer(this, 9)));
    this.colliders.push(this.physics.add.overlap(this.player, this.exit, () => tryExit(this)));
    this.sentries.forEach((sentry) => {
      this.colliders.push(this.physics.add.overlap(this.player, sentry, () => damagePlayer(this, 14)));
    });

    setTouchControlsVisible(hasTouchControls);
    this.layoutCamera(level);
    this.cameras.main.startFollow(this.player, true, 0.12, 0.12);
    this.physics.world.setBounds(0, 0, level.width * TILE_SIZE, level.height * TILE_SIZE);
    if (state.shards >= state.requiredShards) this.exit.setAlpha(1);
    updateFollowers(this);
    updateViewToggleVisibility();
    updateWorldObjectVisibility(this);
    this.pausedByUi = false;
  }

  layoutCamera(level = levels[state.levelIndex]) {
    if (!level) return;
    const { top, bottom } = getGameViewportInsets();
    const viewportWidth = this.scale.width;
    const viewportHeight = Math.max(220, this.scale.height - top - bottom);
    const worldWidth = level.width * TILE_SIZE;
    const worldHeight = level.height * TILE_SIZE;
    const offsetX = Math.max(0, (viewportWidth - worldWidth) / 2);
    const offsetY = Math.max(0, (viewportHeight - worldHeight) / 2);

    this.cameras.main.setViewport(0, top, viewportWidth, viewportHeight);
    this.cameras.main.setBounds(
      -offsetX,
      -offsetY,
      Math.max(worldWidth, viewportWidth),
      Math.max(worldHeight, viewportHeight)
    );
  }

  clearLevel() {
    this.colliders.forEach((collider) => collider.destroy());
    this.colliders = [];
    this.tweens.killAll();
    if (this.walls) this.walls.clear(true, true);
    if (this.hazards) this.hazards.clear(true, true);
    if (this.shardGroup) this.shardGroup.clear(true, true);
    [...this.children.list].forEach((child) => child.destroy());
    this.sentries = [];
    this.playerFollowers = [];
    this.raycastGraphics = null;
    this.raycastDepths = [];
    this.player = null;
    this.exit = null;
  }

  update(time) {
    if (this.pausedByUi || !this.player) return;
    movePlayer(this);
    updateFollowers(this);
    updateSentries(this, time);
    updateActorDepths(this);
    updateRaycastView(this);
  }
}

function makeMaze(width, height, seed) {
  if (width % 2 === 0) width += 1;
  if (height % 2 === 0) height += 1;
  const random = seeded(seed);
  const grid = Array.from({ length: height }, () => Array(width).fill(1));
  const stack = [[1, 1]];
  grid[1][1] = 0;
  while (stack.length) {
    const [x, y] = stack[stack.length - 1];
    const dirs = shuffle([[2, 0], [-2, 0], [0, 2], [0, -2]], random);
    const next = dirs.map(([dx, dy]) => [x + dx, y + dy, dx, dy]).find(([nx, ny]) => ny > 0 && ny < height - 1 && nx > 0 && nx < width - 1 && grid[ny][nx] === 1);
    if (!next) {
      stack.pop();
      continue;
    }
    const [nx, ny, dx, dy] = next;
    grid[y + dy / 2][x + dx / 2] = 0;
    grid[ny][nx] = 0;
    stack.push([nx, ny]);
  }
  for (let y = 2; y < height - 2; y += 2) {
    for (let x = 2; x < width - 2; x += 2) {
      if (random() > 0.72) grid[y][x] = 0;
    }
  }
  return { grid, start: { x: 1, y: 1 }, exit: { x: width - 2, y: height - 2 } };
}

function drawAtmosphere(scene, width, height) {
  const g = scene.add.graphics();
  g.setDepth(-20);
  g.fillStyle(is3dMode() ? 0x030714 : 0x070916, 1).fillRect(0, 0, width * TILE_SIZE, height * TILE_SIZE);
  if (is3dMode()) {
    const horizon = height * TILE_SIZE * 0.42;
    g.fillGradientStyle(0x0b1734, 0x0b1734, 0x050814, 0x050814, 0.72, 0.72, 0.2, 0.2);
    g.fillRect(0, 0, width * TILE_SIZE, horizon);
    g.lineStyle(2, 0x00f5ff, 0.18).lineBetween(0, horizon, width * TILE_SIZE, horizon - 28);
  }
  for (let i = 0; i < 180; i += 1) {
    const x = Phaser.Math.Between(0, width * TILE_SIZE);
    const y = Phaser.Math.Between(0, height * TILE_SIZE);
    g.fillStyle(i % 4 === 0 ? 0x00f5ff : 0x24385f, i % 4 === 0 ? 0.42 : 0.22);
    g.fillRect(x, y, Phaser.Math.Between(1, 3), Phaser.Math.Between(1, 5));
  }
}

function drawTiles(scene, grid, walls) {
  if (is3dMode()) {
    drawTiles3d(scene, grid, walls);
    return;
  }
  drawTiles2d(scene, grid, walls);
}

function drawTiles2d(scene, grid, walls) {
  const g = scene.add.graphics();
  g.setDepth(-10);
  grid.forEach((row, y) => {
    row.forEach((tile, x) => {
      const px = x * TILE_SIZE;
      const py = y * TILE_SIZE;
      if (tile === 1) {
        g.fillStyle(0x132642, 1).fillRoundedRect(px + 1, py + 1, TILE_SIZE - 2, TILE_SIZE - 2, 5);
        g.lineStyle(1, 0x00f5ff, 0.16).strokeRoundedRect(px + 1, py + 1, TILE_SIZE - 2, TILE_SIZE - 2, 5);
        walls.add(scene.add.rectangle(px + TILE_SIZE / 2, py + TILE_SIZE / 2, TILE_SIZE, TILE_SIZE, 0x000000, 0));
      } else {
        g.fillStyle(0x0b1024, 1).fillRect(px, py, TILE_SIZE, TILE_SIZE);
        g.lineStyle(1, 0x1e335d, 0.22).strokeRect(px, py, TILE_SIZE, TILE_SIZE);
      }
    });
  });
}

function drawTiles3d(scene, grid, walls) {
  const g = scene.add.graphics();
  g.setDepth(-10);
  grid.forEach((row, y) => {
    row.forEach((tile, x) => {
      const px = x * TILE_SIZE;
      const py = y * TILE_SIZE;
      g.fillStyle(0x081126, 1).fillRect(px, py, TILE_SIZE, TILE_SIZE);
      g.lineStyle(1, 0x1e335d, 0.2).strokeRect(px, py, TILE_SIZE, TILE_SIZE);
      if (tile !== 1) return;

      const lift = Math.min(8, 4 + y * 0.15);
      g.fillStyle(0x02040d, 0.56).fillRect(px + 7, py + 11, TILE_SIZE - 2, TILE_SIZE - 2);
      g.fillStyle(0x06101f, 1).fillRoundedRect(px + 6, py + lift, TILE_SIZE - 6, TILE_SIZE - 4, 4);
      g.fillStyle(0x0b162c, 1).fillRoundedRect(px + 5, py + lift - 2, TILE_SIZE - 5, TILE_SIZE - 5, 4);
      g.fillStyle(0x173254, 1).fillRoundedRect(px + 2, py + 2, TILE_SIZE - 6, TILE_SIZE - 6, 4);
      g.fillGradientStyle(0x285c83, 0x173254, 0x0d1b35, 0x071022, 0.95, 0.95, 1, 1);
      g.fillRoundedRect(px + 3, py + 3, TILE_SIZE - 10, TILE_SIZE - 10, 4);
      g.lineStyle(1, 0x00f5ff, 0.26).strokeRoundedRect(px + 3, py + 3, TILE_SIZE - 10, TILE_SIZE - 10, 4);
      g.lineStyle(1, 0x66f7ff, 0.22).lineBetween(px + 6, py + 6, px + TILE_SIZE - 10, py + 4);
      g.lineStyle(1, 0xff4fd8, 0.13).lineBetween(px + 5, py + TILE_SIZE - 9, px + TILE_SIZE - 3, py + TILE_SIZE - 2);
      walls.add(scene.add.rectangle(px + TILE_SIZE / 2, py + TILE_SIZE / 2, TILE_SIZE, TILE_SIZE, 0x000000, 0));
    });
  });
}

function makePlayer(scene, start) {
  const x = start.x * TILE_SIZE + TILE_SIZE / 2;
  const y = start.y * TILE_SIZE + TILE_SIZE / 2;
  const player = is3dMode()
    ? scene.add.ellipse(x, y - 3, 22, 28, 0xffcc66, 1)
    : scene.add.circle(x, y, 11, 0xffcc66, 1);
  const shadow = scene.add.ellipse(x, y + 10, 30, 10, 0x000000, is3dMode() ? 0.28 : 0).setDepth(0);
  const glow = scene.add.circle(x, y, 18, 0xffcc66, is3dMode() ? 0.08 : 0.18).setDepth(1);
  scene.playerFollowers.push({ object: shadow, target: player, offsetX: 0, offsetY: 13, depthOffset: -2 });
  scene.playerFollowers.push({ object: glow, target: player, offsetX: 0, offsetY: 0, depthOffset: -1 });
  player.setDepth(2);
  scene.physics.add.existing(player);
  player.body.setCircle(11);
  player.body.setCollideWorldBounds(true);
  return player;
}

function makeExit(scene, exit) {
  const x = exit.x * TILE_SIZE + TILE_SIZE / 2;
  const y = exit.y * TILE_SIZE + TILE_SIZE / 2;
  const portal = is3dMode()
    ? scene.add.polygon(x, y, [0, -20, 15, 0, 0, 20, -15, 0], 0x8b5cf6, 1)
    : scene.add.star(x, y, 8, 10, 19, 0x8b5cf6, 1);
  portal.setDepth(y + 6);
  if (!reducedMotion) {
    scene.tweens.add({ targets: portal, angle: 360, duration: 2200, repeat: -1, ease: 'Linear' });
  }
  scene.physics.add.existing(portal);
  portal.body.setCircle(18);
  return portal;
}

function placeObjects(scene, maze, level) {
  const cells = openCells(maze.grid).filter((cell) => distance(cell, maze.start) > 5 && distance(cell, maze.exit) > 2);
  shuffle(cells, seeded(state.levelIndex + 101));
  for (let i = 0; i < level.shards; i += 1) {
    const cell = cells.pop();
    const shardKey = cellKey(cell);
    if (state.collectedShards.has(shardKey)) continue;
    const shard = is3dMode()
      ? scene.add.polygon(cell.x * TILE_SIZE + 16, cell.y * TILE_SIZE + 13, [0, -13, 10, 0, 0, 13, -10, 0], 0x00f5ff, 1)
      : scene.add.star(cell.x * TILE_SIZE + 16, cell.y * TILE_SIZE + 16, 4, 7, 15, 0x00f5ff, 1);
    shard.setData('kind', 'shard');
    shard.setData('cellKey', shardKey);
    shard.setDepth(shard.y + 4);
    if (!reducedMotion) {
      scene.tweens.add({ targets: shard, y: shard.y - 5, duration: 700, yoyo: true, repeat: -1, ease: 'Sine.inOut' });
    }
    scene.physics.add.existing(shard);
    scene.shardGroup.add(shard);
  }
  for (let i = 0; i < level.hazards; i += 1) {
    const cell = cells.pop();
    const hazard = is3dMode()
      ? scene.add.polygon(cell.x * TILE_SIZE + 16, cell.y * TILE_SIZE + 18, [0, -13, 13, 0, 0, 13, -13, 0], 0xff2d55, 0.44)
      : scene.add.rectangle(cell.x * TILE_SIZE + 16, cell.y * TILE_SIZE + 16, 24, 24, 0xff2d55, 0.38);
    hazard.setStrokeStyle(2, 0xff2d55, 0.9);
    hazard.setDepth(hazard.y + 2);
    scene.physics.add.existing(hazard, true);
    scene.hazards.add(hazard);
  }
  for (let i = 0; i < level.sentries; i += 1) {
    const cell = cells.pop();
    const sentry = is3dMode()
      ? scene.add.polygon(cell.x * TILE_SIZE + 16, cell.y * TILE_SIZE + 13, [0, -12, 12, -4, 12, 12, -12, 12, -12, -4], 0xff4fd8, 1)
      : scene.add.rectangle(cell.x * TILE_SIZE + 16, cell.y * TILE_SIZE + 16, 20, 20, 0xff4fd8, 1);
    sentry.setDepth(sentry.y + 8);
    scene.physics.add.existing(sentry);
    sentry.body.setCollideWorldBounds(true);
    sentry.body.setBounce(1, 1);
    sentry.body.setVelocity(Phaser.Math.Between(-1, 1) * level.speed || level.speed, Phaser.Math.Between(-1, 1) * level.speed || -level.speed);
    sentry.setData('changeAt', 0);
    scene.sentries.push(sentry);
    scene.colliders.push(scene.physics.add.collider(sentry, scene.walls));
  }
}

function is3dMode() {
  return state.viewMode === '3d';
}

function setViewMode(mode, shouldRefresh = true) {
  state.viewMode = mode === '3d' ? '3d' : '2d';
  safeStorage.set(VIEW_MODE_KEY, state.viewMode);
  document.body.dataset.viewMode = state.viewMode;
  ui.viewToggle.textContent = `Modo: ${is3dMode() ? 'FPS' : '2D'}`;
  ui.viewToggle.setAttribute('aria-label', `Alternar para modo ${is3dMode() ? '2D' : 'FPS 2.5D'}`);
  ui.viewModeInputs.forEach((input) => {
    input.checked = input.value === state.viewMode;
  });
  updateViewToggleVisibility();

  if (!shouldRefresh) return;
  const scene = getGameScene();
  if (!scene?.player?.active || scene.pausedByUi || state.awaitingQuiz) return;
  const playerPosition = { x: scene.player.x, y: scene.player.y };
  scene.clearLevel();
  scene.launchLevel({ playerPosition });
}

function updateWorldObjectVisibility(scene) {
  const visible = !is3dMode();
  scene.children.list.forEach((child) => {
    if (child === scene.raycastGraphics) return;
    child.setVisible?.(visible);
  });
}

function updateFollowers(scene) {
  scene.playerFollowers.forEach(({ object, target, offsetX, offsetY, depthOffset }) => {
    if (!object.active || !target.active) return;
    object.setPosition(target.x + offsetX, target.y + offsetY);
    object.setDepth(target.y + depthOffset);
  });
}

function updateActorDepths(scene) {
  scene.player?.setDepth(scene.player.y + 8);
  scene.exit?.setDepth(scene.exit.y + 6);
  scene.sentries.forEach((sentry) => sentry.setDepth(sentry.y + 8));
}

function updateViewToggleVisibility() {
  ui.viewToggle.hidden = ui.menu.hidden || state.awaitingQuiz || !ui.quiz.hidden || !ui.ending.hidden;
}

function movePlayer(scene) {
  const speed = 190;
  if (is3dMode()) {
    const turn = PLAYER_TURN_SPEED;
    const forward = Number(scene.cursors.up.isDown || scene.keys.W.isDown || isTouchPressed('up'))
      - Number(scene.cursors.down.isDown || scene.keys.S.isDown || isTouchPressed('down'));
    const rotation = Number(scene.cursors.right.isDown || scene.keys.D.isDown || isTouchPressed('right'))
      - Number(scene.cursors.left.isDown || scene.keys.A.isDown || isTouchPressed('left'));

    state.playerAngle = normalizeAngle(state.playerAngle + rotation * turn * (scene.game.loop.delta / 1000));
    scene.player.body.setVelocity(
      Math.cos(state.playerAngle) * forward * speed,
      Math.sin(state.playerAngle) * forward * speed
    );
    return;
  }

  let vx = 0;
  let vy = 0;
  if (scene.cursors.left.isDown || scene.keys.A.isDown || isTouchPressed('left')) vx = -speed;
  if (scene.cursors.right.isDown || scene.keys.D.isDown || isTouchPressed('right')) vx = speed;
  if (scene.cursors.up.isDown || scene.keys.W.isDown || isTouchPressed('up')) vy = -speed;
  if (scene.cursors.down.isDown || scene.keys.S.isDown || isTouchPressed('down')) vy = speed;
  scene.player.body.setVelocity(vx, vy);
  scene.player.body.velocity.normalize().scale(vx || vy ? speed : 0);
}

function drawRaycastFloor(g, width, height, horizon) {
  const floorHeight = height - horizon;
  for (let band = 1; band <= 10; band += 1) {
    const t = band / 10;
    const lineY = Math.floor(horizon + (t * t) * floorHeight);
    g.lineStyle(1, 0x2a3f62, 0.14 + t * 0.24);
    g.lineBetween(0, lineY, width, lineY);
  }
  const vanishX = width / 2;
  for (let lane = -7; lane <= 7; lane += 1) {
    if (lane === 0) continue;
    const endX = vanishX + lane * (width * 0.075);
    g.lineStyle(1, 0x223552, 0.16);
    g.lineBetween(vanishX, horizon, endX, height);
  }
}

function getWallShade(correctedDistance) {
  return Math.max(0.34, 1 - correctedDistance / 14);
}

function getWallColumnColor(hit, shade) {
  const sideMul = hit.side ? 0.68 : 1;
  const brickFrac = (hit.wallX * 4) % 1;
  const isMortar = brickFrac < 0.1 || brickFrac > 0.9;
  const textureMul = isMortar ? 0.45 : 1;
  const s = shade * sideMul * textureMul;
  const baseR = hit.side ? 16 : 24;
  const baseG = hit.side ? 42 : 64;
  const baseB = hit.side ? 78 : 118;
  return Phaser.Display.Color.GetColor(
    Math.floor(baseR * s),
    Math.floor(baseG * s),
    Math.floor(baseB * s)
  );
}

function drawWallColumn(g, x, y, columnWidth, wallHeight, hit, shade) {
  const h = Math.ceil(wallHeight);
  g.fillStyle(getWallColumnColor(hit, shade), 1);
  g.fillRect(x, y, columnWidth, h);

  const rowHeight = 20;
  const rowOffset = (Math.floor(hit.wallX * 4) % 2) * (rowHeight / 2);
  for (let row = rowOffset + rowHeight; row < h; row += rowHeight) {
    g.fillStyle(0x02050c, 0.3);
    g.fillRect(x, y + row, columnWidth, 2);
  }

  g.fillStyle(0x00f5ff, 0.24 + shade * 0.2);
  g.fillRect(x, y, columnWidth, 2);
  g.fillStyle(0x010308, 0.6);
  g.fillRect(x, y + h - 3, columnWidth, 3);
}

function updateRaycastView(scene) {
  if (!is3dMode()) {
    if (scene.raycastGraphics) scene.raycastGraphics.clear();
    return;
  }
  if (!scene.raycastGraphics) {
    scene.raycastGraphics = scene.add.graphics().setScrollFactor(0).setDepth(100000);
  }

  const g = scene.raycastGraphics;
  const width = scene.scale.width;
  const height = scene.scale.height;
  const horizon = Math.floor(height * 0.48);
  const columnWidth = Math.ceil(width / RAYCAST_COLUMNS);
  const depths = [];

  g.clear();
  g.fillGradientStyle(0x0c1630, 0x061020, 0x03050c, 0x020408, 1, 1, 1, 1);
  g.fillRect(0, 0, width, horizon);
  g.fillGradientStyle(0x120c14, 0x0c0810, 0x04060b, 0x020304, 1, 1, 1, 1);
  g.fillRect(0, horizon, width, height - horizon);
  drawRaycastFloor(g, width, height, horizon);

  for (let column = 0; column < RAYCAST_COLUMNS; column += 1) {
    const rayAngle = state.playerAngle - RAYCAST_FOV / 2 + (column / (RAYCAST_COLUMNS - 1)) * RAYCAST_FOV;
    const hit = castWallRay(scene.grid, scene.player.x / TILE_SIZE, scene.player.y / TILE_SIZE, rayAngle);
    const correctedDistance = Math.max(0.0001, hit.distance * Math.cos(rayAngle - state.playerAngle));
    const wallHeight = Math.min(height * 1.8, height / correctedDistance);
    const shade = getWallShade(correctedDistance);
    const x = Math.floor((column / RAYCAST_COLUMNS) * width);
    const y = Math.floor(horizon - wallHeight / 2);

    drawWallColumn(g, x, y, columnWidth, wallHeight, hit, shade);
    depths[column] = correctedDistance;
  }

  scene.raycastDepths = depths;
  drawRaycastSprites(scene, width, height, horizon);
  g.lineStyle(2, 0x00f5ff, 0.2).lineBetween(0, horizon, width, horizon);
  g.lineStyle(2, 0xffcc66, 0.7).lineBetween(width / 2 - 10, horizon, width / 2 + 10, horizon);
  g.lineStyle(2, 0xffcc66, 0.7).lineBetween(width / 2, horizon - 10, width / 2, horizon + 10);
}

function castWallRay(grid, originX, originY, angle) {
  const rayDirX = Math.cos(angle);
  const rayDirY = Math.sin(angle);
  let mapX = Math.floor(originX);
  let mapY = Math.floor(originY);
  const deltaDistX = Math.abs(1 / (rayDirX || 0.000001));
  const deltaDistY = Math.abs(1 / (rayDirY || 0.000001));
  const stepX = rayDirX < 0 ? -1 : 1;
  const stepY = rayDirY < 0 ? -1 : 1;
  let sideDistX = rayDirX < 0
    ? (originX - mapX) * deltaDistX
    : (mapX + 1 - originX) * deltaDistX;
  let sideDistY = rayDirY < 0
    ? (originY - mapY) * deltaDistY
    : (mapY + 1 - originY) * deltaDistY;
  let side = 0;

  for (let i = 0; i < 48; i += 1) {
    if (sideDistX < sideDistY) {
      sideDistX += deltaDistX;
      mapX += stepX;
      side = 1;
    } else {
      sideDistY += deltaDistY;
      mapY += stepY;
      side = 0;
    }

    if (grid[mapY]?.[mapX] === 1 || !grid[mapY]) {
      const distance = side === 1
        ? (mapX - originX + (1 - stepX) / 2) / rayDirX
        : (mapY - originY + (1 - stepY) / 2) / rayDirY;
      const absDistance = Math.abs(distance);
      const wallHit = side === 1
        ? originY + absDistance * rayDirY
        : originX + absDistance * rayDirX;
      return { distance: absDistance, side, wallX: wallHit - Math.floor(wallHit) };
    }
  }

  return { distance: 24, side: 0, wallX: 0 };
}

function drawRaycastSprites(scene, width, height, horizon) {
  const objects = [
    ...scene.shardGroup.getChildren().map((object) => ({ object, color: 0x00f5ff, scale: 0.34, shape: 'diamond' })),
    ...scene.hazards.getChildren().map((object) => ({ object, color: 0xff2d55, scale: 0.38, shape: 'hazard' })),
    ...scene.sentries.map((object) => ({ object, color: 0xff4fd8, scale: 0.52, shape: 'sentry' })),
    scene.exit ? { object: scene.exit, color: state.shards >= state.requiredShards ? 0x8b5cf6 : 0x3b265f, scale: 0.72, shape: 'portal' } : null
  ].filter(Boolean).filter(({ object }) => object?.active);

  objects
    .map((entry) => ({ ...entry, projection: projectRaycastObject(scene, entry.object, width, height) }))
    .filter(({ projection }) => projection)
    .sort((a, b) => b.projection.distance - a.projection.distance)
    .forEach(({ color, scale, shape, projection }) => {
      const column = Phaser.Math.Clamp(Math.floor((projection.x / width) * RAYCAST_COLUMNS), 0, RAYCAST_COLUMNS - 1);
      if (projection.distance > (scene.raycastDepths[column] || Infinity)) return;

      const size = Math.max(8, (height / projection.distance) * scale);
      const x = projection.x;
      const y = horizon + size * 0.12;
      const g = scene.raycastGraphics;

      g.fillStyle(0x000000, 0.35);
      g.fillEllipse(x, y + size * 0.45, size * 0.72, size * 0.18);
      g.fillStyle(color, 0.95);
      if (shape === 'diamond' || shape === 'portal') {
        g.fillTriangle(x, y - size * 0.5, x + size * 0.38, y, x, y + size * 0.5);
        g.fillTriangle(x, y - size * 0.5, x - size * 0.38, y, x, y + size * 0.5);
      } else if (shape === 'hazard') {
        g.fillTriangle(x, y - size * 0.45, x + size * 0.45, y + size * 0.35, x - size * 0.45, y + size * 0.35);
      } else {
        g.fillRoundedRect(x - size * 0.32, y - size * 0.55, size * 0.64, size, Math.max(4, size * 0.12));
      }
    });
}

function projectRaycastObject(scene, object, width) {
  const px = scene.player.x;
  const py = scene.player.y;
  const dx = object.x - px;
  const dy = object.y - py;
  const distance = Math.hypot(dx, dy) / TILE_SIZE;
  if (distance < 0.2) return null;

  const angle = Math.atan2(dy, dx);
  const delta = angleDifference(angle, state.playerAngle);
  if (Math.abs(delta) > RAYCAST_FOV * 0.62) return null;

  return {
    x: width / 2 + (delta / (RAYCAST_FOV / 2)) * (width / 2),
    distance: distance * Math.cos(delta)
  };
}

function normalizeAngle(angle) {
  const twoPi = Math.PI * 2;
  return ((angle % twoPi) + twoPi) % twoPi;
}

function angleDifference(a, b) {
  return Math.atan2(Math.sin(a - b), Math.cos(a - b));
}

function updateSentries(scene, time) {
  const level = levels[state.levelIndex];
  scene.sentries.forEach((sentry) => {
    if (time < sentry.getData('changeAt')) return;
    sentry.setData('changeAt', time + Phaser.Math.Between(700, 1600));
    if (Phaser.Math.Between(0, 1) === 0) sentry.body.setVelocityX(Phaser.Math.Between(-1, 1) * level.speed || level.speed);
    else sentry.body.setVelocityY(Phaser.Math.Between(-1, 1) * level.speed || -level.speed);
  });
}

function collectShard(scene, shard) {
  state.collectedShards.add(shard.getData('cellKey'));
  shard.destroy();
  state.shards += 1;
  state.score += 75;
  if (state.shards >= state.requiredShards) {
    scene.exit.setAlpha(1);
    if (!reducedMotion) {
      scene.tweens.add({ targets: scene.exit, scale: 1.35, duration: 220, yoyo: true, repeat: 2 });
    }
  }
  audio.success();
  updateHud();
}

function damagePlayer(scene, amount) {
  const now = scene.time.now;
  if (now - scene.lastDamageAt < 650) return;
  scene.lastDamageAt = now;
  state.focus = Math.max(0, state.focus - amount);
  state.score = Math.max(0, state.score - 25);
  if (!reducedMotion) scene.cameras.main.shake(160, 0.012);
  audio.error();
  updateHud();
  if (state.focus <= 0) {
    state.focus = 100;
    scene.startLevel(state.levelIndex);
  }
}

function tryExit(scene) {
  if (state.awaitingQuiz) return;
  if (state.shards < state.requiredShards) {
    damagePlayer(scene, 4);
    return;
  }
  state.awaitingQuiz = true;
  state.quizAnswered = false;
  scene.pausedByUi = true;
  showQuiz(scene);
}

function showMenu() {
  const scene = getGameScene();
  if (scene) {
    scene.pausedByUi = true;
    scene.player?.body?.setVelocity(0, 0);
  }
  audio.setDucked(false);
  ui.menu.hidden = false;
  ui.hud.hidden = true;
  ui.briefing.hidden = true;
  ui.quiz.hidden = true;
  ui.ending.hidden = true;
  setTouchControlsVisible(false);
  state.awaitingQuiz = false;
  state.quizAnswered = false;
  updateViewToggleVisibility();
}

function showBriefing(index) {
  const level = levels[index];
  ui.menu.hidden = true;
  ui.hud.hidden = false;
  ui.briefing.hidden = false;
  ui.quiz.hidden = true;
  ui.ending.hidden = true;
  setTouchControlsVisible(false);
  ui.briefingKicker.textContent = `Setor ${String(index + 1).padStart(2, '0')} / ${LEVEL_COUNT}`;
  ui.briefingTitle.textContent = level.title;
  ui.briefingText.textContent = level.briefing;
  updateViewToggleVisibility();
}

function showQuiz(scene) {
  const question = levels[state.levelIndex].question;
  audio.setDucked(true);
  ui.quiz.hidden = false;
  setTouchControlsVisible(false);
  updateViewToggleVisibility();
  ui.quizCategory.textContent = question.category;
  ui.quizTitle.textContent = question.text;
  ui.quizFeedback.textContent = '';
  ui.quizOptions.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => answerQuiz(scene, index));
    ui.quizOptions.appendChild(button);
  });
  ui.quizOptions.querySelector('button')?.focus();
}

function answerQuiz(scene, index) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  ui.quizOptions.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
  });
  const question = levels[state.levelIndex].question;
  const correct = index === question.answer;
  ui.quizFeedback.textContent = `${correct ? 'Acesso liberado.' : 'Acesso negado.'} ${question.explanation}`;
  if (!correct) {
    state.focus = Math.max(20, state.focus - 20);
    audio.error();
    updateHud();
    setTimeout(() => {
      ui.quiz.hidden = true;
      audio.setDucked(false);
      state.awaitingQuiz = false;
      state.quizAnswered = false;
      scene.startLevel(state.levelIndex);
    }, 1800);
    return;
  }
  state.score += 500 + state.focus * 3;
  state.levelIndex += 1;
  audio.success();
  saveProgress();
  updateHud();
  setTimeout(() => {
    ui.quiz.hidden = true;
    audio.setDucked(false);
    state.awaitingQuiz = false;
    state.quizAnswered = false;
    if (state.levelIndex >= LEVEL_COUNT) showEnding(scene);
    else scene.startLevel(state.levelIndex);
  }, 1700);
}

function showEnding(scene) {
  scene.pausedByUi = true;
  scene.clearLevel();
  ui.hud.hidden = true;
  setTouchControlsVisible(false);
  ui.ending.hidden = false;
  updateViewToggleVisibility();
  safeStorage.remove(STORAGE_KEY);
}

function updateHud() {
  ui.hudLevel.textContent = String(state.levelIndex + 1).padStart(2, '0');
  ui.hudShards.textContent = `${state.shards}/${state.requiredShards}`;
  ui.hudFocus.textContent = `${state.focus}%`;
  ui.hudScore.textContent = String(state.score).padStart(4, '0');
}

function saveProgress() {
  safeStorage.set(STORAGE_KEY, JSON.stringify({ levelIndex: state.levelIndex, score: state.score, focus: state.focus }));
  refreshContinueButton();
}

function loadProgress() {
  try {
    const parsed = JSON.parse(safeStorage.get(STORAGE_KEY));
    if (!parsed) return false;
    state.levelIndex = Phaser.Math.Clamp(Number(parsed.levelIndex) || 0, 0, LEVEL_COUNT - 1);
    state.score = Math.max(0, Number(parsed.score) || 0);
    state.focus = Phaser.Math.Clamp(Number(parsed.focus) || 100, 1, 100);
    return true;
  } catch {
    return false;
  }
}

function refreshContinueButton() {
  const hasSave = Boolean(safeStorage.get(STORAGE_KEY));
  ui.continue.hidden = !hasSave;
  ui.reset.hidden = !hasSave;
}

function setTouchControlsVisible(visible) {
  window.touchDir = null;
  window.touchState = { up: false, down: false, left: false, right: false };
  ui.touch.hidden = !visible;
}

function isTouchPressed(dir) {
  return Boolean(window.touchState?.[dir] || window.touchDir === dir);
}

function getGameViewportInsets() {
  const hudBottom = ui.hud.hidden ? 0 : ui.hud.getBoundingClientRect().bottom;
  const top = hudBottom ? Math.ceil(hudBottom + 18) : 0;
  const touchHeight = ui.touch.hidden ? 0 : ui.touch.getBoundingClientRect().height;
  const bottom = touchHeight ? Math.ceil(touchHeight + 32) : 24;
  return { top, bottom };
}

function getGameScene() {
  try {
    return game.scene.getScene('GameScene');
  } catch {
    return null;
  }
}

const safeStorage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // O jogo continua sem persistência quando o navegador bloqueia storage.
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      // Sem ação necessária.
    }
  }
};

function openCells(grid) {
  const cells = [];
  grid.forEach((row, y) => row.forEach((tile, x) => {
    if (tile === 0) cells.push({ x, y });
  }));
  return cells;
}

function cellKey(cell) {
  return `${cell.x}:${cell.y}`;
}

function distance(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function seeded(seed) {
  let value = seed * 9301 + 49297;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

function shuffle(items, random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const game = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game-root',
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: '#070916',
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [GameScene]
});

ui.start.addEventListener('click', async () => {
  state.campaignStarted = true;
  state.levelIndex = 0;
  state.score = 0;
  state.focus = 100;
  await audio.start();
  game.scene.getScene('GameScene').startLevel(0);
});

ui.continue.addEventListener('click', async () => {
  state.campaignStarted = true;
  loadProgress();
  await audio.start();
  game.scene.getScene('GameScene').startLevel(state.levelIndex);
});

ui.reset.addEventListener('click', () => {
  safeStorage.remove(STORAGE_KEY);
  refreshContinueButton();
});

ui.briefingAction.addEventListener('click', async () => {
  await audio.start();
  ui.briefing.hidden = true;
  game.scene.getScene('GameScene').launchLevel();
});

ui.playAgain.addEventListener('click', () => {
  state.campaignStarted = true;
  state.levelIndex = 0;
  state.score = 0;
  state.focus = 100;
  ui.ending.hidden = true;
  game.scene.getScene('GameScene').startLevel(0);
});

function syncSoundToggleUi() {
  ui.soundToggle.textContent = `Som: ${state.muted ? 'OFF' : 'ON'}`;
  ui.soundToggle.setAttribute('aria-pressed', String(!state.muted));
  ui.soundToggle.setAttribute('aria-label', state.muted ? 'Som desativado' : 'Som ativado');
}

ui.soundToggle.addEventListener('click', async () => {
  state.muted = !state.muted;
  persistMuted(state.muted);
  syncSoundToggleUi();
  if (state.muted) audio.stop();
  else await audio.start();
});

ui.viewToggle.addEventListener('click', () => {
  setViewMode(is3dMode() ? '2d' : '3d');
});

ui.viewModeInputs.forEach((input) => {
  input.addEventListener('change', () => setViewMode(input.value));
});

ui.touch.querySelectorAll('button').forEach((button) => {
  const dir = button.dataset.dir;
  const start = (event) => {
    event.preventDefault();
    window.touchState = window.touchState || { up: false, down: false, left: false, right: false };
    window.touchState[dir] = true;
    window.touchDir = dir;
  };
  const end = () => {
    if (window.touchState) window.touchState[dir] = false;
    if (window.touchDir === dir) window.touchDir = null;
  };
  button.addEventListener('pointerdown', start);
  button.addEventListener('pointerup', end);
  button.addEventListener('pointerleave', end);
  button.addEventListener('pointercancel', end);
});

window.addEventListener('resize', () => {
  game.scale.resize(window.innerWidth, window.innerHeight);
  getGameScene()?.layoutCamera();
});
setViewMode(state.viewMode, false);
syncSoundToggleUi();
refreshContinueButton();
