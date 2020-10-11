const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

//core
const environmentSetup = require('./core/env');
const dataBaseConnector = require('./core/database');
const corsOption = require('./core/cors');

//Paths
const toDoPaths = require('./paths');

environmentSetup();

const {DB_CLUSTER, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

dataBaseConnector(DB_NAME, DB_PASSWORD, DB_USER, DB_CLUSTER);

app.use(cors(corsOption));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '100mb'}));
app.use(toDoPaths);

app.listen(port, () => {
  console.log(`Example app listen at http://localhost:${port}`);
})