const bcrypt = require('bcrypt');

const User = require('../models/User');

const auth = require('../auth');

//CREATE A USER

module.exports.registerUser = (req, res) => {

	User.find({})
	.then(users => {

		let filtered = users.filter(user => {
			return user['userName'] === req.body.userName
		})

		if(filtered.length === 0){

			const hashedPW = bcrypt.hashSync(req.body.password, 10)

			let newUser = new User({
				userName: req.body.userName,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: hashedPW,
				mobileNo: req.body.mobileNo
			})
			newUser.save();
			res.send(newUser);
		} else {
			return res.status(409).send('Username is already used')
		}
	})
	.catch(err => res.send(err));
}

// GET ALL USERS
module.exports.getAllUsers = (req, res) => {

	User.find({})
	.then(result => res.send(result))
	.catch(err => res.send(err));
};

// LOG IN USER

module.exports.loginUser = (req, res) => {

	User.findOne({userName: req.body.userName})
	.then(user => {

		if(user === null){
			return res.status(401).send('User does not exist');
		} 

		const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)

		if(isPasswordCorrect){
			return res.send({accessToken: auth.createAccessToken(user)})
		} else {
			return res.status(401).send('Password is incorrect')
		}
		
	})
	.catch(err => res.send(err));
};

// Update to Admin

module.exports.updateAdmin = (req, res) => {

	let updates = {
		isAdmin: true
	}

	User.findByIdAndUpdate(req.params.id, updates, {new: true})
	.then(updatedUsers => {
		//console.log(updatedUsers)
		if(updatedUsers === null){
			return res.status(401).send('User does not exist');
			
		} else {
			res.send(updatedUsers)
		}
	})
	.catch(err => res.send(err));
};

//GET SINGLE USER

module.exports.getSingleUser =(req, res) => {
	
	console.log(req.params);

	User.findById(req.params.id)
	.then(result => res.send(result))
	.catch(error => res.send(error))

};

