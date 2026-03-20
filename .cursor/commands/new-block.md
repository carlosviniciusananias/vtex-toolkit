# Comando: @new-storefront-block

Este comando automatiza a criação de blocos JSONC no VTEX IO.

## Parâmetros Rápidos
- **name**: Nome do bloco (ex: `home-banner`).
- **type**: `row`, `col`, `shelf`, `image-list`.
- **preload**: `true` para banners de topo (LCP).

## Workflow Resumido
1. **JSONC**: Criação em `store/blocks/`.
2. **Layout**: Encapsulamento em `flex-layout`.
3. **Site Editor**: Inclusão de `title` semântico para facilitar edição.
4. **Validation**: Verificação de referências (#).

## Exemplo de Uso
`@new-storefront-block name:hero-home type:row preload:true "Crie um banner principal para a home com imagem de fundo e um botão de CTA para a coleção de verão"`

> **Importante**: Sempre forneça uma breve descrição da tarefa junto com o comando para que o agente saiba exatamente o que construir.
