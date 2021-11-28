const express = require("express");
const router = express.Router();
router.use(express.json());

router.get("/productofCompnay",(req,res) => {
  const cid = req.body.company_id;
  if(cid){
      return res.json({
          data :{
            product_id : "p1",
            title : "key-borad",
            price : "2000",
            category : "computer accessories",
            company_id  : "c1",
            seller_id : "s1"
          }
      });
  }
  return res.json({data : "no data found"});
});

router.get("/productOfSeller",(req,res)=>{
    const sid = req.body.seller_id;
    if(sid){
        return res.json({data:{
            product_id : "p1",
            title : "key-borad",
            price : "2000",
            category : "computer accessories",
            company_id : "c1",
            seller_id : "s1"
        }});
    }
    return res.json({data:"No Data Found"});
});

router.post("/newProduct",(req,res) => {
   const {newProduct} = req.body;
   if(newProduct){
       return res.json({data:"new product add sucessfully"});
   }
   return res.json({data:"something want wrong"});
});

router.put("/updateproductbycategory",(req,res) => {
  const pid = req.body.product_id;
  const cate = req.body.category;
  if(pid && cate){
      return res.json({data:"product category update sucessfully"});
  }
  return res.json({data:"something want wrong!!!"});
});

router.delete("/deleteproduct",(req,res) => {
   const pid = req.body.product_id;
   if(pid){
       return res.json({data : "delete sucessfully"});
   }
   return res.json({data:"something want wrong!!!"})
});
module.exports = router;