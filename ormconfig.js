module.exports = {
  type: 'postgres',
  host: 'hansken.db.elephantsql.com',
  port: 5432,
  username: 'bioagbzb',
  password: 'YqLPet12aMhVU2F9O5i5-wl9_TRkvCiZ',
  database: 'bioagbzb',
  entities: [`${process.env.TS_NODE_DEV === undefined ? 'dist' : 'src'}/infra/repos/postgres/entities/index.{js,ts}`]
}
