# FastStore Consultant Skill

Esta habilidade capacita o agente a consultar e aplicar as melhores práticas oficiais da FastStore para Styling, Headless CMS e Componentes, utilizando a documentação oficial como fonte de verdade.

## Quando Usar

- Ao trabalhar com estilos, temas ou tokens na FastStore.
- Ao criar ou modificar Content Types e Sections para o Headless CMS.
- Ao desenvolver novos componentes ou implementar features de storefront.

## Workflow de Consulta por Domínio

### 1. Styling & Theme (https://developers.vtex.com/docs/guides/faststore/styling-overview)
- **Global Tokens**: Consultar padrões de cores, espaçamento e tipografia.
- **CSS Modules**: Garantir o uso correto de módulos CSS para isolamento de estilos.
- **Customization**: Seguir as diretrizes para estender componentes da FastStore UI.

### 2. Headless CMS (https://developers.vtex.com/docs/guides/faststore/headless-cms-overview)
- **Content Types**: Validar a estrutura de `content-types.json` e o uso correto de `scopes`.
- **Sections**: Garantir que as seções em `sections.json` correspondam aos componentes React e possuam os schemas corretos.
- **Modeling**: Seguir as práticas recomendadas para tornar o conteúdo editável e escalável.

### 3. Components & Features (https://developers.vtex.com/docs/guides/faststore/components-index)
- **Atomic Design**: Classificar e estruturar componentes como Atoms, Molecules ou Organisms.
- **Storefront Features**: Consultar a implementação de Navigation, Search e Regionalization (https://developers.vtex.com/docs/guides/faststore/storefront-features-overview).
- **FastStore UI**: Validar o uso e a composição de componentes nativos da biblioteca.

## Workflow de Execução

1. **Identificação**: Determinar qual domínio da FastStore está sendo modificado.
2. **Pesquisa**: Utilizar `WebSearch` e `WebFetch` para obter as diretrizes mais recentes da URL correspondente.
3. **Aplicação**: Implementar o código seguindo rigorosamente os padrões de nomenclatura, estrutura e performance documentados.
4. **Validação**: Verificar se a implementação não quebra os padrões de Atomic Design ou as convenções de CMS.
