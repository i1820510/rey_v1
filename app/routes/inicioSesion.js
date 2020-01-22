const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();

router.get('/', async function (req, res, next) {
    try {
        res.redirect('/acceso');
    } catch(err) {
        res.status(500).json({error: err});
    }
});



module.exports = router;