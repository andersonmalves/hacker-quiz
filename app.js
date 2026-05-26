// Hacker Quiz - Carreira de Engenharia de Software
// Pool de 30 perguntas introdutórias sobre a profissão

const poolPerguntas = [
  // === DIA A DIA (6 perguntas) ===
  {
    id: 1,
    categoria: "Dia a Dia",
    pergunta: "Qual é a atividade que um Engenheiro de Software passa mais tempo fazendo?",
    alternativas: [
      "Escrevendo código o dia todo",
      "Reuniões apenas",
      "Lendo código, documentação e resolvendo problemas",
      "Configurando computadores"
    ],
    correta: 2,
    explicacao: "Engenheiros passam mais tempo lendo e entendendo código existente do que escrevendo código novo."
  },
  {
    id: 2,
    categoria: "Dia a Dia",
    pergunta: "O que é 'programar' na prática?",
    alternativas: [
      "Digitar código rápido",
      "Resolver problemas usando código como ferramenta",
      "Consertar impressoras",
      "Criar designs de sites"
    ],
    correta: 1,
    explicacao: "Programar é sobre resolver problemas lógicos e automatizar tarefas, não apenas digitar código."
  },
  {
    id: 3,
    categoria: "Dia a Dia",
    pergunta: "Engenheiros de Software trabalham sozinhos ou em equipe?",
    alternativas: [
      "Sempre sozinhos, em casa",
      "Quase sempre em equipes colaborativas",
      "Apenas no escritório sozinho",
      "Nunca conversam com ninguém"
    ],
    correta: 1,
    explicacao: "Desenvolvimento moderno é altamente colaborativo, com times trabalhando juntos em projetos."
  },
  {
    id: 4,
    categoria: "Dia a Dia",
    pergunta: "O que é um 'bug' no dia a dia de um engenheiro?",
    alternativas: [
      "Um inseto no computador",
      "Código que não funciona como esperado",
      "Vírus de computador",
      "Hardware quebrado"
    ],
    correta: 1,
    explicacao: "Bug é um erro no código que causa comportamento inesperado no software."
  },
  {
    id: 5,
    categoria: "Dia a Dia",
    pergunta: "Engenheiro de Software e Programador são a mesma coisa?",
    alternativas: [
      "Sim, totalmente idênticos",
      "Não - engenheiro pensa em arquitetura, não só código",
      "Programador ganha mais",
      "Engenheiro não programa"
    ],
    correta: 1,
    explicacao: "Engenheiro aplica princípios de engenharia ao software (arquitetura, escala), não só codifica."
  },
  {
    id: 6,
    categoria: "Dia a Dia",
    pergunta: "Qual ferramenta um engenheiro USA TODO DIA no trabalho?",
    alternativas: [
      "Photoshop",
      "Excel",
      "Git (controle de versão)",
      "AutoCAD"
    ],
    correta: 2,
    explicacao: "Git é usado por mais de 90% dos desenvolvedores para versionar e controlar mudanças no código."
  },

  // === NÍVEIS DE CARREIRA (5 perguntas) ===
  {
    id: 7,
    categoria: "Níveis de Carreira",
    pergunta: "Qual a diferença principal entre Junior e Senior?",
    alternativas: [
      "Só o salário",
      "Senior resolve problemas mais complexos com autonomia",
      "Junior não programa",
      "Senior tem doutorado obrigatório"
    ],
    correta: 1,
    explicacao: "Senior tem experiência para lidar com ambiguidade, decisões técnicas e orientar outros."
  },
  {
    id: 8,
    categoria: "Níveis de Carreira",
    pergunta: "Quanto tempo leva para virar Pleno (média nacional)?",
    alternativas: [
      "6 meses",
      "1 ano",
      "2-4 anos",
      "10 anos"
    ],
    correta: 2,
    explicacao: "Geralmente leva 2-4 anos de experiência prática para alcançar o nível pleno."
  },
  {
    id: 9,
    categoria: "Níveis de Carreira",
    pergunta: "O que é um Tech Lead?",
    alternativas: [
      "Chefe que manda em todos",
      "Engenheiro que lidera decisões técnicas do time",
      "Recrutador de tecnologia",
      "Vendedor de software"
    ],
    correta: 1,
    explicacao: "Tech Lead guia a direção técnica do projeto, sem ser necessariamente gestor de pessoas."
  },
  {
    id: 10,
    categoria: "Níveis de Carreira",
    pergunta: "Existe nível acima de Senior na carreira técnica?",
    alternativas: [
      "Não, Senior é o topo",
      "Sim: Staff Engineer, Principal, Distinguished",
      "Só quem tem mestrado",
      "Só em empresas públicas"
    ],
    correta: 1,
    explicacao: "Carreira técnica continua: Staff → Principal → Distinguished/Architect/Fellow."
  },
  {
    id: 11,
    categoria: "Níveis de Carreira",
    pergunta: "O que diferencia um bom Junior recém-contratado?",
    alternativas: [
      "Sabe 10 linguagens",
      "Pede ajuda, aprende rápido, aceita feedback",
      "Trabalha 12h por dia",
      "Nunca comete erros"
    ],
    correta: 1,
    explicacao: "Atitude de aprendizado e humildade é mais importante que conhecimento técnico inicial."
  },

  // === FORMAÇÃO/EDUCAÇÃO (5 perguntas) ===
  {
    id: 12,
    categoria: "Formação",
    pergunta: "Precisa de faculdade para ser Engenheiro de Software?",
    alternativas: [
      "Sim, obrigatoriamente",
      "Não - existem bootcamps, cursos e autodidatas",
      "Só doutorado conta",
      "Precisa de faculdade de engenharia civil"
    ],
    correta: 1,
    explicacao: "Tecnologia valoriza habilidades práticas além do diploma - muitos são autodidatas."
  },
  {
    id: 13,
    categoria: "Formação",
    pergunta: "Quanto tempo dura uma faculdade de Computação típica?",
    alternativas: [
      "2 anos",
      "4-5 anos (bacharelado)",
      "6 meses",
      "10 anos"
    ],
    correta: 1,
    explicacao: "Ciência da Computação e Engenharia de Software são cursos de graduação de 4-5 anos."
  },
  {
    id: 14,
    categoria: "Formação",
    pergunta: "Bootcamp de programação dura quanto tempo (média)?",
    alternativas: [
      "1 dia",
      "1 semana",
      "3-6 meses (intensivo)",
      "2 anos"
    ],
    correta: 2,
    explicacao: "Bootcamps intensivos preparam para primeira vaga de desenvolvedor em 3-6 meses."
  },
  {
    id: 15,
    categoria: "Formação",
    pergunta: "O que é mais importante aprender PRIMEIRO na carreira?",
    alternativas: [
      "Lógica de programação",
      "10 linguagens de uma vez",
      "Comprar computador caro",
      "Memorizar códigos"
    ],
    correta: 0,
    explicacao: "Lógica é a base de tudo - linguagens são ferramentas que mudam com o tempo."
  },
  {
    id: 16,
    categoria: "Formação",
    pergunta: "Engenheiro de Software precisa saber inglês?",
    alternativas: [
      "Não, tudo está em português",
      "Sim, documentação e comunidade são majoritariamente em inglês",
      "Só se for viajar",
      "Não afeta a carreira"
    ],
    correta: 1,
    explicacao: "Inglês técnico é essencial para documentação, cursos e oportunidades internacionais."
  },

  // === OPÇÕES DE TRABALHO (5 perguntas) ===
  {
    id: 17,
    categoria: "Onde Trabalhar",
    pergunta: "Onde um Engenheiro de Software pode trabalhar?",
    alternativas: [
      "Só em empresas de tecnologia",
      "Qualquer empresa que tenha tecnologia (bancos, lojas, hospitais...)",
      "Só no exterior",
      "Só em escritórios físicos"
    ],
    correta: 1,
    explicacao: "Hoje 'toda empresa é uma empresa de software' - bancos, varejo, saúde precisam de tecnologia."
  },
  {
    id: 18,
    categoria: "Onde Trabalhar",
    pergunta: "O que é trabalho remoto na prática?",
    alternativas: [
      "Trabalhar de férias",
      "Trabalhar de casa, com horários flexíveis",
      "Não trabalhar",
      "Ser autônomo forçado"
    ],
    correta: 1,
    explicacao: "Tecnologia é uma das áreas com mais vagas remotas e flexibilidade de horário."
  },
  {
    id: 19,
    categoria: "Onde Trabalhar",
    pergunta: "O que é uma 'Big Tech'?",
    alternativas: [
      "Qualquer empresa grande",
      "Google, Amazon, Meta, Microsoft, Apple...",
      "Lojas de eletrônicos",
      "Empresas de hardware apenas"
    ],
    correta: 1,
    explicacao: "Big Techs são gigantes americanas de tecnologia, as empresas mais valorizadas do mundo."
  },
  {
    id: 20,
    categoria: "Onde Trabalhar",
    pergunta: "Startup é diferente de empresa tradicional como?",
    alternativas: [
      "Só usa Mac",
      "Maior risco/retorno, crescimento acelerado, menos estrutura",
      "Paga mais sempre",
      "Não usa código"
    ],
    correta: 1,
    explicacao: "Startups buscam crescimento rápido com modelos inovadores, geralmente com mais risco."
  },
  {
    id: 21,
    categoria: "Onde Trabalhar",
    pergunta: "O que é ser freelancer/PJ na área de tecnologia?",
    alternativas: [
      "Não ter emprego",
      "Trabalhar por projeto, sem carteira assinada",
      "Ser obrigatório",
      "Ganhar menos sempre"
    ],
    correta: 1,
    explicacao: "PJ (Pessoa Jurídica) é comum para autônomos, contratos e trabalhos por projeto."
  },

  // === REMUNERAÇÃO (4 perguntas) ===
  {
    id: 22,
    categoria: "Salários",
    pergunta: "Qual faixa salarial de Junior no Brasil (2024/2025)?",
    alternativas: [
      "Até R$ 1.000",
      "R$ 3.000 - R$ 7.000",
      "R$ 15.000+",
      "R$ 500"
    ],
    correta: 1,
    explicacao: "Junior em tecnologia tem remuneração acima da média nacional, variando por região."
  },
  {
    id: 23,
    categoria: "Salários",
    pergunta: "Quanto ganha um Senior em média no Brasil?",
    alternativas: [
      "R$ 2.000",
      "R$ 10.000 - R$ 25.000+",
      "R$ 5.000 fixo",
      "Igual a todos"
    ],
    correta: 1,
    explicacao: "Senior pode chegar a 25k+ dependendo da empresa, região e especialização."
  },
  {
    id: 24,
    categoria: "Salários",
    pergunta: "Ganhar em dólar (remoto internacional) é possível?",
    alternativas: [
      "Não, é ilegal",
      "Sim, muitos brasileiros trabalham para empresas do exterior",
      "Só cidadão americano",
      "Nunca acontece"
    ],
    correta: 1,
    explicacao: "Trabalho remoto internacional cresceu muito pós-pandemia - muitos ganham em dólar/euro."
  },
  {
    id: 25,
    categoria: "Salários",
    pergunta: "Além do salário, o que mais compensa na área de tecnologia?",
    alternativas: [
      "Nada",
      "Benefícios, bônus, stock options, horário flexível",
      "Só vale salário",
      "Apenas plano de saúde"
    ],
    correta: 1,
    explicacao: "Tecnologia tem benefícios como vale refeição, home office, ações da empresa (stocks)."
  },

  // === STACKS/TECNOLOGIAS (5 perguntas) ===
  {
    id: 26,
    categoria: "Tecnologias",
    pergunta: "O que é 'stack' na área de tecnologia?",
    alternativas: [
      "Pilha de papel",
      "Conjunto de tecnologias usadas em um projeto",
      "Salário empilhado",
      "Hierarquia de empresa"
    ],
    correta: 1,
    explicacao: "Stack = tecnologias que compõem uma aplicação (ex: React + Node + PostgreSQL)."
  },
  {
    id: 27,
    categoria: "Tecnologias",
    pergunta: "O que é 'frontend' em desenvolvimento?",
    alternativas: [
      "Banco de dados",
      "Parte visual que usuário vê e interage",
      "Servidor",
      "Segurança"
    ],
    correta: 1,
    explicacao: "Frontend é a interface, o 'rosto' da aplicação - botões, telas, experiência do usuário."
  },
  {
    id: 28,
    categoria: "Tecnologias",
    pergunta: "O que é 'backend' em desenvolvimento?",
    alternativas: [
      "Design",
      "Parte que processa dados, regras de negócio, servidores",
      "Marketing",
      "Suporte técnico"
    ],
    correta: 1,
    explicacao: "Backend é o 'cérebro' por trás das aplicações - processamento, banco de dados, APIs."
  },
  {
    id: 29,
    categoria: "Tecnologias",
    pergunta: "O que é 'Full Stack'?",
    alternativas: [
      "Trabalha em duas empresas",
      "Sabe trabalhar frontend e backend",
      "Só senior",
      "Não existe"
    ],
    correta: 1,
    explicacao: "Full Stack trabalha em todas as camadas da aplicação, do servidor à interface."
  },
  {
    id: 30,
    categoria: "Tecnologias",
    pergunta: "Linguagens de programação mais populares em 2025?",
    alternativas: [
      "Apenas Python",
      "JavaScript, Python, Java, Go, TypeScript...",
      "Só C++",
      "HTML e CSS são linguagens de programação"
    ],
    correta: 1,
    explicacao: "JavaScript domina web, Python dados/IA, Java enterprise, Go infraestrutura."
  }
];

// Estado do jogo
const estado = {
  perguntasSorteadas: [],
  perguntaAtual: 0,
  pontuacao: 0,
  respostas: [],
  respostaSelecionada: null,
  alternativasExibidas: [],
  corretaExibida: null,
  tempoInicio: null,
  tempoFim: null,
  acertos: 0,
  processando: false,
  modoJogo: null
};

const campanhaEstado = {
  modo: null,
  faseAtual: 1,
  acertos: 0,
  tempoRestante: typeof CAMPANHA_CONFIG !== 'undefined'
    ? CAMPANHA_CONFIG.tempoInicialSegundos
    : 900,
  atencao: typeof CAMPANHA_CONFIG !== 'undefined'
    ? CAMPANHA_CONFIG.atencaoInicial
    : 100,
  timerInterval: null,
  faseSpawn: { x: 0, y: 0 },
  voltarParaMaze: false,
  distractionIndex: 0,
  scoreFinal: 0,
  fasesConcluidas: [],
  timerPausado: false
};

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Configurações
const CONFIG = {
  pontosPorAcerto: 100,
  maxPodium: 10,
  storageKey: 'hackerQuizPodium',
  storageKeyUltimaPartida: 'hackerQuizUltimaPartida',
  maxEvitarRepeticao: 8,
  perguntasPorJogo: 10,
  cotasPorCategoria: {
    'Dia a Dia': 2,
    'Níveis de Carreira': 2,
    'Formação': 2,
    'Onde Trabalhar': 1,
    'Salários': 1,
    'Tecnologias': 2
  }
};

// Configurações de áudio - ATMOSFERA DARK/SINISTRA
const AUDIO_CONFIG = {
  bpm: 160, // Top Gear SNES — corrida veloz
  volumeMaster: -8,
  storageKey: 'hackerQuizMute'
};

// Estado de áudio com múltiplos synths
const audioEstado = {
  droneSynth: null,      // Kick drum
  bassSynth: null,       // Baixo triangular (canal SNES)
  alertSynth: null,      // Melodia principal (onda quadrada)
  shadowSynth: null,     // Caixa / snare
  glitchSynth: null,     // Hi-hat
  masterVolume: null,
  isMuted: false,
  isIniciado: false
};

// === SEQUÊNCIA MUSICAL ESTILO TOP GEAR SNES ===
// Lá menor — Am – F – G – Em | 160 BPM
// Estrutura: kick + caixa + hihat + baixo triangular + melodia square

// Camada 1: KICK — bumbo nos tempos 1 e 3, com fills no 4º compasso
const sequenciaDrone = [
  { time: "0:0",   note: "C#1", dur: "8n", vel: 1.0 },
  { time: "0:2",   note: "C#1", dur: "8n", vel: 0.9 },
  { time: "1:0",   note: "C#1", dur: "8n", vel: 1.0 },
  { time: "1:2",   note: "C#1", dur: "8n", vel: 0.9 },
  { time: "2:0",   note: "C#1", dur: "8n", vel: 1.0 },
  { time: "2:2",   note: "C#1", dur: "8n", vel: 0.9 },
  { time: "3:0",   note: "C#1", dur: "8n", vel: 1.0 },
  { time: "3:2",   note: "C#1", dur: "8n", vel: 0.9 },
  { time: "3:3",   note: "C#1", dur: "16n", vel: 0.7 },
  { time: "3:3:2", note: "C#1", dur: "16n", vel: 0.6 }
];

// Camada 2: BAIXO — canal triangular SNES, raiz + 5ª em colcheias
const sequenciaBass = [
  // Bar 0 (Am)
  { time: "0:0",   note: "A2",  dur: "8n" },
  { time: "0:0:2", note: "A2",  dur: "8n" },
  { time: "0:1",   note: "E2",  dur: "8n" },
  { time: "0:1:2", note: "A2",  dur: "8n" },
  { time: "0:2",   note: "A2",  dur: "8n" },
  { time: "0:2:2", note: "G2",  dur: "8n" },
  { time: "0:3",   note: "E2",  dur: "8n" },
  { time: "0:3:2", note: "A2",  dur: "8n" },
  // Bar 1 (F)
  { time: "1:0",   note: "F2",  dur: "8n" },
  { time: "1:0:2", note: "F2",  dur: "8n" },
  { time: "1:1",   note: "C2",  dur: "8n" },
  { time: "1:1:2", note: "F2",  dur: "8n" },
  { time: "1:2",   note: "F2",  dur: "8n" },
  { time: "1:2:2", note: "E2",  dur: "8n" },
  { time: "1:3",   note: "C2",  dur: "8n" },
  { time: "1:3:2", note: "F2",  dur: "8n" },
  // Bar 2 (G)
  { time: "2:0",   note: "G2",  dur: "8n" },
  { time: "2:0:2", note: "G2",  dur: "8n" },
  { time: "2:1",   note: "D2",  dur: "8n" },
  { time: "2:1:2", note: "G2",  dur: "8n" },
  { time: "2:2",   note: "G2",  dur: "8n" },
  { time: "2:2:2", note: "F2",  dur: "8n" },
  { time: "2:3",   note: "D2",  dur: "8n" },
  { time: "2:3:2", note: "G2",  dur: "8n" },
  // Bar 3 (Em)
  { time: "3:0",   note: "E2",  dur: "8n" },
  { time: "3:0:2", note: "E2",  dur: "8n" },
  { time: "3:1",   note: "B1",  dur: "8n" },
  { time: "3:1:2", note: "E2",  dur: "8n" },
  { time: "3:2",   note: "E2",  dur: "8n" },
  { time: "3:2:2", note: "D2",  dur: "8n" },
  { time: "3:3",   note: "B1",  dur: "8n" },
  { time: "3:3:2", note: "E2",  dur: "8n" }
];

// Camada 3: MELODIA — onda quadrada estilo SNES, 4 frases de 1 compasso
const sequenciaAlert = [
  // Bar 0 (Am) — frase de abertura: subida, giro, descida
  { time: "0:0",   note: "E5",  dur: "8n" },
  { time: "0:0:2", note: "C5",  dur: "8n" },
  { time: "0:1",   note: "A4",  dur: "8n" },
  { time: "0:1:2", note: "E5",  dur: "8n" },
  { time: "0:2",   note: "G5",  dur: "8n" },
  { time: "0:2:2", note: "E5",  dur: "8n" },
  { time: "0:3",   note: "D5",  dur: "8n" },
  { time: "0:3:2", note: "C5",  dur: "8n" },
  // Bar 1 (F) — resposta: descida suave com nota longa
  { time: "1:0",   note: "F5",  dur: "8n" },
  { time: "1:0:2", note: "E5",  dur: "8n" },
  { time: "1:1",   note: "D5",  dur: "8n" },
  { time: "1:1:2", note: "C5",  dur: "8n" },
  { time: "1:2",   note: "A4",  dur: "4n" },
  { time: "1:3",   note: "C5",  dur: "8n" },
  { time: "1:3:2", note: "D5",  dur: "8n" },
  // Bar 2 (G) — tensão crescente: subida até A5
  { time: "2:0",   note: "E5",  dur: "8n" },
  { time: "2:0:2", note: "G5",  dur: "8n" },
  { time: "2:1",   note: "A5",  dur: "8n" },
  { time: "2:1:2", note: "G5",  dur: "8n" },
  { time: "2:2",   note: "E5",  dur: "8n" },
  { time: "2:2:2", note: "D5",  dur: "8n" },
  { time: "2:3",   note: "C5",  dur: "8n" },
  { time: "2:3:2", note: "B4",  dur: "8n" },
  // Bar 3 (Em) — corrida final de 16 avos de volta ao início
  { time: "3:0",   note: "A4",  dur: "8n" },
  { time: "3:0:2", note: "B4",  dur: "16n" },
  { time: "3:0:3", note: "C5",  dur: "16n" },
  { time: "3:1",   note: "D5",  dur: "8n" },
  { time: "3:1:2", note: "E5",  dur: "8n" },
  { time: "3:2",   note: "A5",  dur: "8n" },
  { time: "3:2:2", note: "G5",  dur: "8n" },
  { time: "3:3",   note: "E5",  dur: "16n" },
  { time: "3:3:1", note: "D5",  dur: "16n" },
  { time: "3:3:2", note: "C5",  dur: "16n" },
  { time: "3:3:3", note: "B4",  dur: "16n" }
];

// Camada 4: CAIXA (snare) — batidas nos tempos 2 e 4
const sequenciaShadow = [
  { time: "0:1",   dur: "16n" },
  { time: "0:3",   dur: "16n" },
  { time: "1:1",   dur: "16n" },
  { time: "1:3",   dur: "16n" },
  { time: "2:1",   dur: "16n" },
  { time: "2:3",   dur: "16n" },
  { time: "3:1",   dur: "16n" },
  { time: "3:3",   dur: "16n" },
  { time: "3:3:1", dur: "32n" },
  { time: "3:3:2", dur: "32n" },
  { time: "3:3:3", dur: "32n" }
];

// Camada 5: HI-HAT — colcheias constantes, abertura no contratempo
const sequenciaGlitch = [
  { time: "0:0",   dur: "32n", type: "digital" },
  { time: "0:0:2", dur: "32n", type: "digital" },
  { time: "0:1",   dur: "32n", type: "digital" },
  { time: "0:1:2", dur: "32n", type: "digital" },
  { time: "0:2",   dur: "32n", type: "digital" },
  { time: "0:2:2", dur: "32n", type: "digital" },
  { time: "0:3",   dur: "32n", type: "digital" },
  { time: "0:3:2", dur: "16n", type: "corrupt" },
  { time: "1:0",   dur: "32n", type: "digital" },
  { time: "1:0:2", dur: "32n", type: "digital" },
  { time: "1:1",   dur: "32n", type: "digital" },
  { time: "1:1:2", dur: "32n", type: "digital" },
  { time: "1:2",   dur: "32n", type: "digital" },
  { time: "1:2:2", dur: "32n", type: "digital" },
  { time: "1:3",   dur: "32n", type: "digital" },
  { time: "1:3:2", dur: "16n", type: "corrupt" }
];

// ============================================================================
// SFX MANAGER — EFEITOS SONOROS ESTILO SNES
// ============================================================================

const sfxManager = {
  synth: null,

  init() {
    this.synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "square" },
      envelope: { attack: 0.001, decay: 0.08, sustain: 0.3, release: 0.1 }
    });
    const vol = new Tone.Volume(-10).toDestination();
    this.synth.connect(vol);
  },

  _ok() {
    return this.synth && !audioEstado.isMuted;
  },

  // Clique em alternativa — blip de seleção de menu
  playSelect() {
    if (!this._ok()) return;
    const now = Tone.now();
    this.synth.triggerAttackRelease("A5", "32n", now);
  },

  // Resposta correta — arpejo ascendente de 3 notas
  playAcerto() {
    if (!this._ok()) return;
    const now = Tone.now();
    this.synth.triggerAttackRelease("E5", "16n", now);
    this.synth.triggerAttackRelease("A5", "16n", now + 0.07);
    this.synth.triggerAttackRelease("C6", "8n",  now + 0.14);
  },

  // Resposta errada — queda de 2 notas + burst de ruído
  playErro() {
    if (!this._ok()) return;
    const now = Tone.now();
    this.synth.triggerAttackRelease("D4", "16n", now);
    this.synth.triggerAttackRelease("A3", "8n",  now + 0.08);

    // Reutiliza o mesmo noise synth para evitar criar múltiplas instâncias
    if (!this._noiseSynth) {
      this._noiseSynth = new Tone.NoiseSynth({
        noise: { type: "brown" },
        envelope: { attack: 0.001, decay: 0.18, sustain: 0, release: 0.1 }
      }).toDestination();
      this._noiseSynth.volume.value = -12;
    }
    this._noiseSynth.triggerAttackRelease("16n", now);
  },

  // Fim de missão — fanfarra de vitória de 4 notas
  playComplete() {
    if (!this._ok()) return;
    const now = Tone.now();
    [["E5", "8n", 0], ["G5", "8n", 0.12], ["A5", "8n", 0.24], ["E6", "4n", 0.36]]
      .forEach(([n, d, t]) => this.synth.triggerAttackRelease(n, d, now + t));
  },

  // Desistir — queda cromática descendente
  playAbort() {
    if (!this._ok()) return;
    const now = Tone.now();
    this.synth.triggerAttackRelease("C5",  "16n", now);
    this.synth.triggerAttackRelease("A#4", "16n", now + 0.08);
    this.synth.triggerAttackRelease("G#4", "16n", now + 0.16);
    this.synth.triggerAttackRelease("F4",  "8n",  now + 0.24);
  },

  dispose() {
    if (this.synth) {
      this.synth.dispose();
      this.synth = null;
    }
    if (this._noiseSynth) {
      this._noiseSynth.dispose();
      this._noiseSynth = null;
    }
  }
};

// ============================================================================
// ANIMAÇÕES PROFISSIONAIS
// ============================================================================

// Transição terminal entre perguntas
const terminalTransition = {
  overlay: null,
  log: null,
  progressFill: null,
  titleEl: null,

  init() {
    if (!this.overlay) {
      this.overlay = document.getElementById('transition-overlay');
      this.log = document.getElementById('transition-log');
      this.progressFill = document.getElementById('transition-progress-fill');
      this.titleEl = document.getElementById('transition-title');
    }
  },

  buildLines({ proxima, total, categoria }) {
    const pad = (n) => String(n).padStart(2, '0');
    const cat = (categoria || 'UNKNOWN').toUpperCase();
    const templates = [
      () => [
        '> decrypting payload... OK',
        `> loading module [${pad(proxima)}/${pad(total)}]`,
        `> category: ${cat}`,
        '> handshake verified_'
      ],
      () => [
        '> scanning sector... OK',
        `> fetch question_${pad(proxima)}.dat`,
        `> tag: ${cat}`,
        '> access granted_'
      ],
      () => [
        '> bypassing firewall... OK',
        `> inject quiz_block[${pad(proxima)}/${pad(total)}]`,
        `> module: ${cat}`,
        '> sync complete_'
      ],
      () => [
        '> parsing stream... OK',
        `> next target [${pad(proxima)}/${pad(total)}]`,
        `> intel: ${cat}`,
        '> channel open_'
      ]
    ];
    const pick = templates[Math.floor(Math.random() * templates.length)];
    return pick();
  },

  triggerGlitchSound() {
    if (!audioEstado.isIniciado || !audioEstado.glitchSynth || audioEstado.isMuted) return;
    try {
      audioEstado.glitchSynth.triggerAttackRelease('32n');
    } catch (e) {
      // synth pode estar disposed após parar áudio
    }
  },

  buildCompleteLines({ acertos, total, pontos }) {
    const pct = Math.round((acertos / total) * 100);
    const rank = utils.getMissionRank(acertos, total);
    return [
      '> finalizing extraction... OK',
      `> modules cleared: ${String(total).padStart(2, '0')}/${String(total).padStart(2, '0')}`,
      `> accuracy: ${pct}% (${acertos}/${total})`,
      `> score: ${pontos} pts`,
      `> rank: ${rank.rank}`,
      '> mission status: COMPLETE_'
    ];
  },

  buildAbortLines({ perguntaAtual, total }) {
    const pad = (n) => String(n).padStart(2, '0');
    return [
      '> abort signal received... OK',
      `> wiping session [${pad(perguntaAtual)}/${pad(total)}]`,
      '> clearing buffer... OK',
      '> disconnecting secure channel_',
      '> mission status: ABORTED_'
    ];
  },

  async runSequence(lines, { title, modo = 'sync' }) {
    this.init();
    if (!this.overlay || !this.log) return;

    if (prefersReducedMotion()) {
      await new Promise((r) => setTimeout(r, 150));
      return;
    }

    const lineDelay = modo === 'complete' ? 140 : 120;
    const fadeOutMs = 300;

    this.log.innerHTML = '';
    if (this.progressFill) this.progressFill.style.width = '0%';
    if (this.titleEl) this.titleEl.textContent = title;

    this.overlay.hidden = false;
    this.overlay.setAttribute('aria-hidden', 'false');
    this.overlay.classList.remove('saindo', 'completa', 'abort');
    if (modo === 'complete') this.overlay.classList.add('completa');
    if (modo === 'abort') this.overlay.classList.add('abort');
    this.overlay.classList.add('ativa');

    if (modo === 'sync' || modo === 'abort') this.triggerGlitchSound();
    await new Promise((r) => setTimeout(r, 200));

    for (let i = 0; i < lines.length; i++) {
      const line = document.createElement('div');
      line.className = 'transition-log-line';
      if (i === lines.length - 1) line.classList.add('transition-cursor');
      line.textContent = lines[i];
      this.log.appendChild(line);

      if (this.progressFill) {
        this.progressFill.style.width = `${((i + 1) / lines.length) * 100}%`;
      }

      await new Promise((r) => setTimeout(r, lineDelay));
    }

    await new Promise((r) => setTimeout(r, modo === 'complete' ? 280 : 180));

    this.overlay.classList.remove('ativa');
    this.overlay.classList.add('saindo');

    await new Promise((r) => setTimeout(r, fadeOutMs));

    this.overlay.hidden = true;
    this.overlay.setAttribute('aria-hidden', 'true');
    this.overlay.classList.remove('saindo', 'completa', 'abort');
    this.log.innerHTML = '';
    if (this.progressFill) this.progressFill.style.width = '0%';
    if (this.titleEl) this.titleEl.textContent = '// SYNC IN PROGRESS';
  },

  async play({ proxima, total, categoria }) {
    const lines = this.buildLines({ proxima, total, categoria });
    await this.runSequence(lines, { title: '// SYNC IN PROGRESS', modo: 'sync' });
  },

  async playComplete({ acertos, total, pontos }) {
    const lines = this.buildCompleteLines({ acertos, total, pontos });
    await this.runSequence(lines, { title: '// MISSION COMPLETE', modo: 'complete' });
    if (!prefersReducedMotion()) screenFlash.trigger('acerto');
  },

  async playAbort({ perguntaAtual, total }) {
    const lines = this.buildAbortLines({ perguntaAtual, total });
    await this.runSequence(lines, { title: '// MISSION ABORTED', modo: 'abort' });
    if (!prefersReducedMotion()) screenFlash.trigger('erro');
  }
};

// Screen Flash - Feedback visual acerto/erro
const screenFlash = {
  element: null,
  
  init: () => {
    if (!screenFlash.element) {
      screenFlash.element = document.createElement('div');
      screenFlash.element.className = 'screen-flash';
      document.body.appendChild(screenFlash.element);
    }
  },
  
  trigger: (type) => {
    if (prefersReducedMotion()) return;

    screenFlash.init();
    screenFlash.element.className = `screen-flash ${type}`;

    if (navigator.vibrate && type === 'erro') {
      navigator.vibrate(200);
    }
    
    setTimeout(() => {
      screenFlash.element.className = 'screen-flash';
    }, 300);
  }
};

// Score Animator - Números rolantes
const scoreAnimator = {
  animate: (element, from, to, duration = 500) => {
    const startTime = Date.now();
    element.classList.add('score-animating');
    
    return new Promise((resolve) => {
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        const current = Math.floor(from + (to - from) * easeProgress);
        element.textContent = current.toString().padStart(4, '0');
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          element.classList.remove('score-animating');
          resolve();
        }
      };
      animate();
    });
  }
};

// Typing Effect - Digitação de texto
const typingEffect = {
  cancelled: false,

  apply: async (element, text, speed = 20) => {
    typingEffect.cancelled = false;

    if (prefersReducedMotion()) {
      element.textContent = text;
      return;
    }
    element.textContent = '';
    element.classList.add('typing-cursor');

    for (let i = 0; i < text.length; i++) {
      if (typingEffect.cancelled) {
        element.classList.remove('typing-cursor');
        return;
      }
      element.textContent += text[i];
      await new Promise(r => setTimeout(r, speed));
    }

    element.classList.remove('typing-cursor');
  }
};

// Barra de progresso
const progressBar = {
  atualizar: (perguntaAtual, total) => {
    const barra = elementos.quiz.barraProgresso;
    if (barra && total > 0) {
      const porcentagem = ((perguntaAtual + 1) / total) * 100;
      barra.style.width = `${porcentagem}%`;
    }
  }
};

// Audio Manager - TRILHA ESTILO TOP GEAR SNES
const audioManager = {
  init: () => {
    audioEstado.isMuted = localStorage.getItem(AUDIO_CONFIG.storageKey) === 'true';
    audioManager.atualizarIconeMute();
  },

  iniciar: async () => {
    if (audioEstado.isIniciado) return;

    // Verifica se Tone.js está disponível
    if (typeof Tone === 'undefined') {
      console.warn('Tone.js não carregado - áudio desativado');
      return;
    }

    try {
      await Tone.start();
    } catch (e) {
      console.warn('Erro ao iniciar Tone.js:', e);
      return;
    }

    sfxManager.init();

    // 1. KICK — bumbo curto e incisivo
    audioEstado.droneSynth = new Tone.MembraneSynth({
      pitchDecay: 0.04,
      octaves: 5,
      oscillator: { type: "sine" },
      envelope: {
        attack: 0.001,
        decay: 0.2,
        sustain: 0,
        release: 0.3
      }
    });

    // 2. BAIXO — canal triangular puro, como o SNES SPC700
    audioEstado.bassSynth = new Tone.Synth({
      oscillator: { type: "triangle" },
      envelope: {
        attack: 0.001,
        decay: 0.08,
        sustain: 0.9,
        release: 0.08
      }
    });

    // 3. MELODIA — onda quadrada com ataque rápido, estilo SNES
    audioEstado.alertSynth = new Tone.PolySynth(Tone.Synth, {
      oscillator: { type: "square" },
      envelope: {
        attack: 0.001,
        decay: 0.05,
        sustain: 0.75,
        release: 0.08
      }
    });

    // 4. CAIXA (snare) — ruído marrom com corpo médio
    audioEstado.shadowSynth = new Tone.NoiseSynth({
      noise: { type: "brown" },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0,
        release: 0.08
      }
    });

    // 5. HI-HAT — ruído branco curto e seco
    audioEstado.glitchSynth = new Tone.NoiseSynth({
      noise: { type: "white" },
      envelope: {
        attack: 0.001,
        decay: 0.022,
        sustain: 0,
        release: 0.01
      }
    });

    // === CADEIA DE EFEITOS ESTILO SNES — seco, presente, sem eco longo ===
    // Compressor para colar o mix como os chips de áudio SNES faziam
    const compressor = new Tone.Compressor(-18, 4).toDestination();

    // Reverb mínimo — só uma leve presença de sala
    const reverbDark = new Tone.Reverb({
      decay: 0.6,
      wet: 0.07,
      preDelay: 0.005
    }).connect(compressor);

    // Sem delay (Top Gear não usa echo na melodia principal)
    const distortion = new Tone.Distortion(0.04).connect(reverbDark);

    // Filtro aberto para brilho SNES
    const darkFilter = new Tone.Filter(8000, "lowpass").connect(distortion);

    // Highpass remove subgrave indesejado
    const highpass = new Tone.Filter(60, "highpass").connect(darkFilter);
    
    // Volume master
    audioEstado.masterVolume = new Tone.Volume(
      audioEstado.isMuted ? -Infinity : AUDIO_CONFIG.volumeMaster
    ).connect(highpass);
    
    // Volumes individuais — balanceamento estilo SNES (melodia na frente)
    const droneVol = new Tone.Volume(-3).connect(audioEstado.masterVolume);   // kick — punch
    const bassVol = new Tone.Volume(-5).connect(audioEstado.masterVolume);    // baixo — sólido
    const alertVol = new Tone.Volume(-7).connect(audioEstado.masterVolume);   // melodia — na frente
    const shadowVol = new Tone.Volume(-9).connect(audioEstado.masterVolume);  // snare — presente
    const glitchVol = new Tone.Volume(-13).connect(audioEstado.masterVolume); // hihat — sutil
    
    // Conecta synths
    audioEstado.droneSynth.connect(droneVol);
    audioEstado.bassSynth.connect(bassVol);
    audioEstado.alertSynth.connect(alertVol);
    audioEstado.shadowSynth.connect(shadowVol);
    audioEstado.glitchSynth.connect(glitchVol);

    // === CRIA AS PARTES (SEQUÊNCIAS) ===
    
    // Kick
    const dronePart = new Tone.Part((time, event) => {
      audioEstado.droneSynth.triggerAttackRelease(event.note, event.dur, time);
    }, sequenciaDrone);
    dronePart.loop = true;
    dronePart.loopEnd = "4m";
    dronePart.start(0);

    // Baixo triangular
    const bassPart = new Tone.Part((time, event) => {
      audioEstado.bassSynth.triggerAttackRelease(event.note, event.dur, time, event.vel);
    }, sequenciaBass);
    bassPart.loop = true;
    bassPart.loopEnd = "4m";
    bassPart.start(0);

    // Melodia principal
    const alertPart = new Tone.Part((time, event) => {
      audioEstado.alertSynth.triggerAttackRelease(event.note, event.dur, time);
    }, sequenciaAlert);
    alertPart.loop = true;
    alertPart.loopEnd = "4m";
    alertPart.start(0);

    // Caixa (snare)
    const shadowPart = new Tone.Part((time, event) => {
      audioEstado.shadowSynth.triggerAttackRelease(event.dur, time);
    }, sequenciaShadow);
    shadowPart.loop = true;
    shadowPart.loopEnd = "4m";
    shadowPart.start(0);

    // Hi-hat digital
    const glitchPart = new Tone.Part((time, event) => {
      const types = { digital: "white", corrupt: "pink", static: "brown" };
      audioEstado.glitchSynth.noise.type = types[event.type] || "white";
      audioEstado.glitchSynth.triggerAttackRelease(event.dur, time);
    }, sequenciaGlitch);
    glitchPart.loop = true;
    glitchPart.loopEnd = "2m";
    glitchPart.start(0);
    
    // Configura BPM e inicia
    Tone.Transport.bpm.value = AUDIO_CONFIG.bpm;
    Tone.Transport.start();
    
    audioEstado.isIniciado = true;
    console.log('%c🏎️ TOP GEAR MODE — trilha iniciada a 160 BPM', 'color: #00ff41; background: #0a0a0a; font-weight: bold;');
  },

  toggleMute: () => {
    audioEstado.isMuted = !audioEstado.isMuted;

    if (audioEstado.masterVolume) {
      const destino = audioEstado.isMuted ? -Infinity : AUDIO_CONFIG.volumeMaster;
      // Tone.Volume tem uma propriedade 'volume' que é um Tone.Param
      try {
        audioEstado.masterVolume.volume.rampTo(destino, 0.3);
      } catch (e) {
        console.warn('Erro ao ajustar volume:', e);
      }
    }

    localStorage.setItem(AUDIO_CONFIG.storageKey, audioEstado.isMuted);
    audioManager.atualizarIconeMute();
  },

  atualizarIconeMute: () => {
    const btn = document.getElementById('btn-mute');
    const icon = document.getElementById('mute-icon');
    const label = document.getElementById('mute-label');
    if (btn && icon) {
      icon.textContent = audioEstado.isMuted ? '🔇' : '🔊';
      btn.classList.toggle('muted', audioEstado.isMuted);
      btn.setAttribute('aria-label', audioEstado.isMuted ? 'Desmutar música' : 'Mutar música');
      if (label) {
        label.textContent = audioEstado.isMuted ? 'Som desligado' : 'Som ligado';
      }
    }
  },

  parar: () => {
    if (typeof Tone === 'undefined') return;

    try {
      if (audioEstado.droneSynth) audioEstado.droneSynth.dispose();
      if (audioEstado.bassSynth) audioEstado.bassSynth.dispose();
      if (audioEstado.alertSynth) audioEstado.alertSynth.dispose();
      if (audioEstado.shadowSynth) audioEstado.shadowSynth.dispose();
      if (audioEstado.glitchSynth) audioEstado.glitchSynth.dispose();
      if (audioEstado.masterVolume) audioEstado.masterVolume.dispose();
      sfxManager.dispose();

      Tone.Transport.stop();
    } catch (e) {
      console.warn('Erro ao parar áudio:', e);
    }

    // Reseta estado mesmo se houver erro
    audioEstado.droneSynth = null;
    audioEstado.bassSynth = null;
    audioEstado.alertSynth = null;
    audioEstado.shadowSynth = null;
    audioEstado.glitchSynth = null;
    audioEstado.masterVolume = null;
    audioEstado.isIniciado = false;
  }
};

// Referências DOM
const elementos = {
  telas: {
    inicial: document.getElementById('tela-inicial'),
    briefing: document.getElementById('tela-briefing'),
    maze: document.getElementById('tela-maze'),
    quiz: document.getElementById('tela-quiz'),
    resultado: document.getElementById('tela-resultado'),
    finalCampanha: document.getElementById('tela-final-campanha'),
    traceGameover: document.getElementById('tela-trace-gameover'),
    podium: document.getElementById('tela-podium')
  },
  botoes: {
    jogarCampanha: document.getElementById('btn-jogar-campanha'),
    quizClassico: document.getElementById('btn-quiz-classico'),
    verPodium: document.getElementById('btn-podium'),
    continuarCampanha: document.getElementById('btn-continuar-campanha'),
    novaCampanha: document.getElementById('btn-nova-campanha'),
    quizResumo: document.getElementById('btn-quiz-resumo'),
    podiumResumo: document.getElementById('btn-podium-resumo'),
    confirmar: document.getElementById('btn-confirmar'),
    proxima: document.getElementById('btn-proxima'),
    desistir: document.getElementById('btn-desistir'),
    salvar: document.getElementById('btn-salvar'),
    jogarNovamente: document.getElementById('btn-jogar-novamente'),
    voltar: document.getElementById('btn-voltar'),
    mute: document.getElementById('btn-mute'),
    briefingContinuar: document.getElementById('btn-briefing-continuar'),
    briefingDesistir: document.getElementById('btn-briefing-desistir'),
    mazeDesistir: document.getElementById('btn-maze-desistir'),
    fecharDistraction: document.getElementById('btn-fechar-distraction'),
    traceReiniciar: document.getElementById('btn-trace-reiniciar'),
    traceMenu: document.getElementById('btn-trace-menu'),
    salvarCampanha: document.getElementById('btn-salvar-campanha'),
    campanhaMenu: document.getElementById('btn-campanha-menu')
  },
  campanha: {
    briefingFaseNum: document.getElementById('briefing-fase-num'),
    briefingTimer: document.getElementById('briefing-timer'),
    briefingAtencaoFill: document.getElementById('briefing-atencao-fill'),
    briefingTitulo: document.getElementById('briefing-titulo'),
    briefingNarrativa: document.getElementById('briefing-narrativa'),
    mazeFaseNum: document.getElementById('maze-fase-num'),
    mazeTimer: document.getElementById('maze-timer'),
    mazeTimerWrap: document.getElementById('maze-timer-wrap'),
    mazeAtencaoFill: document.getElementById('maze-atencao-fill'),
    mazeCanvas: document.getElementById('maze-canvas'),
    mazeWrap: document.querySelector('.maze-wrap'),
    campanhaAcertos: document.getElementById('campanha-acertos'),
    campanhaTempoRestante: document.getElementById('campanha-tempo-restante'),
    campanhaScore: document.getElementById('campanha-score'),
    nomeCampanha: document.getElementById('nome-campanha'),
    distractionOverlay: document.getElementById('distraction-overlay'),
    distractionTipo: document.getElementById('distraction-tipo'),
    distractionTitulo: document.getElementById('distraction-titulo'),
    cutsceneOverlay: document.getElementById('cutscene-overlay'),
    cutsceneScroll: document.getElementById('cutscene-scroll'),
    cutsceneGlitch: document.getElementById('cutscene-glitch'),
    progressoResumo: document.getElementById('campanha-progresso-resumo'),
    resumoFase: document.getElementById('resumo-fase'),
    resumoTimer: document.getElementById('resumo-timer'),
    acoesInicioPadrao: document.getElementById('acoes-inicio-padrao')
  },
  quiz: {
    numPergunta: document.getElementById('num-pergunta'),
    totalPerguntas: document.getElementById('total-perguntas'),
    scoreAtual: document.getElementById('score-atual'),
    categoria: document.getElementById('categoria-pergunta'),
    texto: document.getElementById('texto-pergunta'),
    alternativas: document.getElementById('container-alternativas'),
    feedback: document.getElementById('feedback'),
    barraProgresso: document.getElementById('barra-progresso')
  },
  resultado: {
    secao: document.getElementById('tela-resultado'),
    rank: document.getElementById('resultado-rank'),
    titulo: document.getElementById('resultado-titulo'),
    subtitulo: document.getElementById('resultado-subtitulo'),
    pontuacaoFinal: document.getElementById('pontuacao-final'),
    acertos: document.getElementById('acertos'),
    tempo: document.getElementById('tempo'),
    nomeInput: document.getElementById('nome-jogador')
  },
  listaPodium: document.getElementById('lista-podium')
};

// Utilitários
const utils = {
  trocarTela: (nomeTela) => {
    const telaDestino = elementos.telas[nomeTela];
    if (!telaDestino) {
      console.warn(`Tela "${nomeTela}" não encontrada`);
      return;
    }
    Object.values(elementos.telas).forEach(tela => {
      if (tela) tela.classList.remove('ativa');
    });
    telaDestino.classList.add('ativa');
  },

  formatarNumero: (num, digitos = 2) => num.toString().padStart(digitos, '0'),

  calcularTempo: (inicio, fim) => {
    const diff = Math.floor((fim - inicio) / 1000);
    const minutos = Math.floor(diff / 60);
    const segundos = diff % 60;
    return minutos > 0 ? `${minutos}m ${segundos}s` : `${segundos}s`;
  },

  sanitizar: (texto) => {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
  },

  embaralharArray: (array) => {
    const novo = [...array];
    for (let i = novo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [novo[i], novo[j]] = [novo[j], novo[i]];
    }
    return novo;
  },

  sortearPerguntas: (pool, quantidade) => {
    const embaralhado = utils.embaralharArray(pool);
    return embaralhado.slice(0, Math.min(quantidade, pool.length));
  },

  sortearPerguntasEstratificado: (pool, quantidade, opcoes = {}) => {
    const excluirSet = new Set(
      (opcoes.excluirIds || []).slice(0, CONFIG.maxEvitarRepeticao)
    );
    const cotas = CONFIG.cotasPorCategoria;
    const porCategoria = {};

    pool.forEach((p) => {
      if (!porCategoria[p.categoria]) porCategoria[p.categoria] = [];
      porCategoria[p.categoria].push(p);
    });

    const selecionadas = [];
    const usadosIds = new Set();

    const pick = (categoria, n, { permitirExcluidas = false } = {}) => {
      let lista = utils.embaralharArray(porCategoria[categoria] || []);
      lista = lista.filter((p) => {
        if (usadosIds.has(p.id)) return false;
        if (!permitirExcluidas && excluirSet.has(p.id)) return false;
        return true;
      });
      const take = lista.slice(0, n);
      take.forEach((p) => {
        selecionadas.push(p);
        usadosIds.add(p.id);
      });
      return take.length;
    };

    Object.entries(cotas).forEach(([categoria, quota]) => {
      pick(categoria, quota, { permitirExcluidas: false });
    });

    Object.entries(cotas).forEach(([categoria, quota]) => {
      const jaNaCategoria = selecionadas.filter((p) => p.categoria === categoria).length;
      if (jaNaCategoria < quota) {
        pick(categoria, quota - jaNaCategoria, { permitirExcluidas: true });
      }
    });

    if (selecionadas.length < quantidade) {
      const resto = utils.embaralharArray(pool.filter((p) => !usadosIds.has(p.id)));
      for (const p of resto) {
        if (selecionadas.length >= quantidade) break;
        selecionadas.push(p);
        usadosIds.add(p.id);
      }
    }

    return utils.embaralharArray(selecionadas.slice(0, quantidade));
  },

  embaralharAlternativas: (pergunta) => {
    const indices = pergunta.alternativas.map((_, i) => i);
    const ordem = utils.embaralharArray(indices);
    return {
      alternativas: ordem.map((i) => pergunta.alternativas[i]),
      correta: ordem.indexOf(pergunta.correta)
    };
  },

  atualizarContadorPerguntas: () => {
    if (campanhaEstado.modo === 'checkpoint') return;
    const total = estado.perguntasSorteadas.length || CONFIG.perguntasPorJogo;
    if (elementos.quiz.totalPerguntas) {
      elementos.quiz.totalPerguntas.textContent = utils.formatarNumero(total);
    }
  },

  sanitizarNome: (nome) => {
    const limpo = (nome || '').trim().replace(/[^a-zA-Z0-9_\-\s]/g, '').slice(0, 20);
    return limpo || 'Hacker_Anon';
  },

  getMissionRank: (acertos, total) => {
    const pct = acertos / total;
    if (pct >= 0.9) {
      return {
        rank: 'ELITE',
        titulo: 'INVASAO BEM-SUCEDIDA',
        subtitulo: 'Dominio total. Voce esta pronto para o proximo nivel.',
        classe: 'rank-elite'
      };
    }
    if (pct >= 0.7) {
      return {
        rank: 'OPERADOR',
        titulo: 'MISSAO CONCLUIDA',
        subtitulo: 'Bom desempenho. Continue invadindo o conhecimento.',
        classe: 'rank-operador'
      };
    }
    if (pct >= 0.5) {
      return {
        rank: 'INICIANTE',
        titulo: 'ACESSO PARCIAL',
        subtitulo: 'Voce ja sabe o basico. Uma nova rodada pode subir seu rank.',
        classe: 'rank-iniciante'
      };
    }
    return {
      rank: 'TRACE DETECTED',
      titulo: 'SISTEMA COMPROMETIDO',
      subtitulo: 'Revise as explicacoes e tente de novo. Todo hacker aprende no erro.',
      classe: 'rank-baixo'
    };
  },

  setBotoesQuizHabilitados: (habilitado) => {
    elementos.botoes.confirmar.disabled = !habilitado || estado.respostaSelecionada === null;
    elementos.botoes.proxima.disabled = !habilitado;
  }
};

// LocalStorage - Última partida (anti-repetição)
const partidaMemory = {
  getUltimaPartidaIds: () => {
    try {
      const dados = localStorage.getItem(CONFIG.storageKeyUltimaPartida);
      const ids = dados ? JSON.parse(dados) : [];
      return Array.isArray(ids) ? ids : [];
    } catch (e) {
      return [];
    }
  },

  salvarUltimaPartida: (ids) => {
    try {
      localStorage.setItem(CONFIG.storageKeyUltimaPartida, JSON.stringify(ids));
    } catch (e) {
      console.error('Erro ao salvar ultima partida:', e);
    }
  }
};

// LocalStorage - Pódio
const podiumManager = {
  get: () => {
    try {
      const dados = localStorage.getItem(CONFIG.storageKey);
      return dados ? JSON.parse(dados) : [];
    } catch (e) {
      return [];
    }
  },

  salvar: (nome, pontos, tempoSegundos) => {
    const lista = podiumManager.get();
    const entrada = {
      nome: utils.sanitizar(utils.sanitizarNome(nome)),
      pontos,
      data: new Date().toISOString().split('T')[0],
      tempo: tempoSegundos
    };

    lista.push(entrada);
    lista.sort((a, b) => b.pontos - a.pontos || a.tempo - b.tempo);
    
    const top10 = lista.slice(0, CONFIG.maxPodium);
    
    try {
      localStorage.setItem(CONFIG.storageKey, JSON.stringify(top10));
    } catch (e) {
      console.error('Erro ao salvar no LocalStorage:', e);
    }

    return top10;
  },

  limpar: () => {
    try {
      localStorage.removeItem(CONFIG.storageKey);
    } catch (e) {
      console.error('Erro ao limpar LocalStorage:', e);
    }
  }
};

const progressoCampanha = {
  salvar: () => {
    if (campanhaEstado.modo === null || campanhaEstado.modo === 'classico') return;

    try {
      localStorage.setItem(CAMPANHA_CONFIG.storageKey, JSON.stringify({
        versao: CAMPANHA_CONFIG.progressoVersao,
        faseAtual: campanhaEstado.faseAtual,
        fasesConcluidas: campanhaEstado.fasesConcluidas,
        acertos: campanhaEstado.acertos,
        tempoRestante: campanhaEstado.tempoRestante,
        atencao: campanhaEstado.atencao,
        salvoEm: Date.now()
      }));
    } catch (e) {
      console.error('Erro ao salvar progresso da campanha:', e);
    }
  },

  carregar: () => {
    try {
      const dados = localStorage.getItem(CAMPANHA_CONFIG.storageKey);
      if (!dados) return null;
      const parsed = JSON.parse(dados);
      const fase = Number(parsed.faseAtual);
      if (fase < 1 || fase > CAMPANHA_CONFIG.totalFases) return null;

      const fasesConcluidas = Array.isArray(parsed.fasesConcluidas)
        ? parsed.fasesConcluidas.filter((id) => id >= 1 && id <= CAMPANHA_CONFIG.totalFases)
        : [];

      return {
        faseAtual: fase,
        fasesConcluidas,
        acertos: Math.max(0, Number(parsed.acertos) || 0),
        tempoRestante: Math.max(0, Number(parsed.tempoRestante) || CAMPANHA_CONFIG.tempoInicialSegundos),
        atencao: Math.min(100, Math.max(0, Number(parsed.atencao) || CAMPANHA_CONFIG.atencaoInicial)),
        salvoEm: Number(parsed.salvoEm) || null
      };
    } catch (e) {
      return null;
    }
  },

  temProgresso: () => progressoCampanha.carregar() !== null,

  limpar: () => {
    try {
      localStorage.removeItem(CAMPANHA_CONFIG.storageKey);
    } catch (e) {
      console.error('Erro ao limpar progresso da campanha:', e);
    }
  }
};

const campanhaUI = {
  campanhaHabilitada: () =>
    typeof FEATURES === 'undefined' || FEATURES.modoCampanha,

  quizClassicoHabilitado: () =>
    typeof FEATURES === 'undefined' || FEATURES.quizClassico,

  aplicarFeatureFlags: () => {
    const modoCampanha = campanhaUI.campanhaHabilitada();
    const quizClassico = campanhaUI.quizClassicoHabilitado();

    if (elementos.botoes.jogarCampanha) {
      elementos.botoes.jogarCampanha.hidden = !modoCampanha;
    }

    document.querySelectorAll('.campanha-only').forEach((el) => {
      el.hidden = !modoCampanha;
    });

    [elementos.botoes.quizClassico, elementos.botoes.quizResumo].forEach((btn) => {
      if (!btn) return;
      btn.hidden = !quizClassico;
    });

    if (elementos.botoes.quizClassico && elementos.botoes.jogarCampanha) {
      const virarPrincipal = !modoCampanha && quizClassico;
      elementos.botoes.quizClassico.classList.toggle('btn-principal', virarPrincipal);
      elementos.botoes.quizClassico.classList.toggle('btn-secundario', !virarPrincipal);
    }

    if (!modoCampanha && elementos.campanha.progressoResumo) {
      elementos.campanha.progressoResumo.hidden = true;
    }
    if (elementos.campanha.acoesInicioPadrao) {
      elementos.campanha.acoesInicioPadrao.hidden = false;
    }
  },

  atualizarMenuProgresso: () => {
    const resumo = elementos.campanha.progressoResumo;
    const acoes = elementos.campanha.acoesInicioPadrao;

    if (!campanhaUI.campanhaHabilitada()) {
      if (resumo) resumo.hidden = true;
      if (acoes) acoes.hidden = false;
      return;
    }

    const salvo = progressoCampanha.carregar();

    if (!salvo || !resumo) {
      if (resumo) resumo.hidden = true;
      if (acoes) acoes.hidden = false;
      return;
    }

    if (elementos.campanha.resumoFase) {
      elementos.campanha.resumoFase.textContent = utils.formatarNumero(salvo.faseAtual);
    }
    if (elementos.campanha.resumoTimer) {
      elementos.campanha.resumoTimer.textContent = campanhaUtils.formatarTimer(salvo.tempoRestante);
    }

    resumo.hidden = false;
    if (acoes) acoes.hidden = true;
  }
};

const campanhaUtils = {
  formatarTimer: (segundos) => {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  },

  getFaseConfig: (id) => FASES_CAMPANHA.find((f) => f.id === id),

  getPerguntaPorId: (id) => poolPerguntas.find((p) => p.id === id),

  getTilemap: (ref) => (typeof getTilemap === 'function' ? getTilemap(ref) : BASE_TILEMAP),

  aplicarEfeitoMaze: (fase) => {
    const wrap = elementos.campanha.mazeWrap;
    if (!wrap) return;
    wrap.classList.remove('maze-glitch');
    if (fase && fase.mazeEffect === 'glitch') {
      wrap.classList.add('maze-glitch');
    }
  },

  limparEfeitoMaze: () => {
    elementos.campanha.mazeWrap?.classList.remove('maze-glitch');
  }
};

const campaignManager = {
  iniciar: async (restaurar = true) => {
    if (!campanhaUI.campanhaHabilitada()) return;

    MazeEngine.stop();
    MazeDpad.unbind();
    campaignManager.pararTimer();

    const salvo = restaurar ? progressoCampanha.carregar() : null;
    if (salvo) {
      campanhaEstado.faseAtual = salvo.faseAtual;
      campanhaEstado.fasesConcluidas = salvo.fasesConcluidas;
      campanhaEstado.acertos = salvo.acertos;
      campanhaEstado.tempoRestante = salvo.tempoRestante;
      campanhaEstado.atencao = salvo.atencao;
    } else {
      progressoCampanha.limpar();
      campanhaEstado.faseAtual = 1;
      campanhaEstado.fasesConcluidas = [];
      campanhaEstado.acertos = 0;
      campanhaEstado.tempoRestante = CAMPANHA_CONFIG.tempoInicialSegundos;
      campanhaEstado.atencao = CAMPANHA_CONFIG.atencaoInicial;
    }

    campanhaEstado.modo = 'campanha';
    campanhaEstado.voltarParaMaze = false;
    campanhaEstado.distractionIndex = 0;
    campanhaEstado.timerPausado = false;
    estado.modoJogo = 'campanha';

    campaignManager.iniciarTimer();
    campaignManager.entrarFase(campanhaEstado.faseAtual);
    progressoCampanha.salvar();
    console.info('campanha_iniciada', { fase: campanhaEstado.faseAtual, restaurar });
  },

  iniciarTimer: () => {
    campaignManager.pararTimer();
    campanhaEstado.timerPausado = false;
    campanhaEstado.timerInterval = setInterval(() => {
      campaignManager.tickTimer();
    }, 1000);
  },

  pararTimer: () => {
    if (campanhaEstado.timerInterval) {
      clearInterval(campanhaEstado.timerInterval);
      campanhaEstado.timerInterval = null;
    }
    campanhaEstado.timerPausado = true;
  },

  retomarTimer: () => {
    if (campanhaEstado.modo === null || campanhaEstado.modo === 'classico') return;
    if (campanhaEstado.timerInterval) return;
    campanhaEstado.timerPausado = false;
    campanhaEstado.timerInterval = setInterval(() => {
      campaignManager.tickTimer();
    }, 1000);
  },

  tickTimer: () => {
    if (campanhaEstado.modo === null || campanhaEstado.modo === 'classico') return;

    let decremento = 1;
    if (campanhaEstado.atencao < CAMPANHA_CONFIG.atencaoMinimaAceleracao) {
      decremento = 2;
    }
    campanhaEstado.tempoRestante = Math.max(0, campanhaEstado.tempoRestante - decremento);
    campaignManager.atualizarHud();

    if (campanhaEstado.tempoRestante <= CAMPANHA_CONFIG.traceAlertaSegundos) {
      if (elementos.campanha.mazeTimerWrap) {
        elementos.campanha.mazeTimerWrap.classList.add('timer-alerta');
      }
    }

    if (campanhaEstado.tempoRestante <= 0) {
      campaignManager.gameOverTrace();
    }

    progressoCampanha.salvar();
  },

  atualizarHud: () => {
    const timerTexto = campanhaUtils.formatarTimer(campanhaEstado.tempoRestante);
    const faseTexto = utils.formatarNumero(campanhaEstado.faseAtual);

    if (elementos.campanha.briefingFaseNum) {
      elementos.campanha.briefingFaseNum.textContent = faseTexto;
    }
    if (elementos.campanha.briefingTimer) {
      elementos.campanha.briefingTimer.textContent = timerTexto;
    }
    if (elementos.campanha.mazeFaseNum) {
      elementos.campanha.mazeFaseNum.textContent = faseTexto;
    }
    if (elementos.campanha.mazeTimer) {
      elementos.campanha.mazeTimer.textContent = timerTexto;
    }

    [elementos.campanha.briefingAtencaoFill, elementos.campanha.mazeAtencaoFill].forEach((el) => {
      if (!el) return;
      el.style.width = `${campanhaEstado.atencao}%`;
      el.classList.toggle('baixa', campanhaEstado.atencao < CAMPANHA_CONFIG.atencaoMinimaAceleracao);
    });
  },

  entrarFase: (id) => {
    const fase = campanhaUtils.getFaseConfig(id);
    if (!fase) return;

    campanhaEstado.modo = 'campanha';
    campanhaEstado.faseAtual = id;
    campanhaEstado.distractionIndex = 0;
    campaignManager.atualizarHud();

    if (elementos.campanha.briefingTitulo) {
      elementos.campanha.briefingTitulo.textContent = fase.titulo;
    }
    if (elementos.campanha.briefingNarrativa) {
      elementos.campanha.briefingNarrativa.textContent = fase.narrativa;
    }

    utils.trocarTela('briefing');
    progressoCampanha.salvar();
  },

  briefingContinuar: () => {
    const fase = campanhaUtils.getFaseConfig(campanhaEstado.faseAtual);
    if (!fase) return;

    if (fase.jogavel) {
      campaignManager.iniciarLabirinto(fase);
      return;
    }

    if (fase.cutscene) {
      campaignManager.mostrarCutscene(fase.cutscene, () => {
        campaignManager.abrirCheckpoint(fase.perguntaId, false);
      });
      return;
    }

    campaignManager.abrirCheckpoint(fase.perguntaId, false);
  },

  buildMazeOptions: (fase, preserveTriggers = false) => ({
    canvas: elementos.campanha.mazeCanvas,
    tilemap: campanhaUtils.getTilemap(fase.tilemapRef || 'base'),
    preserveTriggers,
    onExit: () => campaignManager.onMazeExit(fase),
    onDistraction: (pos) => campaignManager.onMazeDistraction(fase, pos)
  }),

  bindMazeControls: () => {
    MazeDpad.bind((dx, dy) => MazeEngine.move(dx, dy));
  },

  iniciarLabirinto: (fase) => {
    campanhaEstado.modo = 'campanha';
    campanhaEstado.voltarParaMaze = true;
    campanhaUtils.aplicarEfeitoMaze(fase);
    utils.trocarTela('maze');

    const spawnInfo = MazeEngine.start(campaignManager.buildMazeOptions(fase));

    campanhaEstado.faseSpawn = { x: spawnInfo.spawnX, y: spawnInfo.spawnY };
    campaignManager.bindMazeControls();
    campaignManager.atualizarHud();
    progressoCampanha.salvar();
  },

  retomarLabirinto: (fase) => {
    campanhaEstado.modo = 'campanha';
    campanhaEstado.voltarParaMaze = true;
    campanhaUtils.aplicarEfeitoMaze(fase);
    utils.trocarTela('maze');

    if (!MazeEngine.resumeAtSpawn()) {
      const spawnInfo = MazeEngine.start(
        campaignManager.buildMazeOptions(fase, true)
      );
      campanhaEstado.faseSpawn = { x: spawnInfo.spawnX, y: spawnInfo.spawnY };
    }

    campaignManager.bindMazeControls();
    campaignManager.atualizarHud();
    progressoCampanha.salvar();
  },

  onMazeExit: (fase) => {
    MazeEngine.stop();
    MazeDpad.unbind();
    campanhaUtils.limparEfeitoMaze();
    campaignManager.abrirCheckpoint(fase.perguntaId, true);
  },

  onMazeDistraction: (fase, pos) => {
    const lista = fase.distractions || [];
    let config = lista.find(
      (d) => d.triggerTile && d.triggerTile.x === pos.x && d.triggerTile.y === pos.y
    );
    if (!config && campanhaEstado.distractionIndex < lista.length) {
      config = lista[campanhaEstado.distractionIndex];
      campanhaEstado.distractionIndex += 1;
    }
    if (config) campaignManager.mostrarDistraction(config);
  },

  mostrarDistraction: (config) => {
    MazeEngine.stop();
    MazeDpad.unbind();
    const tipoLabel = config.tipo === 'notification' ? 'NOTIFICAÇÃO' : 'POP-UP';
    if (elementos.campanha.distractionTipo) {
      elementos.campanha.distractionTipo.textContent = tipoLabel;
    }
    if (elementos.campanha.distractionTitulo) {
      elementos.campanha.distractionTitulo.textContent = config.titulo;
    }
    if (elementos.campanha.distractionOverlay) {
      elementos.campanha.distractionOverlay.hidden = false;
      elementos.campanha.distractionOverlay.setAttribute('aria-hidden', 'false');
    }

    campanhaEstado.atencao = Math.max(
      0,
      campanhaEstado.atencao - (config.atencaoDelta || 10)
    );
    campaignManager.atualizarHud();
    progressoCampanha.salvar();
  },

  fecharDistraction: () => {
    if (elementos.campanha.distractionOverlay) {
      elementos.campanha.distractionOverlay.hidden = true;
      elementos.campanha.distractionOverlay.setAttribute('aria-hidden', 'true');
    }

    campanhaEstado.atencao = Math.min(100, campanhaEstado.atencao + 5);
    campaignManager.atualizarHud();

    const fase = campanhaUtils.getFaseConfig(campanhaEstado.faseAtual);
    if (fase && fase.jogavel) {
      campaignManager.retomarLabirinto(fase);
    }
  },

  mostrarCutscene: (tipo, callback) => {
    const overlay = elementos.campanha.cutsceneOverlay;
    const scroll = elementos.campanha.cutsceneScroll;
    const glitch = elementos.campanha.cutsceneGlitch;
    if (!overlay) {
      callback();
      return;
    }

    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    if (scroll) scroll.hidden = tipo !== 'scroll';
    if (glitch) glitch.hidden = tipo !== 'glitch';

    setTimeout(() => {
      overlay.hidden = true;
      overlay.setAttribute('aria-hidden', 'true');
      if (scroll) scroll.hidden = true;
      if (glitch) glitch.hidden = true;
      callback();
    }, prefersReducedMotion() ? 500 : 3000);
  },

  abrirCheckpoint: async (perguntaId, veioDoMaze) => {
    const pergunta = campanhaUtils.getPerguntaPorId(perguntaId);
    if (!pergunta) return;

    campanhaEstado.modo = 'checkpoint';
    campanhaEstado.voltarParaMaze = Boolean(veioDoMaze);
    estado.modoJogo = 'campanha';
    estado.perguntasSorteadas = [pergunta];
    estado.perguntaAtual = 0;
    estado.respostas = [];
    estado.respostaSelecionada = null;
    estado.processando = false;

    elementos.botoes.confirmar.classList.remove('oculto');
    elementos.botoes.proxima.classList.add('oculto');
    elementos.quiz.feedback.classList.remove('visivel', 'acerto', 'erro');

    utils.trocarTela('quiz');
    progressoCampanha.salvar();
    await quizManager.renderizarPergunta(true);
  },

  handleCheckpointProxima: () => {
    const ultima = estado.respostas[estado.respostas.length - 1];
    if (!ultima) return;
    campaignManager.confirmarCheckpoint(ultima.acertou);
  },

  confirmarCheckpoint: (acertou) => {
    if (acertou) {
      campanhaEstado.acertos += 1;
      if (!campanhaEstado.fasesConcluidas.includes(campanhaEstado.faseAtual)) {
        campanhaEstado.fasesConcluidas.push(campanhaEstado.faseAtual);
      }
      console.info('fase_concluida', { fase: campanhaEstado.faseAtual });

      if (campanhaEstado.faseAtual >= CAMPANHA_CONFIG.totalFases) {
        campaignManager.finalizarCampanha();
        return;
      }

      campanhaEstado.faseAtual += 1;
      progressoCampanha.salvar();
      resetarEstadoQuiz();
      campaignManager.entrarFase(campanhaEstado.faseAtual);
      return;
    }

    console.info('checkpoint_erro', { fase: campanhaEstado.faseAtual });
    campaignManager.aplicarPenalidadeErro();
  },

  aplicarPenalidadeErro: () => {
    campanhaEstado.tempoRestante = Math.max(
      0,
      campanhaEstado.tempoRestante - CAMPANHA_CONFIG.penalidadeErroSegundos
    );
    campaignManager.atualizarHud();
    progressoCampanha.salvar();

    if (campanhaEstado.tempoRestante <= 0) {
      campaignManager.gameOverTrace();
      return;
    }

    const fase = campanhaUtils.getFaseConfig(campanhaEstado.faseAtual);
    resetarEstadoQuiz();

    if (campanhaEstado.voltarParaMaze && fase && fase.jogavel) {
      campaignManager.retomarLabirinto(fase);
      return;
    }

    if (fase) {
      campaignManager.abrirCheckpoint(fase.perguntaId, campanhaEstado.voltarParaMaze);
    }
  },

  finalizarCampanha: () => {
    campaignManager.pararTimer();
    MazeEngine.stop();
    MazeDpad.unbind();
    campanhaUtils.limparEfeitoMaze();
    progressoCampanha.limpar();

    campanhaEstado.scoreFinal =
      campanhaEstado.acertos * CONFIG.pontosPorAcerto + campanhaEstado.tempoRestante;
    campanhaEstado.modo = null;
    estado.modoJogo = null;

    if (elementos.campanha.campanhaAcertos) {
      elementos.campanha.campanhaAcertos.textContent =
        `${campanhaEstado.acertos}/${CAMPANHA_CONFIG.totalFases}`;
    }
    if (elementos.campanha.campanhaTempoRestante) {
      elementos.campanha.campanhaTempoRestante.textContent =
        campanhaUtils.formatarTimer(campanhaEstado.tempoRestante);
    }
    if (elementos.campanha.campanhaScore) {
      elementos.campanha.campanhaScore.textContent = String(campanhaEstado.scoreFinal);
    }
    if (elementos.campanha.nomeCampanha) {
      elementos.campanha.nomeCampanha.value = '';
    }

    resetarEstadoQuiz();
    utils.trocarTela('finalCampanha');
    campanhaUI.atualizarMenuProgresso();
    sfxManager.playComplete();
  },

  gameOverTrace: () => {
    console.info('timer_esgotado');
    campaignManager.pararTimer();
    MazeEngine.stop();
    MazeDpad.unbind();
    campanhaUtils.limparEfeitoMaze();
    progressoCampanha.limpar();
    campanhaEstado.modo = null;
    estado.modoJogo = null;
    resetarEstadoQuiz();
    utils.trocarTela('traceGameover');
    campanhaUI.atualizarMenuProgresso();
    sfxManager.playErro();
  },

  desistir: () => {
    campaignManager.pararTimer();
    MazeEngine.stop();
    MazeDpad.unbind();
    campanhaUtils.limparEfeitoMaze();
    progressoCampanha.salvar();
    campanhaEstado.modo = null;
    estado.modoJogo = null;
    resetarEstadoQuiz();
    utils.trocarTela('inicial');
    campanhaUI.atualizarMenuProgresso();
  },

  reiniciar: async () => {
    await campaignManager.iniciar(false);
  },

  voltarMenu: () => {
    campaignManager.desistir();
  },

  salvarPodium: () => {
    const nome = utils.sanitizarNome(elementos.campanha.nomeCampanha.value);
    const tempoUsado = CAMPANHA_CONFIG.tempoInicialSegundos - campanhaEstado.tempoRestante;
    podiumManager.salvar(nome, campanhaEstado.scoreFinal, tempoUsado);
    podiumRenderer.mostrar();
  }
};

const resetarEstadoQuiz = () => {
  estado.perguntasSorteadas = [];
  estado.perguntaAtual = 0;
  estado.pontuacao = 0;
  estado.respostas = [];
  estado.acertos = 0;
  estado.respostaSelecionada = null;
  estado.alternativasExibidas = [];
  estado.corretaExibida = null;
  estado.tempoInicio = null;
  estado.tempoFim = null;
  estado.processando = false;

  elementos.quiz.alternativas.innerHTML = '';
  elementos.quiz.feedback.classList.remove('visivel', 'acerto', 'erro');
  elementos.quiz.feedback.innerHTML = '';
  elementos.quiz.texto.textContent = '';
  elementos.quiz.scoreAtual.textContent = utils.formatarNumero(0, 4);
  if (elementos.quiz.barraProgresso) {
    elementos.quiz.barraProgresso.style.width = '0%';
  }

  elementos.botoes.confirmar.classList.remove('oculto');
  elementos.botoes.confirmar.disabled = true;
  elementos.botoes.proxima.classList.add('oculto');
  elementos.botoes.proxima.disabled = false;
  if (elementos.botoes.desistir) {
    elementos.botoes.desistir.disabled = false;
  }
};

// Lógica do Quiz
const quizManager = {
  iniciar: async () => {
    if (!campanhaUI.quizClassicoHabilitado()) return;

    campaignManager.pararTimer();
    MazeEngine.stop();
    campanhaEstado.modo = 'classico';
    estado.modoJogo = 'classico';

    const excluirIds = partidaMemory.getUltimaPartidaIds();
    estado.perguntasSorteadas = utils.sortearPerguntasEstratificado(
      poolPerguntas,
      CONFIG.perguntasPorJogo,
      { excluirIds }
    );
    estado.perguntaAtual = 0;
    estado.pontuacao = 0;
    estado.respostas = [];
    estado.acertos = 0;
    estado.tempoInicio = Date.now();
    estado.respostaSelecionada = null;
    estado.processando = false;

    elementos.botoes.confirmar.classList.remove('oculto');
    elementos.botoes.proxima.classList.add('oculto');
    elementos.quiz.feedback.classList.remove('visivel', 'acerto', 'erro');
    if (elementos.botoes.desistir) {
      elementos.botoes.desistir.disabled = false;
    }

    utils.trocarTela('quiz');
    utils.atualizarContadorPerguntas();
    await quizManager.renderizarPergunta(true);
  },

  renderizarPergunta: async (comTyping = false) => {
    const pergunta = estado.perguntasSorteadas[estado.perguntaAtual];
    const letras = ['A', 'B', 'C', 'D'];
    const embaralhado = utils.embaralharAlternativas(pergunta);

    estado.alternativasExibidas = embaralhado.alternativas;
    estado.corretaExibida = embaralhado.correta;

    if (campanhaEstado.modo === 'checkpoint') {
      elementos.quiz.numPergunta.textContent = utils.formatarNumero(campanhaEstado.faseAtual);
      if (elementos.quiz.totalPerguntas) {
        elementos.quiz.totalPerguntas.textContent = utils.formatarNumero(CAMPANHA_CONFIG.totalFases);
      }
    } else {
      elementos.quiz.numPergunta.textContent = utils.formatarNumero(estado.perguntaAtual + 1);
    }
    elementos.quiz.scoreAtual.textContent = utils.formatarNumero(estado.pontuacao, 4);
    utils.atualizarContadorPerguntas();

    if (campanhaEstado.modo !== 'checkpoint') {
      progressBar.atualizar(estado.perguntaAtual, estado.perguntasSorteadas.length);
    } else if (elementos.quiz.barraProgresso) {
      const pct = (campanhaEstado.faseAtual / CAMPANHA_CONFIG.totalFases) * 100;
      elementos.quiz.barraProgresso.style.width = `${pct}%`;
    }

    elementos.quiz.categoria.textContent = pergunta.categoria.toUpperCase();
    elementos.quiz.texto.textContent = comTyping ? '' : pergunta.pergunta;

    elementos.quiz.alternativas.innerHTML = '';
    estado.alternativasExibidas.forEach((alt, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'alternativa';
      btn.dataset.index = String(index);
      btn.innerHTML = `
        <span class="letra">${letras[index]}</span>
        <span class="texto">${utils.sanitizar(alt)}</span>
      `;
      btn.addEventListener('click', () => quizManager.selecionarAlternativa(index));
      elementos.quiz.alternativas.appendChild(btn);
    });

    estado.respostaSelecionada = null;
    utils.setBotoesQuizHabilitados(true);
    elementos.quiz.feedback.classList.remove('visivel');

    elementos.botoes.confirmar.classList.remove('oculto');
    elementos.botoes.proxima.classList.add('oculto');

    const cardPergunta = document.querySelector('.card-pergunta');
    if (cardPergunta && !prefersReducedMotion()) {
      cardPergunta.classList.remove('pergunta-entrando');
      void cardPergunta.offsetWidth;
      cardPergunta.classList.add('pergunta-entrando');
    }

    if (comTyping) {
      const typingSpeed = prefersReducedMotion() ? 0 : 10;
      await typingEffect.apply(elementos.quiz.texto, pergunta.pergunta, typingSpeed);
    }
  },

  selecionarAlternativa: (index) => {
    if (estado.processando) return;

    estado.respostaSelecionada = index;
    elementos.botoes.confirmar.disabled = false;
    sfxManager.playSelect();

    document.querySelectorAll('.alternativa').forEach((el, i) => {
      el.classList.toggle('selecionada', i === index);
    });
  },

  confirmarResposta: async () => {
    if (estado.processando || estado.respostaSelecionada === null) return;

    estado.processando = true;
    utils.setBotoesQuizHabilitados(false);
    document.querySelectorAll('.alternativa').forEach((el) => {
      el.disabled = true;
    });

    const pergunta = estado.perguntasSorteadas[estado.perguntaAtual];
    const acertou = estado.respostaSelecionada === estado.corretaExibida;
    const pontosAntes = estado.pontuacao;

    // Atualiza pontuação
    if (acertou) {
      estado.pontuacao += CONFIG.pontosPorAcerto;
      estado.acertos++;
    }

    estado.respostas.push({
      perguntaId: pergunta.id,
      resposta: estado.respostaSelecionada,
      acertou
    });

    // Flash de tela e SFX no acerto/erro
    screenFlash.trigger(acertou ? 'acerto' : 'erro');
    if (acertou) {
      sfxManager.playAcerto();
    } else {
      sfxManager.playErro();
    }

    // Feedback visual
    const alternativas = document.querySelectorAll('.alternativa');
    alternativas.forEach((el, i) => {
      el.classList.add('desabilitada');
      if (i === estado.corretaExibida) {
        el.classList.add('correta');
      } else if (i === estado.respostaSelecionada && !acertou) {
        el.classList.add('errada');
      }
    });

    // Mensagem de feedback
    elementos.quiz.feedback.innerHTML = `
      <strong>${acertou ? '✓ ACERTO!' : '✗ ERRO!'}</strong><br>
      ${utils.sanitizar(pergunta.explicacao)}
    `;
    elementos.quiz.feedback.className = `feedback visivel ${acertou ? 'acerto' : 'erro'}`;
    
    // Animação do score subindo (apenas no acerto)
    if (acertou) {
      await scoreAnimator.animate(elementos.quiz.scoreAtual, pontosAntes, estado.pontuacao, 600);
    } else {
      elementos.quiz.scoreAtual.textContent = utils.formatarNumero(estado.pontuacao, 4);
    }

    elementos.botoes.confirmar.classList.add('oculto');
    elementos.botoes.proxima.classList.remove('oculto');
    elementos.botoes.proxima.disabled = false;
    estado.processando = false;
  },

  proximaPergunta: async () => {
    if (estado.processando) return;

    if (campanhaEstado.modo === 'checkpoint') {
      estado.processando = true;
      elementos.botoes.proxima.disabled = true;
      campaignManager.handleCheckpointProxima();
      estado.processando = false;
      return;
    }

    estado.processando = true;
    elementos.botoes.proxima.disabled = true;

    const proximoIndice = estado.perguntaAtual + 1;
    const proximaPergunta = estado.perguntasSorteadas[proximoIndice];

    if (proximaPergunta) {
      await terminalTransition.play({
        proxima: proximoIndice + 1,
        total: estado.perguntasSorteadas.length,
        categoria: proximaPergunta.categoria
      });
    }

    estado.perguntaAtual++;

    if (estado.perguntaAtual >= estado.perguntasSorteadas.length) {
      await quizManager.finalizar();
      estado.processando = false;
    } else {
      elementos.quiz.feedback.classList.remove('visivel');
      await quizManager.renderizarPergunta(true);
      estado.processando = false;
    }
  },

  desistir: async () => {
    if (estado.processando) return;

    if (campanhaEstado.modo === 'checkpoint') {
      campaignManager.desistir();
      audioManager.parar();
      return;
    }

    typingEffect.cancelled = true;
    estado.processando = true;

    if (elementos.botoes.desistir) elementos.botoes.desistir.disabled = true;
    elementos.botoes.confirmar.disabled = true;
    elementos.botoes.proxima.disabled = true;
    document.querySelectorAll('.alternativa').forEach((el) => {
      el.disabled = true;
    });

    const perguntaAtual = estado.perguntaAtual + 1;
    const total = estado.perguntasSorteadas.length || CONFIG.perguntasPorJogo;

    await terminalTransition.playAbort({ perguntaAtual, total });

    sfxManager.playAbort();
    audioManager.parar();
    resetarEstadoQuiz();
    utils.trocarTela('inicial');
  },

  finalizar: async () => {
    estado.tempoFim = Date.now();
    const total = estado.perguntasSorteadas.length;
    const rank = utils.getMissionRank(estado.acertos, total);

    await terminalTransition.playComplete({
      acertos: estado.acertos,
      total,
      pontos: estado.pontuacao
    });

    sfxManager.playComplete();

    if (elementos.resultado.rank) {
      elementos.resultado.rank.textContent = rank.rank;
    }
    if (elementos.resultado.titulo) {
      elementos.resultado.titulo.textContent = rank.titulo;
    }
    if (elementos.resultado.subtitulo) {
      elementos.resultado.subtitulo.textContent = rank.subtitulo;
    }

    elementos.resultado.acertos.textContent = `${estado.acertos}/${total}`;
    elementos.resultado.tempo.textContent = utils.calcularTempo(estado.tempoInicio, estado.tempoFim);
    elementos.resultado.nomeInput.value = '';
    elementos.resultado.pontuacaoFinal.textContent = '0';

    utils.trocarTela('resultado');

    if (elementos.resultado.secao) {
      elementos.resultado.secao.classList.remove('rank-elite', 'rank-operador', 'rank-iniciante', 'rank-baixo');
      elementos.resultado.secao.classList.add(rank.classe, 'resultado-revelando');
    }

    if (!prefersReducedMotion()) {
      await scoreAnimator.animate(elementos.resultado.pontuacaoFinal, 0, estado.pontuacao, 900);
    } else {
      elementos.resultado.pontuacaoFinal.textContent = estado.pontuacao;
    }

    if (elementos.resultado.secao) {
      elementos.resultado.secao.classList.remove('resultado-revelando');
    }

    partidaMemory.salvarUltimaPartida(estado.perguntasSorteadas.map((p) => p.id));
  }
};

// Renderização do Pódio
const podiumRenderer = {
  mostrar: () => {
    const lista = podiumManager.get();
    elementos.listaPodium.innerHTML = '';

    if (lista.length === 0) {
      elementos.listaPodium.innerHTML = `
        <div class="podium-vazio">
          <p>> NENHUMA ENTRADA NO PÓDIO</p>
          <p style="margin-top: 10px; font-size: 0.9rem;">Seja o primeiro a invadir!</p>
        </div>
      `;
    } else {
      lista.forEach((entrada, index) => {
        const rankClass = index === 0 ? 'ouro' : index === 1 ? 'prata' : index === 2 ? 'bronze' : 'normal';
        const div = document.createElement('div');
        div.className = 'podium-item';
        div.innerHTML = `
          <div class="podium-rank ${rankClass}">${index + 1}°</div>
          <div class="podium-info">
            <div class="podium-nome">${entrada.nome}</div>
            <div class="podium-data">${entrada.data}</div>
          </div>
          <div class="podium-score">
            ${entrada.pontos}
            <small>${Math.floor(entrada.tempo / 60)}m ${entrada.tempo % 60}s</small>
          </div>
        `;
        elementos.listaPodium.appendChild(div);
      });
    }

    utils.trocarTela('podium');
  }
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa áudio (carrega estado mute)
  audioManager.init();

  // Tela inicial
  if (elementos.botoes.jogarCampanha) {
    elementos.botoes.jogarCampanha.addEventListener('click', async () => {
      try {
        await campaignManager.iniciar(false);
        await audioManager.iniciar();
      } catch (e) {
        console.error('Erro ao iniciar campanha:', e);
      }
    });
  }

  if (elementos.botoes.continuarCampanha) {
    elementos.botoes.continuarCampanha.addEventListener('click', async () => {
      try {
        await campaignManager.iniciar(true);
        await audioManager.iniciar();
      } catch (e) {
        console.error('Erro ao continuar campanha:', e);
      }
    });
  }

  if (elementos.botoes.novaCampanha) {
    elementos.botoes.novaCampanha.addEventListener('click', async () => {
      try {
        await campaignManager.iniciar(false);
        await audioManager.iniciar();
      } catch (e) {
        console.error('Erro ao iniciar nova campanha:', e);
      }
    });
  }

  const iniciarQuizClassico = async () => {
    try {
      await quizManager.iniciar();
      await audioManager.iniciar();
    } catch (e) {
      console.error('Erro ao iniciar quiz ou áudio:', e);
    }
  };

  if (elementos.botoes.quizClassico) {
    elementos.botoes.quizClassico.addEventListener('click', iniciarQuizClassico);
  }

  if (elementos.botoes.quizResumo) {
    elementos.botoes.quizResumo.addEventListener('click', iniciarQuizClassico);
  }

  elementos.botoes.verPodium.addEventListener('click', podiumRenderer.mostrar);

  if (elementos.botoes.podiumResumo) {
    elementos.botoes.podiumResumo.addEventListener('click', podiumRenderer.mostrar);
  }

  campanhaUI.aplicarFeatureFlags();
  campanhaUI.atualizarMenuProgresso();

  if (elementos.botoes.briefingContinuar) {
    elementos.botoes.briefingContinuar.addEventListener('click', () => {
      campaignManager.briefingContinuar();
    });
  }

  if (elementos.botoes.briefingDesistir) {
    elementos.botoes.briefingDesistir.addEventListener('click', () => {
      campaignManager.desistir();
      audioManager.parar();
    });
  }

  if (elementos.botoes.mazeDesistir) {
    elementos.botoes.mazeDesistir.addEventListener('click', () => {
      campaignManager.desistir();
      audioManager.parar();
    });
  }

  if (elementos.botoes.fecharDistraction) {
    elementos.botoes.fecharDistraction.addEventListener('click', () => {
      campaignManager.fecharDistraction();
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (campanhaEstado.modo && campanhaEstado.modo !== 'classico') {
        progressoCampanha.salvar();
        campaignManager.pararTimer();
      }
      return;
    }
    campaignManager.retomarTimer();
  });

  window.addEventListener('beforeunload', () => {
    if (campanhaEstado.modo && campanhaEstado.modo !== 'classico') {
      progressoCampanha.salvar();
    }
  });

  if (elementos.botoes.traceReiniciar) {
    elementos.botoes.traceReiniciar.addEventListener('click', async () => {
      await campaignManager.reiniciar();
      await audioManager.iniciar();
    });
  }

  if (elementos.botoes.traceMenu) {
    elementos.botoes.traceMenu.addEventListener('click', () => {
      progressoCampanha.limpar();
      campaignManager.voltarMenu();
      audioManager.parar();
    });
  }

  if (elementos.botoes.salvarCampanha) {
    elementos.botoes.salvarCampanha.addEventListener('click', () => {
      campaignManager.salvarPodium();
    });
  }

  if (elementos.botoes.campanhaMenu) {
    elementos.botoes.campanhaMenu.addEventListener('click', () => {
      campaignManager.voltarMenu();
      audioManager.parar();
    });
  }

  if (elementos.campanha.nomeCampanha) {
    elementos.campanha.nomeCampanha.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') elementos.botoes.salvarCampanha.click();
    });
  }

  // Botão de mute - usa arrow function para preservar contexto
  if (elementos.botoes.mute) {
    elementos.botoes.mute.addEventListener('click', () => {
      try {
        audioManager.toggleMute();
      } catch (e) {
        console.error('Erro ao alternar mute:', e);
      }
    });
  }

  // Quiz
  elementos.botoes.confirmar.addEventListener('click', quizManager.confirmarResposta);
  elementos.botoes.proxima.addEventListener('click', quizManager.proximaPergunta);
  if (elementos.botoes.desistir) {
    elementos.botoes.desistir.addEventListener('click', () => quizManager.desistir());
  }

  // Resultado
  elementos.botoes.salvar.addEventListener('click', () => {
    if (!estado.tempoFim || !estado.tempoInicio) return;
    const nome = utils.sanitizarNome(elementos.resultado.nomeInput.value);
    const tempoTotal = Math.floor((estado.tempoFim - estado.tempoInicio) / 1000);
    podiumManager.salvar(nome, estado.pontuacao, tempoTotal);
    podiumRenderer.mostrar();
  });

  elementos.botoes.jogarNovamente.addEventListener('click', () => {
    audioManager.parar();
    utils.trocarTela('inicial');
    campanhaUI.atualizarMenuProgresso();
  });

  elementos.botoes.voltar.addEventListener('click', () => {
    audioManager.parar();
    utils.trocarTela('inicial');
    campanhaUI.atualizarMenuProgresso();
  });

  // Enter no input de nome
  elementos.resultado.nomeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      elementos.botoes.salvar.click();
    }
  });
});

// Easter egg: Konami code
let konamiIndex = 0;
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      alert('🎮 MODO HACKER ATIVADO! 🎮\n\nVocê desbloqueou o segredo!');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// Console easter egg
console.log('%c CYBER MAZE ', 'background: #7b2fff; color: #0a0a0a; font-size: 24px; font-weight: bold;');
console.log('%c> Escape da Internet + Quiz Clássico', 'color: #00ff41; font-size: 14px;');
console.log('%c> Digite help() para comandos disponíveis', 'color: #008f11; font-size: 12px;');

window.help = () => {
  console.log('%cComandos disponíveis:', 'color: #00ff41;');
  console.log('  podium.limpar() - Limpa o pódio');
  console.log('  podium.get() - Mostra o pódio atual');
  console.log('  campanha.limpar() - Limpa progresso da campanha');
  console.log('  estado - Mostra o estado atual do jogo');
  console.log('  poolPerguntas - Lista todas as 30 perguntas disponíveis');
  return 'Cyber Maze v1.2';
};

window.campanha = {
  limpar: progressoCampanha.limpar,
  get: progressoCampanha.carregar
};

window.podium = {
  limpar: podiumManager.limpar,
  get: podiumManager.get
};

window.estado = estado;
window.poolPerguntas = poolPerguntas;
