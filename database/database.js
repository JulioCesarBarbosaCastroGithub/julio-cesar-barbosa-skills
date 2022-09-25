const Sequelize = require('sequelize');

const connection = new Sequelize('formulariovisitantes', 'root', '826479', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;