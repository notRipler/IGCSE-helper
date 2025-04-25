const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');

router.post('/create', auth, roleCheck(['teacher']), courseController.createCourse);

router.get('/teacher/:teacherId', auth, roleCheck(['teacher']), courseController.getCoursesByTeacher);

module.exports = router;
