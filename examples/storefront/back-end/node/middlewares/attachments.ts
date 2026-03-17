import { json } from 'co-body'

export async function addAttachment(
  ctx: Context,
  next: () => Promise<unknown>,
) {
  const {
    clients: { checkout },
  } = ctx

  const { orderFormId, position, content } = await json(ctx.req)

  if (!orderFormId || !position || !content) {
    throw new Error(
      'Missing required fields: orderFormId, position, or content',
    )
  }

  try {
    const response = await checkout.attachments(
      orderFormId,
      position,
      'insurance.referenceItem',
      content,
    )

    ctx.status = 200
    ctx.body = {
      response,
    }
  } catch (error) {
    throw new Error(`Error adding attachment: ${error}`)
  }

  await next()
}
