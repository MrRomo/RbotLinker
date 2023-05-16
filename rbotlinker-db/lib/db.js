import Sequelize from 'sequelize'
let sequelize = null

export function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
