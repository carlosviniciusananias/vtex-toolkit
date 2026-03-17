import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

interface PricingResponse {
  itemId: string
  listPrice: number
  costPrice: number
  markup: number
  basePrice: number
  fixedPrices: unknown[]
}

export default class Pricing extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    // Exemplo de URL base para ExternalClient
    super(`http://api.vtex.com/`, ctx, {
      ...options,
    })
  }

  private get routes() {
    return {
      getPricing: (itemId: string) => `/pricing/prices/${itemId}`,
    }
  }

  public async getPricing(
    itemId: string,
    keys: { appKey: string; appToken: string },
  ): Promise<PricingResponse> {
    return this.http.get(this.routes.getPricing(itemId), {
      headers: {
        'X-VTEX-API-AppKey': keys.appKey,
        'X-VTEX-API-AppToken': keys.appToken,
      },
    })
  }
}
