export const queries = {
  searchCep: async (_: any, { cep }: { cep: string }, ctx: Context) => {
    const {
      clients: { viaCep },
    } = ctx

    return viaCep.getAddress(cep)
  },
}
