import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Trucks } from '../../trucks/entities/truck.entity'

@Entity('travels')
export class Travel {
  @PrimaryColumn()
  id!: string

  @Column()
  trucks!: string

  @Column()
  drives!: String

  @Column()
  routes!: string

  @Column()
  status!: string

  @Column()
  totalReceived!: number

  @Column()
  costs!: number

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @ManyToOne(() => Trucks, trucks => trucks.travels)
  @JoinColumn({ name: 'truckId' })
  truck!: Trucks

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
