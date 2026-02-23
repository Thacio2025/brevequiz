# Linha de atuação — Elevar o nível do Breve Quiz Logismoi

Plano para aproximar o quiz (Next.js no GitHub/Netlify) do nível de identidade, narrativa e funil do funil que você montou no Lovable.

---

## Fase 1 — Identidade visual e tipografia

**Objetivo:** Paleta terrosa e tipografia serifada; sensação de “sabedoria antiga”.

- [x] Definir paleta: areia, ocre, marrom escuro, âmbar para CTAs.
- [x] Carregar Crimson Pro (Google Fonts) e usar em títulos e blocos de texto.
- [x] Ajustar `globals.css` e Tailwind com as novas cores e fontes.
- [x] Garantir contraste e legibilidade em mobile.

**Entrega:** Site já “fala” visualmente como o tema dos Padres do Deserto.

---

## Fase 2 — Landing com narrativa

**Objetivo:** Uma landing que contextualiza e convida, não só um título + botão.

- [ ] **Hero:** citação em destaque — *“Conhece-te a ti mesmo, e conhecerás as armadilhas do inimigo.”* — Evágrio Pôntico, séc. IV.
- [ ] Parágrafo curto: 1.700 anos, monges no deserto, 8 pensamentos, sabedoria atual.
- [ ] **Seção “O que você vai descobrir”:** 3 cards (ícone + título + texto):
  - Identifique o pensamento
  - Compreenda o padrão
  - Receba o antídoto
- [ ] **Seção “Como funciona”:** 3 passos numerados (01 Responda o quiz → 02 Receba seu resultado → 03 Baixe o ebook / próximo passo).
- [ ] CTA principal: “Descobrir minha batalha” (ou “Fazer o quiz gratuito”).
- [ ] Linha de apoio: “Gratuito • 15 perguntas • Resultado imediato + ebook”.
- [ ] Opcional: fundo com imagem de deserto ou gradiente terroso; silhueta discreta.

**Entrega:** Quem chega entende o que é, por que importa e o que ganha.

---

## Fase 3 — Quiz: experiência e incentivo

**Objetivo:** Quiz mais acolhedor e com sensação de progresso.

- [x] Barra de progresso em tom dourado/ocre, alinhada à paleta.
- [x] Animações leves na troca de pergunta (entrada/saída com CSS ou Framer Motion).
- [x] Nas últimas 2–3 perguntas: mensagem de incentivo (“Quase lá”, “Última pergunta”, etc.).
- [x] Revisar textos das perguntas no mesmo tom (direto e respeitoso).

**Entrega:** O quiz “sobe de nível” sem mudar a lógica nem o número de perguntas.

---

## Fase 4 — Página de resultado: antídoto + funil

**Objetivo:** Resultado que ensina e convida ao próximo passo (ebook, mentoria).

- [x] Para cada logismoi: adicionar **antídoto dos Padres** (1–2 frases práticas) além da frase atual.
- [x] Layout: nome do logismoi em destaque → frase de impacto → antídoto.
- [x] **Captura de email:** formulário simples (“Receba o ebook”) com oferta clara.
  - Integração: Netlify Forms (form name: `ebook-lead`; redireciona para `/obrigado`).
- [x] **Teaser da mentoria:** bloco curto + botão/link “Quero uma conversa” (WhatsApp ou calendário).
- [x] Manter os dois CTAs configuráveis (entender a fundo + conversa) via env/constantes.

**Entrega:** Quem termina o quiz vê o resultado, o antídoto e tem caminho claro (ebook + mentoria).

---

## Fase 5 — Revisão de conteúdo e polish

**Objetivo:** Tom e consistência em todo o funil.

- [x] Revisar todos os textos (landing, quiz, resultado) para tom único: “batalha”, “vitória”, “Padres do Deserto”, “jornada interior”.
- [x] Garantir que CTAs e URLs do ebook/mentoria estejam configuráveis (env ou `config.ts`).
- [x] Testar fluxo completo em mobile (landing → quiz → resultado → formulário).
- [x] Ajustes finos de espaçamento, tamanhos e acessibilidade.

**Entrega:** Funil coerente, profissional e pronto para divulgar.

---

## Ordem sugerida

1. **Fase 1** — Base visual (cores, fontes).  
2. **Fase 2** — Landing completa.  
3. **Fase 3** — Quiz mais acolhedor.  
4. **Fase 4** — Resultado com antídoto + email + mentoria.  
5. **Fase 5** — Revisão e polish.

Cada fase pode ser feita em um passo (ou mais de um, se preferir dividir). Quando quiser, diga por qual fase começar e eu implemento em cima do código atual.
