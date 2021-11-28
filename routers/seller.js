const express = require("express");
const router = express.Router();
router.use(express.json());


router.get("/sellerOfProduct",(req,res)=>{
    const pId = req.body.product_id;
    if(pId){
        return res.json({data:{
            seller_id : "s1",
            name : "Asus seller",
            product_id : "p1"
        }});
    }
    return res.json({data:"No Data Found"});
});

router.post("/newSeller",(req,res) => {
  const{newSeller} = req.body;
  if(newSeller){
      return res.json({data:"add sucessfully"});
  }
  return res.json({data:"something want wrong!!!"})
});

router.put("/updateProductId",(req,res) => {
  const sid = req.body.seller_id;
  const pid = req.body.product_id;
  if(pid && sid){
      return res.json({data : "product id update sucessfully"});
  }
  return res.json({data:"something want wrong!!!"});
});

router.delete("/deleteSeller",(req,res) => {
  const sid = req.body.seller_id;
  if(sid){
      return res.json({data:"delete seller sucessfully"});
  }
  return res.json({data:"something want wrong"});
});
module.exports = router;