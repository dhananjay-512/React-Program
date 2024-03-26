
import React, { useState } from 'react';
import './App.css';

function Rendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <h1 style={{
        color: "green"
      }}>Conditional Rendering Example</h1>
      <div>
        {isLoggedIn ? (
          <div>
            <p style={{
                color:"blue"
            }}>Welcome back! You are logged in.</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p style={{
                color:"red"
            }}>Please log in to continue.</p>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rendering;
