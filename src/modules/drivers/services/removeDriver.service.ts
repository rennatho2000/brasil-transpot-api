import { IDrivers } from '../repositories/IDrivers'

class RemoveDriveService {
  constructor(private readonly driverRepository: IDrivers) {}

  async execute(id: string): Promise<void> {
    await this.driverRepository.remove(id)
  }
}

export { RemoveDriveService }
