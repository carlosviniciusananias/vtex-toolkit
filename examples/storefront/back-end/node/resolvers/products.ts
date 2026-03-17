const queries = {
  product: async (_: unknown, { id }: { id: string }, context: Context) => {
    const {
      clients: { vbase, search },
    } = context

    try {
      const product = await search.getProductById({
        id,
      })

      return {
        cacheId: product.linkText,
        productId: product.productId,
        productName: product.productName,
        description: product.description,
        linkText: product.linkText,
        brand: product.brand,
        categoryId: product.categoryId,
      }
    } catch (error) {
      console.error('Error fetching product:', error)
      throw new Error('Error loading product information.')
    }
  },
}

export default { queries }
