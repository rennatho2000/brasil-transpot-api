import { IRoute } from '../repositories/IRoute'

class listRouteService {
  constructor(private readonly driverRepository: IRoute) {}

  async list(): Promise<void> {
    await this.driverRepository.list()
  }
}
export { listRouteService }
