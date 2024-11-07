const Sequelize =require("sequelize");
const cors=require("cors");
// const sequelize = new Sequelize(process.env.uri);
const express=require("express");
const {db}=require("./models/helper.js");
const initializeTables=async()=>{
    await db.sequelize.sync();
}
initializeTables()
const {router}=require("../test/routes/router.js");
const app=express();
app.use(express.json());
app.use(router);
app.use(cors());
app.listen(3000,()=>{
    console.log("Server listening on port 3000");
    
})