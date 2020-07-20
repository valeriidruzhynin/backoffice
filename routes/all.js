const express = require('express')
const router = express.Router()

router.get('/health', (req, res) => {
    res.send('Frankenstein is alive')
})

router.use('/affiliates', require('./affiliates'))
router.use('/managers', require('./managers'))

module.exports = router