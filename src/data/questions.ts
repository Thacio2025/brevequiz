import type { LogismoiId } from "./logismoi";

/** Escala de frequência: valor 0–4 é somado ao logismoi da pergunta */
export const SCALE_LABELS = [
  "Nunca",
  "Raramente",
  "Às vezes",
  "Frequentemente",
  "Sempre",
] as const;

export type ScaleValue = 0 | 1 | 2 | 3 | 4;

export interface QuizQuestion {
  id: string;
  text: string;
  /** Qual logismoi esta pergunta mede: a resposta (0–4) soma nesse logismoi */
  logismoi: LogismoiId;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    text: "Quando estou mal, busco consolo imediato em comida ou em algo que me conforte.",
    logismoi: "gula",
  },
  {
    id: "q2",
    text: "Tenho dificuldade em dizer não a estímulos ou imaginações que depois me perturbam.",
    logismoi: "luxuria",
  },
  {
    id: "q3",
    text: "Sinto medo de faltar e tendência a acumular ou a ter dificuldade em dar.",
    logismoi: "avareza",
  },
  {
    id: "q4",
    text: "Fico remoendo ofensas e fracassos e perco a esperança com facilidade.",
    logismoi: "tristeza",
  },
  {
    id: "q5",
    text: "Reajo com aspereza ou acuso rápido quando algo me irrita.",
    logismoi: "ira",
  },
  {
    id: "q6",
    text: "Penso que \"isso não adianta\" e fujo do dever ou da oração por desânimo.",
    logismoi: "acidia",
  },
  {
    id: "q7",
    text: "Sinto necessidade de que os outros reconheçam minhas conquistas ou minha piedade.",
    logismoi: "vanagloria",
  },
  {
    id: "q8",
    text: "Acho que sei melhor que os outros e resisto a pedir ajuda ou a ouvir conselhos.",
    logismoi: "orgulho",
  },
  {
    id: "q9",
    text: "\"Preciso disso agora\" — impulso de satisfazer um desejo no momento, mesmo que depois me arrependa.",
    logismoi: "gula",
  },
  {
    id: "q10",
    text: "Guardo mágoa e demoro a perdoar; às vezes gosto de ter razão na discussão.",
    logismoi: "ira",
  },
  {
    id: "q11",
    text: "Sou inconstante: começo coisas com entusiasmo e abandono por tédio ou desânimo.",
    logismoi: "acidia",
  },
  {
    id: "q12",
    text: "Me incomoda não ser visto ou valorizado; gosto de expor o que faço de bom.",
    logismoi: "vanagloria",
  },
  {
    id: "q13",
    text: "Tenho dificuldade em aceitar que errei ou em me colocar no lugar do outro.",
    logismoi: "orgulho",
  },
  {
    id: "q14",
    text: "O desânimo me paralisa e me faz ver tudo mais cinza do que é.",
    logismoi: "tristeza",
  },
  {
    id: "q15",
    text: "É difícil para mim desapegar de bens ou de segurança material.",
    logismoi: "avareza",
  },
];
