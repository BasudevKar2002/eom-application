const Product = require("../models/Product");

const addProduct = async (req, res) => {
  try{
    const productData = {
      name        : req.body.name,
      description : req.body.description,
      price       : req.body.price
    };

    const dbResponse = await Product.create(productData);
    if(dbResponse)
      return res.status(200).send({status : "SUCCESS", payload : dbResponse});
    res.status(500).send({status : "failed"});
  }
  catch(error)
  {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    console.log(req.params.id);
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addProduct,
  getProducts,
  getProductById,
};
