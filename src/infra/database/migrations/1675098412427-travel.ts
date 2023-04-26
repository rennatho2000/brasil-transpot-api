import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class travel1675098412427 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'travels',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'status',
            type: 'varchar'
          },
          {
            name: 'totalReceived:',
            type: 'varchar'
          },
          {
            name: 'costs',
            type: 'varchar'
          },
          {
            name: 'truckId',
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
            name: 'trucksOnTravel',
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
    await queryRunner.dropTable('travel')
  }
}
