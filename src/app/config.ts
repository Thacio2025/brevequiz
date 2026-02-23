/**
 * Configuração do CTA (call to action) na tela de resultado.
 * Altere aqui ou use variáveis de ambiente para não precisar mexer no código.
 */
export const CTA = {
  /** Texto do botão principal */
  label: process.env.NEXT_PUBLIC_CTA_LABEL ?? "Quero entender isso a fundo",
  /** URL de destino (ex.: exame completo, landing, etc.) */
  url: process.env.NEXT_PUBLIC_CTA_URL ?? "https://exemplo.com/exame-completo",
  /** Se true, abre em nova aba */
  openInNewTab: process.env.NEXT_PUBLIC_CTA_NEW_TAB !== "false",
};

/** Opção alternativa: "Quero uma conversa" → WhatsApp ou calendário */
export const CTA_CONVERSA = {
  label: process.env.NEXT_PUBLIC_CTA_CONVERSA_LABEL ?? "Quero uma conversa",
  url:
    process.env.NEXT_PUBLIC_CTA_CONVERSA_URL ??
    "https://wa.me/5511999999999",
  openInNewTab: true,
};
