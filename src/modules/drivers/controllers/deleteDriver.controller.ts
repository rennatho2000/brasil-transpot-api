import { Request, Response } from 'express'
import { DriversRepository } from '../repositories/implementations/Drivers.repostiory'
import { RemoveDriveService } from '../services/removeDriver.service'

class DeleteDriverController {
  async execute(request: Request, response: Response) {
    const { id } = request.params

    const driversRepository = new DriversRepository()
    const removeDriverService = new RemoveDriveService(driversRepository)

    try {
      await removeDriverService.execute(id)
    } catch (error) {
      console.log(error)

      response.status(500).json({
        message: 'Unexpected error when getting driver'
      })
    }
  }
}

export { DeleteDriverController }
