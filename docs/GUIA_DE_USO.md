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

### 2. Habilidades (Skills)

Localizadas em `.cursor/skills/`, permitem que o agente consulte documentações
oficiais:

- `vtex-api-consultant`: Consulta de endpoints e autenticação de APIs VTEX.
- `faststore-consultant`: Melhores práticas de componentes e CMS FastStore.

### 3. Comandos Rápidos

Localizados em `.cursor/commands/`, servem como atalhos para os workflows `@new-*`.

---

## Como Usar

Após a instalação, reinicie o seu **Cursor IDE**. Você pode ativar os workflows
digitando `@` seguido do comando no chat ou Composer:

### Comandos Storefront (VTEX IO)

- `@new-storefront-block`: Gera blocos JSONC com títulos semânticos.
- `@new-storefront-component`: Cria componentes React com auto-healing de
  dependências.
- `@new-storefront-service`: Desenvolve serviços Node.js completos (CRUD ready).

### Comandos FastStore

- `@new-faststore-cms`: Configura seções e tipos de conteúdo.
- `@new-faststore-components`: Cria componentes e overrides.
- `@new-faststore-resolvers`: Implementa lógica GraphQL e resolvers.

### Manutenção

- `@health`: Varredura de integridade e performance.
- `@format`: Formatação de código via Prettier.
- `@pr-ready`: Prepara o resumo e validações para o seu Pull Request.

---

## Boas Práticas e Segurança

- **Confirmação de Intenção**: Para ações complexas, o agente pedirá sua
  confirmação antes de gerar múltiplos arquivos.
- **Referências Remotas**: As regras buscam exemplos de código diretamente do
  nosso
  [repositório oficial](https://github.com/carlosviniciusananias/vtex-toolkit),
  garantindo que seu projeto permaneça leve.
- **Site Editor**: Nunca remova a propriedade `title` dos blocos JSONC; ela é
  vital para a experiência do lojista no admin.
