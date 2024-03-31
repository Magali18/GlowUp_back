const { Product } = require("../db");

const createProductController = async (
  id,
  name,
  cover_letter,
  price,
  date
) => {
  try {
    const createdProduct = await Product.create({
      id,
      name,
      cover_letter,
      price,
      date
    });

    return createdProduct;

  } catch (error) {
    console.log(error);
    throw new Error(error.message); // Lanza una excepción con el mensaje de error
  }
};

module.exports = { createProductController };

