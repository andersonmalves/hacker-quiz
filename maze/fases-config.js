// Cyber Maze — configuração de campanha e tilemap base
// 0=chão  1=parede  2=spawn  3=saída  4=distração

const FEATURES = {
  modoCampanha: true,
  quizClassico: true
};

const CAMPANHA_CONFIG = {
  storageKey: 'cyberMazeProgresso',
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
    narrativa: 'Rotas confusas e dados ofuscados. Mantenha o foco.',
    perguntaId: 28,
    jogavel: false,
    distractions: []
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
    narrativa: 'Glitches distorcem a realidade. Recupere o controle.',
    perguntaId: 5,
    jogavel: false,
    cutscene: 'glitch',
    distractions: []
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
window.FASES_CAMPANHA = FASES_CAMPANHA;
