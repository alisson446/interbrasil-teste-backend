import jwt from 'jsonwebtoken'
import User from '../Models/UserModel'
import bcrypt from 'bcrypt'

class AuthService{

    private secret: string

    constructor() {
        this.secret = process.env['SECRET'] || ''

        if (!this.secret || this.secret.length == 0) {
            throw 'Invalid API Secret'
        }
    }

    public async authorization(token: string) {
        try{
            return jwt.verify(token, this.secret)
        }catch(e) {
            return false
        }
    }

    public async authentication(userData: any) {
        let user = await User.findOne({cnpj: userData.cnpj}).exec()
        if (user) {
            if (await bcrypt.compare(userData.password, user.password)) {
                const token = jwt.sign({id: user._id}, this.secret, {expiresIn: parseInt(process.env['SESSION_EXPIRE'] || '86400')})

                return { token, userID: user._id }
            }
        }
        return false
    }

}

export default new AuthService()