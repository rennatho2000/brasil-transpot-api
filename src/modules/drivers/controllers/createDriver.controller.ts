import { Request, Response } from 'express'
import { CreateDriverDTO } from '../dtos/CreateDriverDTO'
import { DriversRepository } from '../repositories/implementations/Drivers.repostiory'
import { CreateDriverService } from '../services/createDriver.service'

class CreateDriverController {
  async execute(request: Request, response: Response) {
    const { name, priceForKm }: CreateDriverDTO = request.body

    const driverRepository = new DriversRepository()
    const createDriverService = new CreateDriverService(driverRepository)

    try {
      await createDriverService.execute({
        name,
        priceForKm
      })

      response.status(201)
    } catch (error) {
      console.log(error)

      response.status(500).json({
        message: 'Unexpected error when creating driver'
      })
    }
  }
}

export { CreateDriverController }
