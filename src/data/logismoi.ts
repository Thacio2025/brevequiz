/**
 * Os 8 logismoi (pensamentos que assaltam), na tradição de Evágrio Pôntico e Cassiano.
 * Nomes exatos em português para uso no quiz e no resultado.
 */
export const LOGISMOI_IDS = [
  "gula",
  "luxuria",
  "avareza",
  "tristeza",
  "ira",
  "acidia",
  "vanagloria",
  "orgulho",
] as const;

export type LogismoiId = (typeof LOGISMOI_IDS)[number];

export interface LogismoiInfo {
  id: LogismoiId;
  name: string;
  /** 1–2 frases de impacto para a tela de resultado */
  resultPhrase: string;
  /** Antídoto dos Padres: orientação prática */
  antidote: string;
}

export const LOGISMOI: Record<LogismoiId, LogismoiInfo> = {
  gula: {
    id: "gula",
    name: "Gula",
    resultPhrase:
      "O consolo imediato — em comida ou conforto — pode estar mascarando uma sede mais profunda. O que você realmente precisa agora?",
    antidote:
      "Jejum e moderação. Os Padres recomendam discernir a fome do corpo da fome da alma — e alimentar primeiro a alma com silêncio e oração.",
  },
  luxuria: {
    id: "luxuria",
    name: "Luxúria",
    resultPhrase:
      "A imaginação e os estímulos abrem a porta para a fantasia. Reconhecer é o primeiro passo para escolher onde pousar o olhar.",
    antidote:
      "Custódia dos sentidos e do coração. Evágrio ensina: desviar o olhar, ocupar a mente com o bem e cultivar a vergonha saudável.",
  },
  avareza: {
    id: "avareza",
    name: "Avareza",
    resultPhrase:
      "O medo de faltar e o impulso de acumular podem endurecer o coração. Dar, mesmo um pouco, libera.",
    antidote:
      "Esmera e esmola. Os Padres do Deserto viam no desapego e na partilha o antídoto: dar o que custa, não só o que sobra.",
  },
  tristeza: {
    id: "tristeza",
    name: "Tristeza",
    resultPhrase:
      "O desânimo e a ruminação de ofensas e fracassos pesam. A esperança é uma decisão que se renova a cada dia.",
    antidote:
      "Lágrimas de compunção e gratidão. Cassiano fala de converter a tristeza do mundo em tristeza segundo Deus — e de enumerar as misericórdias recebidas.",
  },
  ira: {
    id: "ira",
    name: "Ira",
    resultPhrase:
      "A acusação rápida e o prazer em ter razão fecham portas. A mansidão não é fraqueza — é força sob controle.",
    antidote:
      "Mansidão e oração pelo que nos ofende. Os Padres dizem: não deixe o sol se pôr sobre sua ira; reze pelo outro antes de falar.",
  },
  acidia: {
    id: "acidia",
    name: "Acídia",
    resultPhrase:
      "\"Isso não adianta\" e a fuga do dever e da oração deixam a alma à deriva. Pequenos passos firmes vencem a inconstância.",
    antidote:
      "Regra de vida e trabalho manual. Estabilidade no lugar e no horário de oração; fazer algo concreto com as mãos quando o desânimo vier.",
  },
  vanagloria: {
    id: "vanagloria",
    name: "Vanaglória",
    resultPhrase:
      "A necessidade de reconhecimento e de parecer piedoso pode esvaziar o gesto. O que importa é quem vê no escondido.",
    antidote:
      "Ocultar as boas obras e aceitar ser mal compreendido. Os Padres fugiam dos elogios; buscavam o segredo e a humildade.",
  },
  orgulho: {
    id: "orgulho",
    name: "Orgulho",
    resultPhrase:
      "\"Eu sei melhor\" e a resistência a conselhos e a pedir ajuda isolam. A humildade é a porta para crescer.",
    antidote:
      "Obediência ao pai espiritual e reconhecer que precisamos dos outros. Evágrio chamava o orgulho de raiz de todos os males — e a humildade de seu antídoto.",
  },
};
