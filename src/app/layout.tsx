import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-crimson",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qual é a sua batalha interior? | Quiz dos Logismoi",
  description:
    "Descubra qual pensamento te sabota. Sabedoria dos Padres do Deserto — Evágrio Pôntico e Cassiano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={crimson.variable}>
      <body className="antialiased min-h-screen font-serif">
        {/* Form oculto para o Netlify detectar o form "ebook-lead" no build (página de resultado é dinâmica) */}
        <form name="ebook-lead" data-netlify="true" netlify-honeypot="bot" hidden>
          <input type="hidden" name="form-name" value="ebook-lead" />
          <input type="email" name="email" />
          <input type="text" name="bot" tabIndex={-1} autoComplete="off" />
        </form>
        {children}
      </body>
    </html>
  );
}
