const express = require('express');

const router = express.Router();

const userControllers = require('../controllers/userControllers')

const auth = require("../auth");

const {verify, verifyAdmin} = auth;


//User Registration

router.post("/", userControllers.registerUser);

//Retrieve all users
router.get("/", verify, verifyAdmin, userControllers.getAllUsers);

//LOG IN route
router.post("/login", userControllers.loginUser)

//Update to Admin
router.put("/updateAdmin/:id", verify, verifyAdmin, userControllers.updateAdmin);

//GET SINGLE USER
router.get("/:id", verify, userControllers.getSingleUser);







module.exports = router;