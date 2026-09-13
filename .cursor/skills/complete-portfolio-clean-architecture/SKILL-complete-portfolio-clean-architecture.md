# Skill: Complete and Harden a Next.js Portfolio with Clean Architecture

## Objetivo

Levar o projeto do estado atual de migração parcial para um estado completo, consistente e pronto para manutenção, priorizando:

- Clean Architecture pragmática para Next.js App Router;
- testes automatizados com Vitest + Testing Library;
- formulário de contato seguro e desacoplado;
- i18n consistente;
- analytics coerente com Plausible;
- navegação single-page consistente;
- eliminação de duplicações e dependências mortas;
- CI para lint, testes e build;
- documentação alinhada ao código;
- preservação do comportamento visual atual.

A implementação deve ser incremental, verificável e orientada a comportamento. Não fazer uma reescrita indiscriminada.

---

## Contexto do projeto

Stack esperada:

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- React
- React Hook Form
- Zod
- i18n existente baseado em conteúdo/locales
- Plausible como analytics
- Clean Architecture em migração
- static export (`output: 'export'`), se essa configuração continuar sendo requisito do projeto

Estado identificado pelo code review:

### Gaps críticos

1. Não existem testes automatizados.
2. Não existem `application/` e `infrastructure/`.
3. Contato usa EmailJS diretamente no client.
4. Analytics possui documentação/dependência inconsistente.
5. Navegação aponta para `/about` e `/contact`, enquanto a Home funciona como página única com seções.

### Gaps funcionais

6. `responsibilities` existem nos dados, mas não são renderizadas pela Timeline.
7. Formulário não possui `subject`.

### Gaps de arquitetura/manutenção

8. Wrappers/reexports redundantes (`SiteHeader`, `SiteFooter`, UI wrappers).
9. `cn()` duplicado.
10. Tipo `Experience` duplicado.
11. `@next/third-parties` não utilizado.
12. Não existe CI.
13. README/documentação diverge da implementação atual.

---

# Regras de execução

## Regra 1 — Não quebrar o produto atual

Antes de alterar código:

1. identificar scripts existentes;
2. executar lint;
3. executar `tsc --noEmit`;
4. executar build;
5. mapear estrutura de `src/`;
6. identificar como i18n, conteúdo, analytics e contato funcionam atualmente.

Depois de cada grande etapa, repetir os checks.

Nunca substituir arquitetura funcional por abstrações sem necessidade.

---

## Regra 2 — Preserve a UI

Não alterar layout, tipografia, spacing, responsividade, animações ou identidade visual sem necessidade funcional.

Mudanças devem ser principalmente arquiteturais, comportamentais e de qualidade.

---

## Regra 3 — Não fazer "big bang refactor"

Executar em fases independentes:

1. baseline;
2. domínio/conteúdo;
3. application;
4. infrastructure;
5. contato;
6. navegação;
7. Timeline;
8. i18n;
9. testes;
10. analytics;
11. limpeza;
12. CI;
13. documentação;
14. validação final.

Cada fase deve terminar com lint + typecheck e, quando aplicável, testes.

---

# Arquitetura alvo

Usar Clean Architecture de forma pragmática.

Sugestão:

```text
src/
├── domain/
│   ├── entities/
│   ├── services/
│   └── ...
│
├── application/
│   ├── services/
│   ├── use-cases/
│   └── ...
│
├── infrastructure/
│   ├── contact/
│   ├── analytics/
│   └── ...
│
├── presentation/
│   ├── components/
│   ├── sections/
│   └── ...
│
├── shared/
│   ├── lib/
│   ├── config/
│   └── ...
│
└── ...
```

A estrutura existente pode ser preservada quando já estiver adequada. Não mover arquivos apenas para satisfazer uma convenção.

Dependências devem apontar preferencialmente:

```text
presentation → application → domain
infrastructure → application/domain
shared → cross-cutting utilities
```

O domínio não deve depender de React, Next.js, EmailJS ou bibliotecas específicas de infraestrutura.

---

# Fase 1 — Baseline

Executar:

```bash
npm install
npm run lint
npx tsc --noEmit
npm run build
```

Se algum comando não existir, registrar o estado e não inventar resultados.

Criar uma lista objetiva de problemas encontrados.

---

# Fase 2 — Consolidar domínio e conteúdo

## 2.1 Experience

Escolher uma única definição canônica de `Experience`.

Evitar tipos duplicados entre:

```text
domain/entities
site-content
```

O conteúdo deve depender do modelo canônico.

## 2.2 responsibilities

Garantir que cada experiência possa conter:

```ts
responsibilities: string[]
```

O componente Timeline deve renderizar essas responsabilidades de forma acessível e visualmente coerente.

Não remover responsabilidades dos dados apenas para fazer os testes passarem.

## 2.3 Helpers

Consolidar helpers duplicados.

Deve existir apenas uma implementação oficial de:

```ts
cn()
```

Também centralizar `formatEndYear` ou equivalente.

---

# Fase 3 — Application layer

Criar casos de uso somente onde existe comportamento real.

Para contato, criar uma abstração semelhante a:

```ts
export interface ContactService {
  send(input: ContactInput): Promise<ContactResult>;
}
```

O contrato deve ficar fora da infraestrutura específica.

Exemplo de modelo:

```ts
export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

Não acoplar `ContactService` a EmailJS.

---

# Fase 4 — Infrastructure layer

Criar implementação concreta do serviço de contato.

Se o projeto continuar usando EmailJS por causa do static export:

```text
presentation
   ↓
application ContactService
   ↓
infrastructure EmailJsContactService
```

A configuração do EmailJS deve permanecer isolada.

## Segurança

Nunca introduzir segredo privado no frontend.

Variáveis públicas necessárias ao funcionamento do EmailJS podem usar `NEXT_PUBLIC_*`, mas não tratar essas variáveis como secrets.

Documentar claramente a diferença entre:

- identificadores públicos;
- chaves privadas;
- secrets que jamais devem ir para o bundle.

Se o projeto puder abandonar `output: 'export'`, avaliar uma API Route/Route Handler com backend e Resend. Porém, não migrar para backend apenas por preferência arquitetural se isso quebrar o requisito de deploy estático.

Não implementar Resend sem verificar compatibilidade com a estratégia de deploy.

---

# Fase 5 — ContactForm

O contrato obrigatório deve ser:

```text
Name
Email
Subject
Message
```

Atualizar:

- schema Zod;
- tipos;
- default values;
- mensagens de validação;
- i18n;
- UI;
- serviço de contato;
- testes.

Exemplo conceitual:

```ts
const contactSchema = z.object({
  name: ...,
  email: ...,
  subject: ...,
  message: ...,
});
```

O componente não deve conhecer detalhes da implementação concreta de EmailJS.

O fluxo deve ser:

```text
ContactForm
   ↓
application/use-case
   ↓
ContactService
   ↓
EmailJsContactService
```

Sucesso e erro devem ter estados previsíveis e testáveis.

---

# Fase 6 — Navegação

O produto possui uma Home composta por seções.

Seções relevantes devem usar anchors:

```text
#about
#experience
#projects
#contact
```

Evitar:

```text
/about
/contact
```

quando essas rotas forem apenas duplicações da Home.

Revisar:

- header;
- footer;
- mobile navigation;
- CTA;
- links internos;
- locale handling.

Garantir que todos os links apontem para destinos existentes.

Não criar páginas separadas apenas para satisfazer o menu.

---

# Fase 7 — i18n

Verificar todas as strings adicionadas durante o refactor.

O `subject`, mensagens de validação, sucesso e erro precisam existir nos idiomas suportados.

Não duplicar lógica de locale.

Criar testes para:

- locale padrão;
- locale alternativo;
- fallback;
- resolução do conteúdo;
- chaves importantes.

Se o projeto usa uma implementação própria em vez de i18next, não adicionar i18next apenas porque uma documentação antiga menciona a biblioteca.

A implementação real do projeto é a fonte de verdade.

---

# Fase 8 — Analytics

Padronizar analytics em Plausible.

Remover referências antigas a Google Analytics se não houver implementação real de GA.

Se existir abstração de analytics, manter uma interface pequena e desacoplada:

```ts
interface AnalyticsService {
  track(event: string, properties?: Record<string, unknown>): void;
}
```

Não adicionar analytics desnecessário.

Remover `@next/third-parties` se realmente não houver uso.

---

# Fase 9 — Testes

Instalar:

```bash
vitest
@testing-library/react
@testing-library/jest-dom
@testing-library/user-event
jsdom
```

Usar `@testing-library/dom` somente se necessário pela versão instalada.

Criar:

```text
vitest.config.ts
```

Scripts:

```json
{
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

Adicionar configuração de cobertura.

Não perseguir 100% de linhas artificialmente.

A meta é aproximadamente 100% dos comportamentos críticos descritos abaixo.

---

# Matriz mínima de testes

## Domain / pure functions

Testar:

- `Experience`;
- `formatEndYear`;
- helpers;
- resolvers de conteúdo;
- locale resolver;
- regras puras.

## EmailJS config

Testar:

- configuração válida;
- variáveis ausentes;
- comportamento esperado quando configuração não existe;
- nenhuma secret privada hardcoded.

## Contact schema

Testar:

- nome obrigatório;
- email válido;
- subject obrigatório;
- message obrigatório;
- limites de tamanho, se existirem;
- payload válido;
- payload inválido.

## ContactForm

Testar comportamento, não implementação:

1. renderiza campos;
2. valida campos obrigatórios;
3. rejeita email inválido;
4. exige subject;
5. envia payload correto;
6. mostra loading;
7. mostra sucesso;
8. mostra erro;
9. impede submissões inválidas;
10. trata configuração ausente;
11. funciona com serviço mockado.

Não fazer chamadas reais ao EmailJS nos testes.

---

# Timeline

Testar:

- experiências renderizadas;
- anos;
- empresa/cargo;
- responsibilities;
- múltiplas responsibilities;
- experiência sem responsibilities, se permitido;
- acessibilidade básica.

O teste deve verificar comportamento visível, não detalhes internos de implementação.

---

# LanguageSwitcher / i18n UI

Testar:

- locale atual;
- troca de idioma;
- persistência/comportamento esperado;
- conteúdo atualizado;
- ausência de regressão em links.

Mockar browser APIs somente quando necessário.

---

# Estratégia de mocks

Preferir dependency injection.

Exemplo:

```ts
const contactService = {
  send: vi.fn(),
};
```

Evitar mockar módulos internos excessivamente.

Mockar somente fronteiras externas:

- EmailJS;
- analytics;
- browser APIs;
- serviços de infraestrutura.

---

# Fase 10 — CI

Criar:

```text
.github/workflows/ci.yml
```

O workflow deve executar em pull request e push para branches principais.

Pipeline:

```text
install
  ↓
lint
  ↓
typecheck
  ↓
test
  ↓
build
```

Se coverage estiver disponível, executar também:

```bash
npm run test:coverage
```

Não tornar uma ferramenta de coverage uma dependência opcional sem configurar corretamente o ambiente.

Usar uma versão de Node compatível com o projeto.

---

# Fase 11 — Limpeza arquitetural

Após os testes passarem:

## Remover ou consolidar

- `SiteHeader` se for apenas reexport;
- `SiteFooter` se for apenas reexport;
- UI wrappers sem valor arquitetural;
- `cn()` duplicado;
- tipos duplicados;
- dependências mortas.

Antes de apagar qualquer arquivo:

1. procurar todas as referências;
2. confirmar que não existe import dinâmico;
3. confirmar que não é usado por configuração;
4. rodar typecheck/build.

Não apagar abstrações que estejam fornecendo uma fronteira arquitetural real.

---

# Fase 12 — Documentação

Atualizar README e documentação técnica para refletir o código real.

Documentar:

- stack atual;
- comandos;
- arquitetura;
- testes;
- cobertura;
- variáveis de ambiente;
- contato;
- analytics;
- i18n;
- deploy;
- limitações do static export;
- CI.

Eliminar referências a:

- Google Analytics, se removido;
- i18next, se não usado;
- Resend, se não implementado.

Nunca documentar uma tecnologia somente porque ela aparece no SDD antigo.

---

# Definition of Done

A tarefa só estará concluída quando:

## Build

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

estiverem verdes.

## Funcionalidade

- [ ] ContactForm possui Name, Email, Subject e Message.
- [ ] Zod valida os quatro campos.
- [ ] ContactService está desacoplado da UI.
- [ ] EmailJS está isolado em infrastructure.
- [ ] Timeline renderiza responsibilities.
- [ ] Navegação usa anchors da Home.
- [ ] i18n cobre novas strings.
- [ ] Analytics está coerente com Plausible.
- [ ] Dependência morta foi removida.
- [ ] Duplicações foram eliminadas.

## Testes

- [ ] Vitest configurado.
- [ ] Testing Library configurado.
- [ ] script `test`.
- [ ] script `test:coverage`.
- [ ] testes de domínio/helpers.
- [ ] testes de schema.
- [ ] testes de ContactForm.
- [ ] testes de Timeline.
- [ ] testes de i18n.
- [ ] testes de configuração EmailJS.
- [ ] mocks de infraestrutura.
- [ ] sem chamadas externas reais.

## Qualidade

- [ ] CI criado.
- [ ] README atualizado.
- [ ] `.env.example` atualizado, se aplicável.
- [ ] nenhum secret hardcoded.
- [ ] nenhuma dependência morta conhecida.
- [ ] nenhum import quebrado.
- [ ] nenhuma rota órfã conhecida.

---

# Comandos finais

Executar e reportar exatamente:

```bash
npm run lint
npx tsc --noEmit
npm test
npm run test:coverage
npm run build
```

Se algum comando não existir, corrigir o projeto antes de considerar a tarefa concluída.

---

# Formato obrigatório do relatório final do Agent

Responder com:

## Implementado

Lista objetiva das mudanças.

## Arquitetura

Mostrar a estrutura relevante:

```text
src/
├── domain/
├── application/
├── infrastructure/
├── presentation/
└── shared/
```

## Testes

Informar:

- quantidade de testes;
- suites;
- resultado;
- cobertura por categoria, se disponível.

## CI

Informar workflow e checks executados.

## Pendências

Somente problemas reais que não puderam ser resolvidos.

## Validação

Informar o resultado de:

```text
lint: PASS/FAIL
typecheck: PASS/FAIL
test: PASS/FAIL
coverage: PASS/FAIL
build: PASS/FAIL
```

Não declarar PASS sem executar o comando correspondente.

---

# Como o Agent deve trabalhar

Não pedir confirmação para cada arquivo.

Tomar decisões locais razoáveis e continuar.

Pedir confirmação somente quando houver uma decisão irreversível ou uma mudança de requisito, por exemplo:

- remover `output: 'export'`;
- trocar completamente EmailJS por Resend/backend;
- alterar identidade visual;
- mudar contrato público de deploy.

Caso contrário, implementar, testar e corrigir.

Prioridade:

```text
correção
→ segurança
→ arquitetura
→ testes
→ manutenção
→ documentação
→ estética/refinamento
```

Não criar complexidade arquitetural apenas para aumentar a quantidade de camadas.

O objetivo é deixar o projeto realmente completo, testável e coerente com Clean Architecture, não apenas produzir arquivos que pareçam seguir Clean Architecture.
