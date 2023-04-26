import { IRoute } from '../repositories/IRoute'

class removeRouteService {
  constructor(private readonly driverRepository: IRoute) {}

  async remove(id: string): Promise<void> {
    await this.driverRepository.remove(id)
  }
}

export { removeRouteService }
