# Comando: @new-storefront-component

Este comando automatiza a criação de componentes React no VTEX IO.

## Parâmetros Rápidos
- **name**: Nome do componente (PascalCase).
- **withSchema**: `true` para incluir schema do Site Editor.
- **withIntl**: `true` para incluir suporte a multi-idiomas.

## Workflow Resumido
1. **Component**: Criação em `react/components/{Name}/`.
2. **Export**: Exportação na raiz de `react/`.
3. **Interface**: Declaração em `store/interfaces.json`.

## Exemplo de Uso
`@new-storefront-component name:DiscountBadge withSchema:true "Crie um componente de selo de desconto que mostre a porcentagem de economia baseada no preço de lista e preço de venda do produto"`

> **Importante**: Sempre forneça uma breve descrição da tarefa junto com o comando para que o agente saiba exatamente o que construir.
