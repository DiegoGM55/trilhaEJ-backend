const { Model, DataTypes } = require('sequelize');
const CategoriesEnum = require('../config/categories');

class Product extends Model{
    static init(connection){
        super.init({
            id_brand: DataTypes.INTEGER,
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.STRING,
            image_uri: DataTypes.STRING,
            category: DataTypes.ENUM(Object.values(CategoriesEnum)),
            created_at: DataTypes.DATE

        }, {
            sequelize: connection
        })
    }

    static associate(models){
        this.belongsTo(models.Brand,{ foreignKey: 'id_brand', as: 'brand'})
    }
}

module.exports = Product