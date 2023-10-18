const express = require('express');

const router = express.Router();

const productControllers = require('../controllers/productControllers')

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

//createProduct

router.post("/", verify, verifyAdmin, productControllers.createProduct);

// Retrieve All Products
router.get("/", productControllers.getAllProduct);

// Retrieve Active Products
router.get("/active", productControllers.getActiveProduct);

// Retrieve Single Products
router.get("/getSingleProduct/:id", productControllers.getSingleProduct);

//Update Product
router.put("/updateProduct/:id", verify, verifyAdmin, productControllers.updateProduct);

//ARCHIEVE
router.put("/archive/:id", verify, verifyAdmin, productControllers.archiveProduct);

//ACTIVATE
router.put("/activate/:id", verify, verifyAdmin, productControllers.activateProduct);

//DELETE
router.delete("/delete/:id", verify, verifyAdmin, productControllers.deleteProduct);





module.exports = router;