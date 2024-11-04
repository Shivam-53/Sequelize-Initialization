const Sequelize =require("sequelize")
const cors=require("cors")
const sequelize = new Sequelize(process.env.uri);
const {User}=require("../test/models/model.js");
const express=require("express");
const {router}=require("../test/routes/router.js");
const app=express()
app.use(router);
app.use(cors())
app.listen(8080,()=>{
    console.log("Server listening on port 3000");
    
})