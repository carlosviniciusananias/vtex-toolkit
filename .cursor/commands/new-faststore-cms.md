# Comando: @new-faststore-cms

Este comando automatiza a configuração do Headless CMS na FastStore.

## Parâmetros Rápidos
- **type**: `content-type` (páginas/globais) ou `section` (blocos de conteúdo).
- **name**: Nome da configuração (ex: `LandingPage`, `HeroSection`).
- **schema**: `true` para gerar a estrutura de campos (props) básica.

## Workflow Resumido
0. **Validar Config**: Verificar se `discovery.config.js` existe (se não, solicitar `storeId`).
1. **CMS Config**: Criação ou atualização em `/cms/`.
2. **Files**: `content-types.json` ou `sections.json`.
3. **Mapeamento**: O `name` da seção deve ser idêntico ao componente React correspondente.
4. **Validation**: Verificação de tipos e scopes.

## Exemplo de Uso
`@new-faststore-cms type:section name:NewsletterSection schema:true "Configure uma seção de newsletter para o CMS com campos para título, descrição e cor de fundo customizável"`

> **Importante**: Sempre forneça uma breve descrição da tarefa junto com o comando para que o agente saiba exatamente o que construir.
