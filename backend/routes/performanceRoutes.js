const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');

// Only teachers can update performance
router.post('/update', auth, roleCheck(['teacher']), performanceController.updatePerformance);

// Everyone can fetch their stats
router.get('/:studentId', auth, performanceController.getStudentPerformance);

module.exports = router;
