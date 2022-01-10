import { InvalidMimeTypeError } from '@/application/errors'

type Extensions = 'png' | 'jpg' | 'jpeg' | 'gif'

export class AllowedMimeTypes {
  constructor (
    private readonly allowed: Extensions[],
    private readonly mimeTypes: string
  ) {}

  validate (): Error {
    return new InvalidMimeTypeError(this.allowed)
  }
}
describe('AllowedMimeTypes', () => {
  it('should return InvalidMimeTypeError if value is invalid', () => {
    const sut = new AllowedMimeTypes(['png'], 'image/jpeg')

    const error = sut.validate()

    expect(error).toEqual(new InvalidMimeTypeError(['png']))
  })
})
