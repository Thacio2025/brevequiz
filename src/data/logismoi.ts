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
}

export const LOGISMOI: Record<LogismoiId, LogismoiInfo> = {
  gula: {
    id: "gula",
    name: "Gula",
    resultPhrase:
      "O consolo imediato — em comida ou conforto — pode estar mascarando uma sede mais profunda. O que você realmente precisa agora?",
  },
  luxuria: {
    id: "luxuria",
    name: "Luxúria",
    resultPhrase:
      "A imaginação e os estímulos abrem a porta para a fantasia. Reconhecer é o primeiro passo para escolher onde pousar o olhar.",
  },
  avareza: {
    id: "avareza",
    name: "Avareza",
    resultPhrase:
      "O medo de faltar e o impulso de acumular podem endurecer o coração. Dar, mesmo um pouco, libera.",
  },
  tristeza: {
    id: "tristeza",
    name: "Tristeza",
    resultPhrase:
      "O desânimo e a ruminação de ofensas e fracassos pesam. A esperança é uma decisão que se renova a cada dia.",
  },
  ira: {
    id: "ira",
    name: "Ira",
    resultPhrase:
      "A acusação rápida e o prazer em ter razão fecham portas. A mansidão não é fraqueza — é força sob controle.",
  },
  acidia: {
    id: "acidia",
    name: "Acídia",
    resultPhrase:
      "\"Isso não adianta\" e a fuga do dever e da oração deixam a alma à deriva. Pequenos passos firmes vencem a inconstância.",
  },
  vanagloria: {
    id: "vanagloria",
    name: "Vanaglória",
    resultPhrase:
      "A necessidade de reconhecimento e de parecer piedoso pode esvaziar o gesto. O que importa é quem vê no escondido.",
  },
  orgulho: {
    id: "orgulho",
    name: "Orgulho",
    resultPhrase:
      "\"Eu sei melhor\" e a resistência a conselhos e a pedir ajuda isolam. A humildade é a porta para crescer.",
  },
};
