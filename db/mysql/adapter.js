const { Sequelize } = require('sequelize');

const getConnection = () => {

    return new Sequelize(config.db.mysql.database, config.db.mysql.user, config.db.mysql.password, {
        dialect: 'mysql',
        host: config.db.mysql.host,
        port: 3306,
        logging: false,
        define: {
            timestamps: false
        }
    });

};

module.exports = {
    getConnection
};