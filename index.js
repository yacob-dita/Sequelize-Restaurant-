const{sequelize, DataTypes, Model} =require('./db')

const { Menu } =  require('./Menu')
const { Restaurant } = require('./Restaurant')

Menu.belongsTo(Restaurant)

Restaurant.hasMany(Menu)

module.exports = { Menu,Restaurant,sequelize}
