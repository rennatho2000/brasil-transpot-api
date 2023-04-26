import { Request, Response }
import { UpdateDriverDTO } from "../dtos/UpdateDriverDTO"
import { DriversRepository } from "../repositories/implementations/Drivers.repostiory"

class UpdateDriverController {
 async update(request: Request, response: Response) {
  const { name, priceForKm }: UpdateDriverDTO = request.bady

  const driverRepository = new DriversRepository()
  const updateDriverService = new UpdateDriverController(driverRepository)

 }
}

export { UpdateDriverController }
