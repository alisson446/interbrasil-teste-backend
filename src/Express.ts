import express,{json} from 'express'
import cors from 'cors'
import routes from './Routes'

function init() {
    let app = express()

    app.use(json())
    app.use(cors({ origin: '*' }))


    routes(app)

    return app.listen(process.env.PORT || 8000, function() {
        console.log('Api Ready')
    })
}

export default init