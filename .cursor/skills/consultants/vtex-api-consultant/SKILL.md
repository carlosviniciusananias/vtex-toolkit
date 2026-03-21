---
name: vtex-api-consultant
description: >
  Consultar documentação de APIs VTEX para entender:
  - Endpoints disponíveis (Catalog, Checkout, OMS, Logistics, etc.)
  - Autenticação e headers necessários
  - Payloads de request/response
  - Rate limits e boas práticas
  - Políticas de acesso necessárias
  Trigger: perguntas sobre "qual endpoint usar", "como autenticar", "payload da API", "documentação VTEX API"
---


# VTEX API Consultant Skill

Esta habilidade capacita o agente a consultar, extrair e aplicar conhecimentos da documentação oficial da VTEX para o desenvolvimento de lojas no Store Framework (VTEX IO), abrangendo desde APIs até conceitos de interface e estilização.

## Restrições de Uso (CRÍTICO)

- **EXEMPLOS PRIMEIRO**: Antes de utilizar esta Skill, você DEVE obrigatoriamente analisar os exemplos oficiais no GitHub referenciados nas **Regras (.mdc)**.
- Esta Skill é um recurso **secundário**, destinado a sanar dúvidas técnicas que não estejam claras nos exemplos.
- **NUNCA** utilize esta Skill para definir o padrão arquitetural; siga sempre o padrão dos exemplos oficiais.

## Domínios de Consulta

### 1. APIs e Integrações (https://developers.vtex.com/docs/api-reference)
- **Native First**: Antes de qualquer implementação, consulte o repositório [vtex/io-clients](https://github.com/vtex/io-clients) para verificar se o cliente já existe.
- Consulta de endpoints, parâmetros de autenticação e estruturas de payload para Clients, Middlewares e Resolvers.

### 2. Estilização e CSS Handles (https://developers.vtex.com/docs/guides/store-framework-styling)
- Melhores práticas para customização visual e uso de handles nativos.

### 3. Layouts Avançados (https://developers.vtex.com/docs/guides/store-framework-using-advanced-layouts)
- Uso de `flex-layout`, `modal-layout`, `tab-layout`, `condition-layout`, etc.

### 4. Blocos e Componentes (https://developers.vtex.com/docs/guides/store-framework-using-components)
- Entendimento de como utilizar e estender os blocos nativos do Store Framework.

### 5. Construção de Páginas (https://developers.vtex.com/docs/guides/store-framework-building-pages)
- Estrutura de templates e declaração de blocos JSONC.

### 6. Conceitos de Composição (https://developers.vtex.com/docs/guides/vtex-io-documentation-composition)
- Diferença entre `blocks`, `children` e `slots`.

### 7. Interfaces (https://developers.vtex.com/docs/guides/vtex-io-documentation-interface)
- Definição de contratos entre blocos JSONC e componentes React em `interfaces.json`.

### 8. Propriedades (Props) (https://developers.vtex.com/docs/guides/vtex-io-documentation-properties)
- Tipagem e configuração de propriedades em blocos.

### 9. Boas Práticas (https://developers.vtex.com/docs/guides/storefront-best-practices)
- Diretrizes de Performance, Acessibilidade, SEO e Analytics.

### 10. Troubleshooting (.cursor/docs/TROUBLESHOOTING.md)
- Consulta de erros comuns de blocos, dependências, políticas e runtime no VTEX IO.

## Workflow de Consulta

1.  **Pesquisa**: Utilize `WebSearch` com termos específicos baseados no domínio (ex: "VTEX IO flex-layout props").
2.  **Navegação**: Acesse a URL oficial correspondente e utilize `WebFetch` para ler o conteúdo.
3.  **Aplicação**: Proponha a solução respeitando a hierarquia: Padrão do Exemplo -> Detalhe Técnico da Documentação.