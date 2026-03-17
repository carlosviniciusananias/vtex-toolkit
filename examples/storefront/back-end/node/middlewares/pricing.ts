export async function getPricingMiddleware(
  ctx: Context,
  next: () => Promise<unknown>,
) {
  const {
    vtex: {
      route: { params },
    },
    clients: { pricing: pricingClient },
  } = ctx

  const { itemId } = params as { itemId: string }

  // Exemplo de chaves que poderiam vir de configurações do app ou variáveis de ambiente
  const keys = {
    appKey: 'vtexappkey-vendor-ABCDEF',
    appToken: 'ABCDEF-TOKEN-VALUE',
  }

  try {
    const data = await pricingClient.getPricing(itemId, keys)

    ctx.status = 200
    ctx.body = data
    ctx.set('Cache-Control', 'no-cache')
  } catch (error) {
    ctx.status = error.response?.status || 500
    ctx.body = error.response?.data || { message: 'Error fetching pricing' }
  }

  await next()
}
