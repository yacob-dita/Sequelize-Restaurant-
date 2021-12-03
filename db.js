const {Sequelize , DataTypes, Model} = require('Sequelize')


const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './restaurant.sqlite',
    logging: false
})

module.exports = {Sequelize, DataTypes, Model}