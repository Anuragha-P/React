import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password!');
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div>
          <h2>Login Page</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Username: </label>
              <input 
                type="text" 
                value={username} 
                onChange={handleUsernameChange} 
                required 
              />
            </div>
            <div>
              <label>Password: </label>
              <input 
                type="password" 
                value={password} 
                onChange={handlePasswordChange} 
                required 
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;

