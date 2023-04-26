import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class trucks1674953712902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'trucks',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'model',
            type: 'varchar'
          },
          {
            name: 'axle',
            type: 'int'
          },
          {
            name: 'sign',
            type: 'varchar'
          },
          {
            name: 'priceForKm',
            type: 'decimal',
            scale: 2,
            precision: 10,
            default: 0.0
          },
          {
            name: 'routeId',
            type: 'varchar'
          },
          {
            name: 'driverId',
            type: 'varchar'
          },
          {
            name: 'createdAt',
            type: 'timestamp'
          },
          {
            name: 'updatedAt',
            type: 'timestamp'
          }
        ],
        foreignKeys: [
          {
            name: 'RouteOnTrucker',
            columnNames: ['routeId'],
            referencedTableName: 'routes',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          },
          {
            name: 'DriverOnTrucker',
            columnNames: ['driverId'],
            referencedTableName: 'drivers',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('trucks')
  }
}
