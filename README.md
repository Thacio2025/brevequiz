# Breve Quiz dos Logismoi

Quiz curto (~5 minutos) para ajudar a descobrir **qual é o logismoi dominante** — o pensamento que mais assalta a pessoa, na tradição de Evágrio Pôntico e Cassiano. Porta de entrada para um funil (ex.: exame completo ou conversa).

## Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento (http://localhost:3000)
npm run dev

# Build de produção
npm run build

# Rodar produção
npm start
```

## Estrutura do projeto

- **`/`** — Landing: título, subtítulo, botão "Fazer o quiz"
- **`/quiz`** — Quiz com 15 perguntas (escala Nunca → Sempre); ao final redireciona para o resultado
- **`/resultado?dominant=<id>`** — Exibe o logismoi dominante, antídoto dos Padres, formulário de email (ebook) e CTAs
- **`/obrigado`** — Página de agradecimento após envio do email (para receber o ebook)

Os 8 logismoi (nomes em português): **Gula**, **Luxúria**, **Avareza**, **Tristeza**, **Ira**, **Acídia**, **Vanaglória**, **Orgulho**.

## Configurar o CTA (call to action)

O botão na tela de resultado pode ser alterado de duas formas:

### 1. Variáveis de ambiente (recomendado)

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Texto do botão principal (ex.: "Quero entender isso a fundo")
NEXT_PUBLIC_CTA_LABEL=Quero entender isso a fundo

# URL de destino (ex.: link do exame completo ou outra landing)
NEXT_PUBLIC_CTA_URL=https://seusite.com/exame-completo

# Abrir em nova aba? (true por padrão)
NEXT_PUBLIC_CTA_NEW_TAB=true
```

Para o segundo botão "Quero uma conversa" (WhatsApp/calendário), use:

```env
NEXT_PUBLIC_CTA_CONVERSA_LABEL=Quero uma conversa
NEXT_PUBLIC_CTA_CONVERSA_URL=https://wa.me/5511999999999
```

A página de resultado exibe os dois CTAs: o principal e o de conversa (ambos configuráveis).

### 2. Constantes no código

Edite **`src/app/config.ts`**: altere os valores padrão de `CTA.label` e `CTA.url` (e, se quiser, use `CTA_CONVERSA` para um segundo botão na página de resultado).

## Conteúdo editável

- **Perguntas do quiz:** `src/data/questions.ts`
- **Nomes e frases de resultado dos logismoi:** `src/data/logismoi.ts`
- **Landing (título e subtítulo):** `src/app/page.tsx`

O quiz é front-end; a captura de email na página de resultado usa **Netlify Forms** (nome do form: `ebook-lead`). O form envia para o arquivo estático `public/__forms.html` (exigido pelo plugin Next.js da Netlify v5). No painel da Netlify, em *Forms* → form *ebook-lead* → *Form settings*, configure o redirect após envio para `/obrigado` para que o usuário veja a página de agradecimento.

---

## Deploy no Netlify

1. **Suba o projeto para um repositório Git** (GitHub, GitLab ou Bitbucket).  
   Se ainda não tiver:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Thacio2025/brevequiz.git
   git branch -M main
   git push -u origin main
   ```

2. **Entre no [Netlify](https://app.netlify.com)** e clique em **Add new site** → **Import an existing project**.

3. **Conecte o repositório**: escolha seu Git provider, autorize e selecione o repositório deste projeto.

4. **Configuração do build** (a Netlify costuma preencher automaticamente para Next.js):
   - **Build command:** `npm run build`
   - **Publish directory:** deixe em branco (o adapter Next.js da Netlify cuida disso)
   - **Node version:** em *Site settings* → *Environment variables* adicione `NODE_VERSION` = `18` (ou 20) se quiser fixar.

5. **Variáveis de ambiente (opcional):** em *Site settings* → *Environment variables* adicione as que você usa no CTA, por exemplo:
   - `NEXT_PUBLIC_CTA_LABEL`
   - `NEXT_PUBLIC_CTA_URL`
   - `NEXT_PUBLIC_CTA_CONVERSA_LABEL`
   - `NEXT_PUBLIC_CTA_CONVERSA_URL`

6. Clique em **Deploy site**. O primeiro deploy pode levar alguns minutos.

7. Depois do deploy, acesse a URL que a Netlify fornece (ex.: `https://nome-aleatorio.netlify.app`). Você pode alterar o nome em *Domain settings*.

O arquivo **`netlify.toml`** na raiz já define o comando de build; não é obrigatório configurar nada além do Git e, se quiser, das variáveis de ambiente.
