import { PgUser } from '@/infra/repos/postgres/entities'
import { app } from '@/main/config/app'
import { makeFakeDb } from '@/tests/infra/repos/postgres/mocks'

import { IBackup } from 'pg-mem'
import { getConnection } from 'typeorm'
import request from 'supertest'

describe('Login Routes', () => {
  describe('POST /login/facebook', () => {
    let backup: IBackup

    beforeAll(async () => {
      const db = await makeFakeDb([PgUser])
      backup = db.backup()
    })

    afterAll(async () => {
      await getConnection().close()
    })

    beforeEach(() => {
      backup.restore()
    })

    it('should return 403 if authorization header is present', async () => {
      const { status } = await request(app)
        .delete('/api/users/picture')

      expect(status).toBe(403)
    })
  })
})
