# Hacker Quiz - Carreira de Engenharia de Software

Um jogo de quiz interativo com tema Anonymous/dark web para descobrir tudo sobre a profissão de Engenheiro de Software. Ideal para quem está fora da área e quer entender o que fazemos, quanto ganhamos e como é nosso dia a dia.

![Tema](https://img.shields.io/badge/tema-hacker-darkgreen)
![Tecnologias](https://img.shields.io/badge/html-css-js-black)
![Deploy](https://img.shields.io/badge/deploy-github%20pages-blue)

## Sobre o Quiz

Este quiz tem **30 perguntas** sobre a carreira de Engenharia de Software, cobrindo:

- **Dia a dia**: O que engenheiros realmente fazem no trabalho
- **Níveis de carreira**: Junior, Pleno, Senior e além
- **Formação**: Faculdade, bootcamps, cursos online
- **Onde trabalhar**: Empresas de tecnologia, bancos, startups, remoto
- **Remuneração**: Salários no Brasil e no exterior
- **Tecnologias**: Frontend, backend, full stack, stacks populares

A cada partida, **10 perguntas são sorteadas** do pool de 30 com **equilíbrio por categoria** e **menos repetição** em relação à rodada anterior (até 8 perguntas da última partida são evitadas quando possível).

## Como Jogar

1. Acesse a URL do jogo publicada no GitHub Pages
2. Clique em "INICIAR INVASAO" (a música ambiente inicia após o clique)
3. Responda as 10 perguntas sorteadas sobre a carreira
4. Veja o feedback com explicações educativas
5. Use o botão 🔊/🔇 no canto superior direito para mutar/desmutar
6. Salve sua pontuação no pódio local!

### Sobre a Trilha Sonora Dark

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

## Deploy no GitHub Pages

### Opção 1: Upload Manual

1. Crie um novo repositório público no GitHub
2. Faça upload dos arquivos do jogo (`index.html`, `style.css`, `app.js`, `README.md`, `LICENSE`, `.nojekyll`)
3. Vá em **Settings > Pages**
4. Em "Source", selecione **Deploy from a branch**
5. Selecione a branch `main` e pasta `/ (root)`
6. Clique em **Save**
7. Aguarde alguns minutos e acesse a URL: `https://seuusuario.github.io/nome-do-repo/`

### Opção 2: Via Git CLI

```bash
# No diretório do projeto
git init
git add .
git commit -m "Initial commit: Hacker Quiz - Carreira"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/hacker-quiz-carreira.git
git push -u origin main
```

Depois configure o GitHub Pages (passos 3-7 da Opção 1).

## Estrutura de Arquivos

Repositório **somente do jogo** (configuração do Cursor, se existir localmente, fica fora via `.gitignore`):

```
hacker-quiz/
├── index.html    # Interface com tema hacker
├── style.css     # Estilos dark/neon
├── app.js        # 30 perguntas + lógica de sorteio + pódio
├── README.md     # Este arquivo
├── LICENSE       # MIT
└── .nojekyll     # Compatibilidade com GitHub Pages
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

- **30 perguntas no pool** - 10 sorteadas por partida com equilíbrio por categoria
- **Pódio local** via LocalStorage (top 10 jogadores)
- **100 pontos por acerto** com feedback educativo
- **Trilha sonora dark/horror** gerada proceduralmente com 5 camadas: drone grave constante, batidas irregulares de coração/máquina, alertas tipo sirene, sombras tensas e glitches de corrupção (com botão de mute 🔊/🔇)
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
