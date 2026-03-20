import React from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { useCssHandles } from 'vtex.css-handles'
import { FormattedMessage } from 'react-intl'

const HANDLES = ['container', 'cartTotal', 'itemsCount'] as const

const OrderFormExample: StoreFrontFC = () => {
  const { orderForm, loading } = useOrderForm()
  const { handles } = useCssHandles(HANDLES)

  if (loading || !orderForm) {
    return null
  }

  const itemsCount = orderForm.items?.length ?? 0
  const totalValue = orderForm.value / 100

  return (
    <div className={handles.container}>
      <div className={handles.itemsCount}>
        <FormattedMessage
          id="store/order-form-example.items"
          values={{ count: itemsCount }}
          defaultMessage="Itens no carrinho: {count}"
        />
      </div>
      <div className={handles.cartTotal}>
        <FormattedMessage
          id="store/order-form-example.total"
          values={{ total: totalValue }}
          defaultMessage="Total: R$ {total}"
        />
      </div>
    </div>
  )
}

OrderFormExample.schema = {
  title: 'Exemplo de OrderForm',
  type: 'object',
  properties: {},
}

export default OrderFormExample
