import { CreateMaintenanceDTO } from '../dtos/CreateMaintenanceDTO'
import { UpdateMaintenanceDTO } from '../dtos/UpdateMaintenanceDTO'
import { Maintenance } from '../entities/maintenance.entity'

interface IMaintenance {
  create(data: CreateMaintenanceDTO): Promise<void>
  update(data: UpdateMaintenanceDTO): Promise<void>
  getById(id: string): Promise<Maintenance | null>
  list(): Promise<Maintenance[]>
  remove(id: string): Promise<void>
}

export { IMaintenance }
