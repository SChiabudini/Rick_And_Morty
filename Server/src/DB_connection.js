require('dotenv').config();  //No se crea una variable, sino directamente se requiere (aqui requerimos su configuracion ".config()"). De esta manera se nos brinda un archivo de tipo "process" que es un objeto grande y que dentro de el está el objeto "env" ({ {env:} }) y dentro de el se guardara todo lo que alojemos en el archivo ".env" (DB_USER, DB_PASSWORD, DB_HOST).
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;  //Por lo descripto anteriormente es que podemos hacer este Destructuring.
const FavoriteModel = require('./models/Favorite'); //Aqui importamos los modelos.
const UserModel = require('./models/User'); 


const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

(async () => {
   await sequelize.authenticate();
   await sequelize.sync({ force: false });
   console.log('Tablas creadas en la base de datos');
})();

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });

module.exports = {
   ...sequelize.models,
   conn: sequelize,
};