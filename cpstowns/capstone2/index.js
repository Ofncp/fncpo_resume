const express = require('express'); 

const cors = require('cors'); 

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');


const mongoose = require('mongoose'); 

const app = express();

const port = 4000;

mongoose.connect("mongodb+srv://admin_artienda:admin169@cluster0.mtvrk.mongodb.net/mugShotCafe?retryWrites=true&w=majority",{
		useNewUrlParser: true,
		useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, "Connection Error"));

db.once('open', () => console.log("Connected to MongoDB"));

app.use(express.json());

app.use(cors());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


app.listen(port, () => console.log(`Server is running on localhost: ${port}`))