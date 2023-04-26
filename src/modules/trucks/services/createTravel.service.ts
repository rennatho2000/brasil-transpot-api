import { CreateTruckDTO } from '../dtos/CreateTruckDTO'
import { ITruck } from '../repositories/ITruck'

class CreateTruckService {
  constructor(private readonly driverRepository: ITruck) {}

  async execute({
    id,
    model,
    axle,
    sign,
    priceForKm
  }: CreateTruckDTO): Promise<void> {
    await this.driverRepository.create({ id, model, axle, sign, priceForKm })
  }
}

export { CreateTruckService }
