'use strict'

const router = require('express').Router();

router.get('/', (req, res) => res.redirect('/api/buses'));

module.exports = router
