import { MaintenanceRepository } from '../repositories/implementations/maintenance.repostiory'

import { IMaintenance } from '../repositories/IMaintenance'

class GetMaintenanceService {
  constructor(private readonly maintenanceRepository: IMaintenance) {}

  async execute(id: string): Promise<MaintenanceRepository | null> {
    return this.maintenanceRepository.getById(id)
  }
}

export { GetMaintenanceService }
