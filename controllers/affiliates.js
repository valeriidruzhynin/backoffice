const AffiliatesModel = require('../models/affiliates')

class Affiliates {
    async findAllAffiliates(offset, limit) {
        return await AffiliatesModel.findAndCountAll({
            offset: +offset,
            limit: +limit,
            attributes: ['id', 'email', 'first_name', 'last_name', 'status', 'affiliate_type', 'employee_id', 'account_mgr_id', 'account_tier'],
            order: [
                ['id', 'DESC']
            ],
            raw: true
        })
    }
}

module.exports = Affiliates