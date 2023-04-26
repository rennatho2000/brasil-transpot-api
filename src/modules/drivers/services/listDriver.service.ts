import { IDrivers } from '../repositories/IDrivers'

class ListDriverService {
  constructor(private readonly driverRepository: IDrivers) {}

  async execute(): Promise<void> {
    await this.driverRepository.list()
  }
}
export { ListDriverService }
