const express = require('express');

const { apiVersionPrefix, todoPrefix } = require('../core/constants');
const api = require('./todo.api');

const app = express.Router();

app.get(`${apiVersionPrefix}${todoPrefix}/get-todos`, (request, response) => {
  api.getAllTodos((apiResponse) => {
    response.json(apiResponse);
  });
});

app.put(`${apiVersionPrefix}${todoPrefix}/complete-todo`, () => {

});

app.delete(`${apiVersionPrefix}${todoPrefix}/delete-todo/:id`, () => {

});

module.exports = app;
