const {sequelize, DataTypes, Model} = require('./db')


class Menu extends Model {
    
}


Menu.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    
    isVocalist: DataTypes.BOOLEAN,
}, {
    sequelize, 
    timestamps: false
})

module.exports = {Menu}