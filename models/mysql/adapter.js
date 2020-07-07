const { Sequelize } = require('sequelize')

module.exports = new Sequelize('jomedia2', 'root', 'adminQwerty554', {
    dialect: 'mysql',
    host: '',
    port: 3306,
    define: {
        timestamps: false
    }
});