import React from 'react'
import { useProduct } from 'vtex.product-context'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

const HANDLES = ['container', 'skuName', 'price', 'inventory'] as const

const ProductContextExample: StoreFrontFC = () => {
  const productContextValue = useProduct()
  const { handles } = useCssHandles(HANDLES)

  if (!productContextValue?.product) {
    return null
  }

  const { product, selectedItem } = productContextValue
  const inventory = selectedItem?.sellers?.[0]?.commertialOffer?.AvailableQuantity ?? 0

  return (
    <div className={handles.container}>
      <h3 className={handles.skuName}>{product.productName}</h3>
      <div className={handles.inventory}>
        <FormattedMessage
          id="store/product-context-example.inventory"
          values={{ quantity: inventory }}
          defaultMessage="Estoque disponível: {quantity}"
        />
      </div>
    </div>
  )
}

ProductContextExample.schema = {
  title: 'Exemplo de Contexto de Produto',
  type: 'object',
  properties: {},
}

export default ProductContextExample
