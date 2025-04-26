import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Teacher {
  name: string;
}

interface Course {
  _id: string;
  name: string;
  teacher: Teacher;
}

const StudentCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchStudentCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get<Course[]>('http://localhost:5000/api/courses/student', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching student courses', err);
      }
    };

    fetchStudentCourses();
  }, []);

  return (
    <div>
      <h1>Your Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.name} - Teacher: {course.teacher?.name || 'Unknown'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCourses;