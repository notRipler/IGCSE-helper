const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'teacher', 'parent'], required: true },
  linkedStudent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // For parents
  //linked student lel teacher bardo and create class with all his students
});

module.exports = mongoose.model('User', userSchema);
