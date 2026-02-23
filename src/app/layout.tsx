import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qual é a sua batalha interior? | Quiz dos Logismoi",
  description:
    "Descubra qual pensamento te sabota. Um quiz curto inspirado em Evágrio Pôntico e Cassiano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
