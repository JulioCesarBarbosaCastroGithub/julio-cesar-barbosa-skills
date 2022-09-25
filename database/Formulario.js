const Sequelize = require('sequelize');

const connection = require('./database');

const Formulario = connection.define('visitantes', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    texto: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Formulario.sync({force: false}).then(() => {});