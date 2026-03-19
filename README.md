# VTEX Toolkit

O **VTEX Toolkit** é um ecossistema de produtividade para o Cursor IDE,
projetado para acelerar o desenvolvimento de lojas **VTEX IO (Storefront)** e
**FastStore**. Através de regras inteligentes, habilidades de consulta e
comandos automatizados, ele transforma o Cursor em um especialista em VTEX.

## Instalação Rápida (Recomendado)

Abra o terminal na raiz do seu projeto e execute:

```bash
npx vtex-toolkit
```

Este comando automatiza a instalação de todo o ecossistema necessário para o seu
framework:

- **Regras Inteligentes (.mdc)**: Diretrizes técnicas e de performance.
- **Habilidades (Skills)**: Capacidade de consulta a APIs e documentações
  oficiais.
- **Comandos Rápidos**: Atalhos para geração de código e manutenção.

---

## Guia de Uso Rápido

Após a instalação, reinicie o seu **IDE**. Você pode ativar os workflows
digitando `@` seguido do comando no chat ou Composer:

### Geração de Código

- **`@new-storefront-block`**: Gera blocos JSONC com títulos semânticos e
  performance (LCP/CLS).
- **`@new-storefront-component`**: Cria componentes React com auto-healing de
  dependências.
- **`@new-storefront-service`**: Desenvolve serviços Node.js completos (CRUD
  ready).
- **`@new-faststore-cms`**: Configura seções e tipos de conteúdo no Headless
  CMS.
- **`@new-faststore-components`**: Cria componentes e overrides seguindo Atomic
  Design.
- **`@new-faststore-resolvers`**: Implementa lógica GraphQL e resolvers.

### Manutenção

- **`@health`**: Varredura de integridade, referências (#) e performance.
- **`@format`**: Formatação de código via Prettier.
- **`@pr-ready`**: Prepara o resumo e validações para o seu Pull Request.

### Consulta Especializada (Skills)

O agente agora possui habilidades específicas que você pode solicitar:

- _"Como faço para buscar um produto por ID usando a API do catálogo?"_ (Ativa a
  skill `vtex-api-consultant`)
- _"Como crio uma nova seção no CMS da FastStore?"_ (Ativa a skill
  `faststore-consultant`)

---

## O que está incluído?

### 1. Regras Inteligentes (.mdc)

Localizadas em `.cursor/rules/`, elas ensinam ao Cursor os padrões técnicos da
VTEX:

- **Storefront**: Blocks (JSONC), Frontend (React) e Backend (Node.js).
- **FastStore**: CMS, Componentes (Atomic Design) e Resolvers GraphQL.
- **Performance**: Checklists automáticos para Core Web Vitals (LCP, CLS).
- **Self-Healing**: Diagnóstico e correção proativa de erros comuns.

### 2. Habilidades (Skills)

Localizadas em `.cursor/skills/`, permitem que o agente consulte documentações
oficiais em tempo real.

### 3. Comandos Rápidos

Localizados em `.cursor/commands/`, servem como atalhos para os workflows de geração.

---

## Boas Práticas e Segurança

- **Confirmação de Intenção**: Para ações complexas, o agente pedirá sua
  confirmação antes de gerar múltiplos arquivos.
- **Referências Remotas**: As regras buscam exemplos de código diretamente do
  nosso
  [repositório oficial](https://github.com/carlosviniciusananias/vtex-toolkit),
  garantindo que seu projeto permaneça leve.
- **Site Editor**: Nunca remova a propriedade `title` dos blocos JSONC; ela é
  vital para a experiência do lojista no admin.

## Contribuindo

Este é um projeto open source! Sinta-se à vontade para abrir Issues ou Pull
Requests. Para detalhes avançados de instalação, consulte o
[Guia de Uso Completo](docs/GUIA_DE_USO.md).
