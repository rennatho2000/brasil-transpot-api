import { Request, Response } from 'express'

import { MaintenanceRepository } from '../repositories/implementations/maintenance.repostiory'
import { GetMaintenanceService } from '../services/getMaintenance.service'

class GetMaintenanceController {
  async execute(request: Request, response: Response) {
    const { id } = request.params

    const maintenanceRepository = new MaintenanceRepository()
    const getMaintenanceService = new GetMaintenanceService(
      maintenanceRepository
    )

    try {
      const maintenance = await getMaintenanceService.execute(id)

      if (!maintenance)
        response.status(404).json({
          message: 'Maintenance not found'
        })

      response.json(maintenance)
    } catch (error) {
      console.log(error)

      response.status(500).json({
        message: 'Unexpected error when getting maintenance'
      })
    }
  }
}

export { GetMaintenanceController }
