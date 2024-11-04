import { Sequelize, DataTypes, INTEGER } from "sequelize";
const sequelize = new Sequelize("postgres://postgres:1234@localhost:5432/test");

const User = sequelize.define('user', {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
})

try {
    await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("success");

    const data = User.build({ "name": "Shivam ", "age": 18 })
    await data.save();
    await sequelize.close()
} catch (error) {
    console.log("fail ", error);

}