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
        {children}
      </body>
    </html>
  );
}
