require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

//CONECCIÓN DE SEQUELIZE CON MI BD:
const sequelize = new Sequelize(`postgres://postgres:luciano1818@localhost:5432/glowupbitch`,
 { 
  logging: false, 
  native: false,
}
);


//---------------------------------------CODIGO DESCONOCIDO---------------------------------------------------------------

const basename = path.basename(__filename);
const modelDefiners = [];
// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });
// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//---------------------------------------------------------------------------------------------------------------------

//MODELOS IMPORTADOS:
const { Product,Categoria } = sequelize.models;
//RELACIONES:
Product.belongsToMany(Categoria,{through:'productCategoria'})
Categoria.belongsToMany(Product, {through:'productCategoria'})



module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};