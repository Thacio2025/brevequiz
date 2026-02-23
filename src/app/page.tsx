import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="max-w-lg mx-auto space-y-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          Qual é a sua batalha interior?
        </h1>
        <p className="text-lg text-stone-600 dark:text-stone-400 text-balance">
          Descubra qual pensamento te sabota — em poucos minutos.
        </p>
        <Link
          href="/quiz"
          className="inline-block px-8 py-4 rounded-lg bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
        >
          Fazer o quiz
        </Link>
      </div>
    </main>
  );
}
