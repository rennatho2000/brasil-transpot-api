import { Request, Response } from 'express'
import { TruckRepository } from '../../trucks/repositories/implementations/Truck.repostiory'
import { CreateTruckService } from '../../trucks/services/createTravel.service'
import { CreateTruckDTO } from '../../trucks/dtos/CreateTruckDTO'

class CreateTruckController {
  async execute(request: Request, response: Response) {
    const { id, model, axle, sign, priceForKm }: CreateTruckDTO = request.body

    const driverRepository = new TruckRepository()
    const createTruckService = new CreateTruckService(driverRepository)

    try {
      await createTruckService.execute({
        id,
        model,
        axle,
        sign,
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

export { CreateTruckController }
