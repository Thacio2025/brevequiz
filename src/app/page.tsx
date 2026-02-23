import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero: citação + contexto (imagem de fundo: coloque hero-deserto.jpg em public/) */}
      <section
        className="relative px-4 py-16 sm:py-24 overflow-hidden min-h-[70vh] flex flex-col justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-deserto.png)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--sand)]/60 via-[var(--sand)]/30 to-[var(--background)] pointer-events-none" />
        <div className="relative max-w-2xl mx-auto text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-[var(--brown-light)]">
            Sabedoria dos Padres do Deserto
          </p>
          <blockquote className="text-2xl sm:text-3xl font-semibold text-[var(--foreground)] leading-snug text-balance">
            &ldquo;Conhece-te a ti mesmo, e conhecerás as armadilhas do inimigo.&rdquo;
          </blockquote>
          <p className="text-sm text-[var(--brown-light)]">
            — Evágrio Pôntico, Padre do Deserto, séc. IV
          </p>
          <p className="text-base sm:text-lg text-[var(--brown)] text-balance max-w-xl mx-auto leading-relaxed">
            Há mais de 1.700 anos, monges no deserto do Egito identificaram 8
            pensamentos fundamentais que capturam o coração humano. Essa
            sabedoria permanece tão atual quanto no dia em que foi escrita.
          </p>
        </div>
      </section>

      {/* O que você vai descobrir */}
      <section className="px-4 py-12 sm:py-16 bg-[var(--sand)]/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[var(--brown-light)] text-center mb-2">
            O que você vai descobrir
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--foreground)] mb-10 text-balance">
            Um diagnóstico espiritual milenar
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[var(--background)] rounded-xl p-6 shadow-sm border border-[var(--sand)]">
              <div className="w-10 h-10 rounded-lg bg-[var(--ochre)]/20 flex items-center justify-center mb-4 text-[var(--ochre)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                Identifique o pensamento
              </h3>
              <p className="text-[var(--brown)] text-sm leading-relaxed">
                Descubra qual dos 8 logismoi mapeados pelos Padres do Deserto mais age na sua vida.
              </p>
            </div>
            <div className="bg-[var(--background)] rounded-xl p-6 shadow-sm border border-[var(--sand)]">
              <div className="w-10 h-10 rounded-lg bg-[var(--ochre)]/20 flex items-center justify-center mb-4 text-[var(--ochre)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                Compreenda o padrão
              </h3>
              <p className="text-[var(--brown)] text-sm leading-relaxed">
                Entenda como esse pensamento se manifesta no seu dia a dia e por que você repete os mesmos erros.
              </p>
            </div>
            <div className="bg-[var(--background)] rounded-xl p-6 shadow-sm border border-[var(--sand)]">
              <div className="w-10 h-10 rounded-lg bg-[var(--ochre)]/20 flex items-center justify-center mb-4 text-[var(--ochre)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">
                Receba o antídoto
              </h3>
              <p className="text-[var(--brown)] text-sm leading-relaxed">
                Receba orientações práticas dos Padres do Deserto para combater essa batalha interior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="px-4 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-[var(--brown-light)] text-center mb-2">
            Simples e rápido
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[var(--foreground)] mb-10">
            Como funciona
          </h2>
          <div className="space-y-6 border-t border-[var(--sand)] pt-6">
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-[var(--ochre)] shrink-0">01</span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Responda o quiz</h3>
                <p className="text-[var(--brown)] text-sm mt-1">15 perguntas simples sobre seus hábitos e pensamentos.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-[var(--ochre)] shrink-0">02</span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Receba seu resultado</h3>
                <p className="text-[var(--brown)] text-sm mt-1">Descubra qual logismoi predomina na sua vida.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-[var(--ochre)] shrink-0">03</span>
              <div>
                <h3 className="font-semibold text-[var(--foreground)]">Baixe o ebook gratuito</h3>
                <p className="text-[var(--brown)] text-sm mt-1">Aprofunde-se na sabedoria dos Padres do Deserto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-4 py-16 sm:py-20 bg-[var(--brown)] text-[var(--background)]">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-balance">
            Descubra sua batalha.<br />
            <span className="text-[var(--ochre)]">Encontre a vitória.</span>
          </h2>
          <p className="text-[var(--sand)] text-sm sm:text-base">
            Faça o quiz agora e receba gratuitamente o ebook com a sabedoria dos Padres do Deserto para a sua jornada interior.
          </p>
          <Link
            href="/quiz"
            className="inline-block px-8 py-4 rounded-lg bg-[var(--ochre)] text-[var(--brown)] font-semibold hover:bg-[var(--ochre-hover)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ochre)] focus:ring-offset-2 focus:ring-offset-[var(--brown)]"
          >
            Fazer o quiz gratuito
          </Link>
          <p className="text-xs text-[var(--sand)]/80">
            Gratuito • 15 perguntas • Resultado imediato + ebook
          </p>
        </div>
      </section>
    </main>
  );
}
