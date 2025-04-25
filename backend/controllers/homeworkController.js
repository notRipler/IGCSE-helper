const Homework = require('../models/Homework');

exports.createHomework = async (req, res) => {
  try {
    const hw = await Homework.create({
      ...req.body,
      createdBy: req.user._id
    });
    res.status(201).json(hw);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCourseHomework = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const homework = await Homework.find({ course: courseId });
    res.json(homework);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.submitHomework = async (req, res) => {
  try {
    const { homeworkId, content } = req.body;
    const hw = await Homework.findById(homeworkId);

    if (!hw) return res.status(404).json({ error: 'Homework not found' });

    const alreadySubmitted = hw.submissions.some(sub => sub.student.toString() === req.user._id.toString());
    if (alreadySubmitted) return res.status(400).json({ error: 'Already submitted' });

    hw.submissions.push({
      student: req.user._id,
      submittedAt: new Date(),
      content
    });

    await hw.save();
    res.json({ message: 'Submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
