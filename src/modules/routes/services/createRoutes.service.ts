import { CreateRouteDTO } from '../dtos/CreateRouteDTO'
import { IRoute } from '../repositories/IRoute'

class CreateRoutesService {
  constructor(private readonly driverRepository: IRoute) {}

  async execute({ mileage, start, end }: CreateRouteDTO): Promise<void> {
    await this.driverRepository.create({ mileage, start, end })
  }
}

export { CreateRoutesService }
