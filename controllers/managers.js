const models = require('../models');

class Managers {
    async findAllAccountManagers() {
        const sql = 'SELECT id, name FROM employees WHERE group_id IN (0, 61, 294, 298, 303) AND status=\'active\''

        return await models.sequelize.query(sql, {
            plain: false,
            raw: false,
            type: models.Sequelize.QueryTypes.SELECT
        })
    }
}

module.exports = Managers