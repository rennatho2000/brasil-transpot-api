import { IRoute } from '../repositories/IRoute'

class GetRouteService {
  constructor(private readonly driverRepository: IRoute) {}

  async getById(id: string): Promise<void> {
    await this.driverRepository.getById(id)
  }
}

export { GetRouteService }
