# Comando: @new-faststore-cms

Este comando automatiza a configuração do Headless CMS na FastStore.

## Parâmetros Rápidos

- **type**: `content-type` (páginas/globais) ou `section` (blocos de conteúdo).
- **name**: Nome da configuração (ex: `LandingPage`, `HeroSection`).
- **schema**: `true` para gerar a estrutura de campos (props) básica.

## Workflow Resumido

1. **CMS Config**: Criação ou atualização em `/cms/`.
2. **Files**: `content-types.json` ou `sections.json`.
3. **Validation**: Verificação de tipos e scopes.

## Exemplo de Uso

`@new-faststore-cms type:section name:PromoBanner schema:true`
