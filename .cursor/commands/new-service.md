# Comando: @new-storefront-service

Este comando automatiza a criação de serviços Node.js (Full Stack) no VTEX IO.

## Parâmetros Rápidos
- **name**: Nome do serviço (ex: `my-custom-api`).
- **type**: `janus` (APIs VTEX) ou `external` (APIs Terceiros).
- **crud**: `true` para gerar operações básicas (List, Get, Create, Update, Delete).

## Workflow Resumido
1. **Client**: Criação em `node/clients/`.
2. **Middleware**: Lógica em `node/middlewares/`.
3. **Resolvers**: GraphQL em `node/resolvers/`.
4. **Service**: Configuração em `service.json` e `index.ts`.

## Exemplo de Uso
`@new-storefront-service name:inventory-api type:external crud:true "Crie um serviço para consultar o estoque em um ERP externo, incluindo autenticação e tratamento de erros"`

> **Importante**: Sempre forneça uma breve descrição da tarefa junto com o comando para que o agente saiba exatamente o que construir.
