const Order = require('../models/Order');
const User = require("../models/User");
const Product = require("../models/Product");
const auth = require('../auth');
const crypto = require("crypto");


//checkOutOrder

module.exports.checkOutOrder = async (req, res) => {

	if (req.user.isAdmin){
	return res.status(401).send("Action Forbidden")};

	const invoiceNumber = crypto.randomBytes(16).toString("hex");
	let orderDetailsRaw = req.body.orderDetails;

	//stored quantity elements in an array
	let orderQuantity = orderDetailsRaw.map((item) => item.quantity);
	//console.log(orderQuantity)

	//stored subTotal elements in an array
	let orderSubTotals = orderDetailsRaw.map((item) => item.subTotal);
	//console.log(orderSubTotals)

	let totalAmount = 0;
	for (let i=0; i < orderQuantity.length; i++) {
	  totalAmount += (orderQuantity[i] * orderSubTotals[i]);
	 //console.log(totalAmount)
	}

	
	let newOrder = new Order({
		invoiceNo: invoiceNumber,
		orderedBy: await User.findById(req.user.id).populate('userName'),
		pickUpDate: req.body.pickUpDate,
		total: totalAmount,
		orderDetails: orderDetailsRaw
	})

	// console.log(newOrder)

	newOrder.save()
	.then(newOrder => res.send(newOrder))
	.catch(err => res.send(err));
	
};

//View orders by Admin

module.exports.viewAllOrders = (req, res) => {

	Order.find({})
	.then(result => res.send(result))
	.catch(err => res.send(err));
};

//View orders by User


module.exports.viewMyOrders = (req, res) => {

	Order.findById(req.params.id)
	.then(result => res.send(result))
	.catch(err => res.send(err));
};