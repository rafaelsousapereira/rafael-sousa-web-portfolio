---

# Meu portfólio

## Sobre

Site pessoal de Rafael Sousa Pereira, portfólio one-page com App Router,
i18n próprio (pt-BR / en-US), tema claro/escuro e formulário de contato.

## Stack atual

- **Next.js 15** App Router + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Base UI)
- **React Hook Form** + **Zod**
- **EmailJS** no client (compatível com `output: 'export'`)
- **Plausible** (opcional, via `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`)
- **Vitest** + **Testing Library**
- i18n próprio em `src/shared/content` (não usa i18next)

## Arquitetura

Clean Architecture pragmática:

```text
src/
├── domain/            # entidades e funções puras
├── application/       # contratos e casos de uso (contato, analytics)
├── infrastructure/    # EmailJS e Plausible
├── presentation/      # seções e UI do portfólio
├── shared/            # conteúdo, i18n, tema, helpers
├── components/        # header, footer, formulário, primitivos shadcn
└── app/               # rotas Next.js
```

Dependências preferenciais: presentation → application → domain.
Infraestrutura implementa contratos da application. O domínio não depende de
React, Next.js ou EmailJS.

O deploy é **static export** (`output: 'export'`, pasta `build/`). Por isso o
contato permanece no client via EmailJS, sem Route Handlers nem Resend.

## Comandos

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm test
npm run test:coverage
npm run build
npm start
```

`next start` não se aplica: o preview de produção usa `serve` na pasta `build/`.

## Testes e cobertura

- `npm test` executa Vitest uma vez.
- `npm run test:coverage` gera relatório de cobertura (v8) dos comportamentos
  críticos: schema de contato, formulário, Timeline, i18n, config EmailJS e
  helpers de domínio.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`. Detalhes em
[docs/environment-variables.md](docs/environment-variables.md).

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_SITE_URL` | URL canônica (SEO, sitemap, robots). Na Vercel, cai para a URL da plataforma se estiver vazia |
| `NEXT_PUBLIC_EMAILJS_USER_ID` | Identificador público EmailJS |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço EmailJS |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID do template EmailJS |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Domínio Plausible (opcional) |

Arquivos `.env*` (exceto `.env.example`) não devem ser commitados.

## Contato

O formulário valida **nome, e-mail, assunto e mensagem** com Zod e envia via
`ContactService` → `EmailJsContactService`. A UI não chama EmailJS diretamente.

Se um envio falhar, cheque nesta ordem:

1. Variáveis `NEXT_PUBLIC_EMAILJS_*` em `.env.local` e no painel da Vercel.
2. Bundle estático: `grep -ro "NEXT_PUBLIC_EMAILJS" build/static`.
3. Origens permitidas no dashboard do EmailJS.
4. Console do navegador para falhas de configuração ou envio.
5. Cota mensal do plano EmailJS.

## Analytics

Plausible é carregado somente quando `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` está
definido. Não há Google Analytics neste projeto.

## i18n

Locales: `pt-BR` (padrão) e `en-US`, com persistência em `localStorage`.
Conteúdo e strings de UI vivem em `src/shared/content`.

## Navegação

A Home é a página única. O menu usa âncoras `/#about` e `/#contact`.
`/about` e `/contact` apenas redirecionam para essas seções.

## CI

O workflow `.github/workflows/ci.yml` roda em push/PR: install, lint,
typecheck, test, coverage e build.

## Deploy

Hospedado na [Vercel](https://vercel.com/). Site:
[rafaelsousa.vercel.app](https://rafaelsousa.vercel.app/).

Limitação do static export: não há backend neste repositório. Secrets privados
não devem entrar no bundle.

## Contribuições

Contribuições são bem-vindas via issue ou pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
