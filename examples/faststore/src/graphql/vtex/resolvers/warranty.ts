import { BASE_URL_MYVTEX } from '../../../../constants'

interface AttachmentContent {
  productManufacturerId: string
  skuId: string
  productId: string
  productCategoryName: string
  productBrandName: string
  productModel: string
  productManufacturingWarranty: string
}

interface AddAttachmentsInput {
  orderFormId: string
  position: string
  content: AttachmentContent
}

interface AddAttachmentsResponse {
  message: string
}

const addAttachments = async (
  _: unknown,
  variables: AddAttachmentsInput,
): Promise<AddAttachmentsResponse> => {
  const response = await fetch(`${BASE_URL_MYVTEX}/_v/attachments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(variables),
  })

  if (!response.ok) {
    throw new Error(`Failed to add attachments: ${response.statusText}`)
  }

  return { message: 'Attachments added successfully' }
}

const WarrantyResolver = {
  Mutation: {
    addAttachments,
  },
}

export default WarrantyResolver
