const cors=require("cors");
const express=require("express");
const router=express.Router()

const {createData,getAllData,getSpecificData,updateData,deleteAllData,deleteData}=require("../controllers/index")

router.get("/post",createData);
router.get("/getAll",getAllData);
router.get("/getSpecific",getSpecificData);
router.get("/update",updateData);
router.get("/delete",deleteData);
router.get("/detleteAll",deleteAllData)

module.exports = { router };