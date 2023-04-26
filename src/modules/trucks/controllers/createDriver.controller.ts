import { Request, Response } from 'express'
import { CreateMaintenanceDTO } from '../dtos/CreateMaintenanceDTO'
import { MaintenanceRepository } from '../repositories/implementations/maintenance.repostiory'

import { CreateMaintenanceService } from '../services/createMaintenance.service'

class CreateMaintenanceController {
  async execute(request: Request, response: Response) {
    const {
      maintenancePrice,
      maintenanceType,
      date,
      truckId
    }: CreateMaintenanceDTO = request.body

    const driverRepository = new MaintenanceRepository()
    const createMaintenanceService = new CreateMaintenanceService(
      driverRepository
    )

    try {
      await createMaintenanceService.execute({
        maintenancePrice,
        maintenanceType,
        date,
        truckId
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

export { CreateMaintenanceController }
