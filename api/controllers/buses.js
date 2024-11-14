'use strict'

const asyncHandler = require('express-async-handler');
const { getAll, getOne } = require('../services/buses');

exports.getAll = asyncHandler(
  async (req, res) => {
    res.json(await getAll());
  }
)

exports.getOne = asyncHandler(
  async (req, res) => {
    const item = await getOne(req.param('number'));

    if (!item)
      return res.status(404).json({'message': 'Not Found'});

    res.status(200).json(item);
  }
)
