'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const router = useRouter();

  // Check authentication status (you should replace this with your actual auth check)
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    // Clear authentication tokens
    localStorage.removeItem('token');
    // Redirect to login
    router.push('/login');
  };

  const dashboardButtons = [
    { path: '/submit-homework', label: 'Submit Homework' },
    { path: '/performance', label: 'View Performance' },
    { path: '/notifications', label: 'View Notifications' },
    { path: '/cms', label: 'Past Papers CMS' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
            <p className="text-gray-600">Welcome back!</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dashboardButtons.map((button) => (
            <button
              key={button.path}
              onClick={() => router.push(button.path)}
              className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left"
            >
              <h2 className="text-xl font-semibold text-blue-800">{button.label}</h2>
              <p className="text-blue-600 mt-2">Click to view →</p>
            </button>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Quick Actions</h2>
          <div className="flex space-x-4 mt-4">
            <button 
              onClick={() => router.push('/profile')}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              My Profile
            </button>
            <button 
              onClick={() => router.push('/settings')}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}