import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export default class ViaCEP extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://viacep.com.br/ws', context, options)
  }

  public async getAddress(cep: string): Promise<any> {
    return this.http.get(`/${cep}/json`, {
      metric: 'viacep-get-address',
    })
  }
}
