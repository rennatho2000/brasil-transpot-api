import { Repository } from 'typeorm'
import { AppDataSource } from '../../../../infra/database/connection'
import { CreateRouteDTO } from '../../dtos/CreateRouteDTO'
import { UpdateRouteDTO } from '../../dtos/UpdateRouteDTO'
import { Route } from '../../entities/routes.entity'
import { IRoute } from '../IRoute'

class RouteRepository implements IRoute {
  private RoutesRepository: Repository<Route>

  constructor() {
    this.RoutesRepository = AppDataSource.getRepository(Route)
  }

  async create({ mileage, start, end }: CreateRouteDTO): Promise<void> {
    const newRoute = this.RoutesRepository.create({
      mileage,
      start,
      end,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    await this.RoutesRepository.save(newRoute)
  }

  async update({ id, mileage, start, end }: UpdateRouteDTO): Promise<void> {
    await this.RoutesRepository.update(id, {
      mileage,
      start,
      end,
      updatedAt: new Date()
    })
  }

  async getById(id: string): Promise<Route | null> {
    return this.RoutesRepository.findOne({
      where: {
        id
      }
    })
  }

  async list(): Promise<Route[]> {
    return this.RoutesRepository.find()
  }

  async remove(id: string): Promise<void> {
    await this.RoutesRepository.delete(id)
  }
}

export { RouteRepository }
