import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for redirection
import { Link } from 'react-router-dom';  // Import Link for navigation
import './SignInPage.css';  // Import the CSS file

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();  // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your sign-in logic here, like validating the username/email/password

    // Redirect to the Product page after sign-in
    navigate('/products');  // Navigate to the Product page
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="sign-in-button">Sign In</button>

        {/* Back to Home Button */}
        <Link to="/" className="back-to-home-button">Back to Home</Link>
      </form>
    </div>
  );
};

export default SignInPage;








