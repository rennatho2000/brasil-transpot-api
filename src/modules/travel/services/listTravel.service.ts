import { ITravel } from '../repositories/ITravel'

class listTravelService {
  constructor(private readonly driverRepository: ITravel) {}

  async list(): Promise<void> {
    await this.driverRepository.list()
  }
}
export { listTravelService }
