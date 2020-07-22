const express = require('express');
const Affiliates = require('../controllers/affiliates');
const getHighestTier = require('../helpers/getHighestTier');

const router = express.Router();
const affiliates = new Affiliates();

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

        let result = await affiliates.updateAffiliatesData(+req.body.managerId, req.body.affiliates)

        res.send(result)

    } catch (error) {
        next(error);
    }
});

router.post('/rejectAffiliates', async (req, res, next) => {
    try {

        let result = await affiliates.rejectAffiliates(req.body.affiliates)

        res.send(result)

    } catch (error) {
        next(error);
    }
});

module.exports = router;
