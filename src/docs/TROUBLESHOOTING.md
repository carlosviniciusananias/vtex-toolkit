# Troubleshooting

Erros comuns e suas soluções no desenvolvimento.

## ERROS DE BLOCOS E INTERFACES

### 1. "Block not found: custom-component"

**Erro completo:**
```
Block 'custom-component' was not found
```

**Causa:** 
Interface não declarada em `store/interfaces.json`

**Solução:**
```json
// store/interfaces.json
{
  "custom-component": {
    "component": "CustomComponent",
    "render": "client"
  }
}
```

**Checklist:**
- [ ] Arquivo `store/interfaces.json` existe?
- [ ] Nome do componente está correto (case-sensitive)?
- [ ] Export do componente existe em `react/{ComponentName}.tsx`?

### 2. "Component {Name} is not exported from app"

**Causa:**
Falta export na raiz de `react/`

**Solução:**
```typescript
// react/CustomComponent.tsx
export { default } from './components/CustomComponent/CustomComponent'
```

**Estrutura correta:**
```
react/
├── CustomComponent.tsx          ← Export
└── components/
    └── CustomComponent/
        └── CustomComponent.tsx  ← Implementação
```

## ERROS DE DEPENDENCIAS

### 3. "This app is not installed in this account"

**Erro completo:**
```
App vendor.app-name is not installed in account {account}
```

**Causa:**
App usado mas não declarado em `dependencies`

**Solução:**
```json
// manifest.json
{
  "dependencies": {
    "vendor.app-name": "x.x"
  }
}
```

**Exemplo real:**
```json
{
  "dependencies": {
    "vtex.product-context": "0.x",
    "vtex.css-handles": "1.x",
    "vtex.session-client": "1.x"
  }
}
```

### 4. "Module not found: vtex.{module-name}"

**Exemplos comuns:**
```
Module not found: vtex.css-handles
Module not found: vtex.product-context
```

**Solução em 2 passos:**

**1. Adicionar dependência ao `manifest.json`:**
```json
{
  "dependencies": {
    "vtex.css-handles": "1.x"
  }
}
```

**2. Garantir import correto:**
```typescript
import { useCssHandles } from 'vtex.css-handles'
import { useProduct } from 'vtex.product-context'
```

## ERROS DE POLITICAS E ACESSO

### 5. "Access to external host {host} denied"

**Erro completo:**
```
Forbidden access to outbound route: https://api.external.com
```

**Causa:**
Falta policy de `outbound-access` no `manifest.json`

**Solução:**
```json
// manifest.json
{
  "policies": [
    {
      "name": "outbound-access",
      "attrs": {
        "host": "api.external.com",
        "path": "*"
      }
    }
  ]
}
```

**Wildcards permitidos:**
```json
{
  "policies": [
    {
      "name": "outbound-access",
      "attrs": {
        "host": "{{account}}.myvtex.com",  // ← Substitui account dinamicamente
        "path": "/*"
      }
    },
    {
      "name": "outbound-access",
      "attrs": {
        "host": "*.api-external.com",  // ← Qualquer subdomínio
        "path": "/v1/*"
      }
    }
  ]
}
```

### 6. "VBase unauthorized"

**Erro completo:**
```
VBase operation unauthorized for app
```

**Causa:**
Falta policy `vbase-read-write`

**Solução:**
```json
{
  "policies": [
    {
      "name": "vbase-read-write"
    }
  ]
}
```

## ERROS DE CONTEXTO (React)

### 7. "Cannot read property 'product' of undefined"

**Código que quebra:**
```typescript
const productContext = useProduct()
const product = productContext.product  // ← undefined
```

**Causa:**
Componente não está dentro do `ProductContext`

**Solução:**
Usar componente apenas em:
- Páginas de produto (PDP)
- Dentro de `product-summary`
- Dentro de blocos que fornecem ProductContext

**Exemplo correto:**
```jsonc
// store/blocks/pdp/product.jsonc
{
  "flex-layout.row": {
    "children": [
      "CustomComponent"  // ← Aqui tem ProductContext
    ]
  }
}
```

### 8. "Cannot read property 'orderForm' of undefined"

**Causa:**
Componente fora do `OrderFormContext`

**Solução:**
```typescript
import { useOrderForm } from 'vtex.order-manager/OrderForm'

export default function MyComponent() {
  const { orderForm } = useOrderForm()
  
  if (!orderForm) {
    return <div>Carregando...</div>
  }
  
  return (
    <div>Total: {orderForm.value}</div>
  )
}
```

**Dependência necessária:**
```json
{
  "dependencies": {
    "vtex.order-manager": "0.x"
  }
}
```

## ERROS DE CSS

### 9. "CSS Handle {handleName} not found"

**Erro no console:**
```
Warning: CSS Handle 'customHandle' was not declared in CSS_HANDLES
```

**Causa:**
Handle usado no JSX mas não declarado no array

**Solução:**
```typescript
const CSS_HANDLES = [
  'container',
  'title',
  'customHandle'  // ← Adicionar aqui
] as const

const handles = useCssHandles(CSS_HANDLES)

return (
  <div className={handles.customHandle}>
    {/* ... */}
  </div>
)
```

## ERROS DE BUILDERS

### 10. "Builder {builder} is not declared in manifest"

**Erro completo:**
```
Builder 'graphql' is required but not declared in manifest.json
```

**Solução:**
```json
// manifest.json
{
  "builders": {
    "store": "0.x",
    "react": "3.x",
    "node": "7.x",
    "graphql": "1.x"  // ← Adicionar builder faltante
  }
}
```

**Builders comuns:**
| Builder | Quando usar |
|---------|-------------|
| `store` | Blocos JSONC |
| `react` | Componentes React |
| `node` | Backend/Services |
| `graphql` | Schemas GraphQL |
| `styles` | CSS/SCSS |
| `assets` | Imagens/Fontes |
| `docs` | Documentação |

## ERROS DE RUNTIME

### 11. "Maximum call stack size exceeded"

**Causa comum:**
Loop infinito em `useEffect`

**Código problemático:**
```typescript
useEffect(() => {
  setCount(count + 1)  // ← Causa re-render infinito
})
```

**Solução:**
```typescript
useEffect(() => {
  setCount(count + 1)
}, [])  // ← Dependências vazias = executa 1x
```

### 12. "Memory limit exceeded"

**Erro completo:**
```
Container killed due to memory limit (256MB)
```

**Solução:**
Aumentar memória no `service.json`:

```json
// node/service.json
{
  "memory": 512,  // ← Era 256, aumentar para 512
  "timeout": 10
}
```
    
## DICAS DE DEBUGGING

### Como debugar erros no VTEX IO:

**1. Ver logs do app:**
```bash
vtex logs --all
```

**2. Ver logs de um serviço específico:**
```bash
vtex logs {vendor}.{appName}
```

**3. Inspecionar estado do React:**
```typescript
console.log('State:', { productContext, orderForm })
```

**4. Verificar se app está instalado:**
```bash
vtex list
```

**5. Reinstalar dependências:**
```bash
vtex deps update
```
