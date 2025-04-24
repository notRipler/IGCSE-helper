const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'teacher', 'parent'], required: true },
  linkedStudent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // For parents
});

module.exports = mongoose.model('User', userSchema);
