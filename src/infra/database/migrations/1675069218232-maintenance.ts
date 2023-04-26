import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class maintenance1675069218232 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'maintenances',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'maintenanceType',
            type: 'varchar'
          },
          {
            name: 'maintenancePrice',
            type: 'decimal',
            scale: 2,
            precision: 10,
            default: 0.0
          },
          {
            name: 'truckId',
            type: 'varchar'
          },
          {
            name: 'date',
            type: 'date'
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
            name: 'TruckerOnMaintenance',
            columnNames: ['truckId'],
            referencedTableName: 'trucks',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('maintenance')
  }
}
