"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  QUIZ_QUESTIONS,
  SCALE_LABELS,
  type ScaleValue,
} from "@/data/questions";
import { getDominantLogismoi, type Answers } from "@/lib/score";

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const question = QUIZ_QUESTIONS[currentIndex];
  const currentValue = answers[question.id];
  const isLast = currentIndex === QUIZ_QUESTIONS.length - 1;

  const handleSelect = (value: ScaleValue) => {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    if (isLast) {
      const dominant = getDominantLogismoi(next);
      router.push(`/resultado?dominant=${encodeURIComponent(dominant)}`);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const progress = ((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <main className="min-h-screen px-4 py-8 pb-12 max-w-xl mx-auto">
      <div className="mb-6">
        <div className="h-1.5 bg-stone-200 dark:bg-stone-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
          {currentIndex + 1} de {QUIZ_QUESTIONS.length}
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-balance leading-snug">
          {question.text}
        </h2>

        <div className="flex flex-col gap-3">
          {SCALE_LABELS.map((label, i) => {
            const value = i as ScaleValue;
            const isSelected = currentValue === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => handleSelect(value)}
                className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)] ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--foreground)]"
                    : "border-stone-300 dark:border-stone-600 bg-transparent hover:border-stone-400 dark:hover:border-stone-500"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {currentIndex > 0 && (
        <button
          type="button"
          onClick={() => setCurrentIndex((i) => i - 1)}
          className="mt-8 text-sm text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
        >
          ← Voltar
        </button>
      )}
    </main>
  );
}
