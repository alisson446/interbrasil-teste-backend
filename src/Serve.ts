import 'dotenv/config'
import mongoose from 'mongoose'
import ApiServer from './Express'
import FirstUserSeed from './Seeds/FirstUserSeed'

let mongoURL = `mongodb://${process.env['MONGO_URL']}/interbrasil`
if (process.env.ENVIROMENT === 'production') {
  mongoURL = `mongodb+srv://admin:admin@${process.env.MONGO_URL}/interbrasil`
}

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

mongoose.connection.on('open', function () {
  FirstUserSeed.seed()
  ApiServer()
})
