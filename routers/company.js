const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/companyofproduct",(req,res) =>{
   const pid = req.body.product_id;
   if(pid){
       return res.json({
           data:{
             company_id : "c1",
             name:"Asus",
             product_id:"p1"
           }
       });
   }
   return res.json({data:"no data found"});
});
router.post("/newCompany",(req,res) => {
  const {newCompany} = req.body;
  if(newCompany){
      return res.json({data:"new compnay add sucessfully"});
  }
  return res.json({data:"Something want wrong"});
});


router.put("/updateProductId",(req,res) => {
  const cid = req.body.company_id;
  const pid = req.body.product_id;
  if(pid && cid){
      return res.json({data : "product id updated sucessfully"});
  }
  return res.json({data:"something want wrong!!!"});
});

router.delete("/deleteCompany",(req,res) => {
  const cid = req.body.company_id;
  if(cid){
      return res.json({data:"delete company"});
  }
  return res.json({data:"something want wrong!!!"});
});
module.exports = router;