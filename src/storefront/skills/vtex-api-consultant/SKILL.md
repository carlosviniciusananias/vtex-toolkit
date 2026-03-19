# VTEX API Consultant Skill

Esta habilidade capacita o agente a consultar, extrair e aplicar conhecimentos da documentação oficial de APIs da VTEX (https://developers.vtex.com/docs/api-reference) para a construção de Clients, Middlewares e Resolvers.

## Quando Usar

- Ao criar um novo `JanusClient` ou `ExternalClient` para uma API VTEX.
- Ao implementar lógica em Middlewares ou Resolvers que dependam de endpoints VTEX.
- Sempre que houver dúvida sobre parâmetros de query, headers de autenticação ou estrutura de payload/response de uma API VTEX.

## Workflow de Consulta

1. **Pesquisa**: Utilize `WebSearch` com termos específicos (ex: "VTEX Search API get product by id" ou "VTEX Orders API list orders").
2. **Navegação**: Identifique a URL oficial no domínio `developers.vtex.com` e utilize `WebFetch` para ler o conteúdo da documentação.
3. **Extração de Dados Críticos**:
   - **Endpoint**: Método HTTP e Path (ex: `GET /api/catalog_system/pub/products/search`).
   - **Autenticação**: Identificar se requer `VtexIdclientAutCookie`, `X-VTEX-API-AppKey` e `X-VTEX-API-AppToken`.
   - **Parâmetros**: Query string e Path parameters obrigatórios.
   - **Payload**: Estrutura do body para métodos POST/PUT/PATCH.
   - **Response**: Mapear os campos retornados para tipagem TypeScript.

## Diretrizes de Implementação

- **Tipagem**: Sempre crie interfaces TypeScript baseadas na estrutura de response extraída.
- **Tratamento de Erros**: Baseie o tratamento de erros nos códigos de status HTTP documentados (400, 401, 403, 404, 500).
- **Performance**: Verifique se a API suporta paginação ou filtros para otimizar o consumo.

## Exemplo de Aplicação

Se a documentação indicar que a busca de produto por ID é feita via `GET /api/catalog_system/pub/products/search?fq=productId:{id}`, o Client deve refletir exatamente esse path e parâmetro.
