import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn
} from 'typeorm'
import { Truck } from '../../trucks/entities/truck.entity'
import { v4 as uuid } from 'uuid'

@Entity('maintenances')
export class Maintenance {
  @PrimaryColumn()
  id!: string

  @Column()
  maintenanceType!: String

  @Column()
  maintenancePrice!: number

  @Column()
  date!: Date

  @Column()
  truckId!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @ManyToOne(() => Truck, truck => truck.maintenances)
  @JoinColumn({ name: 'truckId' })
  truck!: Truck

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
