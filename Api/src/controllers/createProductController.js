const { Product } = require("../db");

const createProductController = async (
  id,
  name,
  description,
  price,
  stock,
  background_image
) => {
  try {
    const createdProduct = await Product.create({
      id,
      name,
      description,
      price,
      stock,
      background_image,
    });

    return createdProduct;

  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error.message });
  }
};

module.exports = { createProductController };
