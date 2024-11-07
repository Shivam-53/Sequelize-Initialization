const cors=require("cors");
const express=require("express");
const router=express.Router()

const {createData,getAllData,getSpecificData,updateData,deleteAllData,deleteData,testTransaction}=require("../controllers/index")

router.post("/post",createData);
router.get("/getAll",getAllData);
router.get("/get/:id",getSpecificData);
router.patch("/update/:id/:name",updateData);
router.delete("/delete/:id/",deleteData);
router.delete("/detleteAll",deleteAllData)
router.get("/transaction",testTransaction);

module.exports = { router };