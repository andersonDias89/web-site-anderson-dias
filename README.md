# Anderson Dias | Landing Page

Landing page profissional em Next.js 16, React 19 e Tailwind CSS 4 para apresentação de serviços de desenvolvimento full stack, SEO técnico, performance e integrações.

## Stack

- Next.js 16 com App Router e export estático
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui

## Desenvolvimento local

Use Node.js 24.

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`.

## Validação

```bash
npm run lint
npm run build
```

O build gera o site estático em `out/`, pronto para hospedagem em GitHub Pages ou outro servidor estático.

## Deploy no GitHub Pages

O workflow `.github/workflows/pages.yml` publica automaticamente o conteúdo de `out/` no GitHub Pages quando houver push na branch `main`.

Para repositório de projeto, como `usuario/web-site-anderson-dias`, o workflow configura automaticamente:

- `NEXT_PUBLIC_SITE_URL=https://usuario.github.io/web-site-anderson-dias`
- `NEXT_PUBLIC_BASE_PATH=/web-site-anderson-dias`

Para repositório de usuário, como `usuario/usuario.github.io`, o workflow usa a raiz:

- `NEXT_PUBLIC_SITE_URL=https://usuario.github.io`
- `NEXT_PUBLIC_BASE_PATH=` vazio

Variáveis opcionais do repositório:

- `NEXT_PUBLIC_SITE_URL`: URL pública final, útil para domínio próprio.
- `NEXT_PUBLIC_BASE_PATH`: subcaminho público. Use vazio para domínio próprio na raiz.
- `NEXT_PUBLIC_WHATSAPP_URL`: link público do WhatsApp.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: token de verificação do Google.

Depois de criar o repositório no GitHub, habilite Pages com source `GitHub Actions` em `Settings > Pages` caso o deploy ainda não esteja ativo.

## Revisão técnica aplicada

- Build estático habilitado com `output: "export"` e `trailingSlash: true`.
- `next/image` configurado como `unoptimized` para funcionar em GitHub Pages sem servidor Next.
- Base path configurável para evitar quebra de assets e links em `github.io/<repo>`.
- URLs públicas centralizadas e validadas como HTTPS antes de serem usadas em links e metadados.
- Removido uso de animação pesada por item em favor de IntersectionObserver simples.
- Corrigido menu mobile para não expor links invisíveis no foco de teclado.
- README e workflow de deploy adicionados.
