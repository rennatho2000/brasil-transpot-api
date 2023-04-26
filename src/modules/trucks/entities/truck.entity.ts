import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn
} from 'typeorm'
import { Driver } from '../../drivers/entities/driver.entity'
import { v4 as uuid } from 'uuid'
import { Maintenance } from '../../maintenance/entities/maintenance.entity'
import { Route } from '../../routes/entities/routes.entity'
import { Travel } from '../../travel/entities/travel.entity'

@Entity('truck')
export class Truck {
  @PrimaryColumn()
  id!: string

  @Column()
  model!: string

  @Column()
  axle!: number

  @Column()
  sign!: string

  @Column()
  routes!: string

  @Column()
  priceForKm!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @OneToMany(() => Maintenance, maintenance => maintenance.truck, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'truckId' })
  maintenances!: Maintenance[]

  @OneToOne(() => Route, route => route.truck, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'routeId' })
  route!: Route

  @OneToOne(() => Driver, driver => driver.truck, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'driverId' })
  driver!: Driver

  @OneToMany(() => Travel, travel => travel.truck, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'attachment_id' })
  travels!: Travel[]

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
