import { UpdateDriverDTO } from '../dtos/UpdateDriverDTO'
import { IDrivers } from '../repositories/IDrivers'

class UpdateDriverService {
  constructor(private readonly driverRepository: IDrivers) {}

  async execute({ id, name, priceForKm }: UpdateDriverDTO): Promise<void> {
    await this.driverRepository.update({ id, name, priceForKm })
  }
}
export { UpdateDriverService }
