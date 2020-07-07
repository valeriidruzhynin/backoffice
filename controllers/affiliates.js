const AffiliatesModel = require('../models/affiliates')

class Affiliates {
    async findAllAffiliates(limit, offset) {
        return await AffiliatesModel.findAndCountAll({
            offset: +limit,
            limit: +offset,
            attributes: ['id', 'email', 'first_name', 'last_name', 'status', 'employee_id', 'account_mgr_id', 'account_tier'],
            raw: true
        })
    }
}

module.exports = Affiliates