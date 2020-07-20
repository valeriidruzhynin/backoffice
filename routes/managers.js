const express = require('express');
const Managers = require('../controllers/managers');

const router = express.Router();

router.get('/getAccountManagers', async (req, res, next) => {
    try {
        const accountManagers = await new Managers().findAllAccountManagers();

        res.send(accountManagers)
    } catch (error) {
        next(error);
    }
});

module.exports = router