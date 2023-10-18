const Product = require('../models/Product');

const auth = require('../auth');

//CREATE A PRODUCT

module.exports.createProduct = (req, res) => {

	Product.find({})

	.then(products => {

		let filtered = products.filter(product => {
			return product['name'] === req.body.name
		})

		if(filtered.length === 0){

			let newProduct = new Product({
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
			})
			newProduct.save();
			res.send(newProduct);
		} else {
			return res.status(409).send("Product is already created")
		}
	})
	.catch(err => res.send(err));
}

// RETRIEVE ALL PRODUCTS

module.exports.getAllProduct = (req, res) => {

	Product.find({})
	.then(result => res.send(result))
	.catch(err => res.send(err));
};

// RETRIEVE SINGLE PRODUCT 
module.exports.getSingleProduct =(req, res) => {
	
	Product.findById(req.body.id)
	.then(product => res.send(product))
	.catch(err => res.send(err));

};

// UPDATE PRODUCTS

module.exports.updateProduct = (req, res) => {


	let updates = {
		name: req.body.name,
		description: req.body.description,
		price: req.body.price,
	}

	Product.findByIdAndUpdate(req.params.id, updates, {new: true})
	.then(updatedCourse => res.send(updatedCourse))
	.catch(err => res.send(err));

};

//ARCHIVE A PRODUCT

module.exports.archiveProduct = (req, res) => {

	let updates = {
		isActive: false
	}

	Product.findByIdAndUpdate(req.params.id, updates, {new: true})
	.then(updatedUser => res.send(updatedUser))
	.catch(err => res.send(err));
};

//DELETE A PRODUCT 
module.exports.deleteProduct = (req, res) => {

	Product.findByIdAndRemove(req.params.id).exec()
	.then(doc => {
		if (!doc) {return res.status(404).end();}
		return res.status(204).end();
	})
	.catch(err => res.send(err));
};