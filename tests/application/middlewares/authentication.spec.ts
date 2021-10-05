import { forbidden, HttpResponse } from '@/application/helpers'
import { ForbiddenError } from '@/application/errors'

type HttpRequest = { authorizathion: string }

class AuthenticationMiddleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse<Error>> {
    return forbidden()
  }
}

describe('AuthenticationMiddleware', () => {
  let sut: AuthenticationMiddleware
  beforeEach(() => {
    sut = new AuthenticationMiddleware()
  })
  it('should return 403 if authorizathion is empty', async () => {
    const httpResponse = await sut.handle({ authorizathion: '' })

    expect(httpResponse).toEqual({
      statusCode: 403,
      data: new ForbiddenError()
    })
  })

  it('should return 403 if authorizathion is null', async () => {
    const httpResponse = await sut.handle({ authorizathion: null as any })

    expect(httpResponse).toEqual({
      statusCode: 403,
      data: new ForbiddenError()
    })
  })

  it('should return 403 if authorizathion is undefined', async () => {
    const httpResponse = await sut.handle({ authorizathion: undefined as any })

    expect(httpResponse).toEqual({
      statusCode: 403,
      data: new ForbiddenError()
    })
  })
})
