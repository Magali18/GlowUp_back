const {Product} = require ('../db') 
const getAllProducts = async () => {
  const ProductsDataBase = await Product.findAll();
  return [...ProductsDataBase];
};
module.exports = {getAllProducts};
