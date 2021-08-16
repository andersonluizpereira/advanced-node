import { TokenGenerator } from '@/data/contracts/crypto'

import jwt from 'jsonwebtoken'
jest.mock('jsonwebtoken')
describe('JwtTokenGenerator', () => {
  class JwtTokenGenerator {
    constructor (private readonly secret: string) {}

    async generateToken (params: TokenGenerator.Params): Promise<void> {
      const expirationInSeconds = params.expirationInMs / 1000
      jwt.sign({ key: params.key }, this.secret, { expiresIn: expirationInSeconds })
    }
  }

  let sut: JwtTokenGenerator
  let fakeJwt: jest.Mocked<typeof jwt>
  beforeEach(() => {
    sut = new JwtTokenGenerator('any_secret')
  })

  beforeAll(() => {
    fakeJwt = jwt as jest.Mocked<typeof jwt>
  })

  it('should call sign with correct values', async () => {
    await sut.generateToken({ key: 'any_key', expirationInMs: 1000 })
    expect(fakeJwt.sign).toHaveBeenCalledWith({ key: 'any_key' }, 'any_secret', { expiresIn: 1 })
  })
})
