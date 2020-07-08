module.exports = function (config) {
    config.port = 3000;

    config.db.mysql = {
        host: 'localhost',
        user: 'root',
        password: 'adminQwerty554',
        database: 'jomedia2'
    }

    // config.logLevel = 'info';

    // config.influxdb = {
    //     host: 'https://influx.surge.systems/influxdb',
    //     project: 'cap_control',
    //     intervalRequest: 2, // batch post to influxdb when queue length gte 100
    //     intervalSystem: 999999999, // 30000 ms = 30 s
    //     intervalDisk: 999999999 // 300000 ms = 5 min
    // };

    return config;
}