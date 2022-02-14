import {Request, Response, NextFunction} from 'express'
import AuthService from '../Services/AuthService'
import { StatusCodes } from 'http-status-codes'

class AuthMiddleware {

    public async authorization(req: Request, res: Response, next: NextFunction) {
        let userData:any = await AuthService.authorization(req.headers['x-access-token']?.toString() || '')
        if (userData) {
            req.headers['x-user-id'] = userData.id
            return next()
        }
        return res.sendStatus(StatusCodes.UNAUTHORIZED)
    }
}

export default new AuthMiddleware()