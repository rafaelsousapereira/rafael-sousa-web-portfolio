---

# Meu portfólio

## Sobre
Seja bem-vindos(as), este é meu web site pessoal, desenvolvido com React, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **Vite**: Um construtor de aplicações web rápido que utiliza a importação de ESM (ECMAScript Modules) nativa do navegador para desenvolvimento mais eficiente.
- **TypeScript**: Uma linguagem de programação que é um superset de JavaScript, adicionando tipagem estática opcional.
- **React**: Uma biblioteca JavaScript para construir interfaces de usuário.
- **React Router DOM**: Uma biblioteca de roteamento para React que permite navegação entre componentes de forma declarativa.
- **Lucide React**: Uma coleção de ícones SVG para uso em projetos React.
- **Tailwind CSS**: Um framework de CSS utilitário para criar designs personalizados sem sair do HTML.
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

6. Este projeto está hospedado na [Vercel](https://vercel.com/) para ver o portifólio em ação online [clique aqui.](https://rafaelsousa.vercel.app/)

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões, correções de bugs ou melhorias para o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
