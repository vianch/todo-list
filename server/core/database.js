const mongoose = require('mongoose');
const { setConnectionString } = require('./constants');

const databaseConnector = (cluster, username, password, databaseName) => {
  const connectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  };
  const connectionUrl = setConnectionString(cluster, username, password, databaseName);
console.log('URL: ', connectionUrl);

 mongoose.connect(connectionUrl, connectionOptions);

  mongoose.connection.on('error', error => {
    console.error('Something happened: ', error);
  });

 mongoose.connection.on('open', () => {
   console.log('Connected to MongoDB database.');
 });


};

module.exports = databaseConnector;


