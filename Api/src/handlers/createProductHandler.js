const{createProductController} = require('../controllers/createProductController')

const createProductHandler = async (req, res) => {
    const {
      id,
      name,
      cover_letter,
      price,
      date,
      description
    
    } = req.body;
  
    try {
      const response = await createProductController(
        id,
       name,
       cover_letter,
       price,
       date,
       description
        );
  
      res.status(201).json(response);
  
    } catch (error) {
      console.log(error)
      res.status(402).json({ error: error.message });
    }
  };
  
  module.exports = { createProductHandler };
  