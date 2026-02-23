# Prompt para gerar a imagem do hero (landing)

Use este texto em uma IA geradora de imagem (DALL·E, Midjourney, Stable Diffusion, etc.) para criar a imagem de fundo do hero da landing.

---

## Prompt (copie e cole)

```
Paisagem de deserto ao pôr do sol, dunas suaves em tons de areia e ocre, céu em gradiente dourado e âmbar. Silhueta discreta de uma figura humana de capuz (monge ou eremita) em pé no topo de uma duna, de costas, contemplativa. Estilo contemplativo e sereno, paleta terrosa (areia, ocre, marrom claro), sem elementos modernos. Atmosfera de sabedoria antiga e solidão pacífica. Proporção horizontal (landscape), adequada para fundo de hero em site. Sem texto na imagem.
```

---

## Onde colocar a imagem no projeto

1. **Salve a imagem** gerada com um desses nomes (ou outro que preferir):
   - `hero-deserto.jpg` ou
   - `hero-deserto.png` ou
   - `hero-deserto.webp`

2. **Coloque o arquivo** dentro da pasta **`public`** na raiz do projeto:

   ```
   Breve Quiz Logismoi/
   └── public/
       └── hero-deserto.jpg   ← sua imagem aqui
   ```

   Se a pasta `public` não existir, crie ela e coloque a imagem dentro.

3. **O código já está pronto:** em `src/app/page.tsx` o hero usa essa imagem como fundo. Assim que o arquivo estiver em `public/hero-deserto.jpg`, o site passará a exibir a imagem (com um gradiente por cima para o texto continuar legível). Se a imagem ainda não existir, o hero mostra só o gradiente terroso.
