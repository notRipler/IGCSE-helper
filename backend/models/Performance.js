const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  mockScore: Number,
  homeworkSubmitted: Number,
  totalHomework: Number,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PerformanceStat', performanceSchema);
