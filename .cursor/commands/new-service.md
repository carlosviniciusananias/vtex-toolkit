# Comando: @new-storefront-service

Este comando automatiza a criação de serviços Node.js (Full Stack) no VTEX IO.

## Parâmetros Rápidos
- **name**: Nome do serviço (ex: `my-custom-api`).
- **type**: `native` (Usar @vtex/clients - RECOMENDADO), `janus` (APIs VTEX customizadas) ou `external` (APIs Terceiros).
- **crud**: `true` para gerar operações básicas (List, Get, Create, Update, Delete).

## Workflow Resumido
1. **Validar Nativo**: Verificar se a funcionalidade já existe em `@vtex/clients`.
2. **Client**: Criação em `node/clients/` (se não for nativo).
3. **Middleware**: Lógica em `node/middlewares/`.
4. **Resolvers**: GraphQL em `node/resolvers/`.
5. **Service**: Configuração em `service.json` e `index.ts`.

## Exemplo de Uso
`@new-storefront-service name:order-manager type:native "Crie um serviço para gerenciar pedidos usando o cliente OMS nativo do @vtex/clients"`

`@new-storefront-service name:inventory-api type:external crud:true "Crie um serviço para consultar o estoque em um ERP externo, incluindo autenticação e tratamento de erros"`

> **Importante**: Sempre forneça uma breve descrição da tarefa junto com o comando para que o agente saiba exatamente o que construir.
