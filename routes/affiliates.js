const express = require('express');
const router = express.Router();
const Affiliates = require('../controllers/affiliates');
const paginate = require('express-paginate');
const getHighestTier = require('../helpers/getHighestTier');

router.use(paginate.middleware(25, 50));

router.get('/', (req, res) => {
    res.render('affiliates/index', { title: 'Affiliates page', layout: 'affiliates' })
});

router.post('/', async (req, res, next) => {
    try {
        const affiliatesData = await new Affiliates().findAllAffiliates(req.body.start, req.body.length)
        const itemCount = affiliatesData.count;
        const data = getHighestTier(affiliatesData.rows);

        res.send(JSON.stringify({
            recordsTotal: itemCount,
            recordsFiltered: itemCount,
            data: data
        }))
    } catch (error) {
       next(error);
    }

});

module.exports = router;
