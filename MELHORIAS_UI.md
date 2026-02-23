# Melhorias de UI/UX — Breve Quiz Logismoi

Documento de especificação. **Implementado em 2026-02-23** (landing, quiz, resultado, mobile, acessibilidade).

---

## 1. Legibilidade do subtítulo no hero — "SABEDORIA DOS PADRES DO DESERTO"

**Problema:** O texto em cima da imagem do deserto tem contraste muito baixo e fica quase ilegível, principalmente em monitores ou fotos com brilho diferente.

**Objetivo:** Garantir leitura em qualquer fundo (claro/escuro da imagem) sem perder o tom visual.

**Opções (escolher uma ou combinar):**

- **A)** Aumentar o contraste do texto: usar branco puro (`#fff`) ou um bege bem claro com `text-shadow` suave (ex.: `0 1px 2px rgba(0,0,0,0.5)` ou `0 0 20px rgba(0,0,0,0.4)`) para destacar da imagem.
- **B)** Colocar uma faixa semitransparente atrás do texto (ex.: uma barra ou retângulo com `background: rgba(0,0,0,0.3)` ou `rgba(44,36,22,0.5)`), mantendo a fonte na cor clara.
- **C)** Escurecer levemente a parte superior da imagem com um gradiente no overlay (ex.: de cima `rgba(0,0,0,0.2)` para transparente), e manter o texto em branco/bege claro.

**Onde no código:** `src/app/page.tsx` — primeira `<section>` (hero): elemento que contém o texto "Sabedoria dos Padres do Deserto" e o `<blockquote>`.

**Critério de sucesso:** O subtítulo passa a ser lido facilmente em desktop e mobile, sem parecer “sumido” na imagem.

---

## 2. Contraste do botão "Fazer o quiz gratuito"

**Problema:** Texto branco em fundo amarelo/ocre claro gera pouco contraste; o botão pode parecer desabilitado ou pouco clicável, e prejudica acessibilidade (WCAG).

**Objetivo:** Botão continuar em destaque (cor ocre/dourada) mas com contraste suficiente para o texto e para parecer claramente clicável.

**Opções (escolher uma):**

- **A)** Manter ocre no botão e **trocar o texto para marrom escuro** (ex.: `#2c2416` ou a variável `--foreground` / `--brown` do projeto). Assim o botão continua “quente” e o texto fica legível.
- **B)** **Escurecer o fundo do botão** (ex.: ocre mais escuro, tipo `#9a7209` ou `#8b6910`) e manter texto branco. Aumenta contraste e mantém a sensação de “dourado”.
- **C)** Usar **borda escura** no botão (ex.: `border: 2px solid` na cor marrom) e texto escuro, com fundo ocre claro; ou fundo ocre escuro + texto claro.

**Onde no código:** `src/app/page.tsx` — última `<section>` (CTA final): o `<Link>` com classe que usa `bg-[var(--ochre)]` e texto (hoje provavelmente claro). Também verificar variáveis em `src/app/globals.css` (`--ochre`, `--ochre-hover`) se o botão for estilizado por elas.

**Critério de sucesso:** Contraste mínimo WCAG AA (4.5:1 para texto normal; 3:1 para texto grande). Botão parece claramente interativo.

---

## 3. CTA visível na área "O que você vai descobrir" / "Como funciona"

**Problema:** Quem só rola até a seção dos três cards e dos três passos pode não achar onde começar o quiz; o único CTA está mais abaixo, no bloco escuro.

**Objetivo:** Deixar claro, nessa altura da página, que a ação é “fazer o quiz” e onde clicar.

**Opções (escolher uma ou combinar):**

- **A)** Inserir **um botão** logo após o bloco “Como funciona” (antes do CTA final escuro), mesmo estilo do botão principal: “Fazer o quiz gratuito” ou “Começar o quiz”, linkando para `/quiz`.
- **B)** Adicionar **um link em texto** abaixo dos três passos, ex.: “Quer descobrir agora? [Fazer o quiz gratuito →]”, mantendo o botão grande só no bloco final.
- **C)** Repetir o **mesmo botão** em dois pontos: um após “Como funciona” e outro no bloco escuro, para quem parar de rolar em qualquer um dos dois.

**Onde no código:** `src/app/page.tsx` — depois da seção “Como funciona” (os três itens 01, 02, 03) e antes da `<section>` de fundo escuro com “Descubra sua batalha”.

**Critério de sucesso:** Quem lê “O que você vai descobrir” e “Como funciona” encontra, sem rolar muito, um CTA claro para iniciar o quiz.

---

## 4. (Opcional) Explicação rápida do termo "logismoi"

**Problema:** “Logismoi” é um termo de nicho; alguns visitantes podem não entender de imediato.

**Objetivo:** Esclarecer em uma linha, sem quebrar o tom nem alongar o texto.

**Sugestão:** Em algum ponto único (ex.: na primeira menção a “8 logismoi” ou no subtítulo da seção “O que você vai descobrir”), acrescentar uma frase curta, ex.: “os 8 pensamentos que os Padres do Deserto mapearam” ou “os oito pensamentos que capturam o coração”.

**Onde no código:** `src/app/page.tsx` — no título ou no parágrafo da seção “O que você vai descobrir” (ou no hero, no parágrafo sobre 1.700 anos).

**Critério de sucesso:** Um leitor leigo entende, em poucas palavras, o que é “logismoi” no contexto do quiz.

---

## 5. (Opcional) Hierarquia visual em "Como funciona"

**Problema:** Os títulos dos passos (“Responda o quiz”, “Receba seu resultado”, etc.) poderiam se destacar mais em relação às descrições em cinza.

**Objetivo:** Deixar óbvio que o número + título são o “comando” e o texto abaixo é apoio.

**Sugestão:** Aumentar levemente o `font-size` ou o `font-weight` dos títulos dos passos (ex.: `font-semibold` ou `font-bold` já aplicados, e um tamanho um degrau acima da descrição), ou usar a cor de destaque (ocre) só nos títulos, mantendo a descrição em marrom/cinza.

**Onde no código:** `src/app/page.tsx` — seção “Como funciona”, nos elementos que contêm “Responda o quiz”, “Receba seu resultado”, “Baixe o ebook gratuito” e nos parágrafos abaixo.

**Critério de sucesso:** Em uma olhada rápida, fica claro o que é o passo e o que é a explicação.

---

## 6. (Opcional) Revisão de acessibilidade

**Objetivo:** Garantir que contraste e estrutura atendam a boas práticas (WCAG AA onde fizer sentido).

**Sugestões:**

- Rodar uma ferramenta de contraste (ex.: WebAIM Contrast Checker ou inspecionar no DevTools) em: subtítulo do hero, citação, parágrafos, títulos das seções, botão CTA, links e textos dos cards.
- Verificar se todos os títulos estão em ordem (h1 → h2 → h3) e se a imagem do hero tem `alt` adequado (vazio se for decorativa: `alt=""`).
- Se houver foco em teclado, conferir que o contorno de foco no botão e nos links está visível (ex.: `focus:ring-2` já usado no projeto).

**Onde no código:** `src/app/page.tsx` (landing), `src/app/globals.css` (cores), e qualquer componente de botão/link reutilizado.

---

## Ordem sugerida para implementar

1. **Item 1** — Subtítulo do hero (impacto alto na primeira impressão).  
2. **Item 2** — Contraste do botão (impacto alto em conversão e acessibilidade).  
3. **Item 3** — CTA após “Como funciona” (melhora navegação e conversão).  
4. Itens 4, 5 e 6 quando quiser refinar copy e hierarquia.

Implementado (2026-02-23): hero, botões, CTA, logismoi, hierarquia, acessibilidade, mobile (min-h tap targets, safe-area, viewport-fit). Quando quiser aplicar mais, diga por qual item começar (ex.: “implementa o 1 e o 2”) e em qual arquivo prefere que as mudanças fiquem.
