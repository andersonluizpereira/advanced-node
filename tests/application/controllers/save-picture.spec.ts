import { Controller, SavePictureController } from '@/application/controllers'
import { InvalidMimeTypeError, MaxFileSizeError, RequiredFieldError } from '@/application/errors'

describe('SavePictureController', () => {
  let sut: SavePictureController
  let buffer: Buffer
  let userId: string
  let file: { buffer: Buffer, mimeType: string }
  let mimeType: string
  let changeProfilePicture: jest.Mock

  beforeAll(() => {
    buffer = Buffer.from('any_buffer')
    mimeType = 'image/png'
    userId = 'any_user_id'
    file = { buffer, mimeType }
    changeProfilePicture = jest.fn().mockResolvedValue({
      initials: 'any_initials',
      pictureUrl: 'any_url'
    })
  })

  beforeEach(() => {
    sut = new SavePictureController(changeProfilePicture)
  })

  it('should extend Controller', async () => {
    expect(sut).toBeInstanceOf(Controller)
  })

  it('should return 400 if file is not provided', async () => {
    const httpResponse = await sut.perform({ file: undefined as any, userId })
    expect(httpResponse).toEqual({ statusCode: 400, data: new RequiredFieldError('file') })
  })
  it('should return 400 if file is not provided', async () => {
    const httpResponse = await sut.perform({ file: null as any, userId })
    expect(httpResponse).toEqual({ statusCode: 400, data: new RequiredFieldError('file') })
  })
  it('should return 400 if file is empty', async () => {
    const httpResponse = await sut.perform({ file: { buffer: Buffer.from(''), mimeType }, userId })
    expect(httpResponse).toEqual({ statusCode: 400, data: new RequiredFieldError('file') })
  })
  it('should return 400 if file type is invalid', async () => {
    const httpResponse = await sut.perform({ file: { buffer, mimeType: 'invalid_type' }, userId })
    expect(httpResponse).toEqual({ statusCode: 400, data: new InvalidMimeTypeError(['png', 'jpeg']) })
  })

  it('should not return 400 if file type is invalid', async () => {
    const httpResponse = await sut.perform({ file: { buffer, mimeType: 'image/png' }, userId })
    expect(httpResponse).not.toEqual({ statusCode: 400, data: new InvalidMimeTypeError(['png', 'jpeg']) })
  })

  it('should not return 400 if file type is invalid', async () => {
    const httpResponse = await sut.perform({ file: { buffer, mimeType: 'image/jpg' }, userId })
    expect(httpResponse).not.toEqual({ statusCode: 400, data: new InvalidMimeTypeError(['png', 'jpg']) })
  })

  it('should not return 400 if file type is invalid', async () => {
    const httpResponse = await sut.perform({ file: { buffer, mimeType: 'image/jpeg' }, userId })
    expect(httpResponse).not.toEqual({ statusCode: 400, data: new InvalidMimeTypeError(['png', 'jpeg']) })
  })

  it('should return 400 if file size is bigger than 5MB', async () => {
    const invalidBuffer = Buffer.from(new ArrayBuffer(6 * 1024 * 1024))
    const httpResponse = await sut.perform({ file: { buffer: invalidBuffer, mimeType: 'image/jpeg' }, userId })
    expect(httpResponse).toEqual({ statusCode: 400, data: new MaxFileSizeError(5) })
  })

  it('should call ChangeProfilePicture with correct input', async () => {
    await sut.perform({ file, userId })
    expect(changeProfilePicture).toHaveBeenCalledWith({ id: userId, file: buffer })
    expect(changeProfilePicture).toHaveBeenCalledTimes(1)
  })

  it('should return 200 with correct data', async () => {
    const httpResponse = await sut.perform({ file, userId })
    expect(httpResponse).toEqual({
      statusCode: 200,
      data: {
        initials: 'any_initials',
        pictureUrl: 'any_url'
      }
    })
  })
})
