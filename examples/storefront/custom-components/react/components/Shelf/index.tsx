import React from 'react'
import { useOrderItems } from 'vtex.order-items/OrderItems'
import { useCssHandles } from 'vtex.css-handles'
import { ExtensionPoint } from 'vtex.render-runtime'

const HANDLES = ['container', 'shelfTitle', 'addToCartButton'] as const

interface Props {
  title: string
}

const CustomShelf: StoreFrontFC<Props> = ({ title }) => {
  const { addItems } = useOrderItems()
  const { handles } = useCssHandles(HANDLES)

  const handleAddToCart = (skuId: string) => {
    addItems([{ id: skuId, quantity: 1, seller: '1' }])
  }

  return (
    <div className={handles.container}>
      <h2 className={handles.shelfTitle}>{title}</h2>
      {/* O slider-layout seria injetado via blocks.jsonc ou ExtensionPoint */}
      <ExtensionPoint id="slider-layout#custom-shelf" />
      {/* Exemplo de botão que usaria o hook addItems */}
      <button 
        className={handles.addToCartButton}
        onClick={() => handleAddToCart('123')}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  )
}

CustomShelf.schema = {
  title: 'Prateleira Customizada',
  type: 'object',
  properties: {
    title: {
      title: 'Título da Prateleira',
      type: 'string',
      default: 'Destaques',
    },
  },
}

export default CustomShelf
