import { UpdateMaintenanceDTO } from '../dtos/UpdateMaintenanceDTO'
import { IMaintenance } from '../repositories/IMaintenance'

class UpdateMaintenanceService {
  constructor(private readonly driverRepository: IMaintenance) {}

  async update({
    id,
    maintenancePrice,
    maintenanceType,
    date
  }: UpdateMaintenanceDTO): Promise<void> {
    await this.driverRepository.update({
      id,
      maintenancePrice,
      maintenanceType,
      date
    })
  }
}

export { UpdateMaintenanceService }
