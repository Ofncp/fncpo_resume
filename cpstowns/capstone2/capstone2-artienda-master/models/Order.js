const mongoose = require('mongoose');

let orderSchema = new mongoose.Schema(

	{
		
		invoiceNo: {
			type: String,
			required: true
		},

		orderedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref:'userName'
		},

		purchaseDate: {
			type: Date,
			default: new Date()
		},

		pickUpDate: {
			type: Date,
			required: Date ()
		},

		total: {
			type: Number,
			required: true
		},

		orderDetails: [
			{	
				productName: {
					type: String,
					required: true
				},
				quantity: {
					type: Number,
					required: true
				},
				subTotal: {
					type: Number,
					required: true
				}
			}
		]	
	}
);


module.exports = mongoose.model("Order", orderSchema);




