const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true
    },
    task: {
      type: String,
      required: true,
      unique: false
    },
  },
  { collection: 'tasks' }
);

TodoSchema.index({
  id: -1,
  task: 1,
});

module.exports = mongoose.model('Tasks', TodoSchema);
