const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true
    },
    task: String,
  },
  { collection: 'tasks' }
);

TodoSchema.index({
  id: 1,
  task: -1,
});

module.exports = mongoose.model('Tasks', TodoSchema);
