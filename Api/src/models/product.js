const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
     
      name: {
        type: DataTypes.TEXT,
        allowNull: false
       
      },
      cover_letter: {
        type: DataTypes.TEXT,
        allowNull: false
      },     
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      date:{
        type: DataTypes.TEXT,
        allowNull: false,

      },

     
    },
    
    { timestamps: false }
  );
};
