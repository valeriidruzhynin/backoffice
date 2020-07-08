const fs = require('fs');
const path = require('path');
const  basename = path.basename(__filename);
const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');

const db = require ('../db/mysql/adapter');
const sequelize = db.getConnection();

const models = {};

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        // const model = sequelize['require'](path.join(__dirname, file));
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        models[model.name] = model;
    });

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.Sequelize = Sequelize;
models.sequelize = sequelize;


module.exports = models;