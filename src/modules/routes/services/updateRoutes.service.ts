import { UpdateRouteDTO } from '../dtos/UpdateRouteDTO'
import { IRoute } from '../repositories/IRoute'

class UpdateRouteService {
  constructor(private readonly driverRepository: IRoute) {}

  async update({ id, mileage, start, end }: UpdateRouteDTO): Promise<void> {
    await this.driverRepository.update({ id, mileage, start, end })
  }
}

export { UpdateRouteService }
