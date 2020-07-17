const models = require('../models');

class Affiliates {
    // async findAllAffiliates(offset, limit) {
    //     return await models.Affiliates.findAndCountAll({
    //         offset: +offset,
    //         limit: +limit,
    //         attributes: ['id', 'email', 'first_name', 'last_name', 'status', 'affiliate_type', 'employee_id', 'account_mgr_id', 'account_tier'],
    //         // include: [{
    //         //     model: models.AffiliateAttrLogs,
    //         //     attributes: [
    //         //         [models.Sequelize.fn('GROUP_CONCAT', models.Sequelize.literal("new_value SEPARATOR '||'")), 'tiers']
    //         //     ],
    //         //     where: {
    //         //       'field': 'account_tier'
    //         //     },
    //         //     group: ['affiliate_id']
    //         // }],
    //         order: [
    //             ['id', 'DESC']
    //         ],
    //         raw: true
    //     })
    // }

    async findAllAffiliates(offset, limit) {
        const queryOptions = ` ORDER BY id DESC LIMIT ${+offset}, ${+limit}`;
        const sql = `SELECT affiliates.id, affiliates.email, affiliates.first_name, affiliates.last_name,
                            affiliates.status, affiliates.affiliate_type, affiliates.employee_id, account_mgr_id,
                            account_tier,
                            aom.status as open_market_status, logs.tiers as all_tiers
                     FROM affiliates
                     LEFT JOIN affiliate_openmarket AS aom ON affiliates.id = aom.affiliate_id
                     LEFT JOIN (
                        SELECT affiliate_id, GROUP_CONCAT(distinct new_value) as tiers FROM affiliate_attr_logs WHERE field = 'account_tier' GROUP BY affiliate_id
                    ) logs ON affiliates.id=logs.affiliate_id ` + queryOptions;

        const promises = [
                models.sequelize.query(sql, {
                    plain: false,
                    raw: false,
                    replacements: {
                      offset: +offset,
                      limit: +limit
                    },
                    type: models.Sequelize.QueryTypes.SELECT
                }),
                models.Affiliates.count()
        ];
        try {
            const data = await Promise.all(promises);
            return {
                rows: data[0],
                count: data[1]
            }
        } catch (e) {
            console.log(e);
        }
    }

    async updateAffiliatesData(managerId, affiliates) {
        const sql = `UPDATE affiliates SET account_mgr_id = ${managerId} WHERE id IN () `
        return await models.Affiliates.findAndCountAll({})
    }

}

module.exports = Affiliates;