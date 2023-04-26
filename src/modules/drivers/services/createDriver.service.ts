import { CreateDriverDTO } from '../dtos/CreateDriverDTO'
import { IDrivers } from '../repositories/IDrivers'
import { DriversRepository } from '../repositories/implementations/Drivers.repostiory'

class CreateDriverService {
  constructor(private readonly driverRepository: IDrivers) {}

  async execute({ name, priceForKm }: CreateDriverDTO): Promise<void> {
    await this.driverRepository.create({ name, priceForKm })
  }
}

export { CreateDriverService }
