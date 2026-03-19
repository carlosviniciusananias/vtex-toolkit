import { FunctionComponent } from 'react'

export type StoreFrontFC<P = {}> = FunctionComponent<P> & {
  schema?: any
}
