const Product = require('../models/Product');

const auth = require('../auth');

//Create A Product

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

// Retrive All Products

module.exports.getAllProduct = (req, res) => {

	Product.find({})
	.then(result => res.send(result))
	.catch(err => res.send(err));
};

// Get Active Products

module.exports.getActiveProduct = (req, res) => {

	Product.find({isActive: true})
	.then(result => res.send(result))
	.catch(err => res.send(err));
};

// Retrieve Single Product
module.exports.getSingleProduct =(req, res) => {
	
	Product.findById(req.params.id)
	.then(product => res.send(product))
	.catch(err => res.send(err));

};

// Update Products

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

//Archive A Product

module.exports.archiveProduct = (req, res) => {

	let updates = {
		isActive: false
	}

	Product.findByIdAndUpdate(req.params.id, updates, {new: true})
	.then(updatedUser => res.send(updatedUser))
	.catch(err => res.send(err));
};

//Activate A Product

module.exports.activateProduct = (req, res) => {

	let updates = {
		isActive: true
	}

	Product.findByIdAndUpdate(req.params.id, updates, {new: true})
	.then(updatedUser => res.send(updatedUser))
	.catch(err => res.send(err));
};




//Delete A Product 
module.exports.deleteProduct = (req, res) => {

	Product.findByIdAndRemove(req.params.id).exec()
	.then(doc => {
		if (!doc) {return res.status(404).end();}
		return res.status(204).end();
	})
	.catch(err => res.send(err));
};