import React, { useState } from 'react';
import './App.css';
import GuestView from './components/GuestView';
import UserView from './components/UserView';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <div className="App">
      {isLoggedIn ? (
        <UserView onLogout={handleLogout} username="John Doe" />
      ) : (
        <GuestView onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
