const express = require('express');

const router = express.Router();

const productControllers = require('../controllers/productControllers')

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

//createProduct

router.post("/", verify, verifyAdmin, productControllers.createProduct);

// RETRIEVE ALL PRODUCTS
router.get("/", productControllers.getAllProduct);

// RETRIEVE SINGLE PRODUCTS
router.post("/getSingleProduct", productControllers.getSingleProduct)

//Update Product
router.put("/updateProduct/:id", verify, verifyAdmin, productControllers.updateProduct)

//ARCHIEVE
router.put("/archive/:id", verify, verifyAdmin, productControllers.archiveProduct)

//DELETE
router.delete("/delete/:id", verify, verifyAdmin, productControllers.deleteProduct)





module.exports = router;