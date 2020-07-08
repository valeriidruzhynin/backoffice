const { Sequelize } = require('sequelize')

module.exports = new Sequelize(config.db.mysql.database, config.db.mysql.user, config.db.mysql.password, {
    dialect: 'mysql',
    host: config.db.mysql.host,
    port: 3306,
    define: {
        timestamps: false
    }
});