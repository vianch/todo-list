const express = require('express');
const app = express();
const port = 5000;

// core
const restApiEnvironmentSetup = require('./core/env');
const databaseConnector = require('./core/database');

// Routes
const todoRoutes = require('./routes');

/* Environment configuration */
restApiEnvironmentSetup();
/* Constants */
const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER, DB_NAME } = process.env;
/* Database configuration */
databaseConnector(DB_CLUSTER, DB_USERNAME, DB_PASSWORD, DB_NAME);

app.use(todoRoutes);

app.listen(port, () => {
  console.log(`App started in port ${5000}`)
});


