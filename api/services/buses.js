'use strict'

const model = require('../models/bus')

const getAll = async () => {
  return model.find({}, {_id: 0}).exec()
}

const getOne = async (number) => {
  return model.findOne({number: number}, {_id: 0}).exec()
}

module.exports = { getAll, getOne }
