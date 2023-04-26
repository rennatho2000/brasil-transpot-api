import { Driver } from '../entities/driver.entity'
import { IDrivers } from '../repositories/IDrivers'

class GetDriveService {
  constructor(private readonly driverRepository: IDrivers) {}

  async execute(id: string): Promise<Driver | null> {
    return this.driverRepository.getById(id)
  }
}

export { GetDriveService }
