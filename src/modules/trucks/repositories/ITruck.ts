import { CreateTruckDTO } from '../dtos/CreateTruckDTO'
import { UpdateTruckDTO } from '../dtos/UpdateTruckDTO'
import { Truck } from '../entities/truck.entity'

interface ITruck {
  create(data: CreateTruckDTO): Promise<void>
  update(data: UpdateTruckDTO): Promise<void>
  getById(id: string): Promise<Truck | null>
  list(): Promise<Truck[]>
  remove(id: string): Promise<void>
}

export { ITruck }
