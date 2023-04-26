import { Router } from 'express'
import { CreateDriverController } from '../modules/drivers/controllers/createDriver.controller'
import { GetDriverController } from '../modules/drivers/controllers/getDriver.controller'
import { ListDriverController } from '../modules/drivers/controllers/lisDriver.controller'
import { UpdateDriverController } from '../modules/drivers/controllers/updateDriver.controller'
import { DeleteDriverController } from '../modules/drivers/controllers/deleteDriver.controller'

const driveRouter = Router()
const createDriverController = new CreateDriverController()
const getDriverController = new GetDriverController()
const listDriverController = new ListDriverController()
const updateDriverController = new UpdateDriverController()
const deleteDriverController = new DeleteDriverController()

driveRouter.post('/driver', createDriverController.execute)
driveRouter.get('/driver/:id', getDriverController.execute)
driveRouter.get('/driver', listDriverController.execute)
driveRouter.put('/driver/:id', updateDriverController.execute)
driveRouter.delete('/driver/:id', deleteDriverController.execute)

export { driveRouter }
