// models/CMSItem.js
const mongoose = require('mongoose');

const cmsItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  fileURL: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  type: { type: String, enum: ['pastpaper', 'assignment'], required: true },
  dueDate: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CMSItem', cmsItemSchema);
