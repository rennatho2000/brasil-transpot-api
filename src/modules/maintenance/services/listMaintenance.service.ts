import { IMaintenance } from '../repositories/IMaintenance'

class listMaintenanceService {
  constructor(private readonly driverRepository: IMaintenance) {}

  async list(): Promise<void> {
    await this.driverRepository.list()
  }
}
export { listMaintenanceService }
