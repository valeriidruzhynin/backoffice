const express = require('express')
const router = express.Router()
const Affiliates = require('../controllers/affiliates')
const paginate = require('express-paginate')

router.use(paginate.middleware(25, 50));

router.get('/', (req, res) => {
    res.render('affiliates/index', { title: 'Affiliates page', layout: 'affiliates' })
})

router.post('/', async (req, res) => {

    const affiliatesData = await new Affiliates().findAllAffiliates(req.body.start, req.body.length)
    const itemCount = affiliatesData.count;
    const data = affiliatesData.rows

    console.log(affiliatesData.rows[0])
    res.json({
        draw: 1,
        recordsTotal: itemCount,
        recordsFiltered: itemCount,
        data: data
    })
})

module.exports = router
