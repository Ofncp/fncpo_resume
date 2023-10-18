import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

//obj from express
const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  //to insert array of products to Product model db
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdUsers });
});
export default seedRouter;
