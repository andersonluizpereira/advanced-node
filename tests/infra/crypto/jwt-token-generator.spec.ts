import { TokenGenerator } from '@/data/contracts/crypto'

import jwt from 'jsonwebtoken'
jest.mock('jsonwebtoken')
describe('JwtTokenGenerator', () => {
  class JwtTokenGenerator {
    constructor (private readonly secret: string) {}

    async generateToken (params: TokenGenerator.Params): Promise<TokenGenerator.Result> {
      const expirationInSeconds = params.expirationInMs / 1000
      return jwt.sign({ key: params.key }, this.secret, { expiresIn: expirationInSeconds })
    }
  }

  let sut: JwtTokenGenerator
  let fakeJwt: jest.Mocked<typeof jwt>
  beforeEach(() => {
    sut = new JwtTokenGenerator('any_secret')
  })

  beforeAll(() => {
    fakeJwt = jwt as jest.Mocked<typeof jwt>
    fakeJwt.sign.mockImplementation(() => 'any_token')
  })

  it('should call sign with correct values', async () => {
    await sut.generateToken({ key: 'any_key', expirationInMs: 1000 })
    expect(fakeJwt.sign).toHaveBeenCalledWith({ key: 'any_key' }, 'any_secret', { expiresIn: 1 })
  })

  it('should return a token', async () => {
    const token = await sut.generateToken({ key: 'any_key', expirationInMs: 1000 })
    expect(token).toBe('any_token')
  })

  it('should rethrow if sign throws', async () => {
    fakeJwt.sign.mockImplementationOnce(() => { throw new Error('token_error') })
    const promise = sut.generateToken({ key: 'any_key', expirationInMs: 1000 })
    await expect(promise).rejects.toThrow('token_error')
  })
})
