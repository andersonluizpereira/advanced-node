import { FacebookApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'
import { env } from '@/main/config/env'

describe('Facebook Api Integration Test', () => {
  it('should return a Facebook User if token is valid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
    const fbUser = await sut.loadUser({ token: 'EAAFSAKHMTFgBAEQHZCBvDMlXViMBzcpnf58Il0Wz3pqKqx8hWPZAi67Qtaxc7MgOZBPUIOpb9ReYdveIz1eVMku0XI95IWXffvUuvYk2p2gvk1swQxYH2MFzsB5FsSorZAQ0tR5l0h1lkcLbwTbcLaBZAllkIKgyLDRTgApsKiVlAXiaY9oZCbZAa7II84tbb7ZBM9TF1kVFEtTeHBfQuf5ZB' })
    expect(fbUser).toEqual({
      facebookId: '108749701544034',
      email: 'anderson_rsqjwqs_teste@tfbnw.net',
      name: 'Anderson Teste'
    })
  })

  it('should return a Facebook User if token is invalid', async () => {
    const axiosClient = new AxiosHttpClient()
    const sut = new FacebookApi(
      axiosClient,
      env.facebookApi.clientId,
      env.facebookApi.clientSecret
    )
    const fbUser = await sut.loadUser({ token: 'invalid' })
    expect(fbUser).toBeUndefined()
  })
})
