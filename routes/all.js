const express = require('express')
const router = express.Router()

router.get('/health', (req, res) => {
    res.send('Frankenstein is alive')
})

router.get('/affiliates', (req, res) => {
    res.render('affiliates/index', { title: 'Affiliates page', layout: 'affiliates' })
})

module.exports = router