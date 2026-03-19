import { InstanceOptions, IOContext, JanusClient } from '@vtex/api'
import { Content } from '../types/checkout'

export class Checkout extends JanusClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    super(ctx, {
      ...options,
      headers: {
        ...options?.headers,
        Accept: 'application/json',
        VtexIdclientAutCookie: ctx.authToken,
      },
    })
  }

  public attachments = (
    orderFormId: string,
    position: string,
    attachmentName: string,
    payload: Content,
  ) => {
    const contentPayload = {
      content: payload,
    }

    return this.http.post(
      `/api/checkout/pub/orderForm/${orderFormId}/items/${position}/attachments/${attachmentName}`,
      contentPayload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
