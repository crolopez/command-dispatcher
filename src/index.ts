import { config } from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import compression from 'compression'
import rootRouter from './routes/root'

config()

const app = express()

app.set('port', process.env.PORT)

app.use(morgan('dev'))
app.use(express.json())
app.use(compression())

app.use('/', rootRouter)

app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}.`)
})
