# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
- **Pasta de Comandos**: Atalhos rápidos (`commands/`) para automação de
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
