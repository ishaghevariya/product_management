const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;

const productRouter = require("./routers/product");
const companyRouter = require("./routers/company");
const sellerRouter = require("./routers/seller");

app.use("/product",productRouter);
app.use("/company",companyRouter);
app.use("/seller",sellerRouter);

app.listen(port,() => {
    console.log(`App Runing on ${port}`);
});