import React from 'react';

function Conditional() {
  const isLoggedIn = false; 
  return (
    <div>
      {isLoggedIn ? (
        <WelcomeMessage />
      ) : (
        <LoginPrompt />
      )}
    </div>
  );
}

function WelcomeMessage() {
  return <h1 style={{
    color:"red",
    fontSize:"35px"
  }}>Welcome back!!!!!!!!!!!</h1>;
}

function LoginPrompt() {
  return <p style={{
    color:'blue',
    fontSize:"25px"
  }}>Please login to continue.</p>;
}

export default Conditional;
