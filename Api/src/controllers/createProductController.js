const { Product } = require("../db");

const createProductController = async (
  id,
  name,
  cover_letter,
  price,
  date,
  description
) => {
  try {
    const createdProduct = await Product.create({
      id,
      name,
      cover_letter,
      price,
      date, 
      description
    });

    return createdProduct;

  } catch (error) {
    console.log(error);
    throw new Error(error.message); // Lanza una excepción con el mensaje de error
  }
};

module.exports = { createProductController };

