import { CreateTravelDTO } from '../dtos/CreateTravelDTO'
import { ITravel } from '../repositories/ITravel'
import { TravelRepository } from '../repositories/implementations/Travel.repostiory'

class CreateTravelService {
  constructor(private readonly driverRepository: ITravel) {}

  async execute({
    id,
    status,
    totalReceived,
    costs,
    truckId
  }: CreateTravelDTO): Promise<void> {
    await this.driverRepository.create({
      id,
      status,
      totalReceived,
      costs,
      truckId
    })
  }
}

export { CreateTravelService }
