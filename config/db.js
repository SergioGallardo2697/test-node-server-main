const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:prueba@localhost:5432/test");

module.exports = {
    sequelize,
};