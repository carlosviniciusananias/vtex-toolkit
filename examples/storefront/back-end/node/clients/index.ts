import { IOClients } from '@vtex/api'
import { Checkout } from './checkout'
import Pricing from './pricing'

export class Clients extends IOClients {
  public get checkout() {
    return this.getOrSet('checkout', Checkout)
  }

  public get pricing() {
    return this.getOrSet('pricing', Pricing)
  }
}
