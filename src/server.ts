import express, { request, response } from 'express'

import './infra/database/connection'
import { driveRouter } from './routes/drivers.route'

const app = express()

app.use(driveRouter)

app.listen(3332, () => {
  console.log('> Server is running...')
})
