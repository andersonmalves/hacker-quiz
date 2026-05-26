// Cyber Maze — configuração de campanha e tilemap base
// 0=chão  1=parede  2=spawn  3=saída  4=distração

const FEATURES = {
  modoCampanha: true,
  quizClassico: true
};

const CAMPANHA_CONFIG = {
  storageKey: 'cyberMazeProgresso',
  progressoVersao: 2,
  tempoInicialSegundos: 780,
  penalidadeErroSegundos: 20,
  atencaoInicial: 100,
  atencaoMinimaAceleracao: 30,
  traceAlertaSegundos: 60,
  totalFases: 10
};

// Grid 15 colunas × 11 linhas
const BASE_TILEMAP = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 4, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

const espelharTilemap = (tilemap) => ({
  cols: tilemap.cols,
  rows: tilemap.rows,
  tileSize: tilemap.tileSize,
  grid: tilemap.grid.map((row) => [...row].reverse())
});

/** Converte coordenada X do mapa base para o espelhado (cols × rows). */
const espelharCoord = (x, cols) => cols - 1 - x;

const BASE_TILEMAP_MIRROR = espelharTilemap(BASE_TILEMAP);

// Mais becos, corredor central quebrado, 4 tiles de distração
const BASE_TILEMAP_TWIST = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 4, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 4, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

// Saída distante, caminhos falsos longos, 2 tiles de distração
const BASE_TILEMAP_FINAL = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 4, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

const BASE_TILEMAP_TWIST_MIRROR = espelharTilemap(BASE_TILEMAP_TWIST);

const TILEMAPS = {
  base: BASE_TILEMAP,
  'base-mirror': BASE_TILEMAP_MIRROR,
  'base-twist': BASE_TILEMAP_TWIST,
  'base-twist-mirror': BASE_TILEMAP_TWIST_MIRROR,
  'base-final': BASE_TILEMAP_FINAL
};

const getTilemap = (ref) => TILEMAPS[ref] || BASE_TILEMAP;

const FASES_CAMPANHA = [
  {
    id: 1,
    titulo: 'Login Inicial',
    narrativa: 'Você invadiu o sistema. Encontre o portal de autenticação antes que o trace te detecte.',
    tilemapRef: 'base',
    perguntaId: 1,
    jogavel: true,
    fogOfWar: false,
    moveCooldownMs: 0,
    distractions: [
      { tipo: 'popup', titulo: 'Faça login agora!', atencaoDelta: 8, triggerTile: { x: 13, y: 1 } }
    ]
  },
  {
    id: 2,
    titulo: 'Firewall de Segurança',
    narrativa: 'Camadas de proteção bloqueiam o caminho. Responda para desativar o firewall.',
    perguntaId: 4,
    jogavel: false,
    distractions: []
  },
  {
    id: 3,
    titulo: 'Banco de Dados',
    narrativa: 'Arquivos escondidos em tabelas criptografadas. Decifre o acesso.',
    perguntaId: 26,
    jogavel: false,
    distractions: []
  },
  {
    id: 4,
    titulo: 'Rede Criptografada',
    narrativa: 'Rotas espelhadas e dados ofuscados. Desvie pelos corredores criptografados até o portal.',
    tilemapRef: 'base-mirror',
    perguntaId: 28,
    jogavel: true,
    fogOfWar: true,
    moveCooldownMs: 120,
    distractions: [
      {
        tipo: 'notification',
        titulo: 'Chave RSA expirada — renovar agora?',
        atencaoDelta: 12,
        triggerTile: { x: espelharCoord(13, BASE_TILEMAP.cols), y: 1 }
      },
      {
        tipo: 'popup',
        titulo: 'Tráfego suspeito detectado na rede',
        atencaoDelta: 14,
        triggerTile: { x: 13, y: 7 }
      }
    ]
  },
  {
    id: 5,
    titulo: 'Servidor Central',
    narrativa: 'O núcleo do servidor exige prova de conhecimento. Não se distraia.',
    perguntaId: 7,
    jogavel: false,
    distractions: []
  },
  {
    id: 6,
    titulo: 'Ataque de Pop-ups',
    narrativa: 'Janelas invasivas tentam capturar sua atenção. Feche-as e alcance a saída.',
    tilemapRef: 'base-twist',
    perguntaId: 3,
    jogavel: true,
    fogOfWar: true,
    moveCooldownMs: 120,
    distractionsTimed: [
      {
        delaySegundos: 8,
        tipo: 'popup',
        titulo: 'Você ganhou um prêmio! Clique aqui!',
        atencaoDelta: 15
      }
    ],
    distractions: [
      { tipo: 'notification', titulo: '3 novas mensagens não lidas', atencaoDelta: 12 },
      { tipo: 'popup', titulo: 'Instale nosso app GRÁTIS', atencaoDelta: 14, triggerTile: { x: 1, y: 7 } },
      { tipo: 'popup', titulo: 'Oferta expira em 5 minutos!', atencaoDelta: 14, triggerTile: { x: 3, y: 5 } },
      { tipo: 'notification', titulo: 'Cookies: aceitar todos?', atencaoDelta: 12, triggerTile: { x: 11, y: 5 } }
    ]
  },
  {
    id: 7,
    titulo: 'Vício em Scroll',
    narrativa: 'O feed infinito puxa você para baixo. Resista e responda.',
    perguntaId: 18,
    jogavel: false,
    cutscene: 'scroll',
    distractions: []
  },
  {
    id: 8,
    titulo: 'Sistema Corrompido',
    narrativa: 'Glitches distorcem o labirinto espelhado. Encontre a saída antes que o sistema colapse.',
    tilemapRef: 'base-twist-mirror',
    perguntaId: 5,
    jogavel: true,
    mazeEffect: 'glitch',
    fogOfWar: true,
    moveCooldownMs: 120,
    distractions: [
      {
        tipo: 'popup',
        titulo: 'KERNEL PANIC — reiniciar sistema?',
        atencaoDelta: 15,
        triggerTile: { x: 1, y: 1 }
      },
      {
        tipo: 'notification',
        titulo: 'Setor 7 corrompido — dados perdidos',
        atencaoDelta: 14,
        triggerTile: { x: 13, y: 7 }
      }
    ]
  },
  {
    id: 9,
    titulo: 'Núcleo da Rede',
    narrativa: 'Última barreira antes da liberdade. Uma resposta correta e você avança.',
    perguntaId: 29,
    jogavel: false,
    distractions: []
  },
  {
    id: 10,
    titulo: 'Desconexão Final',
    narrativa: 'A saída está à vista. Escape do labirinto e desconecte-se do sistema.',
    tilemapRef: 'base-final',
    perguntaId: 12,
    jogavel: true,
    fogOfWar: true,
    moveCooldownMs: 120,
    distractions: [
      {
        tipo: 'popup',
        titulo: 'Desconectar agora? Você perderá progresso',
        atencaoDelta: 12,
        triggerTile: { x: 13, y: 1 }
      },
      {
        tipo: 'notification',
        titulo: 'Última chance de scroll infinito',
        atencaoDelta: 14,
        triggerTile: { x: 4, y: 7 }
      }
    ]
  }
];

window.FEATURES = FEATURES;
window.CAMPANHA_CONFIG = CAMPANHA_CONFIG;
window.BASE_TILEMAP = BASE_TILEMAP;
window.BASE_TILEMAP_MIRROR = BASE_TILEMAP_MIRROR;
window.BASE_TILEMAP_TWIST = BASE_TILEMAP_TWIST;
window.BASE_TILEMAP_FINAL = BASE_TILEMAP_FINAL;
window.TILEMAPS = TILEMAPS;
window.getTilemap = getTilemap;
window.espelharCoord = espelharCoord;
window.FASES_CAMPANHA = FASES_CAMPANHA;
