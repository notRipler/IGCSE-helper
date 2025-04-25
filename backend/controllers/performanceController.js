const Performance = require('../models/Performance');

exports.getStudentPerformance = async (req, res) => {
  try {
    const data = await Performance.find({ student: req.params.id });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching performance data' });
  }
};

exports.updatePerformance = async (req, res) => {
  try {
    const { student, subject, mockScore, homeworkSubmitted, homeworkMissed } = req.body;

    const existing = await Performance.findOne({ student, subject });

    if (existing) {
      existing.mockScore = mockScore ?? existing.mockScore;
      existing.homeworkSubmitted = homeworkSubmitted ?? existing.homeworkSubmitted;
      existing.homeworkMissed = homeworkMissed ?? existing.homeworkMissed;
      existing.updatedAt = Date.now();
      await existing.save();
      return res.status(200).json(existing);
    }

    const performance = new Performance({ student, subject, mockScore, homeworkSubmitted, homeworkMissed });
    await performance.save();
    res.status(201).json(performance);
  } catch (err) {
    res.status(500).json({ message: 'Error updating performance' });
  }
};
