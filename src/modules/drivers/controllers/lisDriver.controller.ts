import { DriversRepository } from '../repositories/implementations/Drivers.repostiory'
import { ListDriverService } from '../services/listDriver.service'
import { Request, Response } from 'express'

class ListDriverController {
  async execute(request: Request, response: Response) {
    const driverRepository = new DriversRepository()
    const listDriverService = new ListDriverService(driverRepository)

    try {
      return listDriverService.execute()
    } catch (error) {
      console.log(error)
      response.status(500).json({
        message: 'Unexpected error when getting a driver list'
      })
    }
  }
}

export { ListDriverController }
