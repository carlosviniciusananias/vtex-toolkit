# VTEX Rules

O **VTEX Rules** é um repositório open source que fornece regras inteligentes
(.mdc) para o Cursor IDE, projetadas para desenvolvedores que trabalham com o
ecossistema VTEX (Storefront e FastStore).

## Objetivo

Facilitar o desenvolvimento, garantir padrões de qualidade e acelerar a entrega
de projetos VTEX através de automação e inteligência contextual no Cursor.

## Estrutura do Projeto

- **`.cursor/rules/`**: Regras específicas para o Cursor divididas por framework
  (Storefront, FastStore).
- **`docs/`**: Documentação técnica detalhada sobre cada subtópico.
- **`examples/`**: Exemplos de código prontos para uso e referência.

## Frameworks Suportados

### Storefront (VTEX IO)

- **Blocks (JSONC)**: Estrutura de blocos, containers e componentes nativos.
- **Frontend (React/TS)**: Componentes customizados, internacionalização e
  Styleguide.
- **Backend (Node/TS)**: Serviços, clients de API, GraphQL e middlewares.

### FastStore

- **CMS**: Configuração de Headless CMS (content-types, sections).
- **Components**: Criação de componentes e overrides seguindo Atomic Design.
- **Resolvers**: Lógica de dados, GraphQL e resolvers customizados.

## Workflows de Geração

O **VTEX Rules** automatiza a criação de recursos através de comandos
específicos no Cursor:

- `@new-storefront-block`: Criação de blocos JSONC para Storefront.
- `@new-storefront-component`: Geração de componentes React para Storefront.
- `@new-storefront-service`: Desenvolvimento de serviços Node.js (Full Stack).
- `@new-faststore-cms`: Configuração de seções e tipos de conteúdo no CMS.
- `@new-faststore-components`: Criação de componentes e overrides para
  FastStore.
- `@new-faststore-resolvers`: Implementação de lógica GraphQL para FastStore.

## Começando

Consulte o [Guia de Uso](docs/GUIA_DE_USO.md) para aprender como instalar e
utilizar as regras no seu projeto.

## Contribuindo

Este é um projeto open source! Sinta-se à vontade para:

1. Abrir Issues com sugestões ou bugs.
2. Enviar Pull Requests com novas regras ou melhorias.
3. Compartilhar com a comunidade.

---

Desenvolvido para tornar o desenvolvimento VTEX mais inteligente e produtivo.
