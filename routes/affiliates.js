const express = require('express');
const router = express.Router();
const Affiliates = require('../controllers/affiliates');
const paginate = require('express-paginate');
const getHighestTier = require('../helpers/getHighestTier');

router.use(paginate.middleware(25, 50));

router.get('/', async (req, res, next) => {
    try {
        const affiliatesData = await new Affiliates().findAllAffiliates(req.query.start, req.query.length)
        const data = getHighestTier(affiliatesData.rows);

        res.send(data)
    } catch (error) {
       next(error);
    }
});

router.post('/updateAffiliatesManager', async (req, res, next) => {
    try {

        let result = await new Affiliates().updateAffiliatesData(+req.body.managerId, req.body.affiliates)

        res.send(result)

    } catch (error) {
        next(error);
    }
});

module.exports = router;
