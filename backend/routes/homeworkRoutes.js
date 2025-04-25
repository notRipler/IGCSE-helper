const express = require('express');
const router = express.Router();
const homeworkController = require('../controllers/homeworkController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');

router.post('/create', auth, roleCheck(['teacher']), homeworkController.createHomework);
router.get('/:courseId', auth, homeworkController.getCourseHomework);
router.post('/submit', auth, roleCheck(['student']), homeworkController.submitHomework);

module.exports = router;
