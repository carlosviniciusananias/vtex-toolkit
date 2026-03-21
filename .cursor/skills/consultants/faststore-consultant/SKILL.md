---
name: faststore-consultant
description: >
  Consultar documentação oficial do FastStore para dúvidas sobre:
  - Estrutura de projetos Next.js no FastStore
  - Uso de hooks (useSession, useCart, useBuyButton)
  - GraphQL queries e fragments
  - Componentes nativos (@faststore/ui)
  - Integração com VTEX APIs
  - Performance e otimizações
  Trigger: qualquer pergunta sobre "como fazer X no FastStore", "qual hook usar", "como integrar", "documentação FastStore"
---

# FastStore Consultant Skill

Esta habilidade capacita o agente a consultar e aplicar as melhores práticas oficiais da FastStore para Styling, Headless CMS e Componentes, utilizando a documentação oficial como fonte de verdade secundária.

## Restrições de Uso (CRÍTICO)

- **EXEMPLOS PRIMEIRO**: Antes de utilizar esta Skill, você DEVE obrigatoriamente analisar os exemplos oficiais no GitHub referenciados nas **Regras (.mdc)** e no repositório [playground.store](https://github.com/vtex-sites/playground.store).
- Esta Skill é um recurso **secundário**, destinado a sanar dúvidas técnicas que não estejam claras nos exemplos.
- **NUNCA** utilize esta Skill para definir o padrão arquitetural; siga sempre o padrão dos exemplos oficiais.

## Domínios de Consulta

### 1. Conceitos Gerais (https://developers.vtex.com/docs/guides/faststore)
- Arquitetura, tecnologias core (Next.js, GraphQL) e workflow de desenvolvimento.

### 2. Estilização e Temas (https://developers.vtex.com/docs/guides/faststore/styling-overview)
- Global Tokens, CSS Modules e customização de componentes.

### 3. Componentes de UI (https://developers.vtex.com/docs/guides/faststore/components-index)
- Biblioteca de componentes baseada em Atomic Design (Atoms, Molecules, Organisms).

### 4. Headless CMS (https://developers.vtex.com/docs/guides/faststore/headless-cms-overview)
- Configuração de Content Types, Sections e schemas para o admin.

### 5. Exemplos e Patterns (https://github.com/vtex-sites/playground.store)
- Section Overrides V2, API Extensions (Resolvers), e Analytics.

### 6. Troubleshooting (.cursor/docs/TROUBLESHOOTING.md)
- Consulta de erros comuns e diagnósticos rápidos.

## Workflow de Consulta

1.  **Identificação**: Determine qual domínio da FastStore requer consulta adicional.
2.  **Pesquisa**: Utilize `WebSearch` e `WebFetch` para obter as diretrizes da URL correspondente.
3.  **Aplicação**: Implemente o código priorizando o padrão dos exemplos oficiais e complementando com detalhes técnicos da documentação.