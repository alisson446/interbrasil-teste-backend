import mongoose, { Document } from 'mongoose'
import bcrypt from 'bcrypt'

let NAME = 'User'

interface IUser extends Document{
    name?: string,
    cnpj: string,
    password: string,
}

let userSchema = new mongoose.Schema({
    name: String,
    cnpj: String,
    password: String,
})

userSchema.pre<IUser>('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)

    next()
})

export {userSchema, NAME, IUser}
export default mongoose.model<IUser>(NAME, userSchema)