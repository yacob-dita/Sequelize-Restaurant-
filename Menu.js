const {sequelize, DataTypes, Model} = require('./db')


class Menu extends Model {
    
}


Menu.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    inLanguage: DataTypes.BOOLEAN,
}, {
    sequelize, 
    timestamps: false,
})

module.exports = {Menu}