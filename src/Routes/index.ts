import { Application } from 'express'
import { Router } from 'express'
import Auth from '../Middlewares/AuthMiddleware'
import UserController from '../Controllers/UserController'

export default (app: Application) => {
    const auth = Router()
    auth.post('/login', UserController.login)
    auth.get('/isAuth', UserController.isAuth)
    app.use('/Auth', auth)

    const users = Router()
    users.use(Auth.authorization)
    app.use('/Users', users)

}