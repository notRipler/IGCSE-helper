// routes/cmsRoutes.js
const express = require('express');
const router = express.Router();
const cmsController = require('../controllers/cmsController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');

router.post('/create', auth, roleCheck(['teacher']), cmsController.createItem);
router.get('/course/:courseId', auth, cmsController.getItemsByCourse);

module.exports = router;
