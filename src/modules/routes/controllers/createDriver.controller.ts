import { Request, Response } from 'express'
import { CreateRouteDTO } from '../dtos/CreateRouteDTO'
import { RouteRepository } from '../repositories/implementations/Routes.repostiory'

import { CreateRoutesService } from '../services/createRoutes.service'

class CreateRouteController {
  async execute(request: Request, response: Response) {
    const { mileage, start, end }: CreateRouteDTO = request.body

    const driverRepository = new RouteRepository()
    const createRouteService = new CreateRoutesService(driverRepository)

    try {
      await createRouteService.execute({
        mileage,
        start,
        end
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

export { CreateRouteController }
