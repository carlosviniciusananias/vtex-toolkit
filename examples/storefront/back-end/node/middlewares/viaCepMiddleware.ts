import { json } from 'co-body'
import { UserInputError } from '@vtex/api'

export async function viaCepMiddleware(ctx: Context, next: () => Promise<any>) {
  const {
    clients: { viaCep },
  } = ctx

  const body = await json(ctx.req)

  if (!body.cep) {
    throw new UserInputError('CEP is required')
  }

  ctx.body = await viaCep.getAddress(body.cep)
  ctx.status = 200

  await next()
}
