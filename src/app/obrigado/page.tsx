import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <main className="min-h-screen px-4 py-16 max-w-xl mx-auto flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4">
        Obrigado!
      </h1>
      <p className="text-[var(--brown)] mb-8">
        Em breve você receberá o ebook com a sabedoria dos Padres do Deserto na sua jornada interior.
      </p>
      <Link
        href="/"
        className="text-[var(--ochre)] font-medium hover:underline"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
