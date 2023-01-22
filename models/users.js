const { Model, DataTypes } = require("sequelize");
const sequelize = require('../db');
const Sequelize = require("sequelize");


class User extends Model {}
User.init({    
    full_name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    reg_timestamp: {
        type: DataTypes.DATE,
        field: "reg_timestamp",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    tableName: 'users'
});

module.exports = { User }

