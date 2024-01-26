const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define(
      "Categoria",
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
        
      },
      
      { timestamps: false }
    );
  };