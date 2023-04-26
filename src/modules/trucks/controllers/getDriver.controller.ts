import { Request, Response } from 'express'
import { DriversRepository } from '../repositories/implementations/Drivers.repostiory'
import { GetDriveService } from '../services/getDriver.service'

class GetDriverController {
  async execute(request: Request, response: Response) {
    const { id } = request.params

    const driverRepository = new DriversRepository()
    const getDriverService = new GetDriveService(driverRepository)

    try {
      const driver = await getDriverService.execute(id)

      if (!driver)
        response.status(404).json({
          message: 'Driver not found'
        })

      response.json(driver)
    } catch (error) {
      console.log(error)

      response.status(500).json({
        message: 'Unexpected error when getting driver'
      })
    }
  }
}

export { GetDriverController }
