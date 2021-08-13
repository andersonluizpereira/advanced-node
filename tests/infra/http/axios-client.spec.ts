import { HttpGetClient } from '@/infra/http'
import axios from 'axios'

jest.mock('axios')

class AxiosHttpClient {
  async get <T = any> (args: HttpGetClient.Params): Promise<T> {
    const result = await axios.get(args.url, { params: args.params })
    return result.data
  }
}

let sut: AxiosHttpClient
let fakeAxios: jest.Mocked<typeof axios>
let url: string
let params: object

beforeAll(() => {
  url = 'any_url'
  params = { any: 'any' }
  fakeAxios = axios as jest.Mocked<typeof axios>
  fakeAxios.get.mockResolvedValue({
    status: 200,
    data: 'any_data'
  })
})

beforeEach(() => {
  sut = new AxiosHttpClient()
})

describe('AxiosHttpClient', () => {
  describe('#get', () => {
    it('should call get with correct values', async () => {
      await sut.get({ url, params })
      expect(fakeAxios.get).toHaveBeenCalledWith(url, { params })
      expect(fakeAxios.get).toHaveBeenCalledTimes(1)
    })

    it('should return data on success', async () => {
      const result = await sut.get({ url, params })
      expect(result).toEqual('any_data')
    })

    it('should rethrow if get throws', async () => {
      fakeAxios.get.mockRejectedValueOnce(new Error('http_error'))
      const promise = sut.get({ url, params })
      await expect(promise).rejects.toThrow('http_error')
    })
  })
})
