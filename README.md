# VTEX Toolkit

**AI-powered productivity toolkit for VTEX development.** Build VTEX IO Store
Framework and FastStore projects faster with intelligent rules, live API
consultation, automated workflows, and best practices enforcement — all through
natural language in Cursor IDE.

<p align="center">
  <img src="https://img.shields.io/badge/VTEX_IO-F71963?style=flat&logo=vtex&logoColor=white" alt="VTEX">
  <img src="https://img.shields.io/badge/AI_Agent-10B981?style=flat&logo=openai&logoColor=white" alt="AI Agent">
  <img src="https://img.shields.io/badge/License-MIT-97CA00?style=flat" alt="MIT">
</p>

## Overview

O **VTEX Toolkit** é um ecossistema de produtividade para o Cursor IDE,
projetado para acelerar o desenvolvimento de lojas **VTEX IO (Storefront)** e
**FastStore**. Através de regras inteligentes, habilidades de consulta e
comandos automatizados, ele transforma o Cursor em um especialista em VTEX.

## Quick Install

```bash
npx vtex-toolkit
```

O comando automatiza a instalação de todo o ecossistema necessário para o seu
framework:

- **Regras Inteligentes (.mdc)**: Diretrizes técnicas e de performance.
- **Habilidades (Skills)**: Capacidade de consulta a APIs e documentações
  oficiais.
- **Comandos Rápidos**: Atalhos para geração de código e manutenção.

## Features

### Code Generation (6 workflows)

| Workflow             | Command                     | Description                                                      |
| -------------------- | --------------------------- | ---------------------------------------------------------------- |
| Storefront Block     | `@new-storefront-block`     | Gera blocos JSONC com títulos semânticos e performance (LCP/CLS) |
| Storefront Component | `@new-storefront-component` | Cria componentes React com auto-healing de dependências          |
| Storefront Service   | `@new-storefront-service`   | Desenvolve serviços Node.js completos (CRUD ready)               |
| FastStore CMS        | `@new-faststore-cms`        | Configura seções e tipos de conteúdo no Headless CMS             |
| FastStore Components | `@new-faststore-components` | Cria componentes e overrides seguindo Atomic Design              |
| FastStore Resolvers  | `@new-faststore-resolvers`  | Implementa lógica GraphQL e resolvers                            |

### Maintenance (3 workflows)

| Workflow     | Command     | Description                                             |
| ------------ | ----------- | ------------------------------------------------------- |
| Health Check | `@health`   | Varredura de integridade, referências (#) e performance |
| Format Code  | `@format`   | Formatação de código via Prettier                       |
| PR Ready     | `@pr-ready` | Prepara o resumo e validações para o seu Pull Request   |

### Skills (AI Consultation)

| Skill                           | Trigger                         | Description                                                  |
| ------------------------------- | ------------------------------- | ------------------------------------------------------------ |
| VTEX API Consultant             | _"Como buscar produto por ID?"_ | Consulta APIs VTEX (Catalog, Checkout, OMS, Logistics, etc.) |
| FastStore Consultant            | _"Como criar seção no CMS?"_    | Consulta documentação FastStore (hooks, GraphQL, components) |
| VTEX IO Services Best Practices | _Durante criação de serviços_   | Valida nomenclatura, rotas REST, tratamento de erros         |
| VTEX IO Blocks Best Practices   | _Durante criação de blocos_     | Valida CSS handles, schemas, i18n, performance               |
| FastStore Best Practices        | _Durante criação FastStore_     | Valida SCSS modules, hooks, analytics, Core Web Vitals       |

## Architecture

```
.cursor/
├── rules/                              # Regras inteligentes (.mdc)
│   ├── storefront/
│   │   ├── blocks.mdc                 # Padrões de blocos JSONC
│   │   ├── frontend.mdc               # Componentes React
│   │   └── backend.mdc                # Serviços Node.js
│   ├── faststore/
│   │   ├── cms.mdc                    # Headless CMS
│   │   ├── components.mdc             # Atomic Design
│   │   └── resolvers.mdc              # GraphQL
│   ├── performance.mdc                # Core Web Vitals (LCP, CLS)
│   └── self-healing.mdc               # Diagnóstico proativo
├── skills/                             # Habilidades (SKILL.md)
│   ├── consultants/
│   │   ├── vtex-api-consultant/
│   │   │   └── SKILL.md
│   │   └── faststore-consultant/
│   │       └── SKILL.md
│   └── best-practices/
│       ├── vtex-io-services/
│       │   └── SKILL.md
│       ├── vtex-io-blocks/
│       │   └── SKILL.md
│       └── faststore/
│           └── SKILL.md
└── commands/                           # Comandos rápidos
    ├── new-storefront-block.md
    ├── new-storefront-component.md
    ├── new-storefront-service.md
    ├── new-faststore-cms.md
    ├── new-faststore-components.md
    ├── new-faststore-resolvers.md
    ├── health.md
    ├── format.md
    └── pr-ready.md
```

**Progressive loading**: O agente carrega apenas o necessário para cada ação.
Consultas usam skills específicas. Geração de código usa regras + comandos.
Performance é validada automaticamente.

## Guia de Uso Rápido

Após a instalação, reinicie o seu **IDE**. Você pode ativar os workflows
digitando `@` seguido do comando no chat ou Composer:

### Geração de Código

```bash
# VTEX IO Store Framework
@new-storefront-block      # Blocos JSONC otimizados
@new-storefront-component  # Componentes React com hooks
@new-storefront-service    # Serviços Node.js (CRUD)

# FastStore
@new-faststore-cms         # Seções CMS
@new-faststore-components  # Componentes Next.js
@new-faststore-resolvers   # GraphQL resolvers
```

### Manutenção

```bash
@health    # Varredura completa do projeto
@format    # Formatação automática
@pr-ready  # Validação pré-PR
```

### Consulta Especializada (Skills)

O agente possui habilidades específicas que você pode solicitar:

```
"Como faço para buscar um produto por ID usando a API do catálogo?"
→ Ativa skill: vtex-api-consultant

"Como crio uma nova seção no CMS da FastStore?"
→ Ativa skill: faststore-consultant

"Quais são as boas práticas para nomear middlewares no VTEX IO?"
→ Ativa skill: vtex-io-services-best-practices
```

## Key Features

| Feature                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| **Intelligent Rules**     | Padrões técnicos VTEX embutidos em .mdc files          |
| **Live API Consultation** | Skills consultam APIs e docs oficiais em tempo real    |
| **Performance First**     | Checklists automáticos para Core Web Vitals (LCP, CLS) |
| **Self-Healing**          | Diagnóstico e correção proativa de erros comuns        |
| **Remote References**     | Exemplos de código do repositório oficial              |
| **Site Editor Safety**    | Preserva propriedade `title` nos blocos JSONC          |
| **Confirmation Flow**     | Pede confirmação antes de ações complexas              |
| **Auto-Dependencies**     | Resolve dependências de blocos e componentes           |

## Best Practices Enforcement

O toolkit valida automaticamente:

### VTEX IO Store Framework

- ✅ Nomenclatura de blocos (`vendor.app@version/block-name`)
- ✅ CSS Handles em camelCase
- ✅ Schemas com i18n (defineMessages)
- ✅ Error Boundaries para componentes críticos
- ✅ canUseDOM para SSR safety
- ✅ Interfaces com required/allowed corretos

### FastStore

- ✅ Nomenclatura PascalCase para componentes
- ✅ SCSS Modules (`.module.scss`)
- ✅ Design tokens (`var(--fs-spacing-*, --fs-color-*)`)
- ✅ Hooks corretos (usePDP, useSession, useCart)
- ✅ Analytics com sendAnalyticsEvent
- ✅ Performance (next/image, dynamic imports, next/font)

### Backend (Node.js)

- ✅ Clients nativos (`@vtex/clients`) antes de customizados
- ✅ Rotas REST com verbos HTTP corretos
- ✅ Middlewares com try/catch obrigatório
- ✅ Status HTTP apropriados (200, 201, 400, 404, 500)
- ✅ Tipagem TypeScript completa

## Development

### Estrutura de Pastas Recomendada

**VTEX IO Store Framework:**

```
vtex.store-theme/
├── store/blocks/
│   ├── home/
│   ├── pdp/
│   ├── search/
│   └── footer/
└── react/
    ├── components/
    ├── hooks/
    └── typings/
```

**FastStore:**

```
faststore-project/
├── src/
│   ├── components/
│   │   └── sections/
│   ├── fragments/
│   ├── graphql/
│   └── utils/
└── cms/
    └── faststore/
```

**VTEX IO Backend:**

```
vtex.service-example/
├── node/
│   ├── clients/
│   ├── middlewares/
│   ├── resolvers/
│   ├── helpers/
│   └── types/
└── graphql/
```

## UX Features

O toolkit fornece uma experiência polida:

- **Confirmação de Intenção** — Para ações complexas, o agente pede confirmação
- **Referências Remotas** — Exemplos de código do repositório oficial
- **Site Editor Safety** — Preserva propriedade `title` dos blocos JSONC
- **Auto-Healing** — Diagnóstico e correção proativa de erros
- **Tagged Output** — Prefixos: `[GENERATE]`, `[VALIDATE]`, `[FIX]`, etc.
- **Clear Messages** — Mensagens de erro com ações de recuperação
- **Session Recovery** — Auto-restaura contexto do projeto

## Version History

| Version | Changes                                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 2.0.0   | Skills de boas práticas (VTEX IO + FastStore), estrutura consultants/ + best-practices/, exemplos de código real dos repos oficiais |
| 1.5.0   | Regras de performance (Core Web Vitals), self-healing automático                                                                    |
| 1.4.0   | Skills de consulta (vtex-api-consultant, faststore-consultant)                                                                      |
| 1.3.0   | Comandos rápidos (@new-\*, @health, @format, @pr-ready)                                                                             |
| 1.2.0   | Regras inteligentes (.mdc) para Storefront e FastStore                                                                              |
| 1.1.0   | Instalação via npx vtex-toolkit                                                                                                     |
| 1.0.0   | Primeira versão — regras básicas e comandos                                                                                         |

## Contributing

Este é um projeto open source! Sinta-se à vontade para abrir Issues ou Pull
Requests.

1. Fork este repositório
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

Para detalhes avançados de instalação, consulte o
[Guia de Uso Completo](docs/GUIA_DE_USO.mdc).

## License

[MIT](LICENSE)
