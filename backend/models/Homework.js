const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  description: String,
  deadline: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  submissions: [{
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    submittedAt: Date,
    content: String // could be text or URL to file if later you wanna upload
  }]
}, { timestamps: true });

module.exports = mongoose.model('Homework', homeworkSchema);
