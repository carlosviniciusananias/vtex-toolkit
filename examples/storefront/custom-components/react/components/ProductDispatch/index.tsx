import React from 'react'
import { useProductDispatch } from 'vtex.product-context/ProductDispatchContext'
import { useCssHandles } from 'vtex.css-handles'

const HANDLES = ['container', 'button'] as const

const ProductDispatch: StoreFrontFC = () => {
  const dispatch = useProductDispatch()
  const { handles } = useCssHandles(HANDLES)

  if (!dispatch) return null

  const handleSetQuantity = (quantity: number) => {
    dispatch({
      type: 'SET_QUANTITY',
      args: { quantity },
    })
  }

  return (
    <div className={handles.container}>
      <button 
        className={handles.button}
        onClick={() => handleSetQuantity(5)}
      >
        Definir Quantidade como 5
      </button>
    </div>
  )
}

ProductDispatch.schema = {
  title: 'Manipulador de Contexto de Produto',
  type: 'object',
  properties: {},
}

export default ProductDispatch
