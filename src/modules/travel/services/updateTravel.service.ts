import { UpdateTravelDTO } from '../dtos/UpdateTravelDTO'
import { ITravel } from '../repositories/ITravel'

class UpdateTravelService {
  constructor(private readonly driverRepository: ITravel) {}

  async update({
    id,
    status,
    totalReceived,
    costs,
    truckId
  }: UpdateTravelDTO): Promise<void> {
    await this.driverRepository.update({
      id,
      status,
      totalReceived,
      costs,
      truckId
    })
  }
}

export { UpdateTravelService }
