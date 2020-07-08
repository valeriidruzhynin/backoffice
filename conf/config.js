let config = {};

config.port = 3000;

config.db = {
    mysql: {
        host: '',
        user: '',
        password: '',
        database: ''
    }
}

// config.influxdb = {
//     host: 'https://influx.surge.systems/influxdb',
//     project: 'cap_control',
//     intervalRequest: 10, // batch post to influxdb when queue length gte 100
//     intervalSystem: 30000, // 30000 ms = 30 s
//     intervalDisk: 60000 // 300000 ms = 5 min
// };

// config.logLevel = 'info';

module.exports = config;