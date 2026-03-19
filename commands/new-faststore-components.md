# Comando: @new-faststore-components

Este comando automatiza a criação de componentes e overrides na FastStore.

## Parâmetros Rápidos
- **name**: Nome do componente (PascalCase).
- **type**: `atom`, `molecule`, `organism` ou `override`.
- **target**: (Apenas para override) Nome do componente nativo a ser sobrescrito.

## Workflow Resumido
1. **Component**: Criação em `src/components/` seguindo Atomic Design.
2. **Override**: Uso de `SectionOverride` em `src/components/overrides/`.
3. **Export**: Registro obrigatório em `src/components/index.tsx`.

## Exemplo de Uso
`@new-faststore-components name:CustomButton type:override target:Button`
