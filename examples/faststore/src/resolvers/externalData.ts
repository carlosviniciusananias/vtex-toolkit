export const resolvers = {
  Query: {
    externalData: async (_: any, { id }: { id: string }, context: any) => {
      // Exemplo de busca de dados externos no FastStore
      const response = await fetch(`https://api.example.com/data/${id}`)
      return response.json()
    },
  },
}
