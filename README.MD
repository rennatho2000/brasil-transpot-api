Motoristas
Nome:
valor por km:

Camilhões
Modelo:
Eixos:
Placa:
Rota:
Motorista:
valor por km:

Rotas
kilometragem:
inicio:
final:

Viagem
Caminhao:
Motorista:
Rota:
Status:
Total Recebido:
Custos

Manutençoes
Camilhao:
Tipo de manutençao:
Valor:
Data:

await queryRunner.createTable(new Table({
name:"trucks",
columns: [
{
name: "id",
type: "varchar",
isPrimary: true,
},
{
name: "model",
type: "varchar"
},
{
name: "axle",
type: "int",
},
{
name: "plate",
type: "varchar"
},
{
name: "priceForKm",
type: 'decimal',
scale: 2,
precision: 10,
default: 0.00,
}
]
}))
