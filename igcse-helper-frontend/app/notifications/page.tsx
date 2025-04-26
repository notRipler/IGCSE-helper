'use client';
import { useEffect, useState } from 'react';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    setNotifications([
      "Math homework due tomorrow",
      "Physics quiz on Friday",
      "New past paper available in CMS",
    ]);
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
