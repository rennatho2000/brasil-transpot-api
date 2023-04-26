import { CreateMaintenanceDTO } from '../dtos/CreateMaintenanceDTO'
import { IMaintenance } from '../repositories/IMaintenance'

class CreateMaintenanceService {
  constructor(private readonly driverRepository: IMaintenance) {}

  async execute({
    maintenancePrice,
    maintenanceType,
    date,
    truckId
  }: CreateMaintenanceDTO): Promise<void> {
    await this.driverRepository.create({
      maintenancePrice,
      maintenanceType,
      date,
      truckId
    })
  }
}

export { CreateMaintenanceService }
