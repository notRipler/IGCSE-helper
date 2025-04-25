const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');
const controller = require('../controllers/notificationController');

// Only teachers can send notifications
router.post('/send', auth, roleCheck(['teacher']), controller.sendNotification);

// Students / parents / teachers get their own notifications
router.get('/me', auth, controller.getNotifications);

module.exports = router;
