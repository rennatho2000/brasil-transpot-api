import { ITruck } from '../repositories/ITruck'

class listTruckITruckService {
  constructor(private readonly driverRepository: ITruck) {}

  async list(): Promise<void> {
    await this.driverRepository.list()
  }
}
export { listTruckITruckService }
