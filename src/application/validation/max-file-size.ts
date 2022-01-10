import { MaxFileSizeError } from '@/application/errors'

export class MaxFileSize {
  constructor (
    private readonly maxSizeInMb: number,
    private readonly value: Buffer
  ) {}

  private readonly maxSizeInBytes = 5 * 1024 * 1024

  validate (): Error | undefined {
    if (this.value.length > this.maxSizeInBytes) return new MaxFileSizeError(this.maxSizeInMb)
  }
}
