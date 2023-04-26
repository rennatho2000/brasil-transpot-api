import { ITruck } from '../repositories/ITruck'

class removeTruckService {
  constructor(private readonly driverRepository: ITruck) {}

  async remove(id: string): Promise<void> {
    await this.driverRepository.remove(id)
  }
}

export { removeTruckService }
