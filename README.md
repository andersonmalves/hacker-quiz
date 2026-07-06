# Cyber Maze v2 - Escape da Internet

Um jogo educativo em labirinto com quiz sobre a profissão de Engenheiro de Software. O jogador coleta fragmentos de conhecimento, evita distrações digitais e desbloqueia fases ao acertar perguntas.

![Tema](https://img.shields.io/badge/tema-hacker-darkgreen)
![Tecnologias](https://img.shields.io/badge/html-css-js-black)
![Deploy](https://img.shields.io/badge/deploy-vercel-black)

## Sobre o Quiz

Este quiz tem **30 perguntas** sobre a carreira de Engenharia de Software, cobrindo:

- **Dia a dia**: O que engenheiros realmente fazem no trabalho
- **Níveis de carreira**: Junior, Pleno, Senior e além
- **Formação**: Faculdade, bootcamps, cursos online
- **Onde trabalhar**: Empresas de tecnologia, bancos, startups, remoto
- **Remuneração**: Salários no Brasil e no exterior
- **Tecnologias**: Frontend, backend, full stack, stacks populares

A cada partida, **10 perguntas são sorteadas** do pool de 30 com **equilíbrio por categoria** e **menos repetição** em relação à rodada anterior (até 8 perguntas da última partida são evitadas quando possível).

## Como Jogar a Campanha v2

1. Clique em "JOGAR".
2. Use setas/WASD, swipe ou D-pad para explorar o labirinto.
3. Colete os fragmentos azuis de cada fase para liberar o portal roxo.
4. Evite riscos vermelhos e distrações, pois eles reduzem atenção e tempo.
5. Ao chegar ao portal, responda corretamente ao quiz para desbloquear a próxima fase.
6. Complete as 10 fases e salve sua pontuação no pódio local.

O modo "Quiz Clássico" continua disponível para uma experiência direta sem labirinto.

### Sobre a trilha sonora

O jogo usa uma **faixa synthwave em loop** pensada para ambiente cyber/laboratório, adequada a trabalho escolar:

- **Faixa:** *BlueBeat 01 [loop]* por ERH (OpenGameArt, licença **CC-BY 3.0**)
- **Créditos completos:** ver [`CREDITS.md`](CREDITS.md)
- Inicia ao clicar em "Iniciar campanha" (navegadores bloqueiam autoplay sem gesto do usuário)
- Volume reduz automaticamente durante o quiz para facilitar a leitura das perguntas
- Botão **Som: ON/OFF** no HUD; preferência persistida em `localStorage`
- Efeitos de acerto/erro são bleeps discretos gerados via Web Audio API

**Texto sugerido para apresentação escolar:**

> Trilha sonora: *BlueBeat 01 [loop]* por ERH, disponibilizada sob licença Creative Commons BY em OpenGameArt.org.

### Sobre a Trilha Sonora Dark (legado — Quiz Clássico em `app.js`)

O quiz possui uma **atmosfera sonora dark e sinistra** estilo "sistema invadido", gerada em tempo real com Tone.js. São **5 camadas de áudio** criando tensão:

1. **Drone** (DuoSynth) - Som grave constante tipo submarino/sistema operando
2. **Batidas** (MembraneSynth) - Coração/máquina batendo de forma irregular
3. **Alertas** (FMSynth) - Beeps tipo sirene de emergência/sistema alerta
4. **Sombras** (AMSynth) - Notas longas e tensas em tons menores alterados
5. **Glitches** (NoiseSynth) - Ruídos de corrupção digital com variações

Características:
- **85 BPM** - ritmo lento, pesado, cheio de suspense
- **Escala C# menor harmônica alterada** - tons orientais/exóticos e tensos
- Efeitos: reverb escuro (6s decay), delay sutil, distorção leve, filtro lowpass
- Inicia ao clicar "INICIAR INVASAO" (browsers bloqueiam autoplay)
- Botão 🔊/🔇 no canto superior direito
- Preferência de mute persistida no LocalStorage

## Perguntas de Exemplo

> **Categoria: Dia a Dia**  
> Qual é a atividade que um Engenheiro de Software passa mais tempo fazendo?  
> ✓ Lendo código, documentação e resolvendo problemas

> **Categoria: Salários**  
> Qual faixa salarial de Junior no Brasil (2024/2025)?  
> ✓ R$ 3.000 - R$ 7.000

> **Categoria: Formação**  
> Precisa de faculdade para ser Engenheiro de Software?  
> ✓ Não - existem bootcamps, cursos e autodidatas

## Deploy na Vercel

Este projeto é uma aplicação estática em HTML, CSS e JavaScript vanilla. A Vercel publica direto da raiz do repositório.

### Via Dashboard

1. Importe o repositório na Vercel.
2. Framework Preset: **Other**.
3. Build Command: pode deixar vazio ou usar `npm run build`.
4. Output Directory: deixe vazio, pois os arquivos estão na raiz.
5. Deploy.

### Via CLI

```bash
npm run build
npx vercel
```

## Estrutura de Arquivos

Repositório **somente do jogo** (configuração do Cursor, se existir localmente, fica fora via `.gitignore`):

```
cyber-maze-v2/
├── public/
│   └── audio/
│       ├── bgm-gameplay.ogg   # Trilha CC-BY (ERH / OpenGameArt)
│       └── CREDITS.txt
├── src/
│   └── main.js          # Cyber Maze v2 (Phaser + áudio)
├── CREDITS.md           # Atribuições para uso escolar
├── maze/
│   ├── engine.js        # Engine Canvas 2D com colisão, fragmentos e riscos
│   ├── fases-config.js  # Fases, tilemaps e dificuldade
│   └── dpad.js          # Controles touch
├── package.json         # Scripts de validação e Vercel CLI
├── vercel.json          # Configuração de deploy estático
└── README.md
```

## Categorias das 30 Perguntas

| Categoria | Quantidade | Tópicos |
|-----------|------------|---------|
| Dia a Dia | 6 | O que fazemos, bug, programar, equipe, git |
| Níveis de Carreira | 5 | Junior, Pleno, Senior, Tech Lead, Staff |
| Formação | 5 | Faculdade, bootcamp, lógica, inglês |
| Onde Trabalhar | 5 | Empresas, remoto, Big Tech, startup, PJ |
| Salários | 4 | Faixas no Brasil, dólar, benefícios |
| Tecnologias | 5 | Frontend, backend, full stack, stacks |

## Sorteio e anti-repetição

O pool de **30 perguntas** é adequado para lançamento: cobre os 6 temas sem exigir centenas de itens. Para quem rejoga várias vezes seguidas, o jogo reduz a sensação de cópia com duas camadas:

| Mecânica | O que faz |
|----------|-----------|
| **Sorteio equilibrado** | Cada partida prioriza representação de todas as categorias (ex.: 2 Dia a Dia, 2 Formação, 1 Salários…) |
| **Memória da última partida** | IDs das perguntas da rodada anterior ficam no `localStorage`; a próxima partida evita até 8 delas |
| **Fallback** | Se não houver perguntas suficientes fora do histórico, o jogo completa a rodada mesmo assim (nunca trava) |

**Por partida:** 10 perguntas (~5–8 min) continua o ideal para duração. **Expansão futura (opcional):** 40–45 perguntas se quiser mais variedade sem mudar a lógica.

### Cotas por categoria (10 perguntas)

| Categoria | No pool | Por partida |
|-----------|---------|-------------|
| Dia a Dia | 6 | 2 |
| Níveis de Carreira | 5 | 2 |
| Formação | 5 | 2 |
| Onde Trabalhar | 5 | 1 |
| Salários | 4 | 1 |
| Tecnologias | 5 | 2 |

## Funcionalidades

- **10 fases de campanha** com labirintos, fragmentos, distrações, riscos e portal bloqueado
- **Desbloqueio por quiz** - cada fase só avança com resposta correta
- **30 perguntas no pool** - 10 sorteadas por partida no Quiz Clássico com equilíbrio por categoria
- **Pódio local** via LocalStorage (top 10 jogadores)
- **100 pontos por acerto** com feedback educativo
- **Trilha synthwave** em loop (CC-BY 3.0, ERH / OpenGameArt) com ducking no quiz e mute persistente
- **Tema hacker** - dark, neon verde, glitch effect, fonte monospace
- **Responsivo** - funciona em desktop e mobile
- **Easter eggs** - Konami code (↑↑↓↓←→←→BA) e comandos no console (`help()`)
- **Acessibilidade** - alternativas como botões focáveis, `aria-live` no feedback, respeito a `prefers-reduced-motion`

## Para Quem É Este Quiz?

- Pessoas de fora da área que querem entender a profissão
- Estudantes considerando entrar em tecnologia
- Familiares que querem entender o que você faz no trabalho
- Pessoas em transição de carreira
- Curiosos sobre salários e oportunidades na área

## Personalização

### Alterar Número de Perguntas por Partida

No arquivo `app.js`, altere:

```javascript
const CONFIG = {
  pontosPorAcerto: 100,
  maxPodium: 10,
  storageKey: 'hackerQuizPodium',
  storageKeyUltimaPartida: 'hackerQuizUltimaPartida',
  maxEvitarRepeticao: 8,
  perguntasPorJogo: 10,  // Altere para 5, 15, ou 20
  cotasPorCategoria: { /* ajuste se mudar categorias */ }
};
```

### Adicionar Novas Perguntas

Edite o array `poolPerguntas` em `app.js`:

```javascript
{
  id: 31,
  categoria: "Dia a Dia",
  pergunta: "Sua pergunta aqui?",
  alternativas: ["A", "B", "C", "D"],
  correta: 0,  // índice da correta (0=A, 1=B, 2=C, 3=D)
  explicacao: "Explicação educativa aqui."
}
```

## Licença

MIT License - Sinta-se livre para usar, modificar e distribuir.

---

**Desenvolvido para educar e inspirar novos talentos na área de tecnologia.**
