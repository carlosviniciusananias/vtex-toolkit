# Guia de Uso: VTEX Toolkit para Cursor

Este repositório contém um conjunto de regras (.mdc) e comandos otimizados para
o Cursor, focados em acelerar o desenvolvimento no ecossistema VTEX (IO e
FastStore).

## O que há de novo?

A estrutura foi otimizada para máxima eficiência de tokens e segurança
operacional:

- **Otimização de Tokens**: Regras globais e de domínio reescritas para serem
  puramente diretivas.
- **Pasta `commands/`**: Atalhos rápidos com parâmetros definidos para todos os
  workflows.
- **Auto-Healing de Dependências**: Validação proativa de `manifest.json` ao
  criar componentes.
- **Site Editor Ready**: Garantia de títulos semânticos em todos os blocos
  JSONC.
- **Confirmação de Intenção**: O agente confirma ações complexas para evitar
  gerações acidentais.

---

## Estrutura do Repositório

```text
.cursor/rules/
├── storefront/
│   ├── blocks.mdc        - Templates de blocos (JSONC)
│   ├── frontend.mdc      - Componentes React customizados
│   ├── backend.mdc       - Serviços Node.js (Full Stack)
│   ├── perf.mdc          - Checklist de performance (CWV)
│   ├── styles.mdc        - CSS Modules e Design Tokens
│   └── self-healing.mdc  - Auto-correção e integridade
├── faststore/
│   └── general.mdc       - Padrões FastStore (CMS, UI, GraphQL)
└── global.mdc            - Orquestrador global de workflows

commands/                 - Atalhos e parâmetros para comandos @new-*
├── new-block.md
├── new-component.md
├── new-service.md
├── new-faststore-cms.md
├── new-faststore-components.md
└── new-faststore-resolvers.md
```

---

## Como Usar no Cursor

### Passo 1: Instalação no seu Projeto

Para utilizar o toolkit, copie as pastas `.cursor/rules/` e `commands/` para a
raiz do seu projeto:

```bash
cp -r .cursor/rules/ your-project/
cp -r commands/ your-project/
```

### Passo 2: Ativação

O Cursor reconhecerá as regras automaticamente. Utilize o símbolo `@` seguido do
comando desejado no chat ou no Composer.

---

## Comandos Disponíveis

### Storefront (VTEX IO)

- **`@new-storefront-block`**: Gera blocos JSONC com `title` semântico e
  performance (LCP/CLS).
- **`@new-storefront-component`**: Cria componentes React com `useCssHandles` e
  auto-healing de `manifest.json`.
- **`@new-storefront-service`**: Gera serviços Node.js (Client, Middleware,
  Resolver) com suporte a CRUD.

### FastStore

- **`@new-faststore-cms`**: Configura `content-types.json` e `sections.json`.
- **`@new-faststore-components`**: Cria componentes/overrides seguindo Atomic
  Design.
- **`@new-faststore-resolvers`**: Implementa lógica GraphQL (TypeDefs e
  Resolvers).

### Manutenção

- **`@health`**: Varredura de integridade, referências (#) e performance.
- **`@format`**: Executa `npm run format`.
- **`@pr-ready`**: Prepara o PR (Health + Format + Resumo).

---

## Boas Práticas e Segurança

1. **Confirmação**: O agente pode pedir confirmação antes de criar múltiplos
   arquivos de backend.
2. **Referências**: A pasta `examples/` é a única fonte de verdade para padrões
   de código.
3. **Títulos**: Nunca remova a propriedade `title` dos blocos; ela é essencial
   para o Site Editor.
4. **Dependências**: O toolkit avisará se você esquecer de adicionar o app de
   frontend no `manifest.json` do app de store.
