const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize(process.env.uri);
const {User} =require("../models/model")

const createData = async (req, res) => {
    try {
        await sequelize.sync({ force: false });
        await sequelize.authenticate();
        console.log("success");
        const data = User.build({ "name": "Shivam ", "age": 18 })
        await data.save();
        res.send("Created")
    } catch (error) {
        console.log("fail ", error);

    }
}

const getAllData = async (req, res) => {
    try {
        await sequelize.sync({ force: false });
        const data = await User.findAll();
        console.log('All users:', JSON.stringify(data));
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

const getSpecificData = async (req, res) => {
    try {
        const data = await User.findAll({
            raw: true,
            where: { id: 6 }
        });
        console.log((data))
        res.json(data)
    } catch (error) {
        console.log(error);
    }

}

const updateData = async (req, res) => {
    try {
        const data = await User.update({
            name: "rajesh"
        }, {
            where: { id: 7 }
        })

        const check = await User.findAll({
            raw: true,
            where: { id: 7 }
        })

        console.log(check);
    
        res.json(check)
    } catch (error) {
        console.log(error);

    }

}


const deleteData = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: 7
            }
        })
        res.send("DELETED")
    } catch (error) {
        console.log(error);
    }
}

const deleteAllData = async (req, res) => {
    try {
        await User.destroy({
            truncate: true
        })
        res.json({})
    } catch (error) {
        console.log(error);
    }
}



const testTransaction=async(req,res)=>{
    let tran= await sequelize.transaction();
    try {
        console.log("hello");

        const data= await User.create({name:"Vaibhav",age:20},{transaction:tran})
        if(data!=String){ // to force error, to check if transaction is working properly
            throw Error;  
        }
        res.send("done")
        await tran.commit();

    } catch (error) {
        await tran.rollback();
        console.log("error");
        
    }
}

module.exports={createData,getAllData,getSpecificData,updateData,deleteAllData,deleteData,testTransaction}