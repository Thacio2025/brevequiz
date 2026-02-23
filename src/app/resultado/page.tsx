import { redirect } from "next/navigation";
import Link from "next/link";
import { LOGISMOI, LOGISMOI_IDS, type LogismoiId } from "@/data/logismoi";
import { CTA, CTA_CONVERSA, FORM_EMAIL_NAME, FORM_EMAIL_LABEL } from "@/app/config";

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
  const formAction = "/obrigado";

  return (
    <main className="min-h-screen px-4 py-10 max-w-xl mx-auto flex flex-col">
      <div className="text-center mb-10">
        <p className="text-sm uppercase tracking-wider text-[var(--brown-light)] mb-2">
          Seu logismoi dominante
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
          {info.name}
        </h1>
        <p className="text-lg text-[var(--brown)] text-balance leading-relaxed mb-6">
          {info.resultPhrase}
        </p>
        <div className="bg-[var(--sand)]/50 rounded-xl p-4 sm:p-5 text-left border border-[var(--sand)]">
          <p className="text-xs uppercase tracking-wider text-[var(--ochre)] font-semibold mb-2">
            Antídoto dos Padres
          </p>
          <p className="text-[var(--foreground)] leading-relaxed">
            {info.antidote}
          </p>
        </div>
      </div>

      {/* Captura de email — Netlify Forms (redireciona para /obrigado após envio) */}
      <section className="mb-10">
        <form
            name={FORM_EMAIL_NAME}
            method="POST"
            action={formAction}
            data-netlify="true"
            className="space-y-3"
          >
            <input type="hidden" name="form-name" value={FORM_EMAIL_NAME} />
            <input
              type="email"
              name="email"
              required
              placeholder="Seu melhor email"
              className="w-full px-4 py-3 rounded-lg border-2 border-[var(--sand)] bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--brown-light)] focus:outline-none focus:ring-2 focus:ring-[var(--ochre)] focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-[var(--ochre)] text-[var(--brown)] font-semibold hover:bg-[var(--ochre-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ochre)] focus:ring-offset-2"
            >
              {FORM_EMAIL_LABEL}
            </button>
          </form>
        <p className="text-xs text-[var(--brown)] mt-2 text-center">
          Ebook com a sabedoria dos Padres do Deserto para a sua jornada interior.
        </p>
      </section>

      {/* Teaser mentoria */}
      <section className="mb-8 p-4 rounded-xl border border-[var(--sand)] bg-[var(--sand)]/20">
        <p className="text-sm font-semibold text-[var(--foreground)] mb-1">
          Quer aprofundar com acompanhamento?
        </p>
        <p className="text-sm text-[var(--brown)] mb-3">
          Uma conversa pode ajudar a levar esse diagnóstico para a vida prática.
        </p>
        <Link
          href={CTA_CONVERSA.url}
          target={CTA_CONVERSA.openInNewTab ? "_blank" : undefined}
          rel={CTA_CONVERSA.openInNewTab ? "noopener noreferrer" : undefined}
          className="inline-block px-5 py-2.5 rounded-lg border-2 border-[var(--ochre)] text-[var(--ochre)] font-medium hover:bg-[var(--ochre)]/10 transition-colors text-sm"
        >
          {CTA_CONVERSA.label}
        </Link>
      </section>

      {/* CTAs principais */}
      <div className="mt-auto space-y-4 w-full max-w-sm mx-auto">
        <Link
          href={CTA.url}
          target={CTA.openInNewTab ? "_blank" : undefined}
          rel={CTA.openInNewTab ? "noopener noreferrer" : undefined}
          className="block w-full px-6 py-4 rounded-lg bg-[var(--ochre)] text-[var(--brown)] font-semibold hover:bg-[var(--ochre-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ochre)] focus:ring-offset-2 text-center"
        >
          {CTA.label}
        </Link>
        <Link
          href="/"
          className="block text-center text-sm text-[var(--brown)] hover:text-[var(--foreground)]"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
