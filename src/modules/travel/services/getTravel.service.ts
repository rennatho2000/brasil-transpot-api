import { ITravel } from '../repositories/ITravel'

class GetTravelService {
  constructor(private readonly driverRepository: ITravel) {}

  async getById(id: string): Promise<void> {
    await this.driverRepository.getById(id)
  }
}

export { GetTravelService }
