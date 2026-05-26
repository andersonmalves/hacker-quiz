// Cyber Maze — configuração de campanha e tilemap base
// 0=chão  1=parede  2=spawn  3=saída  4=distração

const FEATURES = {
  modoCampanha: true,
  quizClassico: true
};

const CAMPANHA_CONFIG = {
  storageKey: 'cyberMazeProgresso',
  progressoVersao: 2,
  tempoInicialSegundos: 900,
  penalidadeErroSegundos: 15,
  atencaoInicial: 100,
  atencaoMinimaAceleracao: 20,
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

const BASE_TILEMAP_MIRROR = espelharTilemap(BASE_TILEMAP);

const TILEMAPS = {
  base: BASE_TILEMAP,
  'base-mirror': BASE_TILEMAP_MIRROR
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
    distractions: [
      {
        tipo: 'notification',
        titulo: 'Chave RSA expirada — renovar agora?',
        atencaoDelta: 8,
        triggerTile: { x: 13, y: 1 }
      },
      {
        tipo: 'popup',
        titulo: 'Tráfego suspeito detectado na rede',
        atencaoDelta: 10,
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
    tilemapRef: 'base',
    perguntaId: 3,
    jogavel: true,
    distractions: [
      { tipo: 'popup', titulo: 'Você ganhou um prêmio! Clique aqui!', atencaoDelta: 12 },
      { tipo: 'notification', titulo: '3 novas mensagens não lidas', atencaoDelta: 10 },
      { tipo: 'popup', titulo: 'Instale nosso app GRÁTIS', atencaoDelta: 10, triggerTile: { x: 1, y: 7 } }
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
    tilemapRef: 'base-mirror',
    perguntaId: 5,
    jogavel: true,
    mazeEffect: 'glitch',
    distractions: [
      {
        tipo: 'popup',
        titulo: 'KERNEL PANIC — reiniciar sistema?',
        atencaoDelta: 12,
        triggerTile: { x: 13, y: 1 }
      },
      {
        tipo: 'notification',
        titulo: 'Setor 7 corrompido — dados perdidos',
        atencaoDelta: 10,
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
    tilemapRef: 'base',
    perguntaId: 12,
    jogavel: true,
    distractions: []
  }
];

window.FEATURES = FEATURES;
window.CAMPANHA_CONFIG = CAMPANHA_CONFIG;
window.BASE_TILEMAP = BASE_TILEMAP;
window.BASE_TILEMAP_MIRROR = BASE_TILEMAP_MIRROR;
window.TILEMAPS = TILEMAPS;
window.getTilemap = getTilemap;
window.FASES_CAMPANHA = FASES_CAMPANHA;
