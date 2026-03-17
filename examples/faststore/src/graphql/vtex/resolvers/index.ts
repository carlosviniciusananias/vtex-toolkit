import { default as warrantyResolver } from './warranty'
import { default as StoreProductResolver } from './product'

const resolvers = {
  ...StoreProductResolver,
  Mutation: {},
  Query: {
    ...warrantyResolver.Mutation,
  },
}

export default resolvers
