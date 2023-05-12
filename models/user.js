const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define("User", {
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidoPaterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidoMaterno: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: [0, 10]
        }
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = User;