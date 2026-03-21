# Comando: @new-faststore-components

Este comando automatiza a criação de componentes e overrides na FastStore.

## Parâmetros Rápidos
- **name**: Nome do componente (PascalCase).
- **type**: `atom`, `molecule`, `organism` ou `override`.
- **target**: (Apenas para override) Nome do componente nativo a ser sobrescrito.

## Workflow Resumido
0. **Validar Config**: Verificar se `discovery.config.js` existe (se não, solicitar `storeId`).
1. **Component**: Criação em `src/components/` seguindo Atomic Design.
2. **Mapeamento**: O nome do componente deve ser idêntico ao `name` definido em `cms/sections.json`.
3. **Override**: Uso de `SectionOverride` em `src/components/overrides/`.
4. **Export**: Registro obrigatório em `src/components/index.tsx`.

## Exemplo de Uso
`@new-faststore-components name:ProductCard type:molecule "Crie um componente de card de produto seguindo o design system da loja, incluindo imagem, nome e preço com suporte a lazy loading"`

> **Importante**: Sempre forneça uma breve descrição da tarefa junto com o comando para que o agente saiba exatamente o que construir.
