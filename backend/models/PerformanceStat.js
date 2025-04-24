const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  mockScore: Number,
  homeworkSubmitted: Number,
  totalHomework: Number
});

module.exports = mongoose.model('PerformanceStat', performanceSchema);
