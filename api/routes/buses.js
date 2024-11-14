'use strict'

const router = require('express').Router();
const controller = require('../controllers/buses');

router.get(
  '/', controller.getAll
);

router.get(
  '/:number', controller.getOne
);

module.exports = router
