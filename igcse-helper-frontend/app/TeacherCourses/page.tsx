import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Course {
  _id: string;
  name: string;
  students: { name: string }[];
}

interface ApiResponse {
  data: Course[]; // Define the expected response structure
}

const TeacherCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchTeacherCourses = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get<ApiResponse>('http://localhost:5000/api/courses/teacher', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(res.data.data); // Access `data` property of the typed response
      } catch (err) {
        console.error('Error fetching teacher courses', err);
      }
    };

    fetchTeacherCourses();
  }, []);

  return (
    <div>
      <h1>Your Created Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {course.name} — Students: {course.students?.length ?? 0}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherCourses;