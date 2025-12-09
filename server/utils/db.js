require('dotenv').config();
const chalk = require('chalk');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const { database } = keys;

const setupDB = async () => {
  try {
    console.log(chalk.blue('⏳ Connecting to MongoDB...')); // This tells you it is trying

    // Connect to MongoDB
    // We removed deprecated options like 'useCreateIndex' to prevent errors
    await mongoose.connect(database.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`${chalk.green('✓')} ${chalk.blue('MongoDB Connected!')}`);
  } catch (error) {
    console.log(chalk.red('❌ Error connecting to MongoDB: '), error);
  }
};

module.exports = setupDB;