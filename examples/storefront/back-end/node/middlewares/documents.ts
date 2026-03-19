export default async function documents(ctx: Context) {
  const {
    clients: { masterdata },
  } = ctx

  try {
    const response = await masterdata.searchDocuments<{
      email: string
    }>({
      dataEntity: 'CL',
      fields: ['_all'],
      pagination: { page: 1, pageSize: 1 },
      where: `email="ananias@vtex.com"`,
    })

    ctx.status = 200
    ctx.body = response
  } catch (error) {
    throw new Error(`Error searching documents: ${error}`)
  }
}
