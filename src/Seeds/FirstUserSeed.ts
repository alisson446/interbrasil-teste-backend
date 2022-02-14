import User from '../Models/UserModel'

class FirstUserSeed{

    public async seed() {
        let cnpj = process.env['FIRST_USER_CNPJ']
        let password = process.env['FIRST_USER_PASS']

        if (!cnpj || !password) {
            throw new Error('First user is not defined in .env file')
        }

        let result = await User.findOne({'cnpj': cnpj}).exec()
        if (!result) {
            await User.create({'cnpj': cnpj, name: 'First User', 'password': password})
        }
    }

}

export default new FirstUserSeed()