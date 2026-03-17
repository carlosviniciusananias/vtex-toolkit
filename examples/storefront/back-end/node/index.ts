import type {
  Cached,
  ClientsConfig,
  ServiceContext,
  RecorderState,
} from '@vtex/api'
import { LRUCache, Service, method } from '@vtex/api'

import { Clients } from './clients'
import { addAttachment } from './middlewares/attachments'
import { getPricingMiddleware } from './middlewares/pricing'

const TIMEOUT_MS = 800

// Create a LRU memory cache for the clients.
const memoryCache = new LRUCache<string, Cached>({ max: 5000 })

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
    pricing: {
      memoryCache,
    },
  },
}

declare global {
  type Context = ServiceContext<Clients, State>

  interface State extends RecorderState {
    code: number
  }
}

// Export a service that defines route handlers and client options.
export default new Service({
  clients,
  routes: {
    attachments: method({
      POST: [addAttachment],
    }),
    pricing: method({
      GET: [getPricingMiddleware],
    }),
  },
})
