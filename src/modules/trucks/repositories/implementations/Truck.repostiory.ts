import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../infra/database/connection'
import { CreateTruckDTO } from '../../dtos/CreateTruckDTO'
import { UpdateTruckDTO } from '../../dtos/UpdateTruckDTO'
import { Truck } from '../../entities/truck.entity'
import { ITruck } from '../ITruck'

class TruckRepository implements ITruck {
  private TrucksRepository: Repository<Truck>

  constructor() {
    this.TrucksRepository = AppDataSource.getRepository(Truck)
  }

  async create({
    model,
    axle,
    sign,
    priceForKm
  }: CreateTruckDTO): Promise<void> {
    const newTruck = this.TrucksRepository.create({
      model,
      axle,
      sign,
      priceForKm,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await this.TrucksRepository.save(newTruck)
  }

  async update({
    id,
    model,
    axle,
    sign,
    priceForKm
  }: UpdateTruckDTO): Promise<void> {
    await this.TrucksRepository.update(id, {
      model,
      axle,
      sign,
      priceForKm,
      updatedAt: new Date()
    })
  }

  async getById(id: string): Promise<Truck | null> {
    return this.TrucksRepository.findOne({
      where: {
        id
      }
    })
  }

  async list(): Promise<Truck[]> {
    return this.TrucksRepository.find()
  }

  async remove(id: string): Promise<void> {
    await this.TrucksRepository.delete(id)
  }
}

export { TruckRepository }
