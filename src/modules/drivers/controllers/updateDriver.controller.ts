import { Request, Response } from 'express'
import { UpdateDriverDTO } from '../dtos/UpdateDriverDTO'
import { DriversRepository } from '../repositories/implementations/Drivers.repostiory'
import { GetDriveService } from '../services/getDriver.service'
import { UpdateDriverService } from '../services/updateDriver.service'

class UpdateDriverController {
  async execute(request: Request, response: Response) {
    const { name, priceForKm }: UpdateDriverDTO = request.body
    const { id } = request.params

    const driverRepository = new DriversRepository()
    const getDriverService = new GetDriveService(driverRepository)
    const updateDriverService = new UpdateDriverService(driverRepository)

    try {
      const driver = await getDriverService.execute(id)
      if (!driver) {
        response.status(404).json({
          message: `The drive with id ${id} was not found`
        })
      }
      await updateDriverService.execute({ id, name, priceForKm })
    } catch (error) {
      console.log(error)
      response.status(500).json({
        message: 'Unexpected error when update a Driver'
      })
    }
  }
}

export { UpdateDriverController }
