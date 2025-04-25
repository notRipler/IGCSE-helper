// controllers/cmsController.js
const CMSItem = require('../models/CMSItem');

exports.createItem = async (req, res) => {
  try {
    const item = new CMSItem({ ...req.body, createdBy: req.user.id });
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItemsByCourse = async (req, res) => {
  try {
    const items = await CMSItem.find({ course: req.params.courseId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
