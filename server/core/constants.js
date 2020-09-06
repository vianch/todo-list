const environments = {
  development: 'development',
  production: 'production',
};

// Router constants
const apiVersionPrefix = '/api/v1';
const  todoPrefix = '/todo';

const setConnectionString = (cluster, dbUser, dbPassword, dbName) =>
  `mongodb+srv://${dbUser}:${dbPassword}@${cluster}/${dbName}?retryWrites=true&w=majority`;

module.exports = {
  environments,
  setConnectionString,
  apiVersionPrefix,
  todoPrefix,
};
