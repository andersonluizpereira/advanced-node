import { FacebookLoginController } from '@/application/controllers'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/api/login/facebook', (req, res, next) => {
    res.send({ data: 'any_data' })
  })
}
