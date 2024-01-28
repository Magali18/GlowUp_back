const{createProductController} = require('../controllers/createProductController')

const createProductHandler = async (req, res) => {
    const {
      id,
      name,
      description,
      price,
      stock,
      background_image
    } = req.body;
  
    try {
      const response = await createProductController(
        id,
       name,
       description,
       price,
       stock,
       background_image
        );
  
      res.status(201).json(response);
  
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = { createProductHandler };
  