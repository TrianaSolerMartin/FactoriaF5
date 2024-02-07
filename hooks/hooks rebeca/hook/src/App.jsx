import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const UserProfile = () => {
  const { isAuthenticated } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      // Fetch user data when authenticated
      fetch('https://api.example.com/user')
        .then((response) => response.json())
        .then((result) => setUserData(result))
        .catch((error) => console.error('Error fetching user data:', error));
    }
  }, [isAuthenticated]); // Run the effect when isAuthenticated changes

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {userData ? userData.name : 'User'}!</h2>
          <p>Email: {userData ? userData.email : 'Loading...'}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;
