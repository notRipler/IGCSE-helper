const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  title: String,
  description: String,
  fileUrl: String,
  deadline: Date,
  submissions: [{ student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, submittedAt: Date }]
});

module.exports = mongoose.model('Homework', homeworkSchema);
