import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
   
    window.history.back();
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
