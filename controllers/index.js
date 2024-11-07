const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize(process.env.uri);
const {db}=require("../models/helper")
const user=db.data;

const createData = async (req, res) => {
    try {
        console.log(db.data.user)
        const Data=req.body;
        console.log(Data);
        
        await sequelize.sync({ force: true });
        await sequelize.authenticate();

        const UserData={
            "name":Data.name,
            "age":Data.age
        }
        console.log("success");
        const savedData = user.create(UserData)
        // await user.save(savedData);
        res.send("Created")
    } catch (error) {
        console.log("fail ", error);

    }
}

const getAllData = async (req, res) => {
    try {
        await sequelize.sync({ force: false });
        const data = await user.findAll();
        console.log('All users:', JSON.stringify(data));
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

const getSpecificData = async (req, res) => {
    try {
        const findData=req.params.id;

        const data = await user.findAll({
            raw: true,
            where: { id: findData }
        });
        console.log((data))
        res.json(data)
    } catch (error) {
        console.log(error);
    }

}

const updateData = async (req, res) => {
    try {
        const num=req.params.id;
        const newName=req.params.name;
        const data = await user.update({
            name: newName
        }, {
            where: { id: num }
        })


        res.json(data)
    } catch (error) {
        console.log(error);

    }

}


const deleteData = async (req, res) => {
    try {
        const userid=req.params.id;
        await user.destroy({
            where: {
                id: userid
            }
        })
        res.send("DELETED")
    } catch (error) {
        console.log(error);
    }
}

const deleteAllData = async (req, res) => {
    try {
        await user.destroy({
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

        const data= await user.create({name:"Vaibhav",age:20},{transaction:tran})
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