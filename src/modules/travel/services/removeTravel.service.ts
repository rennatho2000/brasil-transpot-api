import { ITravel } from '../repositories/ITravel'

class removeTravelService {
  constructor(private readonly driverRepository: ITravel) {}

  async remove(id: string): Promise<void> {
    await this.driverRepository.remove(id)
  }
}

export { removeTravelService }
