// Importing dependencies
const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://athmikaubhat:Mika%402209@athmikau.jf8wzoa.mongodb.net/')
.then(()=>{
    console.log("Database Connected Successfully!")
})
.catch((error)=>{
    console.log(error)
})

// Defining a schema for products
let productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

// Creating model based on the schema
let Product = mongoose.model('Product', productSchema);

// Route to get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to create a new product
app.post('/products', async (req, res) => {
    try {
      const { name, price, image } = req.body;
      const product = new Product({ name, price, image });
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error('Error creating product:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });  

//listen functionality :
app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})
