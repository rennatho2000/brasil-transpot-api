import { UpdateTruckDTO } from '../dtos/UpdateTruckDTO'
import { ITruck } from '../repositories/ITruck'

class UpdateTruckService {
  constructor(private readonly driverRepository: ITruck) {}

  async update({
    id,
    model,
    axle,
    sign,
    priceForKm
  }: UpdateTruckDTO): Promise<void> {
    await this.driverRepository.update({ id, model, axle, sign, priceForKm })
  }
}

export { UpdateTruckService }
