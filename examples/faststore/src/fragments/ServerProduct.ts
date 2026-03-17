import { gql } from '@faststore/core/api'

// @ts-ignore
export const fragment = gql`
  fragment ServerProduct on Query {
    product(locator: $locator) {
      properties {
        name
        values
      }
      clusterHighlights {
        id
        name
      }
    }
  }
`
