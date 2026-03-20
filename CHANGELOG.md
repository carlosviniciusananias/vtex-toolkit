# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-03-19

### Added

- **Exemplos Avançados de Front-end**: Inclusão de componentes práticos como `Discount` (cálculo de desconto via context), `Shelf` (integração com `order-items`) e `ProductDispatch` (manipulação de estado do SKU).
- **Exemplos Avançados de Back-end**: Implementação de `ExternalClient` (ViaCEP), extensão customizada de `MasterData` e orquestração de Resolvers GraphQL.
- **Integração de Contextos Nativos**: Exemplos reais de uso para `vtex.product-context`, `vtex.order-manager`, `vtex.session-client` e `vtex.render-runtime`.
- **Arquitetura FastStore v3**: Estrutura de referência para componentes, seções do CMS e resolvers seguindo os padrões mais recentes do FastStore.

### Improved

- **Mapeamento CMS (FastStore)**: Regras agora forçam o mapeamento 1:1 entre o `name` da seção no CMS e o nome do componente React, prevenindo erros de renderização.
- **Contexto em Comandos**: Todos os comandos `@new-*` foram otimizados para exigir uma descrição da tarefa, garantindo gerações de código mais precisas.
- **Self-Healing de Políticas**: Validação automática de `outbound-access` no `manifest.json` ao detectar a criação de novos `ExternalClients`.
- **Documentação**: Guia de uso e exemplos nos comandos atualizados para refletir os novos padrões de robustez.

## [0.1.1] - 2026-03-19

### Fixed

- **Pasta de Comandos**: Corrigido local de instalação da pasta `commands` para `.cursor/commands/`, evitando poluição na raiz do projeto.
- **Referências de Regras**: Atualizados todos os caminhos nas regras `.mdc` para refletir o novo local da pasta de comandos.

## [0.1.0] - 2026-03-19

### Added

- **VTEX Toolkit CLI**: Lançamento da CLI oficial para instalação plug-and-play
  via `npx vtex-toolkit`.
- **Suporte Multi-Framework**: Estrutura dedicada para **Storefront (VTEX IO)**
  e **FastStore**.
- **Regras Inteligentes (.mdc)**: Conjunto completo de diretrizes para Blocks,
  Frontend, Backend, Performance e Self-healing.
- **Habilidades de Consulta (Skills)**: Inclusão de `vtex-api-consultant` e
  `faststore-consultant` para suporte a APIs e documentação oficial.
- **Pasta de Comandos**: Atalhos rápidos (`.cursor/commands/`) para automação de
  workflows `@new-*`.
- **Auto-Healing de Dependências**: Validação proativa de `manifest.json` para
  componentes React.
- **Site Editor Ready**: Obrigatoriedade de títulos semânticos em blocos JSONC.
- **Confirmação de Intenção**: Diretriz de segurança para workflows complexos e
  ambíguos.
- **Referências Remotas**: Regras configuradas para buscar exemplos diretamente
  do GitHub oficial, mantendo o projeto do usuário leve.

### Optimized

- **Token Efficiency**: Regras reescritas para máxima economia de contexto e
  precisão técnica.
- **Arquitetura de Distribuição**: Separação entre código de desenvolvimento e
  templates de entrega via pasta `src/`.
