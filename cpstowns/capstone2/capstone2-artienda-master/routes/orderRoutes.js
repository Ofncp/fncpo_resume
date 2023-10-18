const express = require('express');

const router = express.Router();

const orderControllers = require('../controllers/orderControllers')

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

//checkOutOrder

router.post("/", verify, orderControllers.checkOutOrder);


// RETRIEVE ALL ORDERS by Admin
router.get("/viewAllOrders", verify, verifyAdmin, orderControllers.viewAllOrders);

// RETRIEVE MY ORDERS
router.post("/viewMyOrders/:id", verify, orderControllers.viewMyOrders);


module.exports = router;