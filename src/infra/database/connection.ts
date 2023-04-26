import { DataSource } from 'typeorm'
import { MaintenanceRepository } from '../../modules/maintenance/repositories/implementations/maintenance.repostiory'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'brasiltransportes',
  entities: ['./src/modules/**/entities/*.ts'],
  migrations: ['./src/infra/database/migrations/*.ts'],
  migrationsRun: true,
  logging: true
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized! ')

    // const maintenanceRepository = new MaintenanceRepository()

    // maintenanceRepository.create({
    //   maintenanceType: 'freio',
    //   maintenancePrice: 230,
    //   date: new Date()

    // })
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err)
  })

export { AppDataSource }
