const models = require('../models');

class Affiliates {

    async findAllAffiliates(offset, limit) {
        let date = new Date()
        let ninetyDaysAgo = Math.floor(date.setMonth(date.getMonth() - 3) / 1000)

        const queryOptions = ` WHERE affiliates.status IN ('active', 'suspended') AND affiliates.date_added < ${ninetyDaysAgo} AND account_mgr_id = 0 ORDER BY id DESC`;
        const sql = `SELECT affiliates.id, affiliates.email, CONCAT(affiliates.first_name, ' ', affiliates.last_name) as name,
                            affiliates.status, affiliates.affiliate_type, affiliates.employee_id,
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
        const sql = `UPDATE affiliates SET account_mgr_id = ${managerId} WHERE id IN (${affiliates})`;

        return await models.sequelize.query(sql, {
            plain: false,
            raw: false,
            type: models.Sequelize.QueryTypes.UPDATE
        })
    }

    async rejectAffiliates(affiliates) {
        const sql = `UPDATE affiliates SET status = 'rejected' WHERE id IN (${affiliates})`;

        return await models.sequelize.query(sql, {
            plain: false,
            raw: false,
            type: models.Sequelize.QueryTypes.UPDATE
        })
    }

}

module.exports = Affiliates;