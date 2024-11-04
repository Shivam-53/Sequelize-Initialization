const {Sequelize,DataTypes} =require("sequelize")
const sequelize = new Sequelize(process.env.uri);

 const User = sequelize.define('user', {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
})

module.exports={User};

