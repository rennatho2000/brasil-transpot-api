import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../infra/database/connection'
import { CreateMaintenanceDTO } from '../../dtos/CreateMaintenanceDTO'
import { UpdateMaintenanceDTO } from '../../dtos/UpdateMaintenanceDTO'
import { Maintenance } from '../../entities/maintenance.entity'
import { IMaintenance } from '../IMaintenance'

class MaintenanceRepository implements IMaintenance {
  private maintenancesRepository: Repository<Maintenance>

  constructor() {
    this.maintenancesRepository = AppDataSource.getRepository(Maintenance)
  }

  async create({
    maintenanceType,
    maintenancePrice,
    date,
    truckId
  }: CreateMaintenanceDTO): Promise<void> {
    const newMaintenance = this.maintenancesRepository.create({
      maintenanceType,
      maintenancePrice,
      date,
      truckId,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await this.maintenancesRepository.save(newMaintenance)
  }

  async update({
    id,
    maintenanceType,
    maintenancePrice,
    date
  }: UpdateMaintenanceDTO): Promise<void> {
    await this.maintenancesRepository.update(id, {
      maintenanceType,
      maintenancePrice,
      date,
      updatedAt: new Date()
    })
  }

  async getById(id: string): Promise<Maintenance | null> {
    return this.maintenancesRepository.findOne({
      where: {
        id
      }
    })
  }

  async list(): Promise<Maintenance[]> {
    return this.maintenancesRepository.find()
  }

  async remove(id: string): Promise<void> {
    await this.maintenancesRepository.delete(id)
  }
}

export { MaintenanceRepository }
