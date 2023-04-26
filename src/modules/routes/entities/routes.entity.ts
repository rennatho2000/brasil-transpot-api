import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Truck } from '../../trucks/entities/truck.entity'

@Entity('route')
export class Route {
  @PrimaryColumn()
  id!: string

  @Column()
  mileage!: number

  @Column()
  start!: String

  @Column()
  end!: string

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

  @OneToOne(() => Truck, truck => truck.route, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'routeId' })
  truck!: Truck

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
