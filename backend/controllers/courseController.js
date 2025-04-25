const Course = require('../models/course');

// Create a new course
exports.createCourse = async (req, res) => {
  const { name, teacherId, studentIds } = req.body;

  try {
    const course = new Course({
      name,
      teacher: teacherId,
      students: studentIds || []
    });

    await course.save();
    res.status(201).json({ success: true, data: course });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get all courses for a teacher
exports.getCoursesByTeacher = async (req, res) => {
  try {
    const courses = await Course.find({ teacher: req.params.teacherId }).populate('students', 'name email');
    res.status(200).json({ success: true, data: courses });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
