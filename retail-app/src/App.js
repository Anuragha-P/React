import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import SignInPage from './components/SignInPage'; // Import SignInPage
import ProductPage from './components/ProductPage';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/signin" element={<SignInPage />} /> {/* SignIn route */}
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  </Router>
);

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to the Retail App!</h1>
      <div className="home-buttons">
        <Link to="/signup" className="nav-link">Sign Up</Link>
        <Link to="/signin" className="nav-link">Sign In</Link> {/* Sign In Link */}
      </div>
    </div>
  );
};

export default App;






