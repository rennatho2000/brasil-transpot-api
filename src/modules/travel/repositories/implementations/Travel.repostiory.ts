import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../infra/database/connection'
import { CreateTravelDTO } from '../../dtos/CreateTravelDTO'
import { UpdateTravelDTO } from '../../dtos/UpdateTravelDTO'
import { Travel } from '../../entities/travel.entity'
import { ITravel } from '../ITravel'

class TravelRepository implements ITravel {
  private TravelsRepository: Repository<Travel>

  constructor() {
    this.TravelsRepository = AppDataSource.getRepository(Travel)
  }

  async create({
    status,
    totalReceived,
    costs,
    truckId
  }: CreateTravelDTO): Promise<void> {
    const newTravel = this.TravelsRepository.create({
      status,
      totalReceived,
      costs,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await this.TravelsRepository.save(newTravel)
  }

  async update({
    id,
    status,
    totalReceived,
    costs
  }: UpdateTravelDTO): Promise<void> {
    await this.TravelsRepository.update(id, {
      status,
      totalReceived,
      costs,
      updatedAt: new Date()
    })
  }

  async getById(id: string): Promise<Travel | null> {
    return this.TravelsRepository.findOne({
      where: {
        id
      }
    })
  }

  async list(): Promise<Travel[]> {
    return this.TravelsRepository.find()
  }

  async remove(id: string): Promise<void> {
    await this.TravelsRepository.delete(id)
  }
}

export { TravelRepository }
