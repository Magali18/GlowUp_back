const {getAllProducts} = require ('../controllers/getAllProducts')


module.exports.getProductsHandler = async (req, res) => {
    try {
      const response = await getAllProducts();
      if(!response){
        throw new error('La data esta vacia')
      }
      res.status(200).json(response);
  
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  };
  