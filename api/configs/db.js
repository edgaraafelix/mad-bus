'use strict'

const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({
  path: `${__dirname}/../.env`
});

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_COLLECTION
    });

    console.log('Connected to MongoDB!');
      
    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected...');
    });

    mongoose.connection.on('error', (error) => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connect, disconnect }
