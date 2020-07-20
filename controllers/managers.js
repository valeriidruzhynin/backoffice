const models = require('../models');

class Managers {
    async findAllAccountManagers() {
        const sql = 'SELECT id, name FROM employees WHERE group_id = 294'

        return await models.sequelize.query(sql, {
            plain: false,
            raw: false,
            type: models.Sequelize.QueryTypes.SELECT
        })
    }
}

module.exports = Managers