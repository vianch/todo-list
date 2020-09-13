const TodoModel = require('../models/todo.model');

const getAllTodos = callback => {
  TodoModel.find({ }, "id task").exec((error, todo) => {
    if (error) {
      console.error(error);
      callback({ success: false, todo: null });
    } else {
      callback({ success: true, todo});
    }
  });
};

module.exports = {
  getAllTodos,
}
