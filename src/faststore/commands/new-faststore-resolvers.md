# Comando: @new-faststore-resolvers

Este comando automatiza a criação de lógica GraphQL (Resolvers e TypeDefs) na FastStore.

## Parâmetros Rápidos
- **name**: Nome do resolver/feature (ex: `reviews`, `inventory`).
- **type**: `query` ou `mutation`.
- **fragment**: `true` para gerar fragmento em `src/fragments/`.

## Workflow Resumido
0. **Validar Config**: Verificar se `discovery.config.js` existe (se não, solicitar `storeId`).
1. **TypeDefs**: Definição do esquema em `src/graphql/vtex/typeDefs/`.
2. **Resolvers**: Implementação em `src/graphql/vtex/resolvers/`.
3. **Registry**: Registro no `index.ts` da pasta de resolvers.

## Exemplo de Uso
`@new-faststore-resolvers name:shippingQuotes type:query fragment:true "Implemente um resolver para buscar cotações de frete customizadas integrando com a API de logística da VTEX"`

> **Importante**: Sempre forneça uma breve descrição da tarefa junto com o comando para que o agente saiba exatamente o que construir.
