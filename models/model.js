module.exports =(sequelize,Sequelize)=>{
const User = sequelize.define('user', {
    name: Sequelize.TEXT,
    age: Sequelize.INTEGER,
})
return User;
}


