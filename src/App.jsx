import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    toggleButtonState(event.target.value, password);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    toggleButtonState(username, event.target.value);
  };

  const toggleButtonState = (uname, pwd) => {
    if (uname.trim() !== '' && pwd.trim() !== '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === 'root' && password === 'root') {
      alert('Login Successful!');
    } else {
      alert('Login Failed. Please check your credentials.');
    }
  };

  return (
    <div data-testid="app-container">
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit" disabled={isButtonDisabled}>
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
