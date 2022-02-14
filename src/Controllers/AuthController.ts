import {Request, Response} from 'express'
import AuthService from '../Services/AuthService'
import {StatusCodes} from 'http-status-codes'

class AuthController {
    public async login(req: Request, res: Response) {
        if (req.body.cnpj && req.body.password) {
            let loginData = await AuthService.authentication({cnpj: req.body.cnpj, password: req.body.password})

            if (loginData) {
                return res.json({
                    auth: true,
                    token: loginData.token,
                    userID: loginData.userID
                })
            }
        }
        return res.sendStatus(StatusCodes.UNAUTHORIZED)
    }

    public async isAuth(req: Request, res: Response) {
        let userData:any = await AuthService.authorization(req.headers['x-access-token']?.toString() || '')
        if (userData) {
            return res.json({ isAuth: true })
        }
        return res.json({ isAuth: false })
    }

}

export default new AuthController()