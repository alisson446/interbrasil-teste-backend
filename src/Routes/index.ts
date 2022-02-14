import { Application } from 'express'
import { Router } from 'express'
import Auth from '../Middlewares/AuthMiddleware'
import AuthController from '../Controllers/AuthController'

export default (app: Application) => {
    const auth = Router()
    auth.post('/login', AuthController.login)
    auth.get('/isAuth', AuthController.isAuth)
    app.use('/Auth', auth)

    const users = Router()
    users.use(Auth.authorization)
    app.use('/Users', users)

}