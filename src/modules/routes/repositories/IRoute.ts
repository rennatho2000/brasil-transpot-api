import { CreateRouteDTO } from '../dtos/CreateRouteDTO'
import { UpdateRouteDTO } from '../dtos/UpdateRouteDTO'
import { Route } from '../entities/routes.entity'

interface IRoute {
  create(data: CreateRouteDTO): Promise<void>
  update(data: UpdateRouteDTO): Promise<void>
  getById(id: string): Promise<Route | null>
  list(): Promise<Route[]>
  remove(id: string): Promise<void>
}

export { IRoute }
