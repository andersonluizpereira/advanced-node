import { ConnectionOptions } from 'typeorm'

export const config: ConnectionOptions = {
  type: 'postgres',
  host: 'hansken.db.elephantsql.com',
  port: 5432,
  username: 'bioagbzb',
  password: 'YqLPet12aMhVU2F9O5i5-wl9_TRkvCiZ',
  database: 'bioagbzb',
  entities: ['dist/infra/postgres/entities/index.js']
}
