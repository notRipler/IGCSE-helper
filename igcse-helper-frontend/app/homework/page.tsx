'use client';
import { useState } from 'react';

export default function SubmitHomework() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      console.log('Submitting file:', file.name);
      // Handle upload to backend later
    }
  };

  return (
    <div>
      <h1>Submit Homework</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} required /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
