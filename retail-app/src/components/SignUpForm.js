import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css'; // Make sure you have the proper CSS for styling

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Simulate saving the data to the database (or API call)
    console.log('Form Data Submitted:', formData);

    // After successful sign-up, navigate to the Sign In page and pass the data
    navigate('/signin', { state: { ...formData } }); // Passing data to the Sign In page
  };

  return (
    <div className="signup-page">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>

        {/* Username Field */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Submit Button */}
        <button type="submit">Sign Up</button>

        {/* Sign In and Back to Home Buttons */}
        <div className="form-buttons">
          <button
            type="button"
            onClick={() => navigate('/signin')}
            className="back-button"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="home-button"
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;



















