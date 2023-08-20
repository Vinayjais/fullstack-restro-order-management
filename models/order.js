const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Order = sequelize.define('orders',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull : false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
    },
    dish: Sequelize.STRING,
    table: Sequelize.STRING



});

module.exports = Order;