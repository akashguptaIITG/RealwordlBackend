'use strict';

var Sequelize = require('sequelize');


const db = new Sequelize({
    host:'localhost',
    dialect:'sqlite',
    storage: __dirname+'/realworld.db',
    operatorsAliases:false
})

module.exports={db}




