import { redirect } from "next/navigation";
import Link from "next/link";
import { LOGISMOI, LOGISMOI_IDS, type LogismoiId } from "@/data/logismoi";
import { CTA, CTA_CONVERSA } from "@/app/config";

interface ResultadoPageProps {
  searchParams: Promise<{ dominant?: string }>;
}

function isValidDominant(value: string): value is LogismoiId {
  return LOGISMOI_IDS.includes(value as LogismoiId);
}

export default async function ResultadoPage({ searchParams }: ResultadoPageProps) {
  const params = await searchParams;
  const dominantParam = params.dominant?.toLowerCase();

  if (!dominantParam || !isValidDominant(dominantParam)) {
    redirect("/quiz");
  }

  const info = LOGISMOI[dominantParam as LogismoiId];

  return (
    <main className="min-h-screen px-4 py-10 max-w-xl mx-auto flex flex-col items-center text-center">
      <p className="text-sm uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
        Seu logismoi dominante
      </p>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">{info.name}</h1>
      <p className="text-lg text-stone-600 dark:text-stone-400 text-balance leading-relaxed mb-10">
        {info.resultPhrase}
      </p>

      <div className="mt-auto space-y-4 w-full max-w-sm">
        <Link
          href={CTA.url}
          target={CTA.openInNewTab ? "_blank" : undefined}
          rel={CTA.openInNewTab ? "noopener noreferrer" : undefined}
          className="block w-full px-6 py-4 rounded-lg bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
        >
          {CTA.label}
        </Link>
        <Link
          href={CTA_CONVERSA.url}
          target={CTA_CONVERSA.openInNewTab ? "_blank" : undefined}
          rel={CTA_CONVERSA.openInNewTab ? "noopener noreferrer" : undefined}
          className="block w-full px-6 py-3 rounded-lg border-2 border-[var(--accent)] text-[var(--accent)] font-medium hover:bg-[var(--accent)]/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
        >
          {CTA_CONVERSA.label}
        </Link>
        <Link
          href="/"
          className="block text-sm text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
