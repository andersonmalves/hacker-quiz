# ADR 001: Labirinto em Canvas 2D com tilemap JSON

**Status:** Aceito  
**Data:** 2026-05-26  
**Contexto:** [specs/cyber-maze-atualizacoes-alunos.md](../specs/cyber-maze-atualizacoes-alunos.md)

---

## Context

O Hacker Quiz atual é uma SPA estática (HTML/CSS/JS vanilla, ~1856 linhas em `app.js`) sem engine de jogo. Os alunos pediram labirinto com movimentação, colisão, distrações visuais e checkpoints de quiz. Precisamos escolher como renderizar e simular o labirinto sem introduzir build step nem dependências pesadas, mantendo deploy no GitHub Pages.

Restrições:

- Stack preferida: HTML, CSS, JavaScript (documento dos alunos).
- Sem backend.
- Mobile deve ser suportável (apresentação em diferentes dispositivos).
- Escopo híbrido: 1 tilemap base reutilizado, não 10 mapas únicos.

---

## Decision

Implementar o labirinto com **Canvas 2D** e **tilemap em JSON** (grid 15×11), carregado como arquivo estático ou inline.

Componentes:

1. **`maze/engine.js`** — loop de render (~requestAnimationFrame), input teclado + D-pad, colisão por tile, triggers (`exit`, `distraction`).
2. **`maze/tilemaps/base.json`** — matriz de inteiros (0=chão, 1=parede, 2=spawn, 3=saída, 4=distração).
3. **`maze/fases-config.js`** — metadados por fase (título, `perguntaId`, lista de distrações, flag `jogavel`).

Integração com quiz existente: ao colidir com tile `3`, pausar engine e chamar fluxo de pergunta já presente em `app.js` (embaralhar alternativas, feedback, explicação).

---

## Alternatives considered

### A) DOM grid (`display: grid` + divs por tile)

**Prós:** Sem Canvas; estilização CSS direta por célula.  
**Contras:** Muitos nós DOM (165 células × animações); repaint costoso em mobile; sincronizar personagem e triggers é mais frágil que grid lógico + um sprite no Canvas.  
**Veredito:** Rejeitado para gameplay; aceitável só para protótipo descartável.

### B) Phaser 3 (ou similar)

**Prós:** Colisão, cenas, input e tilemaps maduros; pathfinding plugins disponíveis.  
**Contras:** Nova dependência (~1 MB+); curva de aprendizado para alunos; possível conflito com arquitetura monolítica atual; CDN extra ou bundler.  
**Veredito:** Rejeitado — YAGNI para escopo híbrido (3 fases jogáveis, sem monstro com IA).

### C) Canvas 2D + tilemap JSON (**escolhido**)

**Prós:** Performance previsível; colisão trivial (`tile[x][y]`); continua vanilla JS; tilemaps versionáveis em Git; ~300–500 linhas de engine mínima.  
**Contras:** Sprites desenhados em código ou PNG simples (sem editor visual integrado); acessibilidade do maze limitada — mitigado mantendo Quiz Clássico.

---

## Consequences

### Positivas

- Reutilização do mesmo `base.json` com variações de overlay (pop-ups, glitch CSS) por fase.
- Separação clara: `maze/engine.js` (infra) vs. `app.js` (quiz + orquestração).
- Compatível com GitHub Pages sem build.

### Negativas

- Labirinto permanece inacessível para usuários que dependem só de leitor de tela — **Quiz Clássico obrigatório** na tela inicial.
- Pathfinding para "monstro perseguidor" não vem de graça — reforça decisão de substituir por timer/barra de atenção (spec).
- Manutenção de tilemap manual (editar JSON); aceitável para 1–2 mapas na v1.

### Riscos e mitigação

| Risco | Mitigação |
|-------|-----------|
| `app.js` cresce demais | Extrair maze para módulos; opcional `questions.js` |
| Mobile sem teclado | D-pad HTML sobreposto ao Canvas |
| fetch de JSON falha em file:// | Inline tilemap ou `<script type="application/json">` fallback |

---

## Referências no código atual

- Quiz e perguntas: `app.js` — `poolPerguntas`, `utils.embaralharAlternativas`
- Visual cyber: `style.css` — variáveis neon, `.glitch`
- Áudio: Tone.js em `app.js` — reutilizar para alertas de timer
- Acessibilidade: `prefers-reduced-motion` em `style.css` — estender a overlays de distração
