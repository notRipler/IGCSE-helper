'use client';
import { useEffect, useState } from 'react';

export default function CMSPage() {
  const [papers, setPapers] = useState<string[]>([]);

  useEffect(() => {
    setPapers([
      "Math Paper 2 - June 2023",
      "Physics Paper 4 - November 2022",
      "Chemistry Paper 1 - March 2024",
    ]);
  }, []);

  return (
    <div>
      <h1>Past Papers CMS</h1>
      <ul>
        {papers.map((paper, index) => (
          <li key={index}>{paper}</li>
        ))}
      </ul>
    </div>
  );
}
