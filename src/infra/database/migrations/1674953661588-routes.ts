import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class routes1674953661588 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'routes',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true
          },
          {
            name: 'mileage',
            type: 'decimal',
            scale: 2,
            precision: 10,
            default: 0.0
          },
          {
            name: 'start',
            type: 'varchar'
          },
          {
            name: 'end',
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
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('routes')
  }
}
