import { QUIZ_QUESTIONS } from "@/data/questions";
import type { LogismoiId } from "@/data/logismoi";
import type { ScaleValue } from "@/data/questions";

export type Answers = Record<string, ScaleValue>;

/**
 * Dado o mapa de respostas (questionId -> 0..4), retorna o logismoi com maior pontuação.
 * Em empate, retorna o primeiro por ordem da lista de logismoi.
 */
export function getDominantLogismoi(answers: Answers): LogismoiId {
  const sums: Partial<Record<LogismoiId, number>> = {};

  for (const q of QUIZ_QUESTIONS) {
    const value = answers[q.id] ?? 0;
    sums[q.logismoi] = (sums[q.logismoi] ?? 0) + value;
  }

  let maxScore = -1;
  let dominant: LogismoiId = "gula";

  for (const q of QUIZ_QUESTIONS) {
    const id = q.logismoi;
    const score = sums[id] ?? 0;
    if (score > maxScore) {
      maxScore = score;
      dominant = id;
    }
  }

  return dominant;
}
