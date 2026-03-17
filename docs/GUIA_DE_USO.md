# Guia de Uso: VTEX Toolkit para Cursor

Este repositório contém um conjunto de regras (.mdc) otimizadas para o Cursor,
focadas em acelerar o desenvolvimento no ecossistema VTEX.

## O que mudou?

A estrutura foi reorganizada para suportar múltiplos frameworks e tecnologias de
forma modular:

- **Storefront (VTEX IO)**: Regras para Blocks (JSONC), Frontend (React/TS) e
  Backend (Node/TS).
- **FastStore**: Estrutura preparada para futuras implementações.
- **Referências Oficiais**: Link direto para a documentação da VTEX.
- **Checklists de Auto-validação**: Garantia de integridade de referências e
  performance.

---

## Estrutura do Repositório

```text
.cursor/rules/
├── storefront/
│   ├── blocks.mdc        - Templates de blocos (hero, shelf, newsletter, etc)
│   ├── frontend.mdc      - Padrões para componentes React customizados
│   ├── backend.mdc       - Padrões para serviços Node.js
│   ├── perf.mdc          - Checklist de performance automatizado
│   ├── styles.mdc        - Templates CSS e tokens
│   └── self-healing.mdc  - Auto-correção de erros
└── global.mdc            - Regras gerais do projeto
```

---

## Como Usar no Cursor

### Passo 1: Copiar para seu projeto

```bash
# Copie as regras do framework desejado para a pasta .cursor/rules/ do seu projeto
cp -r .cursor/rules/storefront/ seu-projeto/.cursor/rules/
```

### Passo 2: Reiniciar Cursor

Feche e abra o Cursor novamente para carregar as novas regras.

---

## Comandos Disponíveis

Utilize os comandos abaixo precedidos por `@` para ativar os workflows
automatizados.

### Geração de Código

- **`@new-block`**: Gera blocos JSONC (Hero, Shelf, Newsletter, etc) seguindo
  padrões de performance e acessibilidade.
- **`@new-component`**: Cria componentes React customizados com `useCssHandles`,
  `react-intl` e declaração automática em `interfaces.json`.
- **`@new-service`**: Gera serviços Node.js completos (Client, Middleware e
  Rota) seguindo a arquitetura VTEX IO.

### Manutenção e Qualidade

- **`@health`**: Realiza uma varredura de integridade em arquivos JSONC,
  validando referências (`#`), performance e boas práticas.
- **`@format`**: Executa a formatação de código do projeto.
- **`@pr-ready`**: Prepara o ambiente para Pull Request, executando `@health`,
  `@format` e gerando um resumo das alterações.

---

## Checklist de Entrega

Para aproveitar ao máximo:

- [ ] Arquivos .mdc estão em .cursor/rules/
- [ ] Cursor foi reiniciado após cópia
- [ ] Validou a integridade do projeto com `@health`
- [ ] Formatou o código com `@format` antes de subir
- [ ] Utilizou `@pr-ready` para revisar as mudanças finalizadas
