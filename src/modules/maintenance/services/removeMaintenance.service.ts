import { IMaintenance } from '../repositories/IMaintenance'

class removeMaintenanceService {
  constructor(private readonly driverRepository: IMaintenance) {}

  async remove(id: string): Promise<void> {
    await this.driverRepository.remove(id)
  }
}

export { removeMaintenanceService }
