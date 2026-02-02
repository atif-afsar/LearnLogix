import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock } from 'lucide-react';

const SessionWarning = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const checkTokenExpiry = () => {
      const token = localStorage.getItem('adminToken');
      if (!token) return;

      try {
        // Decode JWT token to get expiry time
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiryTime = payload.exp * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const timeUntilExpiry = expiryTime - currentTime;

        // Show warning 30 minutes before expiry
        const warningThreshold = 30 * 60 * 1000; // 30 minutes in milliseconds

        if (timeUntilExpiry <= warningThreshold && timeUntilExpiry > 0) {
          setShowWarning(true);
          setTimeLeft(Math.floor(timeUntilExpiry / 1000 / 60)); // Convert to minutes
        } else {
          setShowWarning(false);
        }
      } catch (error) {
        console.error('Error checking token expiry:', error);
      }
    };

    // Check immediately
    checkTokenExpiry();

    // Check every minute
    const interval = setInterval(checkTokenExpiry, 60000);

    return () => clearInterval(interval);
  }, []);

  const extendSession = () => {
    // Redirect to a page that will refresh the token
    window.location.href = '/admin/dashboard';
  };

  if (!showWarning) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-yellow-50 border border-yellow-200 rounded-lg p-4 shadow-lg max-w-sm">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-yellow-800 text-sm">
            Session Expiring Soon
          </h3>
          <p className="text-yellow-700 text-xs mt-1">
            Your admin session will expire in {timeLeft} minutes. 
            Save your work and refresh to extend your session.
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={extendSession}
              className="text-xs bg-yellow-600 text-white px-3 py-1 rounded hover:bg-yellow-700 transition"
            >
              Extend Session
            </button>
            <button
              onClick={() => setShowWarning(false)}
              className="text-xs text-yellow-600 hover:text-yellow-800 transition"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionWarning;