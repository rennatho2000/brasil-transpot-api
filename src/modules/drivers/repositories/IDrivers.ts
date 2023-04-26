import { CreateDriverDTO } from '../dtos/CreateDriverDTO'
import { UpdateDriverDTO } from '../dtos/UpdateDriverDTO'
import { Driver } from '../entities/driver.entity'

interface IDrivers {
  create(data: CreateDriverDTO): Promise<void>
  update(data: UpdateDriverDTO): Promise<void>
  getById(id: string): Promise<Driver | null>
  list(): Promise<Driver[]>
  remove(id: string): Promise<void>
}

export { IDrivers }
