const { Router } = require("express");
const {createProductHandler} = require ('../handlers/createProductHandler')
const {getProductsHandler} = require ('../handlers/getAllProductsHandler')
const router = Router();

router.post("/createProduct",createProductHandler)
router.get("/allProducts", getProductsHandler)

module.exports = router
