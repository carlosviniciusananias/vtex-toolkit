# Guia de Uso: VTEX Toolkit CLI

O **VTEX Toolkit** é um conjunto de regras inteligentes (.mdc), comandos e
habilidades para o Cursor IDE, projetado para acelerar o desenvolvimento no
ecossistema VTEX (IO e FastStore).

## Instalação Rápida (Recomendado)

A forma mais simples de utilizar o toolkit em qualquer projeto é através da
nossa CLI oficial. Não é necessário baixar o repositório manualmente.

Abra o terminal na raiz do seu projeto e execute:

```bash
npx vtex-toolkit
```

Este comando irá:

1. Perguntar qual framework você está utilizando (**Storefront IO** ou
   **FastStore**).
2. Instalar as regras inteligentes em `.cursor/rules/`.
3. Instalar as habilidades (skills) em `.cursor/skills/`.
4. Instalar os atalhos de comandos em `.cursor/commands/`.

---

## O que está incluído?

### 1. Regras Inteligentes (.mdc)

Localizadas em `.cursor/rules/`, elas ensinam ao Cursor os padrões técnicos da
VTEX:

- **Storefront**: Blocks (JSONC), Frontend (React) e Backend (Node.js).
- **FastStore**: CMS, Componentes (Atomic Design) e Resolvers GraphQL.
- **Performance**: Checklists automáticos para Core Web Vitals (LCP, CLS).
- **Self-Healing**: Diagnóstico e correção proativa de erros comuns.

### 2. Padrões Avançados (Exemplos)

O toolkit inclui exemplos práticos de implementações reais:

- **Frontend**: Componentes de desconto dinâmico, prateleiras customizadas e
  manipulação de contexto (`useProductDispatch`).
- **Backend**: Consumo de APIs externas (ViaCEP), extensão de `MasterData` e
  resolvers GraphQL.
- **Contextos**: Integração profunda com `vtex.product-context`,
  `vtex.order-manager` e `vtex.session-client`.

### 3. Habilidades (Skills)

Localizadas em `.cursor/skills/`, permitem que o agente consulte documentações
oficiais:

- `vtex-api-consultant`: Consulta de endpoints e autenticação de APIs VTEX.
- `faststore-consultant`: Melhores práticas de componentes e CMS FastStore.

### 3. Comandos Rápidos

Localizados em `.cursor/commands/`, servem como atalhos para os workflows
`@new-*`.

---

## Como Usar

Após a instalação, reinicie o seu **Cursor IDE**. Você pode ativar os workflows
digitando `@` seguido do comando no chat ou Composer:

> **Nota Importante**: Ao utilizar qualquer comando de geração (`@new-*`), sempre forneça uma breve descrição do que você deseja realizar. Se o comando for enviado sozinho, o agente solicitará mais informações antes de agir.

### Comandos Storefront (VTEX IO)

- `@new-storefront-block name:hero-home type:row preload:true "Crie um banner principal para a home com imagem de fundo e um botão de CTA para a coleção de verão"`
- `@new-storefront-component name:DiscountBadge withSchema:true "Crie um componente de selo de desconto que mostre a porcentagem de economia baseada no preço de lista e preço de venda do produto"`
- `@new-storefront-service name:inventory-api type:external crud:true "Crie um serviço para consultar o estoque em um ERP externo, incluindo autenticação via AppKey e tratamento de erros"`

### Comandos FastStore

- `@new-faststore-cms type:section name:NewsletterSection schema:true "Configure uma seção de newsletter para o CMS com campos para título, descrição e cor de fundo customizável"`
- `@new-faststore-components name:ProductCard type:molecule "Crie um componente de card de produto seguindo o design system da loja, incluindo imagem, nome e preço com suporte a lazy loading"`
- `@new-faststore-resolvers name:shippingQuotes type:query fragment:true "Implemente um resolver para buscar cotações de frete customizadas integrando com a API de logística da VTEX"`

### Manutenção

- `@health`: Varredura de integridade e performance.
- `@format`: Formatação de código via Prettier.
- `@pr-ready`: Prepara o resumo e validações para o seu Pull Request.

---

## Boas Práticas e Segurança

### Padronização de Commits (Semantic Release)

Para garantir o versionamento automático e a publicação no NPM, este projeto utiliza **Conventional Commits**. Ao contribuir, utilize os seguintes prefixos:

- `feat:` -> Para novas funcionalidades (gera versão **MINOR**).
- `fix:` -> Para correções de bugs (gera versão **PATCH**).
- `chore:` -> Para tarefas de manutenção que não alteram o código (sem release).
- `docs:` -> Para alterações apenas em documentação (sem release).
- `BREAKING CHANGE:` no corpo do commit -> Para mudanças que quebram compatibilidade (gera versão **MAJOR**).

- **Confirmação de Intenção**: Para ações complexas, o agente pedirá sua
  confirmação antes de gerar múltiplos arquivos.
- **Referências Remotas**: As regras buscam exemplos de código diretamente do
  nosso
  [repositório oficial](https://github.com/carlosviniciusananias/vtex-toolkit),
  garantindo que seu projeto permaneça leve.
- **Site Editor**: Nunca remova a propriedade `title` dos blocos JSONC; ela é
  vital para a experiência do lojista no admin.
