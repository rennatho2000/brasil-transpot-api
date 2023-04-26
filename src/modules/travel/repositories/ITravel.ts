import { CreateTravelDTO } from '../dtos/CreateTravelDTO'
import { UpdateTravelDTO } from '../dtos/UpdateTravelDTO'
import { Travel } from '../entities/travel.entity'

interface ITravel {
  create(data: CreateTravelDTO): Promise<void>
  update(data: UpdateTravelDTO): Promise<void>
  getById(id: string): Promise<Travel | null>
  list(): Promise<Travel[]>
  remove(id: string): Promise<void>
}

export { ITravel }
