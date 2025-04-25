const Notification = require('../models/Notification');

exports.sendNotification = async (req, res) => {
  const { userId, message, urgency } = req.body;

  try {
    const notif = new Notification({ user: userId, message, urgency });
    await notif.save();
    res.status(201).json({ message: 'Notification sent' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.id });
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
