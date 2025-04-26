'use client';
import { useEffect, useState } from 'react';

interface PerformanceData {
  [subject: string]: number;
}

export default function PerformancePage() {
  const [performance, setPerformance] = useState<PerformanceData | null>(null);
  const [courses, setCourses] = useState<string[]>([]);

  useEffect(() => {
    // Mock fetching data
    setPerformance({
      Math: 85,
      Physics: 78,
      Chemistry: 90,
    });
    setCourses(['Math', 'Physics', 'Chemistry']);
  }, []);

  return (
    <div>
      <h1>Performance Stats</h1>
      {performance ? (
        <ul>
          {Object.entries(performance).map(([subject, grade]) => (
            <li key={subject}>{subject}: {grade}%</li>
          ))}
        </ul>
      ) : (
        <p>Loading performance...</p>
      )}

      <h2>Enrolled Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
