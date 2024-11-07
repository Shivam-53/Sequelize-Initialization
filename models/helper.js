const {Sequelize,DataTypes, Model} =require("sequelize")
const sequelize = new Sequelize(process.env.uri);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const model=require("./model");
console.log("wads",typeof(model));
db.data = model(sequelize, Sequelize);
module.exports={db};
