// Cyber Maze — configuração de campanha e tilemap base
// 0=chão  1=parede  2=spawn  3=saída  4=distração  5=fragmento  6=risco

const FEATURES = {
  modoCampanha: true,
  quizClassico: true
};

const CAMPANHA_CONFIG = {
  storageKey: 'cyberMazeProgresso',
  progressoVersao: 4,
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
    [1, 2, 5, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 4, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 5, 0, 0, 0, 0, 1, 0, 6, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 4, 0, 5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

const espelharTilemap = (tilemap) => ({
  cols: tilemap.cols,
  rows: tilemap.rows,
  tileSize: tilemap.tileSize,
  grid: tilemap.grid.map((row) => [...row].reverse())
});

const espelharCoord = (x, cols) => cols - 1 - x;

const BASE_TILEMAP_MIRROR = espelharTilemap(BASE_TILEMAP);

// Camadas horizontais — firewall
const BASE_TILEMAP_FIREWALL = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 5, 0, 0, 1, 1, 1, 0, 0, 5, 0, 0, 4, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 4, 0, 0, 0, 0, 5, 0, 0, 0, 0, 6, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 6, 0, 0, 0, 0, 0, 1, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

// Colunas estreitas — tabelas / banco de dados
const BASE_TILEMAP_DATABASE = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 5, 1, 0, 1, 0, 0, 1, 0, 1, 0, 5, 4, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 4, 0, 0, 0, 5, 0, 0, 0, 6, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 4, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 6, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

// Núcleo central bloqueado — servidor
const BASE_TILEMAP_SERVER = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 5, 0, 1, 0, 0, 5, 0, 1, 0, 0, 0, 4, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 4, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 6, 0, 1, 0, 0, 0, 1, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

const BASE_TILEMAP_SERVER_MIRROR = espelharTilemap(BASE_TILEMAP_SERVER);

const BASE_TILEMAP_TWIST = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 5, 0, 1, 0, 0, 5, 1, 0, 0, 0, 1, 4, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 4, 0, 0, 4, 6, 0, 0, 0, 4, 5, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 4, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 6, 0, 1, 0, 0, 0, 1, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

const BASE_TILEMAP_FINAL = {
  cols: 15,
  rows: 11,
  tileSize: 32,
  grid: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 5, 0, 0, 1, 0, 0, 5, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 4, 1],
    [1, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 5, 1, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 4, 0, 0, 0, 1, 0, 6, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ]
};

const BASE_TILEMAP_TWIST_MIRROR = espelharTilemap(BASE_TILEMAP_TWIST);

const TILEMAPS = {
  base: BASE_TILEMAP,
  'base-mirror': BASE_TILEMAP_MIRROR,
  'base-firewall': BASE_TILEMAP_FIREWALL,
  'base-database': BASE_TILEMAP_DATABASE,
  'base-server': BASE_TILEMAP_SERVER,
  'base-server-mirror': BASE_TILEMAP_SERVER_MIRROR,
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
    requiredShards: 2,
    fogOfWar: true,
    moveCooldownMs: 80,
    distractions: [
      { tipo: 'popup', titulo: 'Faça login agora!', atencaoDelta: 8, triggerTile: { x: 13, y: 1 } },
      { tipo: 'notification', titulo: 'Sessão expira em 60s', atencaoDelta: 10, triggerTile: { x: 1, y: 7 } }
    ]
  },
  {
    id: 2,
    titulo: 'Firewall de Segurança',
    narrativa: 'Camadas de proteção bloqueiam o caminho. Desvie pelas brechas até o portal.',
    tilemapRef: 'base-firewall',
    perguntaId: 4,
    jogavel: true,
    requiredShards: 2,
    fogOfWar: true,
    moveCooldownMs: 100,
    distractionsTimed: [
      {
        delaySegundos: 12,
        tipo: 'popup',
        titulo: 'Firewall bloqueou porta 443 — permitir?',
        atencaoDelta: 12
      }
    ],
    distractions: [
      { tipo: 'popup', titulo: 'Pacote bloqueado — revisar regras', atencaoDelta: 10, triggerTile: { x: 13, y: 1 } },
      { tipo: 'notification', titulo: 'Scan de portas detectado', atencaoDelta: 12, triggerTile: { x: 13, y: 7 } }
    ]
  },
  {
    id: 3,
    titulo: 'Banco de Dados',
    narrativa: 'Arquivos escondidos em tabelas criptografadas. Navegue entre as colunas até a saída.',
    tilemapRef: 'base-database',
    perguntaId: 26,
    jogavel: true,
    requiredShards: 3,
    fogOfWar: true,
    moveCooldownMs: 100,
    distractionsTimed: [
      {
        delaySegundos: 10,
        tipo: 'notification',
        titulo: 'Backup automático em andamento…',
        atencaoDelta: 11
      }
    ],
    distractions: [
      { tipo: 'popup', titulo: 'Query lenta — otimizar índice?', atencaoDelta: 12, triggerTile: { x: 13, y: 1 } },
      { tipo: 'notification', titulo: 'Tabela users_lock — aguardando', atencaoDelta: 10, triggerTile: { x: 1, y: 5 } },
      { tipo: 'popup', titulo: 'Registro duplicado encontrado', atencaoDelta: 12, triggerTile: { x: 13, y: 7 } }
    ]
  },
  {
    id: 4,
    titulo: 'Rede Criptografada',
    narrativa: 'Rotas espelhadas e dados ofuscados. Desvie pelos corredores criptografados até o portal.',
    tilemapRef: 'base-mirror',
    perguntaId: 28,
    jogavel: true,
    requiredShards: 2,
    fogOfWar: true,
    moveCooldownMs: 120,
    distractionsTimed: [
      {
        delaySegundos: 10,
        tipo: 'notification',
        titulo: 'Certificado SSL inválido — continuar?',
        atencaoDelta: 13
      }
    ],
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
        triggerTile: { x: espelharCoord(13, BASE_TILEMAP.cols), y: 7 }
      }
    ]
  },
  {
    id: 5,
    titulo: 'Servidor Central',
    narrativa: 'O núcleo do servidor exige prova de conhecimento. Contorne o core e alcance a saída.',
    tilemapRef: 'base-server',
    perguntaId: 7,
    jogavel: true,
    requiredShards: 3,
    fogOfWar: true,
    moveCooldownMs: 110,
    distractionsTimed: [
      {
        delaySegundos: 9,
        tipo: 'popup',
        titulo: 'CPU em 99% — encerrar processo?',
        atencaoDelta: 14
      }
    ],
    distractions: [
      { tipo: 'notification', titulo: 'Serviço reiniciando…', atencaoDelta: 11, triggerTile: { x: 13, y: 1 } },
      { tipo: 'popup', titulo: 'Disco quase cheio no /var', atencaoDelta: 13, triggerTile: { x: 1, y: 7 } }
    ]
  },
  {
    id: 6,
    titulo: 'Ataque de Pop-ups',
    narrativa: 'Janelas invasivas tentam capturar sua atenção. Feche-as e alcance a saída.',
    tilemapRef: 'base-twist',
    perguntaId: 3,
    jogavel: true,
    requiredShards: 3,
    fogOfWar: true,
    moveCooldownMs: 120,
    distractionsTimed: [
      {
        delaySegundos: 8,
        tipo: 'popup',
        titulo: 'Você ganhou um prêmio! Clique aqui!',
        atencaoDelta: 15
      },
      {
        delaySegundos: 18,
        tipo: 'notification',
        titulo: 'Atualização crítica disponível',
        atencaoDelta: 12
      }
    ],
    distractions: [
      {
        tipo: 'notification',
        titulo: '3 novas mensagens não lidas',
        atencaoDelta: 12,
        triggerTile: { x: 6, y: 5 }
      },
      { tipo: 'popup', titulo: 'Instale nosso app GRÁTIS', atencaoDelta: 14, triggerTile: { x: 1, y: 7 } },
      { tipo: 'popup', titulo: 'Oferta expira em 5 minutos!', atencaoDelta: 14, triggerTile: { x: 3, y: 5 } },
      { tipo: 'notification', titulo: 'Cookies: aceitar todos?', atencaoDelta: 12, triggerTile: { x: 11, y: 5 } }
    ]
  },
  {
    id: 7,
    titulo: 'Vício em Scroll',
    narrativa: 'O feed infinito puxa você para baixo. Resista e responda.',
    tilemapRef: 'base-database',
    perguntaId: 18,
    jogavel: true,
    requiredShards: 3,
    fogOfWar: true,
    moveCooldownMs: 130,
    distractionsTimed: [
      {
        delaySegundos: 7,
        tipo: 'notification',
        titulo: 'Feed infinito carregando mais vídeos…',
        atencaoDelta: 14
      },
      {
        delaySegundos: 17,
        tipo: 'popup',
        titulo: 'Só mais um vídeo antes de sair?',
        atencaoDelta: 15
      }
    ],
    distractions: [
      { tipo: 'notification', titulo: 'Novo reel recomendado', atencaoDelta: 13, triggerTile: { x: 13, y: 1 } },
      { tipo: 'popup', titulo: 'Você recebeu 9 curtidas', atencaoDelta: 13, triggerTile: { x: 1, y: 5 } },
      { tipo: 'notification', titulo: 'Rolagem automática ativada', atencaoDelta: 14, triggerTile: { x: 13, y: 7 } }
    ]
  },
  {
    id: 8,
    titulo: 'Sistema Corrompido',
    narrativa: 'Glitches distorcem o labirinto espelhado. Encontre a saída antes que o sistema colapse.',
    tilemapRef: 'base-twist-mirror',
    perguntaId: 5,
    jogavel: true,
    requiredShards: 3,
    mazeEffect: 'glitch',
    fogOfWar: true,
    moveCooldownMs: 120,
    distractionsTimed: [
      {
        delaySegundos: 6,
        tipo: 'popup',
        titulo: 'MEMORY LEAK — fechar aplicativo?',
        atencaoDelta: 14
      },
      {
        delaySegundos: 16,
        tipo: 'notification',
        titulo: 'Setor 0x7F corrompido',
        atencaoDelta: 13
      }
    ],
    distractions: [
      {
        tipo: 'popup',
        titulo: 'KERNEL PANIC — reiniciar sistema?',
        atencaoDelta: 15,
        triggerTile: { x: espelharCoord(1, BASE_TILEMAP_TWIST.cols), y: 1 }
      },
      {
        tipo: 'notification',
        titulo: 'Setor 7 corrompido — dados perdidos',
        atencaoDelta: 14,
        triggerTile: { x: espelharCoord(13, BASE_TILEMAP_TWIST.cols), y: 7 }
      }
    ]
  },
  {
    id: 9,
    titulo: 'Núcleo da Rede',
    narrativa: 'Última barreira antes da liberdade. Atravesse o núcleo espelhado e não perca o foco.',
    tilemapRef: 'base-server-mirror',
    perguntaId: 29,
    jogavel: true,
    requiredShards: 3,
    fogOfWar: true,
    moveCooldownMs: 130,
    distractionsTimed: [
      {
        delaySegundos: 8,
        tipo: 'notification',
        titulo: 'Latência crítica — 2.4s ping',
        atencaoDelta: 13
      }
    ],
    distractions: [
      {
        tipo: 'popup',
        titulo: 'Roteador principal offline',
        atencaoDelta: 14,
        triggerTile: { x: espelharCoord(13, BASE_TILEMAP_SERVER.cols), y: 1 }
      },
      {
        tipo: 'notification',
        titulo: 'Pacotes perdidos: 38%',
        atencaoDelta: 12,
        triggerTile: { x: espelharCoord(1, BASE_TILEMAP_SERVER.cols), y: 7 }
      }
    ]
  },
  {
    id: 10,
    titulo: 'Desconexão Final',
    narrativa: 'A saída está à vista. Escape do labirinto e desconecte-se do sistema.',
    tilemapRef: 'base-final',
    perguntaId: 12,
    jogavel: true,
    requiredShards: 3,
    fogOfWar: true,
    moveCooldownMs: 120,
    distractionsTimed: [
      {
        delaySegundos: 12,
        tipo: 'popup',
        titulo: 'Uma última notificação antes de sair…',
        atencaoDelta: 15
      }
    ],
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
window.BASE_TILEMAP_FIREWALL = BASE_TILEMAP_FIREWALL;
window.BASE_TILEMAP_DATABASE = BASE_TILEMAP_DATABASE;
window.BASE_TILEMAP_SERVER = BASE_TILEMAP_SERVER;
window.BASE_TILEMAP_TWIST = BASE_TILEMAP_TWIST;
window.BASE_TILEMAP_FINAL = BASE_TILEMAP_FINAL;
window.TILEMAPS = TILEMAPS;
window.getTilemap = getTilemap;
window.espelharCoord = espelharCoord;
window.FASES_CAMPANHA = FASES_CAMPANHA;
