---

# Meu portfólio

## Sobre
Seja bem-vindos(as), este é meu web site pessoal, desenvolvido com React, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **TypeScript**: Uma linguagem de programação que é um superset de JavaScript, adicionando tipagem estática opcional.
- **Next.js 15** (App Router) + **React 19**: Framework e UI (ver [docs/runtime-migration-notes.md](docs/runtime-migration-notes.md)).
- **Lucide React**: Uma coleção de ícones SVG para uso em projetos React.
- **Tailwind CSS v4** + **shadcn/ui**: Estilização e primitivos (ver [docs/ui-foundation.md](docs/ui-foundation.md)).
- **ESLint**: Uma ferramenta de análise de código estática para identificar padrões problemáticos no código JavaScript.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha os valores. Detalhes em [docs/environment-variables.md](docs/environment-variables.md).

| Variável | Uso |
|----------|-----|
| `NEXT_PUBLIC_EMAILJS_USER_ID` | Chave pública EmailJS (formulário de contato) |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID do serviço EmailJS |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID do template EmailJS |
| `NEXT_PUBLIC_GA_TRACKING` | ID de medição do Google Analytics |

Arquivos `.env*` (exceto `.env.example`) não devem ser commitados.

## Desenvolvimento

Para executar este projeto localmente, siga estas etapas:

1. Clone este repositório em sua máquina local.
2. Copie `.env.example` para `.env.local` e configure as variáveis.
3. Instale as dependências usando npm ou yarn:
   ```
   npm install
   ```
   ou
   ```
   yarn
   ```
4. Execute o projeto em modo de desenvolvimento:
   ```
   npm run dev
   ```
   ou
   ```
   yarn dev
   ```
5. Abra [http://localhost:3000/](http://localhost:3000/) (modo desenvolvimento com `npm run dev`).

**Preview da build de produção** (export estático em `build/`):

```bash
npm run build
npm start
```

`next start` não se aplica aqui: o projeto usa `output: 'export'` em `next.config.mjs`.

6. Este projeto está hospedado na [Vercel](https://vercel.com/) para ver o portfólio em ação online [clique aqui.](https://rafaelsousa.vercel.app/)

## Solução de problemas — formulário de contato

O formulário usa [EmailJS](https://www.emailjs.com/) 100% no client (`output: 'export'`). Se um envio falhar, cheque nesta ordem:

1. **Variáveis de ambiente**: confirme `NEXT_PUBLIC_EMAILJS_USER_ID`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID` e `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` no painel da Vercel (Production) e em `.env.local`. Detalhes em [docs/environment-variables.md](docs/environment-variables.md).
2. **Bundle estático**: rode `npm run build` e confira `grep -ro "NEXT_PUBLIC_EMAILJS" build/static` — se os IDs aparecerem vazios, faltam envs no build.
3. **Domínio permitido no EmailJS**: no dashboard do EmailJS, em **Account → Security → Allowed Origins**, adicione o domínio de produção (ex.: `rafaelsousa.vercel.app`). Sem isso o EmailJS recusa a requisição e o toast de erro é exibido.
4. **Console do navegador**: abra DevTools → Console e procure por `[contact-form] EmailJS env vars ausentes:` (config) ou `[contact-form] EmailJS error:` (falha de envio).
5. **Limite mensal**: o plano gratuito do EmailJS tem cota limitada por mês. Se excedida, o toast de erro aparece sem detalhe no console.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, correções de bugs ou melhorias para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
