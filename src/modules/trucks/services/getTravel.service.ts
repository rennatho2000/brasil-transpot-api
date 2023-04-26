import { ITruck } from '../repositories/ITruck'

class GetTruckService {
  constructor(private readonly driverRepository: ITruck) {}

  async getById(id: string): Promise<void> {
    await this.driverRepository.getById(id)
  }
}

export { GetTruckService }
