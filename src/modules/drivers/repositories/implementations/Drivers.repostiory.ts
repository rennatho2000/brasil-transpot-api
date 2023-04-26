import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../infra/database/connection'
import { CreateDriverDTO } from '../../dtos/CreateDriverDTO'
import { UpdateDriverDTO } from '../../dtos/UpdateDriverDTO'
import { Driver } from '../../entities/driver.entity'
import { IDrivers } from '../IDrivers'

class DriversRepository implements IDrivers {
  private driversRepository: Repository<Driver>

  constructor() {
    this.driversRepository = AppDataSource.getRepository(Driver)
  }

  async create({ name, priceForKm }: CreateDriverDTO): Promise<void> {
    const newDriver = this.driversRepository.create({
      name,
      priceForKm,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await this.driversRepository.save(newDriver)
  }

  async update({ id, name, priceForKm }: UpdateDriverDTO): Promise<void> {
    await this.driversRepository.update(id, {
      name,
      priceForKm,
      updatedAt: new Date()
    })
  }

  async getById(id: string): Promise<Driver | null> {
    return this.driversRepository.findOne({
      where: {
        id
      }
    })
  }

  async list(): Promise<Driver[]> {
    return this.driversRepository.find()
  }

  async remove(id: string): Promise<void> {
    await this.driversRepository.delete(id)
  }
}

export { DriversRepository }
