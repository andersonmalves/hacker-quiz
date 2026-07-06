# Cyber Maze v2 — Escape da Internet

Jogo educativo em labirinto com quiz sobre Engenharia de Software. Explore mini-labirintos, colete fragmentos, evite riscos e desbloqueie portais respondendo perguntas.

![Tema](https://img.shields.io/badge/tema-cyber-darkblue)
![Stack](https://img.shields.io/badge/stack-phaser%20%2B%20vite-black)
![Deploy](https://img.shields.io/badge/deploy-vercel-black)

## Sobre o jogo

A campanha tem **10 fases**, cada uma com:

- Labirinto procedural gerado por fase
- Fragmentos azuis obrigatórios para liberar o portal
- Riscos vermelhos e sentinelas que drenam foco
- Uma pergunta de checkpoint ao alcançar o portal

Modos visuais:

- **2D clássico** — visão top-down
- **FPS 2.5D** — raycasting retrô (estilo Wolfenstein/Doom)

## Como jogar

1. Clique em **Iniciar campanha** (ou **Continuar** se houver save).
2. Leia o briefing e entre no labirinto.
3. Use **setas/WASD** ou o **D-pad touch** para se mover.
   - No modo FPS, esquerda/direita **giram** o jogador; no 2D, **movem**.
4. Colete os fragmentos para liberar o portal roxo.
5. Evite riscos e sentinelas — eles reduzem foco e score.
6. No portal, responda ao quiz (clique ou teclas **1–4**).
7. Complete as 10 fases para ver a tela final.

Atalhos: **ESC** volta ao menu (progresso salvo permanece em `localStorage`).

## Trilha sonora

- **Faixa:** *BlueBeat 01 [loop]* por ERH (OpenGameArt, licença **CC-BY 3.0**)
- **Créditos:** [`CREDITS.md`](CREDITS.md)
- Inicia após gesto do usuário (política de autoplay dos navegadores)
- Volume reduzido automaticamente durante o quiz
- Botão **Som: ON/OFF** — preferência em `localStorage`
- Efeitos de acerto/erro via Web Audio API

**Texto para apresentação escolar:**

> Trilha sonora: *BlueBeat 01 [loop]* por ERH, disponibilizada sob licença Creative Commons BY em OpenGameArt.org.

## Perguntas da campanha

10 perguntas fixas (uma por fase), cobrindo temas como dia a dia, lógica, arquitetura, carreira, produto, qualidade, equipe, web, segurança e futuro da profissão.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

O Vite separa o Phaser em chunk próprio para melhorar cache e carregamento.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Framework Preset: **Vite** (ou **Other** com build `npm run build`).
3. Output Directory: `dist`.
4. Deploy.

Via CLI:

```bash
npm run build
npx vercel
```

## Estrutura do projeto

```
cyber-maze-v2/
├── public/
│   └── audio/
│       ├── bgm-gameplay.ogg
│       └── CREDITS.txt
├── src/
│   └── main.js          # Jogo (Phaser 3 + UI HTML)
├── index.html
├── style.css
├── vite.config.js
├── package.json
├── vercel.json
└── CREDITS.md
```

### Código legado (não usado na entrada principal)

Os arquivos `app.js` e `maze/` são de uma versão anterior (Quiz Clássico em vanilla JS). A entrada atual é `index.html` → `src/main.js` via Vite.

## Funcionalidades

- 10 fases com labirintos, fragmentos, riscos e portais
- Modo 2D e FPS 2.5D com raycasting
- Quiz por portal com feedback educativo
- Save de campanha, modo visual e mute em `localStorage`
- Controles touch com rótulos adaptados ao modo
- `prefers-reduced-motion` respeitado
- Quiz acessível: `aria-live`, foco no primeiro botão, teclas 1–4

## Chaves de `localStorage`

| Chave | Conteúdo |
|-------|----------|
| `cyberMazeV2Progress` | Fase, score e foco |
| `cyberMazeV2ViewMode` | `2d` ou `3d` |
| `cyberMazeV2Mute` | `true` / `false` |

Chaves antigas (`cyberMazeViewMode`, `cyberMazeMute`) são migradas automaticamente na primeira carga.

## Personalização

### Adicionar ou editar perguntas

Edite o array `questions` em `src/main.js` (uma pergunta por fase em `levels`).

### Ajustar dificuldade de uma fase

Altere `shards`, `hazards`, `sentries` e `speed` no array `levels` em `src/main.js`.

## Licença

MIT License — use, modifique e distribua livremente.

---

**Desenvolvido para educar e inspirar novos talentos na área de tecnologia.**
